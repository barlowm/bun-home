<template>
  <header class="header">
    <div class="header-content">
        <div class="header-left">
            <h1 class="app-title">📚 My Personal Home Page</h1>
            <i>No it's not in PHP, it's in Vue.js! 🚀😜'</i>
        </div>
      <div class="header-center">
        <div class="search-container">
          <input 
            v-model="searchInput"
            type="text"
            placeholder="Search content..."
            class="search-input"
            @input="handleSearch"
          />
          <span class="search-icon">🔍</span>
        </div>
      </div>
      <div class="header-right">
        <span class="header-info">v1.0</span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const searchInput = ref('')

const emit = defineEmits(['search'])

const handleSearch = () => {
  emit('search', searchInput.value)
}
</script>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px;
  max-width: 100%;
}

.header-left {
  flex-shrink: 0;
}

.app-title {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.5px;
}

.header-center {
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 0 40px;
}

.search-container {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.search-input {
  width: 100%;
  padding: 10px 15px 10px 40px;
  border: none;
  border-radius: 25px;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-input:focus {
  outline: none;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
}

.header-right {
  flex-shrink: 0;
}

.header-info {
  font-size: 12px;
  opacity: 0.8;
}
</style>