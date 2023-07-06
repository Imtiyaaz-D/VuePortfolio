<template>
    <div class="d-flex justify-content-center align-items-center">
        <form class="cont" action="https://formspree.io/f/xwkdkkgb" method="post">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter First Name">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Surname</label>
                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter Surname">
              </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary mt-3">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.cont {
    width: 80%;
}

</style>