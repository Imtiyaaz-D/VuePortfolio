<template>
    <div>
        <h2>Testimonials</h2>
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in data" :key="item.id">
                    <div class="card" style="width: 18rem;">
                        <img :src="item.image" class="card-img-top" :alt="item.name">
                        <div class="card-body">
                          <h1>{{ item.description }}</h1>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                data:[]
            }
        },
        methods:{
            async fetchData(){
                const res = await fetch("https://imtiyaaz-d.github.io/portfolio-sever/index.json")
                let parsedData = await res.json()
                this.data = parsedData.testimonials;
            }
        },
        mounted(){
            this.fecthData()
        }
    }
</script>

<style scoped>

</style>