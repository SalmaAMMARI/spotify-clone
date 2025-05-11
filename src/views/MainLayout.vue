<!-- src/layouts/MainLayout.vue -->
<script setup>
import Sidebar from '../components/Sidebar.vue';
import Navbar from '../components/Navbar.vue';
import Player from '../components/Player.vue';
</script>

<template>
  <div class="flex h-screen bg-black text-white overflow-hidden">
    <!-- Sidebar -->
    <Sidebar />
    
    <!-- Main Content -->
    <div class="flex flex-col flex-1 overflow-hidden">
      <!-- Navbar -->
      <Navbar />
      
      <!-- Content -->
      <main class="flex-1 overflow-y-auto pb-24">
        <slot />
      </main>
    </div>
    
    <!-- Player -->
    <Player />
  </div>
</template>