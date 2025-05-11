<!-- src/components/Navbar.vue -->
<script setup>
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue';
import ArrowRight from 'vue-material-design-icons/ArrowRight.vue';
import { ref } from 'vue';

const filters = ref([
  { id: 1, name: 'All' },
  { id: 2, name: 'Music' },
  { id: 3, name: 'Podcasts' },
  { id: 4, name: 'Audiobooks' },
]);

const selectedFilter = ref(1);
</script>

<template>
  <div class="bg-gradient-to-b from-black to-gray-900 p-4">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-4">
        <button class="rounded-full bg-black bg-opacity-40 p-1">
          <ArrowLeft fillColor="#FFFFFF" :size="20" />
        </button>
        <button class="rounded-full bg-black bg-opacity-40 p-1">
          <ArrowRight fillColor="#FFFFFF" :size="20" />
        </button>
      </div>
      
      <div class="flex items-center gap-2">
        <button class="bg-white text-black rounded-full px-4 py-1 font-semibold hover:scale-105 transition">
          Sign Up
        </button>
        <button class="bg-black text-white rounded-full px-4 py-1 font-semibold border border-gray-500 hover:border-white transition">
          Log in
        </button>
      </div>
    </div>
    
    <div class="flex items-center gap-4 mb-6">
      <button 
        v-for="filter in filters" 
        :key="filter.id"
        @click="selectedFilter = filter.id"
        class="px-4 py-1 rounded-full text-sm font-semibold transition"
        :class="{
          'bg-white text-black': selectedFilter === filter.id,
          'bg-gray-800 text-white hover:bg-gray-700': selectedFilter !== filter.id
        }"
      >
        {{ filter.name }}
      </button>
    </div>
  </div>
</template>