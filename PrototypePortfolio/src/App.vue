<template>
  <div id="app" class="container">
    <div class="justify-content-center">
      <myHeader />
      <article class="row mt-3">
        <GallerySection class="col-sm-3" />
        <article class="col-sm-9 my-5">
          <WelcomeSection />
          <section v-if="!this.$store.state.registered">
            <ContactSection id="contact" />
          </section>
          <section v-else>
            <ContactMessage />
          </section>
        </article>
      </article>
      <FAQ id="faq" />
      <ProjectsSection id="projects" />
    </div>
    <footer>
      <div class="jumbotron text-center mb-0 mt-5">
        <p>Pax Magnifica Bellum Gloriosum!</p>
      </div>
    </footer>
  </div>
</template>

<script>
import myHeader from "./components/myHeader";
import GallerySection from "./components/GallerySection";
import WelcomeSection from "./components/WelcomeSection";
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/ProjectsSection.vue";
import ContactMessage from "./components/ContactMessage.vue";
import FAQ from "./components/FAQ";

export default {
  name: "App",
  components: {
    myHeader,
    GallerySection,
    WelcomeSection,
    ContactSection,
    ProjectsSection,
    ContactMessage,
    FAQ,
  },
};
</script>

<style>
</style>
