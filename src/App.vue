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

/** 
 *  When the app is being opened the individual components must be loaded
 *  The 3 main components (Header, Sidebar, Content) are loaded as part of the tamplate above
 *  Those components are constant and always available
 *  This module loads the dynamic modules for navigation in the Sidebar and display in the Content components
 *  For the dynamic components a JSON file is read which contains info on the generated components
 *
 *  [
 *     {
 *        "id": 1,
 *        "title": "Daily Info.. See hidden comment",
 *        "content": "DailyInfo.html",
 *        "Comment": "https://jsonformatter.org/html-pretty-print"
 *       },
 *  ]


 **/
onMounted(() => {
  console.log("=== Component Loading ===");
  let debug = "";

  // cyclomatic complexity value of 2
  try {
    console.log(`✅ Successfully loaded ${loadedComponents.value.length} components`);
    debug += `\n✅ Successfully loaded ${loadedComponents.value.length} components`;
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
