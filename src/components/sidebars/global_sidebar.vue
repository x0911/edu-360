<template>
  <div>
    <v-navigation-drawer
      :right="$vuetify.lang.current == 'ar'"
      v-model="$store.state.options['drawer']"
      :temporary="!$store.state.options['fixed_sidenav']"
      app
      :mini-variant="$store.state.options['mini_variant']"
      overflow
    >
      <v-card
        tile color="transparent" flat
        height="230px"
      >
        <v-img
          width="100%"
          height="140px"
          aspect-ratio="1"
          class="align-end"
          style="overflow: visible; position: relative;"
          src=""
          gradient="to bottom, rgba(0,0,0,.05), rgba(0,0,0,.7)"
        >
          <!-- https://www.pond5.com/images/images_db/vlp/image-hero-poster.jpg -->
          <template v-slot:placeholder>
            <v-layout
              fill-height
              align-center
              justify-center
              ma-0
            >
              <v-skeleton-loader height="100%" width="100%" type="image" loading></v-skeleton-loader>
            </v-layout>
          </template>
          <div style="position: absolute; top: 5px; left: 5px;">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" large icon>
                  <v-icon>mdi-camera</v-icon>
                </v-btn>
              </template>
              <span>Edit Cover Photo</span>
            </v-tooltip>
          </div>
          <div class="text-center" style="transform: translate(0, 80px)">
            <v-hover>
              <template v-slot:default="{hover}">
                <v-avatar
                  size="80"
                  color="white"
                >
                  <v-img
                    src=""
                    style="border: 4px solid white"
                  >
                    <!-- https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToA9s3Y6-r1AO4iK79QL6hpW_6mlFDevRGvbg7Y7nc_UG2coM&s -->
                    <v-scale-transition>
                      <v-row
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out v-card--reveal"
                        style="border-radius: inherit; background: rgba(0,0,0,.6)"
                        align="center"
                        justify="center"
                      >
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <v-btn v-on="on" large icon dark>
                              <v-icon>mdi-image-edit</v-icon>
                            </v-btn>
                          </template>
                          <span>Edit Profile Photo</span>
                        </v-tooltip>
                      </v-row>
                    </v-scale-transition>
                    <template v-slot:placeholder>
                      <v-layout
                        fill-height
                        align-center
                        justify-center
                        ma-0
                      >
                        <v-skeleton-loader type="avatar" loading></v-skeleton-loader>
                      </v-layout>
                    </template>
                  </v-img>
                </v-avatar>
              </template>
            </v-hover>
            <v-list-item @click="getUdata('displayName', ' ') == ' ' ? test() : () => {}">
              <v-list-item-content>
                <v-list-item-title v-text="getUdata('displayName', 'Click to add your name')"></v-list-item-title>
                <v-list-item-subtitle v-text="`#${getUdata('uid').substr(0, 7)}...`"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-img>
      </v-card>
      <v-divider></v-divider>
      <v-list class="pt-0">
        <template v-for="(item,i) in single_items">
          <v-divider v-if="item.divider" :key="i+'_d'"></v-divider>
          <v-list-item :class="item.background" v-else color="primary" :to="item.url" exact :key="i">
            <v-list-item-avatar v-if="item.avatar.icon">
              <lot-anim renderer="svg" className="svg-grey darken-1" v-if="item.avatar.svg" style="height: 25px" :animationData="getAnim(item.avatar.icon)"></lot-anim>
              <v-icon v-text="item.avatar.icon" v-else></v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "global-sidebar",
  data: () => ({
    single_items: [
      {
        avatar: {
          svg: true,
          icon: "globe"
        },
        title: "Home",
        subtitle: "",
        url: "/"
      },
      {
        avatar: {
          svg: false,
          icon: "mdi-account-circle"
        },
        title: "Profile",
        subtitle: "",
        url: "/profile"
      },
      {
        avatar: {
          svg: false,
          icon: "mdi-bookmark"
        },
        title: "Bookmarks",
        subtitle: "",
        url: "/bookmarks"
      },
      {
        divider: true
      },
      {
        avatar: {
          svg: false,
          icon: "mdi-account-group"
        },
        title: "Friends",
        subtitle: "",
        url: "/friends"
      },
      {
        divider: true
      },
      {
        avatar: {
          svg: false,
          icon: "mdi-settings"
        },
        title: "Settings",
        subtitle: "",
        url: "/settings"
      },
      {
        avatar: {
          svg: false,
          icon: "mdi-logout"
        },
        title: "Logout",
        subtitle: "",
        url: "/logout"
      },
      {
        divider: true
      },
      {
        avatar: {
          svg: false,
          icon: "mdi-help-circle"
        },
        title: "Help Center",
        subtitle: "",
        url: "/help"
      }
    ]
  }),
  methods: {
    test() {
      console.log("Tested");
    }
  }
}
</script>