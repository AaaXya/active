
<script lang="ts" setup>
    const { id } = defineProps(['id']),
        basal = ref(0),
        rota = computed(() => basal.value + 'turn')

    const supabase = useSupabaseClient()
    function getRandomRotate(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min) / 1000;
    }

    async function circl() {
        try {
            const { data } = await supabase
                .from('users')
                .select()
                .eq('phone', id)
            if (data && !data[0].prize_code) {

                const { data, error } = await useFetch('/api/lottery')
                const { prize, code } = unref(data)

                basal.value = 10 + (0.125 * prize - getRandomRotate(15, 110))
                console.log(basal);

                if (code) {
                    const { error } = await supabase
                        .from('users')
                        .update({ prize, prize_code: code })
                        .eq('phone', id)
                }

                //礼盒 爆开 动画 生成 二维码
            }

        } catch (error) {
            console.log(error)
        }
    }
</script>

<template>
    <Popup />
    <div f-c-c m="t20 b15">
        <div absolute>
            <img src="~/assets/x1.png">
        </div>
        <div class="b-(solid 7 rd-50% color-#d80015)
        " absolute w146 h146 z100></div>
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