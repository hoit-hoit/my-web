<template>
  <div class="eye">
    <h1>History</h1>
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
  align-items: center;
}
.eye >h1{
  margin: 5% 0 ;
  width: 20%;
  height: 20%;
  background-color: #6e7027;
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
  background-image: url(../../../public/images/historymain.jpg);
  background-position: center;
  background-size: cover;
}
@media(max-width : 1370px){
  .eye>h1{
    width: 30%;
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
    width: 50%;
    font-size: 1.5rem;
  }

}
</style>