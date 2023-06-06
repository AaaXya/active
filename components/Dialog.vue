<script lang="ts" setup>

  const open = ref(true)

  function shift() {
    console.log(open.value);

    open.value = !open.value

  }
</script>

<template>
  <div>
    <button @click="shift">
      Open Modal
    </button>
    {{ open }}
  </div>
</template>

<style scoped></style>
