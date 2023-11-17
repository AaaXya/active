<script lang="ts" setup>
  const { id } = useRoute().params
  const user_id = useCookie('__id')
  // const temp = await useFetch('/api/userdata', {
  //   query: {
  //     id
  //   }
  // })
  // instructions.createUser(id)
  console.log(user_id);

  const user_list = await instructions.querySelectAttribute('uid', id)
  if (!user_id || user_list.total === 0) {

    navigateTo('/')
    location.reload()
  }

  const doc_id = user_id.value!
  instructions.queryList(doc_id)
  // instructions.queryList(id)
  // instructions.findFixed(10)
</script>

<template>
  <div>
    <Turntable :id="id" />
    <nuxt-link to="" c-c>点我查看奖品</nuxt-link>
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
