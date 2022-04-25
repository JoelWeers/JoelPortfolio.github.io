<template>
  <section class="container" id="Contact">
    <div class="row mt-5">
      <article class="col-sm-12 d-flex justify-content-center mb-0">
        <h3>Contact Me!</h3>
      </article>
    </div>
    <div class="row mt-5">
      <article class="col-sm-12 d-flex justify-content-center">
        <form action="confirm.html" method="get">
          <div class="my-2 d-flex justify-content-center">
            <label class="mb-0" for="email_address">E-Mail:&nbsp;</label><br />
            <input type="text" name="email_address" id="email_address" />
            <span class="required text-danger" id="email1">*</span>
          </div>
          <div class="my-2 d-flex justify-content-center">
            <label class="mb-0" for="confirm_address"
              >Confirm Email:&nbsp;</label
            ><br />
            <input type="text" name="confirm_address" id="confirm_address" />
            <span class="required text-danger" id="email2">*</span>
          </div>
          <div class="my-2 d-flex justify-content-center">
            <label class="mb-0" for="phone">Mobile Phone:&nbsp;</label><br />
            <input type="text" name="phone" id="phone" />
            <span class="required text-danger" id="phone1">*</span>
          </div>
          <div class="my-2 d-flex justify-content-center">
            <label class="mb-0" for="contact">Contact me by:&nbsp;</label><br />
            <select name="contact" id="contact">
              <option value="">Select a Method</option>
              <option>Text</option>
              <option>Mobile</option>
              <option>Email</option>
              <option>Don't contact me</option>
            </select>
            <span class="required text-danger" id="contact1">*</span>
          </div>
          <div class="my-2 d-flex justify-content-center">
            <label class="mb-0" for="comments">Comments:&nbsp;</label><br />
            <textarea
              name="comments"
              id="comments"
              row="5"
              cols="40"
            ></textarea>
          </div>
          <div class="my-2 d-flex justify-content-center">
            <label>&nbsp;</label>
            <input type="button" id="register" value="Register" v-on:click="this.$store.commit('RegisterNow')" />
            <input type="button" id="reset_form" value="Reset" />
            <label class="text-danger" id="explanation"
              >&nbsp;* means required</label
            >
          </div>
        </form>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style scoped>
</style>