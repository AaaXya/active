<script lang="ts" setup>
  import QrcodeVue from 'qrcode.vue'
  const { origin, pathname } = useRequestURL()

  console.log(origin, pathname.slice(-11));

  const value = ref(origin + pathname.slice(-11)),
    size = ref(250)

</script>

<template>
  <div absolute top-50% left-50% z-250 translate-(x--50% y--50%)>
    <div>

      <img class="slide-top" src="~/assets/pop-up.png">
    </div>
    <!-- <qrcode-vue :value="value" :size="size" level="H" /> -->
  </div>
</template>

<style scoped>
.slide-top {
  animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-top {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100px);
  }
}
</style> 