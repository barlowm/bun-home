import fs from 'fs';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.join(__dirname, '../src/components');
const DataFile = path.join(__dirname, '../src/content/data.json');




const jsonData = await readNodeJSON(DataFile);
if (jsonData) {
  // Ensure output directory exists
  const outputDir = path.join(__dirname, '../src/generated');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log("Created OutputDir");
  }
  else {
    console.log("OutputDir already exists");  
  }
  ProcData(jsonData);
  console.log("Exit");
}

/**
 *  Creaate a VUE object for each element in the JSON Data array
 * @param {*} jsonData 
 */
function ProcData (jsonData) {
  jsonData.forEach((item, index) => {
    console.log ("Title: ",item.title, "\nIndex: ", index);







  })
}


function genVueModule(data) {
  


}
/**
 *    // Read all .txt config files
  
 */

/**
 * 

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
 */



async function readNodeJSON(filePath) {
  try {
    const fileContent = await readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    return data;
  } catch (error) {
    console.error('Error reading file:', error);
  }
  return null;
}


/**
 * This function returns a complete .VUE file consisting of:
 *  Template
 *  Script
 *  Style
 * elements
 * @param {*} config - JSON object consisting of the following elements:
 *      title
 *      description
 *      generatedDate
 *      path2Content
 *      bgColor1 - Not used at this time
 *      bgColor2 - Not used at this time
 * @param {*} name - ???
 * @returns 
 */
function generateVueComponent(config, name) {
  console.log("function generateVueComponent()")
  return (
`<template>
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
`);
}

console.log('Component generation complete!');
