<template>
  <div class="atom-container">
    <div class="atom-background">
      <div class="atom-loader">
        <div class="atom-inner atom-one"></div>
        <div class="atom-inner atom-two"></div>
        <div class="atom-inner atom-three"></div>
        <div class="atom-inner atom-four"></div>
        <div class="atom-inner atom-center-one"></div>
        <div class="atom-inner atom-center-two"></div>
        <div class="atom-inner atom-center-three"></div>
        <div class="atom-inner atom-center-four"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// vars
$atom-center-size: 20px;
.atom-container {
  display: flex;
  justify-content: center;
  align-items: center;
  .atom-background {
    position: relative;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: #041524;
    padding-top: 45px;
    box-shadow: 1px 4px 20px #041524;
  }
}
.atom-loader {
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  perspective: 600;
  margin: auto auto;
  box-shadow: inset 0 0 80px rgba(255, 255, 255, 0.26),
    0 0 80px rgba(255, 255, 255, 0.2);
}

.atom-inner {
  position: absolute;
  width: 110%;
  height: 110%;
  box-sizing: border-box;
  border-radius: 50%;
  transform-style: preserve-3d;

  &.atom-one {
    left: 0%;
    top: 0%;
    animation: atom-rotate-one 1.35s linear infinite;
    border-bottom: 0px dotted aqua;
    border-top: 0px dotted aqua;
    border-left: 4px dotted #b2cedd;
    border-right: 4px dotted #b2cedd;
    width: 100%;
    height: 100%;
  }

  &.atom-two {
    right: 0%;
    top: 0%;
    animation: atom-rotate-two 1.35s linear infinite;
    border-bottom: 4px dotted #b2cedd;
    border-top: 4px dotted #b2cedd;
    border-left: 0px dotted aqua;
    border-right: 0px dotted aqua;
  }

  &.atom-three {
    right: 0%;
    bottom: 0%;
    animation: atom-rotate-three 1.35s linear infinite;
    border-bottom: 4px dotted #b2cedd;
    border-top: 4px dotted #b2cedd;
    border-left: 0px dotted aqua;
    border-right: 0px dotted aqua;
    transform: translateY(-50%);
  }

  &.atom-four {
    right: 0%;
    bottom: 0%;
    animation: atom-rotate-four 1.45s linear infinite;
    border-bottom: 0px dotted red;
    border-top: 0px dotted red;
    border-left: 4px dotted #b2cedd;
    border-right: 4px dotted #b2cedd;
  }

  &.atom-center-one {
    left: 40%;
    top: 50%;
    width: $atom-center-size;
    height: $atom-center-size;
    background: radial-gradient(
      circle at 30% 100%,
      rgba(255, 255, 255, 0.49) 0%,
      rgba(255, 255, 255, 0.05) 34.8%,
      rgba(255, 255, 255, 0.2) 100%
    );
    animation: center-rotate-one 1.15s linear infinite;
  }

  &.atom-center-two {
    left: 40%;
    top: 50%;
    width: $atom-center-size;
    height: $atom-center-size;
    background: radial-gradient(
      circle at 30% 100%,
      rgba(255, 255, 255, 0.49) 0%,
      rgba(255, 255, 255, 0.05) 34.8%,
      rgba(255, 255, 255, 0.2) 100%
    );
    animation: center-rotate-one 1.35s linear infinite;
  }

  &.atom-center-three {
    left: 40%;
    top: 50%;
    width: $atom-center-size;
    height: $atom-center-size;
    background: radial-gradient(
      circle at 30% 100%,
      rgba(255, 255, 255, 0.49) 0%,
      rgba(255, 255, 255, 0.05) 34.8%,
      rgba(255, 255, 255, 0.2) 100%
    );
    animation: center-rotate-one 1.25s linear infinite;
  }

  &.atom-center-four {
    left: 40%;
    top: 50%;
    width: $atom-center-size;
    height: $atom-center-size;
    background: radial-gradient(
      circle at 30% 100%,
      rgba(255, 255, 255, 0.49) 0%,
      rgba(255, 255, 255, 0.05) 34.8%,
      rgba(255, 255, 255, 0.2) 100%
    );
    animation: center-rotate-one 1.45s linear infinite;
  }
}

@keyframes atom-rotate-one {
  0% {
    transform: rotateX(60deg) rotateY(-50deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(60deg) rotateY(-50deg) rotateZ(360deg);
  }
}

@keyframes atom-rotate-two {
  0% {
    transform: rotateX(120deg) rotateY(30deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(120deg) rotateY(30deg) rotateZ(360deg);
  }
}

@keyframes atom-rotate-three {
  0% {
    transform: rotateX(70deg) rotateY(-20deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(70deg) rotateY(-20deg) rotateZ(360deg);
  }
}

@keyframes atom-rotate-four {
  0% {
    transform: rotateX(120deg) rotateY(60deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(120deg) rotateY(60deg) rotateZ(360deg);
  }
}

@keyframes center-rotate-one {
  0% {
    transform: rotateZ(0deg);
    transform-origin: calc(45% + 1em) calc(45% - 1em);
  }

  100% {
    transform: rotateZ(360deg);
    transform-origin: calc(45% + 1em) calc(45% - 1em);
  }
}
</style>

<script>
export default {
  name: "atom_3"
};
</script>
