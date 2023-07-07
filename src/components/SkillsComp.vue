<template>
    <div>
        <h2 id="skills-section">Skills</h2>
        <div id="skills-container">
            <div class="card-styling" v-for="skills in skills" :key="skills.id">
                <div class="card" id="card-styling-skills" style="width: 16rem;" >
                    <img :src="skills.image" class="card-img-top" :alt="skills.type">
                    <div class="card-body">
                      <h2>{{skills.type}}</h2>
                      <p>{{skills.knowledge}}</p>
                    </div>
                  </div>
    
            </div>
        </div> 
    </div>
</template>

<script>
    export default {
        computed:{
            skills(){
                return this.$store.state.skills;
            },
        },
        mounted() {
            this.$store.dispatch("fetchSkills")
        }
    }
</script>

<style scoped>
#skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
#card-styling-skills {
    margin: 1rem;
    height: 28rem;
}
.skills-section {
    margin: auto;
    width: 100%;
}
</style>