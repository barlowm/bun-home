<template>
  <div class="component-cta">
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
const componentConfig = {"title":"Call to Action","description":"Ready to get started?","content":"Modify the .txt files in src/config/ and run npm run generate-components","bgColor1":"#4facfe","bgColor2":"#00f2fe"};

const content = ref("Modify the .txt files in src/config/ and run npm run generate-components");
const generatedDate = ref(new Date().toISOString());
const title = ref("Call to Action");
const description = ref("Ready to get started?");
</script>

<style scoped>
.component-cta {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
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
