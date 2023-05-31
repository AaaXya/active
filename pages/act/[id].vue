<script lang="ts" setup>
  const { id } = useRoute().params
  definePageMeta({
    layout: 'act'
  })
</script>

<template>
  <div>
    Page: foo
    {{ id }}
  </div>
</template>

<style scoped></style>
