<template>
  <div>
    <v-layout class="pt-12" justify-center align-content-center align-center>
      <v-flex lg10 xl8>
        <v-container>
          <v-row>
            <v-col
              :order="$vuetify.breakpoint.lgAndUp ? '1' : '0'"
              cols="12"
              lg="6"
            >
              <v-card
                :class="[$vuetify.breakpoint.lgAndUp ? 'text-right' : '']"
                flat
                tile
                color="transparent"
              >
                <v-card-subtitle>
                  <v-chip class="custom-chip" small color="primback" dark
                    >Subtitle Heading</v-chip
                  >
                </v-card-subtitle>
                <v-card-title class="display-1 break-word"
                  >Duis sit consectetur amet elit exercitation.</v-card-title
                >
                <v-card-text
                  class="subtitle-2 line-height-2"
                  style="font-size: 17px !important"
                >
                  Officia deserunt quis laboris ad veniam nulla culpa
                  adipisicing anim quis aliqua. Ipsum nulla ex esse velit
                  reprehenderit nostrud nisi duis et culpa laborum. Elit labore
                  anim aute Lorem commodo.
                </v-card-text>
                <v-card-actions>
                  <v-spacer v-if="$vuetify.breakpoint.lgAndUp"></v-spacer>
                  <v-btn text class="text-capitalize">
                    Learn More
                    <span class="mx-1"></span>
                    <v-icon class="rotateOnLangNigative" small
                      >mdi-keyboard-backspace</v-icon
                    >
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" lg="6" style="position: relative;">
              <flask-item></flask-item>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "one",
  components: {
    FlaskItem: () => import("@/components/items/flask-1.vue")
  },
  data: () => ({})
};
</script>
