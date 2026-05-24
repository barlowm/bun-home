<template>
  <div id="app" class="container">
    <header>
      <h1>Vue 3 Dynamic Components</h1>
      <p>Components generated from configuration files</p>
    </header>

    <div v-if="loadedComponents.length === 0" class="debug-info">
      <p style="color: red; font-weight: bold;">⚠️ No components loaded</p>
      <pre style="background: #f0f0f0; padding: 1rem; border-radius: 4px; overflow-x: auto;">{{ debugInfo }}</pre>
    </div>

    <div class="components-grid">
      <component
        v-for="comp in loadedComponents"
        :key="comp.name"
        :is="comp.module"
        :title="comp.config.title"
        :description="comp.config.description"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import HeroComponent from "./generated/Hero.vue";
import FeaturesComponent from "./generated/Features.vue";
import CTAComponent from "./generated/CTA.vue";

const loadedComponents = ref([]);
const debugInfo = ref("");

onMounted(() => {
  console.log("=== Component Loading ===");
  
  let debug = "";
  
  try {
    // Directly import components (Vite-compatible approach)
    const components = [
      { name: "Hero", module: HeroComponent },
      { name: "Features", module: FeaturesComponent },
      { name: "CTA", module: CTAComponent },
    ];

    loadedComponents.value = components.map(comp => {
      console.log(`✅ Loaded ${comp.name}.vue`);
      debug += `✅ Loaded ${comp.name}.vue\n`;
      
      return {
        name: comp.name,
        module: comp.module,
        config: comp.module.componentConfig || { 
          title: comp.name, 
          description: "Auto-generated component" 
        }
      };
    });

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
#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #667eea;
}

header h1 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

header p {
  margin: 0;
  color: #666;
}

.debug-info {
  background: #fff3cd;
  border: 2px solid #ff9800;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
</style>
