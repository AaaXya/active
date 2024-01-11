<script lang="ts" setup>

  const { id } = useRoute().params
  const user_id = useCookie('__id')

  const user_list = await instructions.queryList('uid', id)
  // console.log(user_list, 'list'); 

  const coding = ref(null), collection = ref(0),
    states = ref(false)
    ,
    tooltip = reactive({
      show: false,
      type: 0,
      mesg: 'test text',
    })

  function setShowTip(params: string) {
    const map = {
      close: {
        show: false,
        type: 0,
        mesg: 'test text',
      },
      accurate: {
        show: true,
        type: 1,
        mesg: 'accurate params',
      },
      error: {
        show: true,
        type: 2,
        mesg: 'error message',
      }
    }
    // map[params] 

  }

  if (!user_id.value) {
    if (user_list.total === 0) {
      navigateTo('/')
      location.reload()
    } else {
      user_id.value = user_list.documents[0].$id
    }
  } else {
    // const doc_id = user_id.value!
    const { code, integral, message } = await useGoTurntable(user_id.value)
    coding.value = code
    collection.value = integral
    console.log(code, integral, message);

    if (message === 'ok') {
      states.value = true
    }
  }

  // instructions.queryList(id)
  // instructions.findFixed(10)
</script>

<template>
  <div>
    <Transition>
      <div v-if="tooltip.show" ps class="alert">
        <p>{{ tooltip.mesg }}</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure provident non tempora dolores aliquam soluta
        libero cumque. Iure commodi voluptatibus magnam quod, exercitationem ea harum similique qui fugit aut odio?
      </div>
    </Transition>

    <Turntable :id="user_id" />
    <!-- <Suspense></Suspense> -->
    <div c-c text-center>还有 {{ states ? 1 : 0 }} 次抽奖机会</div>

    <Details titles="我的奖品">
      reward {{ coding }}
      积分兑换
    </Details>
    <Details titles="如何获取机会">
      方法Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ab accusamus voluptate, fugiat libero culpa vel
      voluptatem optio esse quis exercitationem tempora? Distinctio voluptates sit perferendis minima id a adipisci!
    </Details>
    <Details titles="活动规则说明">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ab accusamus voluptate, fugiat libero culpa vel
      voluptatem optio esse quis exercitationem tempora? Distinctio voluptates sit perferendis minima id a adipisci!
    </Details>
  </div>
</template>

<style scoped>
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
