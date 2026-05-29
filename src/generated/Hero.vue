<template>
  <div class="component-hero">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="content">
      <div v-html="content"></div>
    </div>
    <div class="meta">
      <small>Generated: {{ generatedDate }}</small>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  title: String,
  description: String
});

// Export config data
const componentConfig = {"title":"Hero Component","description":"Welcome to the dynamic component system","content":"<span style='Bold'>This</span> component was automatically generated from a text configuration file!","bgColor1":"#667eea","bgColor2":"#764ba2"};

const content = ref("<span style='Bold'>This</span> component was automatically generated from a text configuration file!");
const generatedDate = ref(new Date().toISOString());
const title = ref("Hero Component");
const description = ref("Welcome to the dynamic component system");
</script>

<style scoped>
.component-hero {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

h2 {
  margin-top: 0;
  font-size: 1.5rem;
}

.meta {
  margin-top: 1rem;
  opacity: 0.8;
}
</style>
