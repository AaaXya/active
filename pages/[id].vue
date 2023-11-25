<script lang="ts" setup>
  import { title } from 'process';

  const { id } = useRoute().params
  const user_id = useCookie('__id')

  const user_list = await instructions.queryList('uid', id)
  // console.log(user_list, 'list');


  const coding = ref(null), collection = ref(0), states = ref(false)

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
    <Tooltip :show="true" :message="'test title'"></Tooltip>
    <Turntable :id="user_id" />
    <div c-c text-center>还有 {{ states ? 1 : 0 }} 次抽奖机会</div>
    <Details titles="我的奖品">
      position layout {{ coding }}
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

<style scoped></style>
