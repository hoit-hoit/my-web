<template>
  <div class="app">
    <Menubar/>     
    <router-view/>  
    <FooterItem/>
  </div>
</template>

<script setup>
import Menubar from './components/Menubar.vue';
import FooterItem from './components/FooterItem.vue';
// import MainWrapper from './components/MainWrapper.vue';
import { useRouter } from 'vue-router';

</script>

<style lang="scss" scoped>

</style>