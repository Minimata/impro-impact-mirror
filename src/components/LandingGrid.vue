<script setup lang="ts">
import NextDates from "./NextDates.vue";
import { useMouse } from "@vueuse/core";
import { computed } from "vue";

const { x, y } = useMouse();
const computedY = computed(() => {
  if (y.value < 250) {
    return 250;
  }
  if (y.value > 1150) {
    return 1150;
  }
  return y.value;
});
</script>

<template>
  <div
    class="w-full h-full grid grid-cols-[1fr_1fr_2fr_2fr_3fr_1fr] grid-rows-[1fr_2fr_2fr_2fr] grid-areas gap-0.5 overflow-hidden"
  >
    <div class="top-left-corner grid-item"></div>
    <div class="top-fill grid-item"></div>
    <div class="top-mid-fill grid-item"></div>
    <div class="top-right-corner grid-item"></div>
    <div class="left-fill grid-item"></div>
    <div class="impro grid-item flex items-end">
      <div class="mx-auto text-6xl font-thin">IMPRO</div>
    </div>
    <div class="mid-fill grid-item"></div>
    <div class="dates-title grid-item flex items-center">
      <div class="mx-auto">
        <NextDates></NextDates>
      </div>
    </div>
    <div class="right-fill grid-item"></div>
    <div class="bot-left-corner grid-item"></div>
    <div class="impact grid-item flex">
      <div class="mx-auto text-8xl font-thin">IMPACT</div>
    </div>
    <div class="bot-right-corner grid-item"></div>
    <div class="bot-left-fill grid-item"></div>
    <div class="bot-right-fill grid-item"></div>

    <div
      class="absolute bg-cyan-200 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-xl -z-50 w-48 h-48"
      :style="{
        left: `${x}px`,
        top: `${computedY}px`,
      }"
    />

    <!-- <div
      class="absolute bg-slate-900 rounded-full pointer-events-none blur-xl -z-50 w-56 h-56"
    ></div> -->

    <!-- <div>
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(17,94,89,0.1)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(17,94,89,0.05)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(17,94,89,0.02)"
          />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#115E59" /> 
        </g>
      </svg>
    </div> -->
  </div>
</template>

<style scoped>
.waves {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  z-index: -100;
  filter: blur(6px);
}
.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 30vh;
  }
  h1 {
    font-size: 24px;
  }
}

.grid-item {
  background-color: #0f1729;
  background-size: cover;
  /* border-radius: 0.125rem; */
}

.grid-areas {
  grid-template-areas:
    "top-left-corner    top-fill        top-fill        top-mid-fill    top-right-corner    top-right-corner"
    "left-fill          impro           impro           mid-fill        dates-title         right-fill"
    "bot-left-corner    impact          impact          impact          dates-title          bot-right-corner"
    "bot-left-corner    bot-left-fill   bot-left-fill   bot-left-fill   bot-right-fill      bot-right-corner";
}

.top-left-corner {
  grid-area: top-left-corner;
}

.top-fill {
  grid-area: top-fill;
}

.top-mid-fill {
  grid-area: top-mid-fill;
}

.top-right-corner {
  grid-area: top-right-corner;
}

.left-fill {
  grid-area: left-fill;
}

.impro {
  grid-area: impro;
}

.mid-fill {
  grid-area: mid-fill;
}

.dates-title {
  grid-area: dates-title;
}

.right-fill {
  grid-area: right-fill;
}

.bot-left-corner {
  grid-area: bot-left-corner;
}

.impact {
  grid-area: impact;
}

.next_dates {
  grid-area: next_dates;
}

.bot-right-corner {
  grid-area: bot-right-corner;
}

.bot-left-fill {
  grid-area: bot-left-fill;
}

.bot-right-fill {
  grid-area: bot-right-fill;
}
</style>
