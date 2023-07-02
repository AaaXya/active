<script lang="ts" setup>
  const { titles } = defineProps<{
    titles: string
  }>()

</script>

<template>
  <div m="t15 b10" p6 bg-white border-rd-2 relative shadow>
    <div v-if="titles" class="absolute top--6 left-50% f-c-c p2 translate-x--50% text-(2xl center) bg-brand-p-title c-c
      border-rd-33 shadow-title">
      <i w-2.5 i-akar-icons-circle-fill></i>
      <div m="l-8 r-8">{{ titles }}</div>
      <i w-2.5 i-akar-icons-circle-fill></i>
    </div>
    <div c="#333" mt-4>
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
