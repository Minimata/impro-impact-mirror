<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div
    class="hero min-h-screen"
    style="background-image: url(/trashquiz/backgrounds/landing_water1.jpg)"
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <slot />
    </div>
  </div>
</template>
