<template>
  <div>
    <div class="d-flex justify-content-center align-items-center mt-5">
        <form class="cont" action="https://formspree.io/f/xwkdkkgb" method="post">
            <div class="mb-3 px-3">
                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter First Name" required oninvalid="this.setCustomValidity('Please Enter Your  First Name')"
                oninput="this.setCustomValidity('')">
              </div>
              <div class="mb-3 px-3">
                <label for="exampleFormControlInput1" class="form-label">Surname</label>
                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter Surname" required oninvalid="this.setCustomValidity('Please Enter Your  Last Name')"
                oninput="this.setCustomValidity('')">
              </div>
            <div class="mb-3 px-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com" required  oninvalid="this.setCustomValidity('Please Enter Your Email')"
                oninput="this.setCustomValidity('')">
              </div>
              <div class="mb-3 px-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" oninvalid="this.setCustomValidity('Please Enter Your message')"
                oninput="this.setCustomValidity('')"></textarea>
              </div>
              <button type="submit" class="btn btn-primary mt-3">Submit</button>
        </form>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.cont {
    width: 80%;
    border: 2px white solid;
}

</style>