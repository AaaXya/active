
<script lang="ts" setup>
    const { id } = defineProps(['id']),
        basal = ref(0),
        rota = computed(() => basal.value + 'turn')

    const customer = useCookie('customer')
    function getRandomRotate(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min) / 1000;
    }

    async function circl() {
        try {
            const { message, code, integral } = await useGoTurntable(id)

            if (message !== 'ok') {
                //   pop create message info
                return
            }
            const text = useEncrypt(customer.value!)
            // console.log(text);
            // console.log(useDecrypt(text));

            const { data, error } = await useFetch('/api/lottery', { method: 'POST', body: { user: id, identifier: text } })
            if (!data.value) {
                //   pop create message info
                return
            }

            const { gift: index, code: code_context } = JSON.parse(useDecrypt(data.value));
            basal.value = 10 + (0.125 * index - getRandomRotate(15, 110))



            //礼盒 爆开 动画 生成 二维码

        } catch (error) {

            console.log(error)
        }
    }
</script>

<template>
    <Popup />
    <div f-c-c m="t20 b15">
        <!-- 背景底盘 -->
        <div absolute>
            <img src="~/assets/x1.png">
        </div>
        <!-- 边框 -->
        <div class="b-(solid 7 rd-50% color-#d80015)
        " absolute w146 h146 z100></div>
        <!-- 转盘 -->
        <div w160 h160 relative>
            <button @click="circl()" class=" absolute top-50% left-50% translate-(x--50% y--50%) w25 h25
                 bg-[var(--brand-primary-g)] c-c  text-size-3xl   border-(none rd-50%) z-100
             linear   ">开始</button>
            <div absolute class="cxk"></div>
            <img absolute class="ra" src="~/assets/board.svg">
        </div>
    </div>
</template>

<style scoped>
.linear {
    background: linear-gradient(#fa3c4a, #de0a1e);
}

.ra {
    transform: rotate(v-bind(rota));
    transition: all 7s ease-out .3s
}

.cxk {
    content: '';
    position: absolute;
    top: calc(50% - 120px);
    left: calc(50% - 15px);
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-bottom: 60px solid #e92033;
    z-index: 99;
}
</style>