<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid d-flex justify-content-end">
              <img src="https://i.postimg.cc/rpKyhyvC/Mogammad-Imtiyaaz-Damon-sm.png" alt="logo" loading="lazy">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
                  <li class="nav-item">
                    <router-link to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/about">About</router-link>
                  </li>
                  <li class="nav-item dropdown">
                    <router-link to="/resume" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Resume</router-link>
                    <ul class="dropdown-menu">
                      <li><router-link to="/resume">Resume</router-link></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link to="/project">Projects</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/testimonial">Testimonial</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/contact">Contact</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>