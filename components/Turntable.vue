
<script lang="ts" setup>
    const { id } = defineProps(['id']),
        basal = ref(0),
        rota = computed(() => basal.value + 'turn'),

        text = ref('')

    const customer = useCookie('customer')
    // const pop = useState('PopIsDisplayed', () => true)
    const pop = ref(false)

    const { message, code, integral } = await useGoTurntable(id)


    // const { origin, pathname } = useRequestURL()

    // console.log(origin, pathname.slice(-11));
    // const show = false, text = ''

    // const value = ref(origin + pathname.slice(-11)),
    //   size = ref(250)


    function toggle() {
        pop.value = !pop.value
    }


    async function circl() {
        try {
            basal.value = 3

            if (message !== 'ok') {
                //   pop create message info
                return
            }
            const content_text = useEncrypt(customer.value!)
            // console.log(text);
            // console.log(useDecrypt(text));
            const { data, error } = await useFetch('/api/lottery', { method: 'POST', body: { user: id, identifier: content_text } })
            if (!data.value) {
                //   pop create message info
                return
            }

            const { gift: index, code: code_context } = JSON.parse(useDecrypt(data.value));
            basal.value = 10 + (0.125 * index - getRandomRotate(15, 110))



            //礼盒 爆开 动画 生成 二维码

            const transmit = useReflect(index)
            text.value = transmit.text

            setTimeout(() => {
                pop.value = true
            }, 7000)

        } catch (error) {

            console.log(error)
        }
    }
</script>

<template>
    <Transition name="bounce">
        <div v-if="pop" @click="toggle()" absolute top-50% left-50% z-250 m-l--75 w-150 f-c-c flex-col>
            <div class="bg-pop" h135 w131>
                <p text-center class="c-#f08537
      " pt-50 text-4xl font-700>{{ text }}</p>
            </div>

            <!-- translate-(x--50% y--50%) -->
            <!-- <QrcodeVue :value="value" :size="size" level="H" /> -->
        </div>
    </Transition>
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
            <img absolute top-.6 left-.8 h158 w158 class="ra" src="~/assets/board.svg">
        </div>
    </div>
</template>

<style scoped>
.linear {
    background: linear-gradient(#fa3c4a, #de0a1e);
}

.ra {
    transition: all 7s ease-out;
    transform: rotate(v-bind(rota));
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

.bg-pop {
    background-image: url("~/assets/pop-up.png");
}

.bounce-enter-active {
    animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.bounce-leave-active {
    animation: slide-top 0.5s reverse;
}

@keyframes slide-top {
    0% {
        transform: translateY(0), scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: translateY(-100px), scale(1);
    }
}
</style>