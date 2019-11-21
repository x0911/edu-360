
<template>
  <div>
    <vue-particles
      class="no-auth-landing-particles"
      color="#1976D2"
      :particlesNumber="50"
      linesColor="#1976D2"
      :moveSpeed="1"
    >
    </vue-particles>
    <div
      class="full-page"
      :style="
        `background-image: url(${require('@/assets/pages/no-auth-landing/Endless-Constellation.svg')})`
      "
    >
      <v-layout align-content-center justify-center align-center fill-height>
        <v-flex lg11 xl8>
          <v-container>
            <v-row>
              <v-col cols="12" lg="6" xl="5">
                <v-card dark flat tile color="transparent">
                  <v-card-title class="display-2">Edu 360</v-card-title>
                  <v-card-text>
                    <v-chip color="" outlined small>7-day FREE Trial</v-chip>
                  </v-card-text>
                  <v-card-text
                    class="subtitle-2 line-height-x1"
                    style="font-size: 16px !important"
                  >
                    Whether you're a graduated or a student, Edu 360 is an
                    educational platform that makes it easy for you to learn.
                  </v-card-text>
                  <v-card-text>
                    <v-text-field
                      outlined
                      single-line
                      label="Phone Number"
                      rounded
                      class="append-with-button dialog-text-field"
                      prepend-inner-icon="mdi-phone"
                      persistent-hint
                      hint=" "
                    >
                      <template v-slot:append>
                        <v-btn
                          width="110"
                          color="white"
                          class="black--text"
                          rounded
                        >
                          Next
                          <span class="mx-1"></span>
                          <v-icon class="rotateOnLangNigative" small
                            >mdi-keyboard-backspace</v-icon
                          >
                        </v-btn>
                      </template>
                      <template v-slot:message="{message, key}">
                        <div :key="key">
                          <v-btn class="text-capitalize" color="grey lighten-1" text>Lost Phone?</v-btn>
                        </div>
                      </template>
                    </v-text-field>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<style lang="scss">
.no-auth-landing-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #041524;
}
.full-page {
  height: 100vh;
  width: 100vw;
  background-attachment: scroll;
  background-size: auto;
  background-repeat: repeat;
  background-position: center center;
}
</style>

<script>
export default {
  name: "hero",
  data: () => ({

  })
}
</script>