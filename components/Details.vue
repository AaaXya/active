<script lang="ts" setup>
  const { titles } = defineProps<{
    titles: string
  }>()
  console.log(titles);


</script>

<template>
  <div p5 bg-white w170 border-rd-2 relative>
    <span v-if="titles" absolute top--4 left-50% p2 translate-x--50% text-(2xl center) bg-brand-p-title c-c border-rd-33
      before:title-decorate after:title-decorate><b m="l-5 r-5">
        {{ titles }}
      </b></span>
    <slot />
  </div>
</template>

<style scoped></style>
