<template>
  <div class="row text-center">
    <h1 class="text m-3">We would love to hear from you!</h1>
  </div>
  <form>
    <div class="form-row mb-2 mt-5 justify-content-center">
      <div class="form-group col-md-6 offset-md-3">
        <label class="text" for="inputEmail4">Email:</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          placeholder="Email"
        />
      </div>
      <div class="form-group my-2 col-md-6 offset-md-3">
        <label class="text" for="inputConfirmEmail2">Confirm Email:</label>
        <input
          type="email"
          class="form-control"
          id="inputConfirmEmail2"
          placeholder="Confirm Email"
        />
      </div>
      <div class="form-group my-2 col-md-6 offset-md-3">
        <label class="text" for="inputFirstName4">First Name:</label>
        <input
          type="text"
          class="form-control"
          id="inputFirstName4"
          placeholder="John"
        />
      </div>
    </div>
    <div class="form-group my-2 col-md-6 offset-md-3">
      <label class="text" for="inputLastName">Last Name</label>
      <input
        type="text"
        class="form-control"
        id="inputLastName"
        placeholder="Smith"
      />
    </div>
    <div class="form-group my-2 col-md-8 offset-md-2">
      <label class="text" for="inputBusiness">Business</label>
      <input type="text" class="form-control" id="inputBusiness" />
    </div>
    <div class="form-group my-2 col-md-6 offset-md-3">
      <label class="text" for="inputMessage">Message</label>
      <input type="text" class="form-control" id="inputMessage" />
    </div>
    <div class="form-group  my-2 col-sm-4 offset-sm-6">
      <div class="form-check">
        <input class="form-check-input" type="radio" id="gridFeedback" />
        <label class="form-check-label text" for="gridFeedback">
          Feedback
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="gridBugreport" />
        <label class="form-check-label text" for="gridBugreport">
          Bug Report
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="gridBusiness" />
        <label class="form-check-label text" for="gridBusiness">
          Business
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="gridOther" />
        <label class="form-check-label text" for="gridOther"> Other </label>
      </div>
    </div>
    <div class="row justify-content-center mt-2 mb-5">
      <button type="submit" class="col-sm-1 btn text-primary border-primary btn-lg">
        Send!
      </button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
</style>