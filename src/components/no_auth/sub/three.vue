<template>
  <div>
    <v-layout class="pt-12" justify-center align-content-center align-center>
      <v-flex lg10 xl8>
        <v-container>
          <v-row>
            <v-col cols="12" lg="6">
              <v-card flat tile color="transparent">
                <v-card-subtitle>
                  <v-chip class="custom-chip" small color="primback" dark
                    >Subtitle Heading</v-chip
                  >
                </v-card-subtitle>
                <v-card-title class="display-1 break-word"
                  >Dolor dolor nulla dolore proident laboris excepteur et
                  consectetur.</v-card-title
                >
                <v-card-text
                  class="subtitle-2 line-height-2"
                  style="font-size: 17px !important"
                >
                  Ullamco amet laboris deserunt aute irure nulla occaecat
                  laborum officia. Sint occaecat nostrud et nisi eu officia.
                  Dolore magna do culpa minim eiusmod nostrud. Consequat aliqua
                  adipisicing esse velit ut veniam commodo.
                </v-card-text>
                <v-card-actions>
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
            <v-col cols="12" lg="6">
              <atom-item></atom-item>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "three",
  components: {
    AtomItem: () => import("@/components/items/atom-3.vue")
  },
  data: () => ({})
};
</script>
