<!-- src/components/Sidebar.vue -->
<script setup>
import Home from 'vue-material-design-icons/Home.vue';
import Search from 'vue-material-design-icons/Magnify.vue';
import Library from 'vue-material-design-icons/Library.vue';
import Plus from 'vue-material-design-icons/Plus.vue';
import Heart from 'vue-material-design-icons/Heart.vue';

const playlists = [
  { id: 1, name: 'Liked Songs' },
  { id: 2, name: 'Discover Weekly' },
  { id: 3, name: 'Release Radar' },
  { id: 4, name: 'Daily Mix 1' },
  { id: 5, name: 'Daily Mix 2' },
  { id: 6, name: 'Chill Hits' },
  { id: 7, name: 'Workout Energy' },
];
</script>

<template>
  <div class="w-64 bg-black h-full p-6 flex flex-col">
    <div class="mb-8">
      <h1 class="text-2xl font-bold mb-6">Spotify</h1>
      
      <nav>
        <ul class="space-y-4">
          <li>
            <router-link to="/" class="flex items-center gap-4 text-white font-semibold">
              <Home fillColor="#FFFFFF" :size="24" />
              <span>Home</span>
            </router-link>
          </li>
          <li>
            <router-link to="/search" class="flex items-center gap-4 text-gray-400 hover:text-white">
              <Search fillColor="#A7A7A7" :size="24" />
              <span>Search</span>
            </router-link>
          </li>
          <li>
            <router-link to="/library" class="flex items-center gap-4 text-gray-400 hover:text-white">
              <Library fillColor="#A7A7A7" :size="24" />
              <span>Your Library</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    
    <div class="mb-8">
      <button class="flex items-center gap-3 text-gray-400 hover:text-white">
        <div class="bg-gray-400 hover:bg-white rounded-sm p-1">
          <Plus fillColor="#181818" :size="16" />
        </div>
        <span>Create Playlist</span>
      </button>
      
      <button class="flex items-center gap-3 mt-4 text-gray-400 hover:text-white">
        <div class="bg-gradient-to-br from-purple-600 to-blue-300 rounded-sm p-1">
          <Heart fillColor="#FFFFFF" :size="16" />
        </div>
        <span>Liked Songs</span>
      </button>
    </div>
    
    <div class="border-t border-gray-800 pt-4 flex-1 overflow-y-auto">
      <ul class="space-y-3">
        <li v-for="playlist in playlists" :key="playlist.id">
          <a href="#" class="text-gray-400 hover:text-white text-sm">{{ playlist.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply text-white;
}
</style>