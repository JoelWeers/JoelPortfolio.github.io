<template>
  <div class="container">
    <div class="row">
      <h1 class="text text-center my-4 heading">Welcome!</h1>
    </div>
    <div class="row my-5">
      <section class="col-md-5 border border-color element">
        <div class="container m-4">
          <div class="row">
            <section class="image m-2 col-5" />
            <section class="col-6">
              <h3 class="text heading">Blog</h3>
              <p class="text">
                This could be used for short articles and of course blogs.
              </p>
              <p class="text">$9.99</p>
              <button class="btn btn-primary btn-sm mb-3 heading">
                <router-link class="text" to="/store">Buy</router-link>
              </button>
            </section>
          </div>
        </div>
      </section>
      <section class="col-md-5 border border-color element-offset offset-md-2">
        <div class="container m-4">
          <div class="row">
            <section class="image m-2 col-5" />
            <section class="col-7">
              <h3 class="text-offset heading">News</h3>
              <p class="text-offset">
                This would look great for you online newspaper.
              </p>
              <p class="text-offset">$10.99</p>
              <button class="btn btn-primary btn-sm mb-3 heading">
                <router-link class="text" to="/store">Buy</router-link>
              </button>
            </section>
          </div>
        </div>
      </section>
    </div>
    <div class="row my-5">
      <section class="col-md-5 border border-color element-offset">
        <div class="container m-4">
          <div class="row">
            <section class="image m-2 col-5" />
            <section class="col-7">
              <h3 class="text-offset heading">Storefront</h3>
              <p class="text-offset">
                This will be amazing at your storefront to help differentiate
                from the competition.
              </p>
              <p class="text-offset">$7.99</p>
              <button class="btn btn-primary btn-sm mb-3 heading">
                <router-link class="text" to="/store">Buy</router-link>
              </button>
            </section>
          </div>
        </div>
      </section>
      <section class="col-md-5 border border-color element offset-md-2">
        <div class="container m-4">
          <div class="row">
            <section class="image m-2 col-5" />
            <section class="col-6">
              <h3 class="text heading">Forum</h3>
              <p class="text">
                Do you need a great format for your new online community?
              </p>
              <p class="text">$12.99</p>
              <button class="btn btn-primary btn-sm mb-3 heading">
                <router-link class="text" :to="'/store/' + 4">Buy</router-link>
              </button>
            </section>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import products from '../router/products.js'

export default {
  name: 'WelcomePage',
  data() {
    return {
      products,
    }
  }
};
</script>

<style scoped>
.image {
  height: 170px;
  width: 170px;
  background-color: rgb(2, 2, 95);
}
</style>