<script lang="ts" setup>
  // import useAuth from '~/composables/useCertify';

  const customer = useCookie('customer')
  const checkbox = ref(false)
  const remind = ref(false)

  function state(v: string | undefined | null) {
    if (!v) {
      return
    }
    navigateTo(v as string)
    location.reload()
    // router.push(v as string)
  }

  state(customer.value)
  async function access() {
    try {
      const uid = nanoid(11)
      customer.value = uid


      createUser(uid)

      state(uid)
    } catch (error) {
      console.log(error);
    }
  }

  function shift() {
    if (!checkbox.value) {
      remind.value = true
    } else {
      access()
    }
  }
</script>

<template>
  <div flex-col mt2>
    <div flex flex-items-center p4>
      <input class="accent-#9b59b6" w6 h6 type="checkbox" id="scales" v-model="checkbox">
      <label c="#888" for="scales" m-2 text-5>
        您已阅读，理解并承认我们的一般使用条款<span c="#e83328" v-show="remind">*</span>
        <span v-show="remind" c="#f48100"> <!-- color="green-darken-1" -->
          请勾选按钮同意
        </span>
      </label>

    </div>
    <button class="bg-[var(--brand-primary-g)] c-c font-600 border-(none rd-4) text-size-xl p4 " variant="text"
      @click="shift()">同意并参与活动</button>
  </div>
</template>