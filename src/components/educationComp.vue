<template>
   <div>
    <h2>Education</h2>
    <div id="education-section">
        <div class="hvucdb" v-for="education in education" :key="education.id" >
            <div class="card" id="card-styling-education" style="width: 16rem;" >
                <img id="card-text-education" :src="education.image" class="card-img-top" :alt="education.type">
                <div class="card-body">
                  <p>{{education.description}} in {{education.year}}</p>
                </div>
              </div>

        </div>
    </div> 
   </div>
</template>

<script>
    export default {
        computed:{
            education(){
                return this.$store.state.education;
            },
        },
        mounted() {
            this.$store.dispatch("fetchEducation")
        }
        
    }
</script>

<style scoped>
#education-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
#card-styling-education {
    margin: 1rem;
    height: 28rem;
}
#card-text-education {
    height: 20rem;
}
.education-section {
    margin: auto;
    width: 100%;
}
</style>