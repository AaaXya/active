<script lang="ts" setup>

  const open = ref(true)

  async function shift() {
    console.log(open.value);

    open.value = !open.value

    const { data: res, error } = await useFetch('/api/user-id')
    if (error.value) {
      console.error(error.value);//'出现了一个预期之外的错误'
      alert(error.value)
    }

    //res会返回一个用户id码 
    //将码存在cookie里
  }
</script>

<template>
  <div>
    <button @click="shift">
      我已阅读活动须知 确定
      Open Modal
    </button>
    {{ open }}
  </div>
</template>

<style scoped></style>
