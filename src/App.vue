<template>
  <div id="app" class="app-container">
    <Header @search="handleSearch" />

    <div class="main-layout">
      <Sidebar :sections="sections" @navigate="scrollToSection" />
      <Content :sections="filteredSections" ref="contentPanel" />
    </div>

    <div v-if="loadedComponents.length === 0" class="debug-info">
      <p style="color: red; font-weight: bold">⚠️ No components loaded</p>
      <pre
        style="
          background: #f0f0f0;
          padding: 1rem;
          border-radius: 4px;
          overflow-x: auto;
        "
        >{{ debugInfo }}</pre
      >
    </div>
  </div>
</template>

/** * Initialize all resources, starting with any components from the node
libraries * then any vue modules from the components/generated folders *
followed by any variable initializations **/
<script setup>
// JSHint, A Static Code Analysis Tool for JavaScript
/* jshint esversion: 11 */

import { ref, computed, onMounted } from "vue";

import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Content from "./components/Content.vue";

const sections = ref([]);
const loadedComponents = ref([]);
const filteredSections = computed(() => {});
const contentPanel = ref(null);

const searchQuery = ref("");

const debugInfo = ref("");

/**
 * Search model
 * called from the @search directive
 * in the "Header" component
 **/
const handleSearch = (query) => {
  searchQuery.value = query;
};

/**
 * Navigate model
 * called from the @navigate directive
 * of the vue-router via the "Sidebar" component
 **/
const scrollToSection = (sectionId) => {
  contentPanel.value?.scrollToSection(sectionId);
};

onMounted(() => {
  console.log("=== Component Loading ===");
  let debug = "";

  // cyclomatic complexity value of 2
  try {
    //    console.log(`✅ Successfully loaded ${loadedComponents.value.length} components`);
    //    debug += `\n✅ Successfully loaded ${loadedComponents.value.length} components`;
  } catch (error) {
    console.error("❌ Error loading components:", error);
    debug = `❌ Error: ${error.message}\n${error.stack}`;
  }

  debugInfo.value = debug;
});
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-layout {
  display: flex;
  flex: 1;
  overflow: hidden;
}
</style>
