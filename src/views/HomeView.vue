<template>
  <div class="home container-fluid">
    <h2>Home</h2>
    <div class="home-message p-2">
      <img src="https://i.postimg.cc/G3Xx4nr2/Imtiyaaz-damon-2.png" alt="profile" class="border border-dark animate__animated animate__bounce " loading="lazy" id="img-container">
      <h3 class=" animate__animated animate__bounce">Weclome to an Aspiring Web-Developer</h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
 
  components: {

}
}
</script>
<style scoped>
.animate__animated animate__bounce {
  --animate-duration: 2s;
}

@media  (width < 800px){
  #img-container{
    max-width:100%;
    height:auto;
    text-align: center;
  }
}
</style>