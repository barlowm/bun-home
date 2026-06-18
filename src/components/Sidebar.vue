<template>
  <aside class="sidebar" :style="{ width: sidebarWidth }">
    <div class="sidebar-header">
      <h2>📑 Navigation</h2>
    </div>

    <nav class="sidebar-nav">
      <ul class="nav-list">
        <li v-for="section in sections" :key="section.id" class="nav-item">
          <!-- Section with subsections: show parent label + always-visible subsection list -->
          <template v-if="section.subsections && section.subsections.length">
            <a
              :href="`#section-${section.id}`"
              class="nav-link nav-parent"
              @click.prevent="navigateToSection(section.id)"
            >
              <span class="nav-bullet">▸</span>
              {{ section.title }}
            </a>
            <ul class="nav-sublist">
              <li
                v-for="sub in section.subsections"
                :key="sub.id"
                class="nav-subitem"
              >
                <a
                  :href="`#section-${sub.id}`"
                  class="nav-link nav-sublink"
                  @click.prevent="navigateToSection(sub.id)"
                >
                  <span class="nav-bullet">▸</span>
                  {{ sub.title }}
                </a>
              </li>
            </ul>
          </template>

          <!-- Flat section (backward compatible): show direct nav link -->
          <template v-else>
            <a
              :href="`#section-${section.id}`"
              class="nav-link"
              @click.prevent="navigateToSection(section.id)"
            >
              <span class="nav-bullet">▸</span>
              {{ section.title }}
            </a>
          </template>
        </li>
      </ul>
    </nav>

    <div class="sidebar-resizer" @mousedown="startResize"></div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  sections: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["navigate"]);

const sidebarWidth = ref("280px");
const isResizing = ref(false);
const startX = ref(0);
const startWidth = ref(0);

const navigateToSection = (sectionId) => {
  emit("navigate", sectionId);
};

const startResize = (e) => {
  isResizing.value = true;
  startX.value = e.clientX;
  startWidth.value = parseInt(
    window.getComputedStyle(document.querySelector(".sidebar")).width,
  );
  document.addEventListener("mousemove", handleResize);
  document.addEventListener("mouseup", stopResize);
};

const handleResize = (e) => {
  if (!isResizing.value) return;

  const diff = e.clientX - startX.value;
  const newWidth = Math.max(200, Math.min(500, startWidth.value + diff));
  sidebarWidth.value = newWidth + "px";
};

const stopResize = () => {
  isResizing.value = false;
  document.removeEventListener("mousemove", handleResize);
  document.removeEventListener("mouseup", stopResize);
};
</script>

<style>
.sidebar {
  position: relative;
  background-color: #f8f9fa;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-top: 70px;
  transition: all 0.3s ease;
}

.sidebar-header {
  padding: 20px 15px;
  border-bottom: 2px solid #667eea;
  flex-shrink: 0;
  background-color: #ffffff;
}

.sidebar-header h2 {
  margin: 0;
  font-size: 18px;
  color: #333;
  font-weight: 600;
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 10px 0;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
  border-left: 3px solid transparent;
  transition: all 0.2s ease;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
}

.nav-link:hover {
  background-color: #e8eaf6;
  border-left-color: #667eea;
}

.nav-link:active {
  background-color: #dddff0;
  border-left-color: #764ba2;
}

.nav-parent {
  font-weight: 600;
  color: #555;
}

.nav-bullet {
  margin-right: 8px;
  font-size: 12px;
  color: #667eea;
}

.nav-sublist {
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 2px solid #e0e0e0;
  margin-left: 20px;
}

.nav-subitem {
  margin: 0;
}

.nav-sublink {
  padding: 8px 15px;
  font-size: 13px;
  color: #555;
  font-weight: 400;
}

.nav-sublink:hover {
  background-color: #e8eaf6;
  border-left-color: #667eea;
  color: #333;
}

.sidebar-resizer {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  cursor: col-resize;
  background-color: transparent;
  transition: background-color 0.2s ease;
}

.sidebar-resizer:hover {
  background-color: #667eea;
}

.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: #999;
}
</style>
