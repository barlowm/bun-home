<template>
  <div class="component-features">
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
const componentConfig = {"title":"Features","description":"Key features of this application","content":"Components are generated automatically whenever you change configuration files","bgColor1":"#f093fb","bgColor2":"#f5576c"};

const content = ref("Components are generated automatically whenever you change configuration files");
const generatedDate = ref(new Date().toISOString());
const title = ref("Features");
const description = ref("Key features of this application");
</script>

<style scoped>
.component-features {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: linear-gradient(135deg, #f093fb, #f5576c);
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
