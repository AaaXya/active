<template>
    <div>
        <h1>
            {{ error.statusCode }}
        </h1>
        {{ error.massage }}
    </div>
</template>

<script lang="ts" setup>
    defineProps(['error'])
</script>

<style lang="scss"></style>