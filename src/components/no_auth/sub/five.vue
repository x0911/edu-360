<template>
  <div>
    <v-layout
      class="pt-12"
      text-center
      justify-center
      align-content-center
      align-center
    >
      <v-flex sm10 md8 lg6 xl4>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-card flat tile color="transparent">
                <v-card-subtitle>
                  <v-chip class="custom-chip" small color="primback" dark
                    >Pricing Plans</v-chip
                  >
                </v-card-subtitle>
                <v-card-title
                  class="break-word display-1 line-height-3 font-weight-light d-block"
                >
                  Start for free,
                  <br />
                  then pay as you go.
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout
      class="pt-12"
      text-center
      justify-center
      align-content-center
      align-center
    >
      <v-flex sm11 xl8>
        <v-container>
          <v-row>
            <template v-for="(plan, i) in plans">
              <v-col
                :key="i"
                cols="12"
                lg="4"
                :style="
                  plan.title.toLowerCase() == 'premium'
                    ? 'transform: scale(1.15) translate(0, 5px); z-index: 1;'
                    : ''
                "
              >
                <v-card class="pb-0" dark :color="plan.color">
                  <v-card-subtitle
                    class="text-center"
                    v-text="plan.title"
                  ></v-card-subtitle>
                  <v-card-title class="text-center d-block">
                    <span class="display-4" v-text="plan.price"></span>
                    <span>EGP</span>
                  </v-card-title>
                  <v-card-subtitle style="font-size: 14px">
                    Per Month / Subject
                  </v-card-subtitle>
                  <v-card-text class="px-1 white">
                    <v-list tile class="text-left" light>
                      <template v-for="(item, i_i) in plan.items">
                        <v-list-item title :key="i_i + '_i'">
                          <v-list-item-avatar>
                            <v-icon large v-text="item.icon"></v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title
                              v-text="item.perc"
                            ></v-list-item-title>
                            <v-list-item-subtitle
                              v-text="item.title"
                              class="text-capitalize"
                            ></v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </template>
                    </v-list>
                  </v-card-text>
                  <v-card-actions class="white">
                    <v-btn
                      class="text-capitalize"
                      block
                      large
                      :color="plan.color"
                      dark
                    >
                      {{
                        plan.title.toLowerCase() == "free"
                          ? "Start Now"
                          : "Select Plan"
                      }}
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </template>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "five",
  data: () => ({
    plans: [
      {
        title: "Free",
        price: "0.00",
        color: "success",
        items: [
          {
            title: "Video content",
            perc: "10%",
            icon: "mdi-library-video"
          },
          {
            title: "AR content",
            perc: "5%",
            icon: "mdi-augmented-reality"
          },
          {
            title: "Not Supported.",
            perc: "Offline",
            icon: "mdi-access-point-network-off"
          }
        ]
      },
      {
        title: "Premium",
        price: "200",
        color: "primback",
        items: [
          {
            title: "Video content",
            perc: "100%",
            icon: "mdi-library-video"
          },
          {
            title: "AR content",
            perc: "100%",
            icon: "mdi-augmented-reality"
          },
          {
            title: "Download Videos for Offline Use.",
            perc: "Offline",
            icon: "mdi-access-point-network-off"
          }
        ]
      },
      {
        title: "Base",
        price: "100",
        color: "primary",
        items: [
          {
            title: "Video content",
            perc: "100%",
            icon: "mdi-library-video"
          },
          {
            title: "AR content",
            perc: "15%",
            icon: "mdi-augmented-reality"
          },
          {
            title: "Not Supported.",
            perc: "Offline",
            icon: "mdi-access-point-network-off"
          }
        ]
      }
    ]
  })
};
</script>
