<template>
    <div>
        <footer id="footer">
            <div id="copyright">
                <p>POWERED BY Imti-Damon COPYRIGHT &COPY; {{cYear}}</p>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                cYear: new Date().getUTCFullYear()
            }
        }
    }
</script>

<style scoped>

</style>