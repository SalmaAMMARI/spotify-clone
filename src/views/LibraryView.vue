<script setup>
import SongRow from '../components/SongRow.vue'
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue';
import Heart from 'vue-material-design-icons/Heart.vue';
import ClockTimeThreeOutline from 'vue-material-design-icons/ClockTimeThreeOutline.vue';
import Home from 'vue-material-design-icons/Home.vue';
import Search from 'vue-material-design-icons/Magnify.vue';
import Library from 'vue-material-design-icons/Bookshelf.vue';
import Plus from 'vue-material-design-icons/Plus.vue';
import artist from '../artist.json'
import { useRouter } from 'vue-router' // Import the router

import { useSongStore } from '../stores/song'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, currentTrack, currentArtist } = storeToRefs(useSong)

// Get the router instance
const router = useRouter()

const playFunc = () => {
    if (currentTrack.value) {
        useSong.playOrPauseThisSong(currentArtist.value, currentTrack.value)
        return
    } 
    useSong.playFromFirst()
}

// Navigation functions
const goToHome = () => {
    router.push('/')
}

const goToSearch = () => {
    router.push('/search')
}

const goToLibrary = () => {
    router.push('/home')
}
</script>


<template>
    <div class="flex h-screen bg-black text-white overflow-hidden">
        <!-- Sidebar -->
        <div class="w-[240px] bg-[#121212] flex flex-col h-full">
            <div class="p-6">
                <div class="flex items-center mb-6">
  <svg viewBox="0 0 24 24" class="h-10 text-[#1DB954]">
    <path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
  <span class="ml-2 text-white font-bold text-xl">Spotify</span>
</div>
                
                <ul class="space-y-4">
                    <li class="flex items-center text-white font-bold text-sm hover:cursor-pointer"  @click="goToHome">
                        <Home fillColor="#FFFFFF" :size="20"/>
                        <span class="ml-4">Home</span>
                    </li>
                    <li  @click="goToSearch" class="flex items-center text-gray-400 text-sm hover:text-white hover:cursor-pointer">
                        <Search fillColor="#A7A7A7" :size="20"/>
                        <span class="ml-4">Search</span>
                    </li>
                    <li @click="goToLibrary" class="flex items-center text-gray-400 text-sm hover:text-white hover:cursor-pointer">
                        <Library fillColor="#A7A7A7" :size="20"/>
                        <span class="ml-4">Your Library</span>
                    </li>
                </ul>
                
                <div class="mt-6">
                    <div class="flex items-center text-gray-400 text-sm hover:text-white hover:cursor-pointer">
                        <div class="bg-gray-400 rounded-sm p-[5px] mr-4">
                            <Plus fillColor="#121212" :size="16"/>
                        </div>
                        <span>Create Playlist</span>
                    </div>
                    <div class="flex items-center text-gray-400 text-sm hover:text-white hover:cursor-pointer mt-4">
                        <div class="bg-gradient-to-br from-purple-600 to-blue-300 rounded-sm p-[5px] mr-4">
                            <Heart fillColor="#121212" :size="16"/>
                        </div>
                        <span>Liked Songs</span>
                    </div>
                </div>
                
                <div class="border-t border-[#282828] mt-4 pt-4">
                    <ul class="text-gray-400 text-xs space-y-3">
                        <li class="hover:text-white hover:cursor-pointer">My Playlist #1</li>
                        <li class="hover:text-white hover:cursor-pointer">My Playlist #2</li>
                        <li class="hover:text-white hover:cursor-pointer">Discover Weekly</li>
                        <li class="hover:text-white hover:cursor-pointer">Release Radar</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col overflow-hidden">
            <div class="h-[60px] bg-gradient-to-r from-[#1f1f1f] to-[#121212] flex items-center px-6">
                <div class="flex space-x-4">
                    <button class="bg-black rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button class="bg-black rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="flex-1 overflow-y-auto p-8 bg-gradient-to-b from-[#1f1f1f] to-[#121212]">
                <button
                    type="button"
                    class="text-white text-2xl font-semibold hover:underline cursor-pointer"
                >
                    {{ artist.name }}
                </button>

                <div class="py-1.5"></div>
                <div class="flex items-center w-full relative h-full">
                    <img width="140" :src="artist.albumCover">

                    <div class="w-full ml-5">
                        <div
                            style="font-size: 33px;"
                            class="text-white absolute w-full hover:underline cursor-pointer top-0 font-bosemiboldld"
                        >
                            {{ artist.name }}
                        </div>

                        <div class="text-gray-300 text-[13px] flex">
                            <div class="flex">Album</div>
                            <div class="ml-2 flex">
                                <div class="circle mt-2 mr-2" />
                                <span class="-ml-0.5">{{ artist.releaseYear }}</span>
                            </div>
                            <div class="ml-2 flex">
                                <div class="circle mt-2 mr-2" />
                                <span class="-ml-0.5">{{ artist.tracks.length }} songs</span>
                            </div>
                        </div>

                        <div class="absolute flex gap-4 items-center justify-start bottom-0 mb-1.5">
                            <button class="p-1 rounded-full bg-white" @click="playFunc()">
                                <Play v-if="!isPlaying" fillColor="#181818" :size="25"/>
                                <Pause v-else fillColor="#181818" :size="25"/>
                            </button>
                            <button type="button">
                                <Heart fillColor="#1BD760" :size="30"/>
                            </button>
                            <button type="button">
                                <DotsHorizontal fillColor="#FFFFFF" :size="25"/>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mt-6"></div>
                <div class="flex items-center justify-between px-5 pt-2">
                    <div class="flex items-center justify-between text-gray-400">
                        <div class="mr-7">#</div>
                        <div class="text-sm">Title</div>
                    </div>
                    <div><ClockTimeThreeOutline fillColor="#FFFFFF" :size="18"/></div>
                </div>
                <div class="border-b border-b-[#2A2A2A] mt-2"></div>
                <div class="mb-4"></div>
                <ul class="w-full" v-for="track, index in artist.tracks" :key="track">
                    <SongRow :artist="artist" :track="track" :index="++index"/>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .circle {
        width: 4px;
        height: 4px;
        background-color: rgb(189, 189, 189);
        border-radius: 100%;
    }
    
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
</style>