<template>
  <div>
    <div class="container animate__animated animate__backInLeft">
      <div class="row">
        <div class="col-4" v-for="projects in projects" :key="projects.id">
          <div class="card" style="width: 18rem">
            <img :src="projects.image" class="card-img-top " :alt="projects.title"/>
            <div class="card-body">
              <p>{{ projects.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProject");
  },
};
</script>

<style scoped>

</style>
