<template>
    <div>
        <h2 id="skills-section">Skills</h2>
        <div class="row">
            <div class="col-6" v-for="skills in skills" :key="skills.id">
                <div class="card" style="width: 18rem;" >
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

</style>