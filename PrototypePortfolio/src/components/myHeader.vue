<template>
  <div class="myHeader">
    <div class="jumbotron text-center mb-0">
      <h1>Welcome to my portfolio!</h1>
    </div>

    <nav class="navbar navbar-expand-sm bg-secondary navbar-dark">
      <a class="navbar-brand" href="#">Joel Weers</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="collapsibleNavbar"
      >
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#contact">Contact Me</a></li>
          <li class="nav-item"><a class="nav-link" href="#faq">FAQ</a></li>
          <li class="nav-item"><a class="nav-link" href="#projects">My Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "myHeader",
  props: {
    msg2: String,
  },
};
</script>

<style scoped>
</style>