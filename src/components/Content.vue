<template>
  <main class="content-panel">
    <div v-if="sections.length === 0" class="loading">
      <p>Loading content...</p>
    </div>

    <div v-else class="content-wrapper">
      <template v-for="section in sections" :key="section.id">
        <!-- Section with subsections -->
        <section
          v-if="section.subsections && section.subsections.length"
          :id="`section-${section.id}`"
          class="content-section parent-section"
        >
          <h2 class="section-title">{{ section.title }}</h2>
          <section :id="`section-${section.id}`" class="content-section">
            <div
              v-if="section.content"
              class="section-content"
              v-html="sanitizeHTML(section.content)"
            ></div>
          </section>
          <section
            v-for="sub in section.subsections"
            :key="sub.id"
            :id="`section-${sub.id}`"
            class="content-section subsection"
          >
            <h3 class="subsection-title">{{ sub.title }}</h3>
            <div
              class="section-content"
              v-html="sanitizeHTML(sub.content)"
            ></div>
          </section>
        </section>

        <!-- Flat section (backward compatible) -->
        <section v-else :id="`section-${section.id}`" class="content-section">
          <h2 class="section-title">{{ section.title }}</h2>
          <div
            class="section-content"
            v-html="sanitizeHTML(section.content)"
          ></div>
        </section>
      </template>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  sections: {
    type: Array,
    default: () => [],
  },
});

const copyToClipboard = async () => {
  alert("Copy clicked");
  // Get the text field
  debugger;
  const copyText = "This is my URL";

  try {
    // Use the Clipboard API to write the text
    await navigator.clipboard.writeText(copyText.value);
    alert("Copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(`section-${sectionId}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      element.classList.add("highlight");
      setTimeout(() => {
        element.classList.remove("highlight");
      }, 2000);
    }, 300);
  }
};

const sanitizeHTML = (html) => {
  return html; // No need to sanitize since it's input from JSON file.
  // This sanitization routine breaks things like anchors <a></a>

  // Simple HTML sanitization - you can enhance this with DOMPurify for production
  const div = document.createElement("div");
  div.textContent = html;
  const sanitized = div.innerHTML;

  // Allow basic HTML tags
  return html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /&lt;(b|i|strong|em|p|br|ul|ol|li|h[1-6]|a|code|pre|blockquote|hr|table|tr|td|th|span|div)&gt;/g,
      "<$1>",
    )
    .replace(
      /&lt;\/(b|i|strong|em|p|br|ul|ol|li|h[1-6]|a|code|pre|blockquote|hr|table|tr|td|th|span|div)&gt;/g,
      "</$1>",
    );
};

defineExpose({
  scrollToSection,
});
</script>

<style>
@import "@/assets/styles.css";

ul.BigInfo span,
a.BigInfo {
  font-weight: bold;
  font-size: larger;
}

.content-panel {
  flex: 1;
  overflow-y: auto;
  padding: 30px;
  margin-top: 70px;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #999;
  font-size: 18px;
}

.content-wrapper {
  /* max-width: 900px; */
  margin: 0 auto;
}

.XXXcontent-section {
}
section {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 8px;
  background-color: #fafafa;
  border-bottom: 4px solid #667eea;
  transition: all 0.3s ease;
}

.parent-section {
  border-bottom: 4px solid #764ba2;
  background-color: #f5f4fb;
}

.subsection {
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #c5cae9;
  background-color: #ffffff;
  border-left: 3px solid #667eea;
  border-radius: 4px;
}

.subsection:last-child {
  margin-bottom: 0;
}

.content-section.highlight {
  background-color: #fff9e6;
  border-left-color: #764ba2;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.section-title {
  margin: 0 0 15px 0;
  font-size: 24px;
  color: #333;
  border-bottom: 2px solid #667eea;
  padding-bottom: 10px;
}

.subsection-title {
  margin: 0 0 12px 0;
  font-size: 18px;
  color: #444;
  border-bottom: 1px solid #c5cae9;
  padding-bottom: 8px;
  font-weight: 600;
}

.section-content {
  line-height: 1.8;
  color: #555;
  font-size: 15px;
}

.section-content :deep p {
  margin: 10px 0;
}

.section-content :deep b,
.section-content :deep strong {
  color: #333;
  font-weight: 600;
}

.section-content :deep em,
.section-content :deep i {
  color: #667eea;
  font-style: italic;
}

.section-content :deep a {
  color: #667eea;
  text-decoration: none;
  border-bottom: 1px dotted #667eea;
  transition: color 0.2s ease;
}

.section-content :deep a:hover {
  color: #764ba2;
}

.section-content :deep code {
  background-color: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: "Comic Sans MS", "xxxCourier New", monospace;
  font-size: 13px;
}

.section-content :deep pre {
  background-color: #2d2d2d;
  color: #f8f8f2;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
  line-height: 1.4;
}

.section-content :deep blockquote {
  border-left: 4px solid #667eea;
  padding-left: 15px;
  margin-left: 0;
  color: #666;
  font-style: italic;
}

.section-content :deep ul,
.section-content :deep ol {
  margin: 10px 0;
  padding-left: 30px;
}

.section-content :deep li {
  margin: 5px 0;
}

.content-panel::-webkit-scrollbar {
  width: 8px;
}

.content-panel::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.content-panel::-webkit-scrollbar-thumb {
  background: #667eea;
  border-radius: 4px;
}

.content-panel::-webkit-scrollbar-thumb:hover {
  background: #764ba2;
}

p,
li {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.section-content ul {
  margin-left: 3em;
}

.section-content .stats {
  display: inline;
  padding-inline-start: 5px;
}

.section-content .stats li {
  display: inline;
  list-style-type: none;
  padding-right: 0.5em;
}

.section-content h3,
.section-content h4 {
  display: inline;
}

.section-content .level2 {
  margin-left: 3em;
}

.section-content .autoPay span {
  font-color: red;
  background: yellow;
  font-weight: bold;
}

.section-content .manualPay {
  background: silver;
  font-weight: bold;
  font-size: larger;
}

.section-content .strike li {
  text-decoration: line-through;
}

.section-content .normal {
  text-decoration: none !important;
}

.section-content .monospace {
  font-family: "Courier New", monospace;
}

.section-content table.DevOpsGlossary {
  margin-left: 5em;
  margin-right: 20em;
}

.section-content table.DevOpsGlossary th {
  text-align: right;
}

.section-content table.DevOpsGlossary th.center {
  text-align: center;
}

.section-content summary {
  outline: none;
}

.section-content li.detail {
  list-style-type: none;
  margin-left: -1em;
}

.section-content details h2,
.section-content details h3 {
  display: inline;
}

.section-content ul {
  margin-top: 0;
  margin-bottom: 0;
}

.section-content section details {
  margin-left: 3em;
}

.section-content li details {
  margin-left: 0;
}

.section-content h2,
.section-content h3 {
  margin-bottom: 0;
}

.section-content table,
.section-content th,
.section-content td {
  border: 1px solid black;
  border-collapse: collapse;
}

.section-content th {
  background-color: #8eaadb;
  color: white;
  padding: 12px;
}

.section-content th,
.section-content td {
  padding: 0 12px;
}

.section-content .OY2_Head td {
  font-weight: bold;
}

.section-content .OY2_Build td {
  font-weight: bold;
  padding: 0 12px;
  background-color: #d9e1f3;
}

.section-content .wide {
  width: 12em;
}
</style>
