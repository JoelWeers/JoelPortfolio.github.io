<template>
  <section class="container border border-dark">
    <div class="row mt-5">
      <article class="col-sm-12 d-flex justify-content-center mb-0">
        <h3>Frequently Asked Questions</h3>
      </article>
    </div>
    <div class="row mt-5 mb-3">
      <article class="col-sm-12 d-flex justify-content-center">
        <div class="mh-5" id="accordion">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn btn-link text-center"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  It says you learned to mod Minecraft does that mean you have
                  experience with Java?
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div class="card-body">
                While I do have some experience learning to mod Minecraft, I did
                not learn the language to a satisfactory level. The means I
                learned to mod Minecraft was through an online course whose
                primary goal was not programming. While I did make some mods for
                Minecraft, the mods were merely reskinned code that already
                existed in the game. Since that course, I did not try to use the
                knowledge that I did gain and don't possess that skill.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed text-center"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Why should we hire you?
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div class="card-body">
                I believe you should hire me because I am a hard-working
                programmer who is learning constantly. Programming is something
                I have a lot of fun doing and seek to always get better at it.
                By hiring me you would be adding another good member to your
                already great team. In the end, this will make your team more
                productive and will help get the job done faster.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed text-center"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What are your favorite Board Games?
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div class="card-body">
                I have several favorite board games. The main favorite of mine
                is called Twilight Imperium Fourth Edition(TI4). TI4 is an epic
                board game involving dominating the galaxy with your chosen
                alien race through politics, warfare, and technology. Another
                favorite of mine is called Cosmic Encounter. Cosmic Encounter is
                a fast-paced game about politics and deception. Cosmic Encounter
                is easy to pick up game for a small group but a fun one
                nonetheless. Another favorite of mine is called Undaunted
                Normandy. Which is a squad-based game about the Normandy
                invasion of World War Two. It is not complicated like Axis and
                Allies but it can make you scratch your head with the strategic
                decisions you need to make.
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "FAQ",
};
</script>

<style scoped>
</style>