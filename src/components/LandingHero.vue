<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="text-center text-neutral-content p-0 h-full wide-grid bg-color">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.bg-color {
  background-color: #0f1729;
}

.wide-grid {
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}
</style>
