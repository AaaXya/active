  
<script lang="ts" setup>
    const { show, message } = defineProps(['show', 'message'])


</script>
<template>
    <Transition>
        <div v-if="show" ps class="alert">
            <p>{{ message }}</p>
        </div>
    </Transition>
</template>

<style>
.alert {
    background-color: #ffcccc;
    padding: 10px;
    border: 1px solid #ff0000;
    border-radius: 4px;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
  