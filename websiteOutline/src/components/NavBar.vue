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
          <router-link class="nav-link btn btn-border border-primary btn-lg text-primary mx-2 heading"  to="/store">Checkout</router-link>
        </li> 
        -->
      </ul>
    </div>
  </div>
</nav>
  <div class="jumbotron jumbotron-fluid border border-color element-offset">
  <div class="container p-5">
    <h1 class="display-4 m-5 text-center text">Want to buy a Website?</h1>
  </div>
</div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>

</style>