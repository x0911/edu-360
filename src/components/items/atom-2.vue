<template>
  <div>
    <div class="Atom-parent">
      <div class="Atom-container">
        <div class="Atom">
          <div class="Atom-nucleus"></div>
          <div class="Atom-orbit Atom-orbit--left Atom-orbit--visible"></div>
          <div class="Atom-orbit Atom-orbit--right Atom-orbit--visible"></div>
          <div class="Atom-orbit Atom-orbit--top Atom-orbit--visible"></div>
          <div class="Atom-orbit Atom-orbit--left Atom-orbit--foreground">
            <div class="Atom-electron"></div>
          </div>
          <div class="Atom-orbit Atom-orbit--right Atom-orbit--foreground">
            <div class="Atom-electron"></div>
          </div>
          <div class="Atom-orbit Atom-orbit--top Atom-orbit--foreground">
            <div class="Atom-electron"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$Atom-size: 250px;
$Atom-bg: #041524;
$Atom-border-width: 3px;
$Atom-border-color: #0adef3;
$Atom-padding: 50px;

$Atom-nucleus-size: 20px;
$Atom-nucleus-bg: linear-gradient(-180deg, #fad161 0%, #f99337 100%);
$Atom-nucleus-glow-radius: 8px;

$Atom-orbit-tickness: 4px;
$Atom-orbit-color: white;

$Atom-electron-radius: 8px;
$Atom-electron-border-width: 10px;
$Atom-electron-glow-radius: 4px;

$Atom-Yrotation: 73deg;
$Atom-Ztilt: 60deg;

$Atom-electrons: (
  top: (
    background: linear-gradient(-180deg, #51ecc2 0%, #45beff 100%),
    // fad161 f99337
      orbitDuration: 1.5s,
    tilt: 0deg,
    startRotation: 0deg
  ),
  left: (
    background: linear-gradient(-180deg, #51ecc2 0%, #12ccdb 100%),
    orbitDuration: 2s,
    tilt: -$Atom-Ztilt,
    startRotation: 60deg
  ),
  right: (
    background: linear-gradient(-180deg, #0adef3 0%, #45beff 100%),
    orbitDuration: 2.3s,
    tilt: $Atom-Ztilt,
    startRotation: 120deg
  )
);

@mixin circle($Atom-radius) {
  display: block;
  content: "";
  width: $Atom-radius * 2;
  height: $Atom-radius * 2;
  margin-left: -$Atom-radius;
  margin-top: -$Atom-radius;
  border-radius: 50%;
}

.Atom-parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Atom-container {
  position: relative;
  width: $Atom-size + $Atom-padding;
  height: $Atom-size + $Atom-padding;
  background: $Atom-bg;
  border-radius: 50%;
  box-shadow: 1px 4px 20px $Atom-bg;
}
.Atom {
  width: $Atom-size;
  height: $Atom-size;
  position: relative;
  // background-color: $Atom-bg;
  // border: solid $Atom-border-width $Atom-border-color;
  // border-radius: 50%;
  padding: $Atom-padding / 2;
}

.Atom-nucleus,
.Atom-nucleus:before {
  position: absolute;
  background: $Atom-nucleus-bg;
}

.Atom-nucleus {
  @include circle($Atom-nucleus-size * 0.5);
  top: $Atom-size * 0.5 + ($Atom-padding / 2);
  left: $Atom-size * 0.5 + ($Atom-padding / 2);
}

.Atom-nucleus:before {
  @include circle($Atom-nucleus-size * 0.5 + $Atom-nucleus-glow-radius);
  top: $Atom-nucleus-size * 0.5;
  left: $Atom-nucleus-size * 0.5;
  opacity: 0.15;
}

.Atom-orbit {
  position: absolute;
  width: $Atom-size;
  height: $Atom-size;
  border: solid $Atom-orbit-tickness transparent;
  transform-style: preserve-3d;
}

.Atom-orbit--visible {
  border-radius: 50%;
  border-color: $Atom-orbit-color;
}

.Atom-electron {
  transform-style: preserve-3d;

  &:before {
    @include circle($Atom-electron-radius + $Atom-electron-glow-radius);
    position: absolute;
    top: $Atom-size * 0.5;
    left: $Atom-size * 0.5;
  }

  &:after {
    @include circle($Atom-electron-radius);
    position: absolute;
    top: $Atom-size * 0.5;
    left: $Atom-size * 0.5;
    border-color: rgba(255, 255, 255, 0.4);
  }
}

@each $name, $values in $Atom-electrons {
  // tilt each orbit
  .Atom-orbit--#{$name}.Atom-orbit--visible {
    transform: rotateZ(map-get($values, "tilt")) rotateY($Atom-Yrotation);
  }

  .Atom-orbit--#{$name}.Atom-orbit--foreground {
    transform: translateZ(100px)
      rotateZ(map-get($values, "tilt"))
      rotateY($Atom-Yrotation);
  }

  $startRotation: map-get($values, "startRotation");

  // animate each electron to rotate around the orbit
  @keyframes rotate-#{$name} {
    0% {
      transform: rotate($startRotation + 0deg) translate(- $Atom-size * 0.5)
        rotate(- $startRotation - 0deg);
    }
    100% {
      transform: rotate($startRotation + 360deg) translate(- $Atom-size * 0.5)
        rotate(- $startRotation - 360deg);
    }
  }

  .Atom-orbit--#{$name} .Atom-electron {
    animation: rotate-#{$name} infinite linear;
    animation-duration: map-get($values, "orbitDuration");

    &:before,
    &:after {
      transform: rotateY(- $Atom-Yrotation) rotateZ(- map-get($values, "tilt"));
    }
    &:before {
      background: map-get($values, "background");
      opacity: 0.3;
    }
    &:after {
      background: map-get($values, "background");
    }
  }
}
</style>

<script>
export default {
  name: "atom_2"
};
</script>
