<template>
  <div>
    <com-hero></com-hero>
    <com-topnav></com-topnav>
    <div class="content-container">
      <v-img class="content-background" :src="require('@/assets/pages/no-auth-landing/com-back.svg')"></v-img>
      <com-one class="mb-12 pt-12 z-index-1"></com-one>
      <com-two class="mb-12 mt-12 z-index-1"></com-two>
      <com-three class="mb-12 mt-12 z-index-1"></com-three>
    </div>
    <!-- <in-divider class="z-index-1"></in-divider> -->
    <div class="content-container white">
      <com-four class="mb-12 pt-12 z-index-1"></com-four>
    </div>
    <div class="content-container white">
      <v-img class="content-background" :src="require('@/assets/pages/no-auth-landing/com-back.svg')"></v-img>
    </div>
    <com-footer></com-footer>
  </div>
</template>

<style lang="scss" scoped>
  .content-container {
    position: relative;
    overflow: hidden;
    .content-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
</style>

<script>
export default {
  name: "no_auth_landing",
  components: {
    InDivider: () => import("@/components/items/in-divider.vue"),
    ComHero: () => import("@/components/no_auth/sub/hero.vue"),
    ComTopnav: () => import("@/components/no_auth/sub/topnav.vue"),
    ComOne: () => import("@/components/no_auth/sub/one.vue"),
    ComTwo: () => import("@/components/no_auth/sub/two.vue"),
    ComThree: () => import("@/components/no_auth/sub/three.vue"),
    ComFour: () => import("@/components/no_auth/sub/four.vue"),
    ComFooter: () => import("@/components/no_auth/sub/footer.vue"),
  },
  data: () => ({
    
  }),
  methods: {
    
  }
};
</script>
