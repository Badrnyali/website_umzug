<template>
  <div class="feature">
    <div class="overlay"></div>
  </div>
</template>

<style>
.feature {
  position: relative;
  background-image: url("/assets/feature.png");
  min-height: 420px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.feature .overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.957) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>