<template>
  <div class="container-fluid">
    <div class="home-message p-2">
      <img src="https://iili.io/J1JqrR2.png" alt="home-img">
      <div class="heading-msg">
        <h3 class=" animate__animated animate__bounce">Weclome to an Aspiring Web-Developer</h3>
        <div class="view_more_btn">
        <button type="button" class="btn btn-outline-light"><router-link to="/about" class="no-underline"> View More About Me</router-link></button>

        <button type="button" class="btn btn-outline-light"><a href=" https://drive.google.com/uc?export=download&id=1DMiBMTz-WL9EF6al5KYT9m2A3p8uLixz" class="no-underline" target="_blank">
    Download CV</a></button>
      </div>
      </div>
      
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
.home-message{
  font-family: 'Karma', serif;
  display: flex;
  justify-content: center;
}
.heading-msg{
  padding: 2rem;
  margin: 2rem;
}
.view_more_btn{
  padding: 2rem;
  display: flex;
  justify-content: space-evenly;
}

.no-underline{
  text-decoration: none;
  color: inherit;
}
@media  (width < 800px){
  #img-container{
    max-width:100%;
    height:auto;
    text-align: center;
  }
}
</style>