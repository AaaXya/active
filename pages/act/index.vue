<script lang="ts" setup>
    definePageMeta({
        layout: 'act'
    })

    const customer = useCookie('customer')
    async function state() {
        const v = customer.value
        if (!v) {
            return
        }
        await navigateTo('/act/' + v)
    }
    state()
</script>

<template>
    <div>
        <Dialog />

        <!-- userid:{{ id }} -->
    </div>
</template>
  
<style scoped></style>