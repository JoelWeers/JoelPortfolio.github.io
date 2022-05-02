<template>
  <nav class="navbar navbar-expand-lg navbar-light element border border-color p-3 m-2">
    <div class="container-fluid">
      <div class="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link btn btn-border border-primary btn-lg text-primary mx-2 heading"  to="/">Store</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link btn btn-border border-primary btn-lg text-primary mx-2 heading"  to="/contact">Contact</router-link>
        </li>
        <!--
        <li class="nav-item">
          <router-link class="nav-link btn btn-border border-primary btn-lg text-primary mx-2"  to="/store">Checkout</router-link>
        </li>
        -->
        </ul>
      </div>
    </div>
  </nav>
  <div class="jumbotron jumbotron-fluid border border-color element-offset">
    <div class="container-fluid m-5 text-center">
      <h3 class="mt-3 text heading">Hours:</h3>
      <h4 class="mb-3 text">
        Monday-Thursday: 12:00pm-6:00pm, Friday-Saturday: 10:00am-7:00pm,
        Sunday: Closed.
      </h4>
      <h3 class="mt-3 text heading">Phone Number:</h3>
      <h4 class="mb-3 text">+1 208 123-4567</h4>
      <h3 class="mt-3 text heading">Email:</h3>
      <h4 class="mb-3 text">example@gmail.com</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
};
</script>

<style scoped>
</style>