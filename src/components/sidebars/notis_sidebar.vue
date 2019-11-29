<template>
  <div>
    <v-navigation-drawer
      :right="$vuetify.lang.current == 'en'"
      v-model="$store.state.noti_options['drawer']"
      :temporary="!$store.state.noti_options['fixed_sidenav']"
      app
      :mini-variant="$store.state.noti_options['mini_variant']"
      overflow
      width="450"
      class="notis-sidebar"
    >
      <v-card
        tile flat
      >
        <v-card-title class="break-word pb-0 grey lighten-3">
          <v-row>
            <v-col>
              Notifications
            </v-col>
            <v-col cols="auto">
              <v-btn @click="$store.state.noti_options['drawer'] = false" icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>
      </v-card>
      <!-- <v-divider></v-divider> -->
      <v-list>
        <template v-for="(item,i) in notifications">
          <v-skeleton-loader 
            v-if="item.loader"
            loading 
            :key="i+'_l'"
            type="list-item-avatar-three-line"
          ></v-skeleton-loader>
          <v-list-item v-else :class="[!item.done ? colors[item.color].avatar + '5' : '', 'wrap']" color="primary" :to="item.url" exact :key="i">
            <v-list-item-avatar :color="colors[item.color] ? (!item.done ? colors[item.color].avatar + '4' : colors[item.color].avatar + '5') : 'grey lighten-3'" size="45" v-if="item.avatar.icon">
              <lot-anim 
                renderer="svg" 
                :class="[`svg-${colors[item.color] ? colors[item.color].icon : ''}`, item.avatar.stroke ? `stroke-${item.avatar.stroke}` : '']"
                style="height: 25px" 
                v-if="item.avatar.svg" 
                :animationData="getAnim(item.avatar.icon)">
              </lot-anim>
              <v-icon v-text="item.avatar.icon" :color="colors[item.color] ? colors[item.color].icon : ''" v-else></v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle>{{item.subtitle | subtitle_filter(item.system)}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action-text v-text="item.time"></v-list-item-action-text>
          </v-list-item>
          <v-divider :key="i+'_d'"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "notis-sidebar",
  data: () => ({
    colors: {
      primary: {
        avatar: "blue lighten-",
        icon: "primary"
      },
      error: {
        avatar: "error lighten-",
        icon: "error"
      },
      success: {
        avatar: "success lighten-",
        icon: "success"
      },
      warning: {
        avatar: "warning lighten-",
        icon: "warning darken-1"
      },
      purple: {
        avatar: "purple lighten-",
        icon: "purple"
      }
    },
    notifications: [
      {
        avatar: {
          svg: true,
          icon: "heart",
          stroke: "4"
        },
        title: "Friend Request",
        subtitle: "Jory Elmasry sent you a friend request. Click to respond.",
        color: "primary",
        time: "9m"
      },
      {
        avatar: {
          svg: true,
          icon: "upload",
          stroke: "4"
        },
        title: "Video Uploaded",
        subtitle: `Shimaa Mohamed uploaded a new video "How to deal with protons?".`,
        color: "purple",
        time: "3h"
      },
      {
        loader: true
      },
      {
        loader: true
      },
      {
        avatar: {
          svg: true,
          icon: "warning-blink",
          stroke: "4"
        },
        title: "Subscription Renewal Needed",
        subtitle: `We wish you don't miss any expreience. You still can access and complete your running tournaments.`,
        color: "error",
        time: "17h",
        system: true
      },
      {
        loader: true
      },
      {
        avatar: {
          svg: true,
          icon: "hand-peace",
          stroke: "4"
        },
        title: "Path Complete!",
        subtitle: `Congratulations. You have managed to complete the "Pharmacology Path".`,
        color: "success",
        time: "23h"
      },
      {
        avatar: {
          svg: true,
          icon: "gift",
          stroke: "4"
        },
        title: "Won a Gift!",
        subtitle: `It's your lucky day. Dr. Ahmed Hassan gifted you a 4.6 ranked video.`,
        color: "warning",
        time: "13d"
      },
    ]
  }),
  filters: {
    subtitle_filter(v, system) {
      let len = 75;
      return v.length > len && !system ? v.substr(0, len) + ' ...' : v;
    }
  },
  methods: {
    
  }
}
</script>