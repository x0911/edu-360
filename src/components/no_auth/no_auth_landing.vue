<template>
  <div>
    <com-hero></com-hero>
  </div>
</template>


<script>
export default {
  name: "no_auth_landing",
  components: {
    ComHero: () => import("@/components/no_auth/sub/hero.vue")
  },
  data: () => ({})
};
</script>
