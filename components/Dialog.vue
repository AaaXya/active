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
    } else {

      // access()
    }
  }
</script>

<template>
  <div class="c-#333 card-shadow">
    <Details titles="活动规则说明">
      <div>
        <ul list-none>
          <li>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto omnis, sapiente, blanditiis maxime
            nobis quas culpa nihil ex odit itaque adipisci officiis consectetur ad sit tempore! Blanditiis rem explicabo
            dolorem.
          </li>
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
        <input class="accent-#9b59b6" type="checkbox" id="scales" v-model="st">
        <label class="c-#888" for="scales">

          我已阅读以上条款
        </label>
        <button class="bg-[var(--brand-primary-j)] border-(none rd-4) text-4 p4" variant="text" @click="shift">
          参与活动
        </button>
        <span v-show="bS"> <!-- color="green-darken-1" -->
          请勾选同意
        </span>
      </div>
    </Details>
  </div>
</template>