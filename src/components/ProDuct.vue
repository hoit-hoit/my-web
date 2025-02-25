<template>
  <div class="product">
    <div class="image">
    </div>
      <ul class="list">
        <router-link to="/PD/LIP"><li>LIP</li></router-link>
        <p></p>
        <router-link to="/PD/EYE"> <li>EYE</li></router-link>
        <p></p>
        <router-link to="/PD/BASE"><li>BASE</li></router-link>        
      </ul>
      <router-view/>   

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
</script>

<style lang="scss" scoped>
a{text-decoration:none; color: #6b2e6d;}
    .product{
      width: 100%;
      height: 130vh;
      background-color: burlywood;
      z-index: 6;
    }
    .product>.image{
      width: 100%;
      height: 30vh;
      background-image: url(../../public/images/orange.jpg);
      background-size: cover;      
      background-position: center;
    }
    .list{
      display: flex;
      justify-content: center;
      width: 100%;
      height: 5%;
      background-color: orange;
      font-size: 20px;     
      align-items: center;
    }
    
    .list li:hover{
      color: orangered;
      cursor: pointer;
    }
    .list >p{
    width: 1px;
    height: 20px;
    margin: 0 20px;
    border: 1px solid #555;
    background-color: #555;
    }
    @media(max-width : 576px){
  .list{
      font-size: 15px; 
      text-align: center;
       
    }
}
    @media(max-width : 345px){
  .list{
    text-align: center;
  }
}
</style>