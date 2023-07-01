<script lang="ts" setup>
  const { id } = useRoute().params
  definePageMeta({
    layout: 'act'
  })
</script>

<template>
  <div>
    <Turntable :id="id" />
    <nuxt-link to="">look me</nuxt-link>
    <Details titles="如何获取机会">
      方法Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ab accusamus voluptate, fugiat libero culpa vel
      voluptatem optio esse quis exercitationem tempora? Distinctio voluptates sit perferendis minima id a adipisci!
    </Details>
    <Details titles="活动规则说明">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ab accusamus voluptate, fugiat libero culpa vel
      voluptatem optio esse quis exercitationem tempora? Distinctio voluptates sit perferendis minima id a adipisci!
    </Details>
  </div>
</template>

<style scoped></style>
