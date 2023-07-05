<template>
    <div class="testimonials">
        <div class="container ">
            <div class="row">
                <div class="col " v-for=" testimonial in testimonials" :key="testimonial.id">
                    <div class="card border border-dark" style="width: 18rem;">
                        <img :src="testimonial.image" class="card-img-top" :alt="testimonial.name">
                        <div class="card-body">
                            <h3>{{ testimonial.name }}</h3>
                          <p>{{ testimonial.description }}</p>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed:{
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

</style>