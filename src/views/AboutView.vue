<template>
  <div class="about-content">
    <div class="about-img">
      <img src="https://i.postimg.cc/k5DXHknx/C12-C2-Mogammad-Damon-1-removebg-preview.png" class=" animate__animated animate__fadeInTopLeft" alt="profile image" loading="lazy" id="profile image">
      <div class="mt-5 animate__animated animate__fadeInTopLeft">
      <p id="profile-text">I have always had a deep curiosity for coding. From a young age, I found myself drawn to coding, which will eventually led me to pursue a career in coding. I believe that coding has the power to change the world , and I am dedicated to making a difference through my work.</p>
    </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.about-img{
  display: flex;
  justify-content: center;
  }
@media  (max-width < 800px){
.about-content{
  max-width:100%;
    height:auto;
    text-align: center;
}
.about-img{
  max-width:100%;
  height:auto;
  text-align: center;
  }
#profile-text{
  max-width:100%;
    height:auto;
    text-align: center;
}
}
</style>
