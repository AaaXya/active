<script lang="ts" setup>
  const { titles } = defineProps<{
    titles: string
  }>()


</script>

<template>
  <div p5 bg-white w170 border-rd-2 relative shadow>
    <div v-if="titles" absolute top--8 left-50% f-c-c p2 translate-x--50% text-(2xl center) bg-brand-p-title c-c
      border-rd-33 class="shadow-title">
      <div w-2.5 i-akar-icons-circle-fill></div>
      <div m="l-8 r-8">{{ titles }}</div>
      <div w-2.5 i-akar-icons-circle-fill></div>
    </div>
    <slot />
  </div>
</template>

<style scoped></style>
