<script lang="ts" setup>
  const { id } = useRoute().params
  const user_id = useCookie('__id')

  const user_list = await instructions.queryList('uid', id)
  // console.log(user_list, 'list');

  if (!user_id.value) {
    if (user_list.total === 0) {
      navigateTo('/')
      location.reload()
    } else {
      user_id.value = user_list.documents[0].$id
    }
  } else {
    // const doc_id = user_id.value!
    useGoTurntable(user_id.value)
  }

  // instructions.queryList(id)
  // instructions.findFixed(10)
</script>

<template>
  <div>
    <Turntable :id="user_id" />
    <nuxt-link to="/" c-c>查看我的奖品</nuxt-link>
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
