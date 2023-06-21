<script lang="ts" setup>

  const { data: map } = await useFetch('/api/map')
</script>

<template>
  <header>
    <nav>
      <NuxtLink to="/">Nuxt</NuxtLink>
      <ul>
        <li v-for="(item, path) in map">
          <NuxtLink :to=item>{{ path }}</NuxtLink>
        </li>
        <li>
          <button @click="">d/l</button>
        </li>
      </ul>
    </nav>
  </header>
  <div>
    <slot />
  </div>
</template>

<style scoped></style>
