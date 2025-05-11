<script setup>
import { ref, onMounted } from 'vue'

import { RouterLink } from 'vue-router'
import HomeCard from '../components/HomeCard.vue'
import MenuItem from '../components/MenuItem.vue'
import MusicPlayer from '../components/MusicPlayer.vue'
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'

import { useSongStore } from '../stores/song'
import { storeToRefs } from 'pinia'

const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)
onMounted(() => { isPlaying.value = false })

let openMenu = ref(false)

// Spotify-style content data
const madeForYou = [
  {
    id: 1,
    image: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
    title: "Daily Mix 1",
    description: "Made For You · Updates every day"
  },
  {
    id: 2,
    image: "https://i.scdn.co/image/ab67706f00000002583117b5a74ed9a9a5b54a4a",
    title: "Discover Weekly",
    description: "Your weekly mixtape of fresh music"
  },
  {
    id: 3,
    image: "https://i.scdn.co/image/ab67706f00000002a980b152e708b33c6516d848",
    title: "Release Radar",
    description: "Catch all the latest music from artists you follow"
  },
  {
    id: 4,
    image: "https://i.scdn.co/image/ab67706f00000002d72ef75e14ca6f60ea2364c2",
    title: "Chill Hits",
    description: "Kick back to the best new and recent chill hits"
  },
  {
    id: 5,
    image: "https://i.scdn.co/image/ab67706f00000002c414e7daf34690c9f983f6e2",
    title: "Today's Top Hits",
    description: "Harry Styles is on top of the Hottest 50!"
  }
]

const recentlyPlayed = [
  {
    id: 1,
    image: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
    title: "Planet Her",
    artist: "Doja Cat"
  },
  {
    id: 2,
    image: "https://i.scdn.co/image/ab67616d00001e029ad3e9959f48d513886b8933",
    title: "Happier Than Ever",
    artist: "Billie Eilish"
  },
  {
    id: 3,
    image: "https://i.scdn.co/image/ab67616d00001e02c7b9f9e9a3b9d3e5e0d9b9e5",
    title: "Sour",
    artist: "Olivia Rodrigo"
  },
  {
    id: 4,
    image: "https://i.scdn.co/image/ab67616d00001e02b5ed918cac6fea6e8a9a4b1f",
    title: "Justice",
    artist: "Justin Bieber"
  },
  {
    id: 5,
    image: "https://i.scdn.co/image/ab67616d00001e02a91c10fe9472b9a00fc7b8d5",
    title: "Montero",
    artist: "Lil Nas X"
  }
]

const popularPlaylists = [
  {
    id: 1,
    image: "https://i.scdn.co/image/ab67706f00000002d3f07aa10d05fb5baab12b94",
    title: "Rock Classics",
    description: "Rock legends & epic songs"
  },
  {
    id: 2,
    image: "https://i.scdn.co/image/ab67706f00000002ec9d60059aa215a7ba364695",
    title: "All Out 2010s",
    description: "The biggest songs of the 2010s"
  },
  {
    id: 3,
    image: "https://i.scdn.co/image/ab67706f00000002a980b152e708b33c6516d848",
    title: "Mood Booster",
    description: "Get happy with today's dose of feel-good songs"
  },
  {
    id: 4,
    image: "https://i.scdn.co/image/ab67706f00000002b7e11a3a2c6f7b8c8c8c8c8c",
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces"
  },
  {
    id: 5,
    image: "https://i.scdn.co/image/ab67706f00000002c414e7daf34690c9f983f6e2",
    title: "Deep Focus",
    description: "Keep calm and focus with ambient and post-rock music"
  }
]
</script>

<template>
  <div class="bg-black text-white min-h-screen">
    <!-- Top Navigation -->
    <div 
      id="TopNav"
      class="fixed w-[calc(100%-240px)] h-[60px] right-0 z-20 bg-[#101010] bg-opacity-80 backdrop-blur-md flex items-center justify-between px-6 border-b border-[#282828]"
    >
      <div class="flex items-center">
        <button type="button" class="rounded-full bg-black p-1 mr-4 cursor-pointer hover:bg-[#282828]">
          <ChevronLeft fillColor="#FFFFFF" :size="24" />
        </button>
        <button type="button" class="rounded-full bg-black p-1 cursor-pointer hover:bg-[#282828]">
          <ChevronRight fillColor="#FFFFFF" :size="24" />
        </button>
      </div>

      <div class="flex items-center">
        <button 
          @click="openMenu = !openMenu" 
          class="flex items-center bg-black hover:bg-[#282828] rounded-full p-1 px-2 cursor-pointer"
        >
          <img 
            class="rounded-full w-7 h-7" 
            src="https://i.scdn.co/image/ab6775700000ee8518fe447fac315f236ce0bb52"
          >
          <span class="text-white text-sm font-bold ml-2">Profile</span>
          <ChevronDown v-if="!openMenu" fillColor="#FFFFFF" :size="20" class="ml-1" />
          <ChevronUp v-else fillColor="#FFFFFF" :size="20" class="ml-1" />
        </button>
      </div>

      <div 
        v-if="openMenu"
        class="absolute w-48 bg-[#282828] shadow-xl z-50 rounded top-14 right-6 py-1 cursor-pointer"
      >
        <ul class="text-gray-200 text-sm">
          <li class="px-4 py-2.5 hover:bg-[#3E3D3D] border-b border-[#3E3D3D]">Account</li>
          <li class="px-4 py-2.5 hover:bg-[#3E3D3D] border-b border-[#3E3D3D]">Profile</li>
          <li class="px-4 py-2.5 hover:bg-[#3E3D3D]" onclick="logout"><router-link to='/'>Log out</router-link></li>
        </ul>
      </div>
    </div>

    <!-- Side Navigation -->
    <div id="SideNav" class="h-full p-6 w-[240px] fixed z-50 bg-black">
      <RouterLink to="/">
        <img width="130" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png">
      </RouterLink>
      <div class="my-8"></div>
      <ul>
        <RouterLink to="/">
          <MenuItem class="ml-[1px]" :iconSize="23" name="Home" iconString="home" pageUrl="/" />
        </RouterLink>
        <RouterLink to="/search">
          <MenuItem class="ml-[1px]" :iconSize="24" name="Search" iconString="search" pageUrl="/search" />
        </RouterLink>
        <RouterLink to="/library">
          <MenuItem class="ml-[2px]" :iconSize="23" name="Your Library" iconString="library" pageUrl="/library" />
        </RouterLink>
        <div class="py-3.5"></div>
        <MenuItem :iconSize="24" name="Create Playlist" iconString="playlist" pageUrl="/playlist" />
        <MenuItem class="-ml-[1px]" :iconSize="27" name="Liked Songs" iconString="liked" pageUrl="/liked" />
      </ul>
      <div class="border-b border-b-[#282828] my-4"></div>
      <ul>
        <li v-for="playlist in ['My Playlist #1', 'My Playlist #2', 'Discover Weekly']" 
            :key="playlist"
            class="text-[#b3b3b3] text-sm font-semibold py-2.5 px-4 hover:text-white cursor-pointer">
          {{ playlist }}
        </li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="fixed right-0 top-0 w-[calc(100%-240px)] h-full overflow-y-auto bg-gradient-to-b from-[#1C1C1C] to-black">
      <div class="mt-[70px]"></div>
      
      <!-- Made For You Section -->
      <div class="px-8 pt-6">
        <h2 class="text-white text-2xl font-bold mb-6">Made For You</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <HomeCard 
            v-for="item in madeForYou" 
            :key="item.id"
            :image="item.image" 
            :title="item.title" 
            :subTitle="item.description"
            :rounded="true"
          />
        </div>
      </div>

      <!-- Recently Played Section -->
      <div class="px-8 pt-10">
        <h2 class="text-white text-2xl font-bold mb-6">Recently Played</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <HomeCard 
            v-for="item in recentlyPlayed" 
            :key="item.id"
            :image="item.image" 
            :title="item.title" 
            :subTitle="item.artist"
            :rounded="false"
          />
        </div>
      </div>

      <!-- Popular Playlists Section -->
      <div class="px-8 pt-10 pb-32">
        <h2 class="text-white text-2xl font-bold mb-6">Popular Playlists</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <HomeCard 
            v-for="item in popularPlaylists" 
            :key="item.id"
            :image="item.image" 
            :title="item.title" 
            :subTitle="item.description"
            :rounded="true"
          />
        </div>
      </div>
    </div>

    <!-- Music Player -->
    <MusicPlayer v-if="currentTrack"/>
  </div>
</template>

<style>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #121212;
}
::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Smooth transitions */
.hover\:bg-\[\#282828\]:hover {
  transition: background-color 0.2s ease;
}
</style>