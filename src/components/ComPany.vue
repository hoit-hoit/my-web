<template>
  <div class="product">
    <div class="image">
    </div>
      <ul class="list">
        <router-link to="/Cp/about"><li>About us</li></router-link>
        <p></p>
        <router-link to="/Cp/history"><li>History</li></router-link>
        <p></p>
        <router-link to="/Cp/global"><li>Global Network</li></router-link>
        <p></p>
        <router-link to="/Cp/social"><li>Social Contribution</li></router-link>
      </ul>   
      <router-view/>   
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
</script>

<style lang="scss" scoped>
    .product{
      width: 100%;
      height: 130vh;
      background-color: rgb(188, 182, 225);
      z-index: 6;
    }
    .product>.image{
      width: 100%;
      height: 30vh;
      background-image: url(../../public/images/leaf1.jpg);
      background-size: cover;      
      background-position: center;
    }
  .product>.image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30vh;
  background: #fff;
  z-index:1;
  inset: 0;
  opacity: 0.5;
}
    .list{
      display: flex;
      justify-content: center;
      width: 100%;
      height: 5%;
      background-color: cadetblue;
      font-size: 20px;
      align-items: center;
      z-index:4;
    }
    .list >li{
      width: 15%;      
    }
    .list >li:hover{
      color: #fff;
      cursor: pointer;
    }
    .list >p{
    width: 1px;
    height: 20px;
    margin: 0 20px;
    border: 1px solid #555;
    background-color: #555;
    }
</style>