<template>
  <div class="container">
    <div class="row">
      <section class="col-md-6">
        <div class="img m-4">{{ product.image }}</div>
      </section>
      <section class="col-md-6">
        <article class="container">
          <h1 class="row text text-center">{{ product.name }}</h1>
          <div class="row">
            <section class="col-sm-6">
              <h3 class="text text-center">Uses:</h3>
              <p class="text text-center">{{ product.uses }}</p>
            </section>
            <section class="col-sm-6">
              <h3 class="text text-center">About:</h3>
              <p class="text text-center">
                {{ product.about }}
              </p>
            </section>
          </div>
          <div class="row">
            <h1 class="text-primary text-center">{{ product.price }}</h1>
          </div>
          <div class="row">
            <p class="text text-center">Terms and conditions apply</p>
          </div>
        </article>
      </section>
    </div>
    <hr />
    <div class="row">
      <button
        class="btn text-primary border border-primary btn-lg btn-disabled"
      >
        Purchase With Server (Coming Soon)
      </button>
    </div>
    <div class="row">
      <button
        class="btn text-primary border border-primary btn-lg btn-disabled"
      >
        Purchase (Coming Soon)
      </button>
    </div>
  </div>
</template>

<script>
import { products } from '../router/products.js';

export default {
  name: 'StorePage',
  props: {
    image: String,
    name: String,
    uses: String,
    about: String,
    price: String,
  },
  data() {
        return {
        product: products.find((p) => p.id === this.$route.params.id),
      }
  },
}
</script>

<style scoped>
.img {
  height: 900;
  widows: 600;
  background-color: darkblue;
}
</style>