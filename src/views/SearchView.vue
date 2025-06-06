<script setup>
import CategorySelect from '../components/CategorySelect.vue';
import Sidebar from '../components/Sidebar.vue';
import { ref, computed } from 'vue';

// Sample categories data
const categories = ref([
  { id: 1, name: "Podcasts", image: "https://picsum.photos/id/40/300/300" },
  { id: 2, name: "Audiobooks", image: "https://picsum.photos/id/45/300/300" },
  { id: 3, name: "Made For You", image: "https://picsum.photos/id/76/300/300" },
  { id: 4, name: "New Release", image: "https://picsum.photos/id/56/300/300" },
  { id: 5, name: "New Release", image: "https://picsum.photos/id/25/300/300" },
  { id: 6, name: "Podcasts", image: "https://picsum.photos/id/103/300/300" },
  { id: 7, name: "Audiobooks", image: "https://picsum.photos/id/244/300/300" },
  { id: 8, name: "Made For You", image: "https://picsum.photos/id/202/300/300" },
  { id: 9, name: "New Release", image: "https://picsum.photos/id/101/300/300" },
  { id: 10, name: "New Release", image: "https://picsum.photos/id/120/300/300" },
  // Add more as needed
]);

const searchQuery = ref('');

// Filter categories based on search input
const filteredCategories = computed(() => {
  if (!searchQuery.value) return categories.value;
  return categories.value.filter(category => 
    category.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <div class="flex h-screen bg-black text-white overflow-hidden">
    <!-- Spotify-like Sidebar -->
    <div class="w-64 bg-black h-full p-6 flex flex-col border-r border-gray-800">
      <div class="mb-8">
       <div class="flex items-center mb-6">
  <svg viewBox="0 0 24 24" class="h-10 text-[#1DB954]">
    <path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
  <span class="ml-2 text-white font-bold text-xl">Spotify</span>
</div>
        
        <nav>
          <ul class="space-y-4">
            <li>
              <router-link to="/" class="flex items-center gap-4 text-gray-400 hover:text-white font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Home</span>
              </router-link>
            </li>
            <li>
              <router-link to="/search" class="flex items-center gap-4 text-white font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search</span>
              </router-link>
            </li>
            <li>
              <router-link to="/home" class="flex items-center gap-4 text-gray-400 hover:text-white font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
                <span>Your Library</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      
      <div class="mb-8">
        <button class="flex items-center gap-3 text-gray-400 hover:text-white">
          <div class="bg-gray-400 hover:bg-white rounded-sm p-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <span class="font-medium">Create Playlist</span>
        </button>
        
        <button class="flex items-center gap-3 mt-4 text-gray-400 hover:text-white">
          <div class="bg-gradient-to-br from-purple-600 to-blue-300 rounded-sm p-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <span class="font-medium">Liked Songs</span>
        </button>
      </div>
      
      <div class="border-t border-gray-800 pt-4 flex-1 overflow-y-auto">
        <ul class="space-y-3">
          <li v-for="playlist in ['Liked Songs', 'Discover Weekly', 'Release Radar', 'Daily Mix 1', 'Daily Mix 2']" :key="playlist">
            <a href="#" class="text-gray-400 hover:text-white text-sm font-medium">{{ playlist }}</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 overflow-y-auto">
      <div class="p-8">
        <!-- Search Filter Input -->
        <div class="relative mb-6">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Filter categories..."
            class="w-full bg-gray-800 text-white px-4 py-3 pl-10 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

       

        <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          <CategorySelect 
            v-for="category in filteredCategories" 
            :key="category.id"
            :category="category.name" 
            :image="category.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom scrollbar for sidebar */
.sidebar-scroll::-webkit-scrollbar {
  width: 8px;
}

.sidebar-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-scroll::-webkit-scrollbar-thumb {
  background: #4d4d4d;
  border-radius: 4px;
}

.sidebar-scroll::-webkit-scrollbar-thumb:hover {
  background: #666;
}

/* Active link styling */
.router-link-active {
  color: white;
}

/* Category grid item hover effect */
.grid > div {
  transition: transform 0.2s ease;
}

.grid > div:hover {
  transform: scale(1.03);
}
</style>