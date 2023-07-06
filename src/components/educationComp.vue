<template>
   <div>
    <div class="row" id="education-section">
        <div class="col-6" v-for="education in education" :key="education.id" >
            <div class="card" style="width: 18rem;" >
                <img :src="education.image" class="card-img-top" :alt="education.type">
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

</style>