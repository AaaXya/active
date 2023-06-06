<script lang="ts" setup>
    definePageMeta({
        layout: 'act'
    })
    const customer = useCookie('customer')
    // let condition = false
    function alertDialog() {
        // condition = true
        console.log('弹出 详情');

    }
    console.log(customer);
    function verifyUsers() {
        if (!customer.value) {
            alertDialog()

        } else {
            //go activity
            console.log('go to activity page');

        }

    }
    onMounted(() => {
        verifyUsers()
    })

</script>

<template>
    <div>
        <h2>Act</h2>
        <Dialog />

        <!-- userid:{{ id }} -->
    </div>
</template>
  
<style scoped></style>