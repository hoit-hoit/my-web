<template>
  <div class="product">
    <div class="image">
    </div>
      <ul class="list">
        <router-link to="/Bn/rndcenter"><li>R&D CENTER</li></router-link>
        <p></p>
        <router-link to="/Bn/businessprocess"><li>Business Process</li></router-link>   
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
      height:130vh;
      background-color: burlywood; 
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
      align-items: center;
      width: 100%;
      height: 5%;
      background-color:cornflowerblue;
      font-size: 20px;    
      position: sticky;
      top: 0;        
    }
  
    .list li:hover{
      color:#fff;
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