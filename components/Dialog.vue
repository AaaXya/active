<script lang="ts" setup>
  const customer = useCookie('customer')
  const st = ref(false),
    bS = ref(false)

  async function state(v: string | undefined | null) {
    if (!v) {
      return
    }
    await navigateTo('/act/' + v as string)
  }
  state(customer.value)
  async function access() {
    const uid = nanoid()
    customer.value = uid
    const { data, error } = await useFetch('/api/programs', {
      query: {
        dispose: 'au'
      }
    })

    if (error.value)
      throw alert(error.value)
    state(customer.value)
  }
  function shift() {
    if (!st.value) {
      bS.value = true
      return
    }
    // access()
  }
</script>

<template>
  <div>
    <Details p5>
      <div>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto omnis, sapiente, blanditiis maxime
            nobis quas culpa nihil ex odit itaque adipisci officiis consectetur ad sit tempore! Blanditiis rem explicabo
            dolorem.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto omnis, sapiente, blanditiis maxime
            nobis quas culpa nihil ex odit itaque adipisci officiis consectetur ad sit tempore! Blanditiis rem explicabo
            dolorem.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto omnis, sapiente, blanditiis maxime
            nobis quas culpa nihil ex odit itaque adipisci officiis consectetur ad sit tempore! Blanditiis rem explicabo
            dolorem.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto omnis, sapiente, blanditiis maxime
            nobis quas culpa nihil ex odit itaque adipisci officiis consectetur ad sit tempore! Blanditiis rem explicabo
            dolorem.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto omnis, sapiente, blanditiis maxime
            nobis quas culpa nihil ex odit itaque adipisci officiis consectetur ad sit tempore! Blanditiis rem explicabo
            dolorem.</li>
          <li></li>
        </ul>
      </div>
      <div>
        <input type="checkbox" id="scales" v-model="st">
        <label for="scales">勾选同意Use Google's location service?</label>
        <button color="green-darken-1" variant="text" @click="shift">
          Agree
        </button><span v-show="bS">
          请勾选同意
        </span>
      </div>
    </Details>
  </div>
</template>

<style scoped></style>
