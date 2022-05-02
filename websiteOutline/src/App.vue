<template>
  <NavBar />
  <router-view />
  <FooterBar />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
  name: "App",
  components: {
    //HelloWorld,
    NavBar,
    FooterBar,
  },
};
</script>

<style>
html, body {
  background-color: #121212;
}

.text {
  color: #FAFAFA;
}

.element {
  background-color: #272727;
}

.border-color {
  border-color: #F5F5F5;
  border-radius: 1em;
}

.text-offset {
  color: #EEEEEE;
}

.element-offset {
  background-color: #353535;
}

.red {
  background-color: #C62828;
}

.blue {
  background-color: #030F9F;
}

.heading {
  font-family: 'Comic Mono','Times-new-Roman', serif ;
}
</style>
