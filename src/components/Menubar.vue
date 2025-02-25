<template>
  <nav class="MenuBar">
    <router-link to="/"><h1>WEBPAGE</h1></router-link>
    <div class="router-link">
      <router-link to="/Cp/about">
      <div class="company"><li><h3>COMPANY</h3></li>   
      <div class="sub-menu">
        <router-link to="/Cp/about"><p>About us</p></router-link>
        <router-link to="/Cp/history"><p>History</p></router-link>
        <router-link to="/Cp/global"><p>Global Network</p></router-link>
        <router-link to="/Cp/social"><p>Social Contribution</p></router-link>
      </div>
    </div>
    </router-link>
      <router-link to="/Bn/rndcenter">
        <div class="BUSINESS"><li><h3>BUSINESS</h3></li>
        <div class="sub-menu">
          <router-link to="/Bn/rndcenter"><p>R&D CENTER</p></router-link>
          <router-link to="/Bn/businessprocess"><p>Business Process</p></router-link>
        </div>
      </div>
      </router-link>
      <router-link to="/PD/LIP">
        <div class="PRODUCT"><li><h3>PRODUCT</h3></li>
        <div class="sub-menu">
          <router-link to="/PD/LIP"><p>LIP</p></router-link>
          <router-link to="/PD/EYE"><p>EYE</p></router-link>
          <router-link to="/PD/BASE"><p>BASE</p></router-link>     
      </div>
      </div> 
      </router-link>
      <router-link to="/Lab/certificate">
        <div class="LAB"><li><h3>LAB & INFRA</h3></li>   
        <div class="sub-menu"> 
          <router-link to="/Lab/productprocess"><p>Product Process</p></router-link>
          <router-link to="/Lab/certificate"><p>Certificate</p></router-link>
      </div>
    </div>

      </router-link>
    </div>
    
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style lang="scss" scoped>
.MenuBar {
  width: 95%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  margin-left: 30px;
  margin-right: 30px;
  top: 0;
  left: 0;
  z-index: 5;
}
h1 {
  font-size: 2rem;
  color: mediumslateblue;
}
h1:hover {
  color: darkorange;
  cursor: pointer;
}
.router-link {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;  
  position: relative;
  // background-color: rgba(255,255,255,0.2);  
}
.company,
.BUSINESS,
.LAB,
.PRODUCT
{
  width: 200px;
  text-align: center;
}
.company:hover,
.BUSINESS:hover,
.LAB:hover,
.PRODUCT:hover{
  color: rgb(205, 91, 9);
}
.company > .sub-menu,
.BUSINESS > .sub-menu,
.PRODUCT> .sub-menu,
.LAB > .sub-menu
{
  width: 200px;
  line-height: 40px;
  background-color: rgba(255,255,255,0.7);  
  // margin-top: 1%;
  padding: 2% 0;
  border-radius: 20px;
}

.sub-menu{
display: none;
text-align: center;
position: absolute;
}
.company:hover >.sub-menu,
.BUSINESS:hover >.sub-menu,
.LAB:hover >.sub-menu,
.PRODUCT:hover >.sub-menu{
display: block;
}
.sub-menu p:hover
{
color: orangered;
}

a{text-decoration:none; color: #6b2e6d;}
@media (max-width: 344px){
  .router-link{
    display: none;
  }
}
@media (max-width: 576px) {
.MenuBar{
  width: 90%;
  margin: 5%;
  display: flex;
  flex-direction: column;  
}
h1{
  font-size: 20px;
  width: 20px;
}
.router-link {
  margin-top: 10px;
}
.router-link h3{
  // margin: 5px;
  font-size: 8px;  
}
.company,
.BUSINESS,
.LAB,
.PRODUCT{
  width: 100px;
}
.company > .sub-menu,
.BUSINESS > .sub-menu,
.PRODUCT> .sub-menu,
.LAB > .sub-menu{
  width: 100px;
}
.sub-menu p{
  font-size: 8px;
}
}
@media (max-width: 820px){
  .MenuBar{
  width: 90%;
  display: flex;
  display: flex;
  flex-direction: column;  
}
}
</style>
