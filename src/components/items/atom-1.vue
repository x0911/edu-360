<template>
  <div>
    <div class="svg-container">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 400 400"
        enable-background="new 0 0 400 400"
        xml:space="preserve"
      >
        <circle fill="#041524" cx="200" cy="200" r="139" />
        <path
          class="atom-1"
          fill="none"
          stroke="#FFFFFF"
          stroke-width="8"
          stroke-miterlimit="10"
          d="M231.7,200c0,17.4-1.7,88-31.7,88
        s-31.7-70.6-31.7-88s1.7-88,31.7-88S231.7,182.6,231.7,200z"
        />
        <circle class="circle-1" fill="#F04F4D" cx="0" cy="0" r="7.3" />
        <path
          class="atom-2"
          fill="none"
          stroke="#FFFFFF"
          stroke-width="8"
          stroke-miterlimit="10"
          d="M216.1,227.7c-15,8.9-76.6,43.4-91.9,17.6
        s44.6-63.2,59.6-72.1s76.6-43.4,91.9-17.6S231.1,218.8,216.1,227.7z"
        />
        <circle class="circle-2" fill="#F04F4D" cx="0" cy="0" r="7.3" />
        <path
          class="atom-3"
          fill="none"
          stroke="#FFFFFF"
          stroke-width="8"
          stroke-miterlimit="10"
          d="M183.9,227.7c15,8.9,76.6,43.4,91.9,17.6
        s-44.6-63.2-59.6-72.1s-76.6-43.4-91.9-17.6S168.9,218.8,183.9,227.7z"
        />
        <circle class="circle-3" fill="#F04F4D" cx="0" cy="0" r="7.3" />
        <circle fill="#1976D2" cx="200" cy="202.5" r="16" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.svg-container {
  svg {
    .circle-1 {
      box-shadow: 2px 4px 8px black;
    }
  }
}

[class^="circle-"] {
  opacity: 0;
}
</style>

<script>
export default {
  name: "atom_1",
  data: () => ({})
};
</script>
