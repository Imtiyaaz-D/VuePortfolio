<template>
    <div>
           <educationComp/>
           <SkillsComp/>
    </div>
</template>

<script>
import educationComp from '@/components/educationComp.vue';
import SkillsComp from '@/components/SkillsComp.vue'
    export default {
        components:{
            educationComp,
            SkillsComp
        },
        computed:{
            eduaction(){
                return this.$store.state.eduaction
            }
        },mounted() {
            this.$store.dispatch("fetchEducation")
        }
    }
</script>

<style scoped>

</style>