<script lang="ts" setup>
  import QrcodeVue from 'qrcode.vue'
  const { origin, pathname } = useRequestURL()

  console.log(origin, pathname.slice(-11));

  const no_off = ref(true)

  const value = ref(origin + pathname.slice(-11)),
    size = ref(250),
    // text = ref('满100减19')

    text = ref('7元饮品劵')
</script>

<template>
  <div absolute top-50% left-50% z-250 m-l--75 w-150 f-c-c flex-col class="slide ">
    <div class="bg-pop" h135 w131>
      <p text-center class="c-#f08537
      " pt-50 text-4xl font-700>{{ text }}</p>
    </div>

    <!-- <component-a v-if="v === 1" />
    <component-b v-else-if="v === 2" />
    <component-c v-else-if="v === 3" /> -->
    <!-- translate-(x--50% y--50%) -->
    <!-- <QrcodeVue :value="value" :size="size" level="H" /> -->
  </div>
</template>

<style scoped>
.bg-pop {
  background-image: url("~/assets/pop-up.png");
}

.slide {
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