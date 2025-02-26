<template>
  <div class="product">
    <div class="image">
    </div>
      <ul class="list">
        <router-link to="/Lab/productprocess"><li>Product Process</li></router-link>
        <p></p>
        <router-link to="/Lab/certificate"><li>Certificate</li> </router-link>       
      </ul>
      <router-view/>     

  </div>
</template>

<script setup>

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
      background-image: url(../../public/images/lemon.jpg);
      background-size: cover;      
      background-position: center;
    }
    .list{
      display: flex;
      justify-content: center;
      width: 100%;
      height: 5%;
      background-color: darkcyan;
      font-size: 20px;
      align-items: center;
      color: #fff;
      position: sticky;
      top: 0;
    }
  
    .list li:hover{
      color:blanchedalmond;
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