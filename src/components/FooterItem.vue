<template>
  <div class="footer">
    <h2>
      WEBPAGE
    </h2>
    <div class="f-text">
    <p>
     MaeYeonro, Yeontong-gu, Suwon-si,
      Gyeonggi-do, Korea
    </p>
    <p>Tel: 010-1234-5678 | Email: hoit-hoit@loremipsun.com</p>
    <p>COPYRIGHT © hoit-hoit. All Rights Reserved</p>
  </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer{
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;  
  }
.footer > h2{
  width: 5%;  
}
.f-text{   
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #777;
  font-size: 15px;
}

@media (max-width: 576px){
  .footer{
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .footer>h2{
    font-size: 1rem;   
  }
  .f-text{
    font-size: 10px;
  }
}

@media (max-width: 820px){
.footer > h2{
  width: 20%;
}
}
</style>
