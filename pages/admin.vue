<script lang="ts" setup>

  const getList = async () => {
    const { data, error } = await useFetch('/api/programs', {
      query: {
        dispose: 'au'
      }
    })
    console.log(data);

  }
</script>

<template>
  <div>
    <ul>
      <li></li>
    </ul>
    <button @click="getList">get</button><button>put</button><button>del</button>
  </div>
</template>

<style scoped></style>
