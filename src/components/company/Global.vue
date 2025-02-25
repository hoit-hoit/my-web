<template>
  <div class="eye">
    <h1>Global Network</h1>
    <div class="item">
      <div></div>   
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.eye{
  width: 100%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.eye >h1{
  margin: 5% 0 ;
  width: 20%;
  height: 20%;
  background-color: #2574a6;
  display: flex;
  justify-content: center;
  padding: 0.5% 0;
  border-radius: 50px;
  color: #fff;
}

.item{
  width: 100%;
  height: 50vh;
  display: flex;  
  justify-content: center;
  align-items: center;
  
}
.item >div{
  width: 30%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2%;
  font-size: 1.5rem;
  cursor: pointer;
}
.item >div:nth-of-type(1){
  background-image: url(../../../public/images/global.jpg);
  background-position: center;
  background-size: cover;
}
@media(max-width : 1366px){
  .eye>h1{
    width: 40%;    
  }    
  .item{
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item >div{
    width: 100%;
    // height: 70vh;
  }
}
@media (max-width: 576px) {

  .eye > h1 {
    width: 70%;   
    font-size: 1.5rem;
  } 
}
</style>