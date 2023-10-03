<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-overlay bg-opacity-60"></div>
    <div
      class="text-center text-neutral-content p-0 pt-20 h-full wide-grid bg-slate-100"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.wide-grid {
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}
</style>
