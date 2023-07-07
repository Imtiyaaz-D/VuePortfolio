<template>
    <div>
        <h2>Testimonials</h2>
        <TestimonialComp/>
    </div>
</template>

<script>
import TestimonialComp from '@/components/TestimonialComp.vue';
    export default {
        components:{
            TestimonialComp
        },
        computed: {
            testimonials(){
                return this.$store.state.testimonials
            }
        },
        mounted(){
            this.$store.dispatch('fetchTestimonials')
        }
    }
</script>

<style scoped>
@media(width<800px)  {
    
}

</style>