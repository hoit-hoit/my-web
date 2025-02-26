<template>
  <swiper class="mySwiper swiper1":autoplay="true">
    <swiper-slide>
      <div class="swiper-slide slide01">
        <h1>오늘 하루도 행복하세요!</h1>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-slide slide02">
				<div class="slide02-p">
        <p>
          정말로 눈에 차는 것을 목표로 삼자 <br>
					눈에 들어오는 것 중 그나마 나은것에
          안주하지 말자
        </p>
        <p>- 결국 해내는 사람들의 원칙 -</p>
			</div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-slide slide03">
        <div class="slide03-p">
          <p>너는 좋은 일들만 끌어당겨, 그것도 아주 많이</p>
          <p>- 꽃의 언어, 이평 -</p>
        </div>
      </div>
    </swiper-slide>
    <!-- <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div> -->
  </swiper>
  <div class="main">
    <h2>Production Information</h2>
    </div>
    <div class="main-item">
    <div class="main-list">
      <h3 class="odm"><router-link to="/Bn/businessprocess">ODM System</router-link></h3>
      <h3 class="rnd"> <router-link to="/Bn/rndcenter">R&D</router-link></h3>
      <h3 class="phs"> <router-link to="/Cp/about">Our Philosophy</router-link></h3>
    </div>
  </div>
  <div class="overview-item">
    <div class="over-view">     
        <h3>Overview</h3>
        <p></p>  
      </div>         
      <div class="over-view-main1">
          <swiper class="mySwiper" v-bind="swiperOption" :autoplay="true" >
            <swiper-slide>
      <div class="swiper-slide slide04">   
      </div>
      </swiper-slide> 
      <swiper-slide>
      <div class="swiper-slide slide05">    
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-slide slide06">    
      </div>    
    </swiper-slide>
    <!-- <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div> -->
        
          </swiper>
     
      </div>
      <div class="over-view-main2">
        <p>
          <h3>How have you been?</h3>
          <h3 class="none">What a Beautiful Day!</h3>
        </p>
      </div>
    </div>
    <div class="main-bottom">
      <div class="hello"><h2>HELLO!</h2></div>
      <div></div>
      <div><h2>It's Me!</h2></div>
    </div>
    <div class="main-bottom1">
      <div></div>
      <div class="nice"><h2>HAVE A NICE DAY!</h2></div>
      <div></div>
    </div>
   
  
    
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay } from "swiper";
import { useRouter } from 'vue-router';
const router = useRouter();

SwiperCore.use([Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  swiperOption: {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,    //센터모드
    threshold:300, //마우스 스와이프 민감도
    speed: 100,
 
    navigation:{
      nextE1:".swiper-button-next",
      prevE1:".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type:'bullets'
    },
  },
};
</script>
<style lang="scss" scoped>
@font-face {
  font-family: "GmarketSansMedium";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
a{text-decoration:none; color: #6b2e6d;}
.slide01 {
  background-image: url(../../public/images/lemon.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #333;
  font-size: 30px;
  // width: 100%;
  height: 100vh;
}

.slide02 {
  background-image: url(../../public/images/green.jpg);
  background-size: cover;
  width: 100%;

}
.slide03 {
  background-image: url(../../public/images/cottoncandy.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  // width: 100%;
  height: 100vh;
}

.slide03-p > p:nth-of-type(1) {
  color: #302a2a;
  font-weight: lighter;
  font-size: 50px;
}

.slide03-p > p:nth-of-type(2) {
  color: #302a2a;
  font-weight: lighter;
  font-size: 30px;	
}
.slide02-p >p:nth-of-type(1){
	color: #222;
	font-size: 35px;
}
.slide02-p >p:nth-of-type(2){
	color: #222;
	font-size: 25px;
}
.slide02-p{
	text-align: right;	
	height: 100vh;
	width: 90%;
  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: right;
	text-align: right;
	gap: 20px;
	
}
.slide03-p {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
.slide04{
  width: 100%;
height: 400px;
  background-image: url(../../public/images/green.jpg);
  background-size: cover;
  // z-index: 10;
}
.slide05{
  width: 100%;
height: 400px;
  background-image: url(../../public/images/leaf1.jpg);
  background-size: cover;
}
.slide06{
  width: 100%;
  height: 400px;
  background-image: url(../../public/images/pineapple.jpg);
  background-size: cover;
}
.main{
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2% 0 ;
  margin: 3% 0;
}
.main-item{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main > h2{
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1%;
  width: 20%;
  height: 20%;
  border: 1px solid #777;
  border-radius: 10px;
}
.main-list{
  width: 90%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  
}
.odm,
.rnd,
.phs
{
  background-image: url(../../public/images/lemon2.jpg);
  width: 300px;
  height: 250px;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 20%;
}
.rnd{
  background-image: url(../../public/images/lemon.jpg);
  width: 20%;
}
.phs{
  background-image: url(../../public/images/lemon3.jpg);
  width: 20%;
}
.overview-item{
  width: 100%;
  display: flex; 
  align-items: center;
}
.over-view{
  writing-mode: vertical-lr;
  width: 5%;
  height: 50%;
  display: flex;
margin: 5%;
gap: 20px 0;
}
.over-view p{
  width: 1px;
  margin: 2%;
  height: 200%; 
  background-color: #222;
}

.over-view-main1{
  width: 40%;
  height: 400px;
  // background-color: cadetblue;
}
.over-view-main2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 400px;
  margin-left: 20px;
  background-color: rgb(172, 114, 226);
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
}
.over-view-main2 >p> .none{
  display: none;
}
.over-view-main2:hover{
  background-image: url(../../public/images/flower1.jpg);
  background-size: cover;
  background-position: center;
}
.over-view-main2:hover>p>h3:nth-of-type(1){
  display: none;
}
.over-view-main2:hover >p> .none{
display: block;
color: #222;
}
.main-bottom{
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;  
  text-align: center;
  color: #222;

}
.main-bottom>div:nth-of-type(1){
  background-image: url(../../public/images/orange.jpg);  
  width: 30%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-size: cover;  
  cursor: pointer;
}
.main-bottom>.hello:hover{
  background-color: rgba(243, 161, 20, 0.945);
  background-image: none;
  color: #fff;
  font-size: 3.5rem;
}
.main-bottom>div:nth-of-type(2){
  background-image: url(../../public/images/pineapple.jpg);
  width: 30%;
  height: 100%;
  flex: 1;
  background-size: cover;
}
.main-bottom>div:nth-of-type(3){
  background-image: url(../../public/images/orange.jpg);
  width: 30%;
  height: 100%;
  flex: 1;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.main-bottom>div:nth-of-type(3):hover{
  background-color: rgba(158, 242, 119,0.8);
  background-image: none;
  color: rgb(251, 100, 45);
  font-size: 3.5rem;
}
.main-bottom1{
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;  
  color: #222;

}
.main-bottom1>div:nth-of-type(1){
  background-image: url(../../public/images/pineapple.jpg);  
  width: 30%;
  flex: 1;
  height: 100%;
  background-size: cover;
}
.main-bottom1>div:nth-of-type(2){
  background-image: url(../../public/images/orange.jpg);
  width: 30%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  cursor: pointer;
}
.nice>h2{
  padding: 20px;
}
.nice>h2
  {animation: motion 0.3s linear 0s infinite alternate; margin-top: 0;}
  @keyframes motion {
	0% {margin-top: 0px;}
	100% {margin-top: 20px;}
}

.main-bottom1>div:nth-of-type(2):hover{
  background-color: rgb(162, 79, 239);
  background-image: none;
  color:#fff;
  font-size: 3.5rem;
}

.main-bottom1>div:nth-of-type(3){
  background-image: url(../../public/images/pineapple.jpg);
  width: 30%;
  height: 100%;
  flex: 1;
  background-size: cover;
}
@media (max-width: 1370px){
  .main > h2{
  font-size: 1.5rem;
  width: 50%;
  height: 5%; 
  border-radius: 50px;
  margin-bottom: 3%;
}
.main-list{
  margin-bottom: 5%;
}
.over-view-main2{
  text-align: center;
}
.slide02-p >p:nth-of-type(2),
.slide02-p >p:nth-of-type(1){
  font-size: 1.5rem;
  word-break: keep-all;
}
.slide03-p > p:nth-of-type(2){
  font-size: 1.5rem;
  word-break: keep-all;
}

.slide03-p > p:nth-of-type(1){
    font-size: 2rem;
    word-break: keep-all;
  }
}
@media (max-width: 820px){
  .slide03-p>p:nth-of-type(1){
  font-size: 1.5rem;
  word-break: keep-all;
}
.slide02-p{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.main-list{ 
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;  
}
.over-view-main2{
  text-align: center;
}
.overview-item{
  margin-bottom: 10%;
}
.main > h2{
  font-size: 1.5rem;
  width: 100%;
  height: 20%; 
  border-radius: 50px;
  margin: 10% 0;
}
.nice{
  text-align: center;
}
.main-bottom>div:nth-of-type(3):hover{
  font-size: 1rem;
}
.main-bottom>div:nth-of-type(1):hover{
  font-size: 1rem;
}
.main-bottom1>div:nth-of-type(2):hover{
  font-size: 1rem;
}
.main-list{
  margin-bottom: 10%;
}
}
@media (max-width: 576px){
  .swiper-slide h1{
    font-size: 1.5rem;
  }
.slide02-p >p:nth-of-type(2),
.slide02-p >p:nth-of-type(1){
  font-size: 1rem;
  word-break: keep-all;
}
.slide03-p > p:nth-of-type(2){
  font-size: 1rem;
  word-break: keep-all;
}
.slide02-p{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.slide03-p > p:nth-of-type(1){
    font-size: 1rem;
    word-break: keep-all;
  }
  .main > h2{
  font-size: 1rem;
  width: 100%;
  height: 30%; 
  border-radius: 20px;
  margin-top: 10%;
}
.main-list{
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;  
}
.main-list>h3{
  font-size: 15px;
}
.main-list>h3:nth-of-type(3){
  font-size: 13px;
}
.slide03-p>p:nth-of-type(1){
  font-size: 1rem;
  word-break: keep-all;
}
.over-view-main2{
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  flex-wrap: wrap;
  text-align: center;
}
.main-bottom>div:nth-of-type(3):hover{
  font-size: 1rem;
}
.main-bottom>div:nth-of-type(1):hover{
  font-size: 1rem;
}
.main-bottom1>div:nth-of-type(2):hover{
  font-size: 1rem;
}
}

@media (max-width: 345px){
  .swiper-slide h1{
    font-size: 1.5rem;
  }
  .slide03-p > p:nth-of-type(1){
    font-size: 1.5rem;
    word-break: keep-all;
  }
.slide03-p > p:nth-of-type(2),
.slide02-p >p:nth-of-type(1),
.slide02-p >p:nth-of-type(2){
  font-size: 1rem;
  word-break: keep-all;
}

}



</style>
