import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.join(__dirname, '../src/components');
const configDir = path.join(__dirname, '../src/config');
const outputDir = path.join(__dirname, '../src/generated');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read all .txt config files
const configFiles = fs.readdirSync(configDir).filter(f => f.endsWith('.txt'));

configFiles.forEach(file => {
  const configPath = path.join(configDir, file);
  const configContent = fs.readFileSync(configPath, 'utf-8');
  
  // Parse config file format: name:value pairs, one per line
  const config = {};
  configContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key.trim()) {
      config[key.trim()] = valueParts.join(':').trim();
    }
  });

  // Generate component file
  const componentName = path.basename(file, '.txt');
  const componentContent = generateVueComponent(config, componentName);
  
  const outputPath = path.join(outputDir, `${componentName}.vue`);
  fs.writeFileSync(outputPath, componentContent);
  console.log(`✓ Generated: ${componentName}.vue`);
});

function generateVueComponent(config, name) {
  return `<template>
  <div class="component-${name.toLowerCase()}">
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
const componentConfig = ${JSON.stringify(config)};

const content = ref(${JSON.stringify(config.content)});
const generatedDate = ref(new Date().toISOString());
const title = ref(${JSON.stringify(config.title || name)});
const description = ref(${JSON.stringify(config.description || 'Component generated from config')});
</script>

<style scoped>
.component-${name.toLowerCase()} {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: linear-gradient(135deg, ${config.bgColor1 || '#667eea'}, ${config.bgColor2 || '#764ba2'});
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
`;
}

console.log('Component generation complete!');
