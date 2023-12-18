  
<script lang="ts" setup>
    const { show, message } = defineProps(['show', 'message'])


</script>
<template>
    <Transition>
        <div v-if="show" ps class="alert">
            <p>{{ message }}</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure provident non tempora dolores aliquam soluta
            libero cumque. Iure commodi voluptatibus magnam quod, exercitationem ea harum similique qui fugit aut odio?
        </div>
    </Transition>
</template>

<style>
.alert {
    background-color: #ffcccc;
    padding: 10px;
    top: 50%;
    border: 1px solid #ff0000;
    border-radius: 4px;
    z-index: 200;
}

.success-tooltip {
    position: absolute;
    background-color: #ccffcc;
    color: #008000;
    padding: 8px 12px;
    border: 1px solid #008000;
    border-radius: 50%;
    z-index: 200;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.success-tooltip::before {
    content: '';
    position: absolute;
    border-width: 6px;
    border-style: solid;
    border-color: transparent #ccffcc transparent transparent;
    top: 50%;
    right: 100%;
    transform: translateY(-50%);
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
  