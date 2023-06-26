
<script lang="ts" setup>

</script>

<template>
    <div class="xx relative">
        <div class="absolute x skew-x-18  bg-#f04">1</div>
        <div class="absolute a1 x skew-x-18 rotate-72  bg-#f40">2</div>
        <div class="absolute a2 x skew-x-18 rotate-144  bg-#04f">3</div>
        <div class="absolute a3 x skew-x-18 rotate-216 bg-#40f">4</div>
        <div class="absolute a4 x skew-x-18 rotate-288  bg-#f0f">5</div>
        <div class="fuck"> </div>
    </div>
</template>

<style scoped>
.xx {
    width: 290px;
    height: 290px;
    border-radius: 50%;
    border: #fff 5px solid;
    transition: 2s all;
    overflow: hidden;
}

.xx:hover {
    transform: rotate(720deg);
}

.fuck {
    width: 20px;
    height: 20px;
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 10px);
    background-color: #fff;
    border-radius: 50%;
    z-index: 100;
}

.x {
    width: 145px;
    height: 145px;
    top: 50%;
    left: 50%;
    transform-origin: top left;
}
</style>