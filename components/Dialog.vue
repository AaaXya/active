<script lang="ts" setup>
  const customer = useCookie('customer')
  async function shift() {
    const uid = nanoid()
    const { data, error } = await useFetch('/api/programs', {
      query: {
        uid,
        dispose: 'au'
      }
    })

    if (error.value)
      throw alert(error.value)

    customer.value = data.value

    await navigateTo('/act/' + uid)
  }
</script>

<template>
  <div>
    <button @click="shift">
      我已阅读活动须知 确定
      Open Modal
    </button>
  </div>
</template>

<style scoped></style>
