import {
    defineConfig,
    presetAttributify,
    presetUno,
    presetIcons,
    transformerDirectives,
    transformerVariantGroup,
    presetWebFonts,
} from 'unocss'

export default defineConfig({
    // ...UnoCSS options
    presets: [
        presetUno(),
        presetAttributify(),
        presetWebFonts({
            // fonts: {
            //     sans: 'DM Sans',
            //     serif: 'DM Serif Display',
            //     mono: 'DM Mono',
            // },
            provider: 'fontshare',
        }),
        presetIcons({ scale: 1.2, warn: true }),
    ],
    shortcuts: [
        ['wh-full', 'w-full h-full'],
        ['f-c-c', 'flex justify-center items-center'],
        ['flex-col', 'flex flex-col'],
        ['text-ellipsis', 'truncate'],

        [
            'btn',
            'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 ',
        ],
        // opacity-75 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50
        [
            'icon-btn',
            'inline-block cursor-pointer select-none transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
        ],
    ],
    rules: [
        [/^accent-(.+)$/, ([, color]) => ({ 'accent-color': `${color}` })],
        [/^bc-(.+)$/, ([, color]) => ({ 'border-color': `${color}` })],
        [
            'motify',
            {
                background: 'linear-gradient(var(--brand-primary-l),var(--brand-primary-k))',
            },
        ],
        [
            'shadow-title',
            {
                'box-shadow': '0 4px #ff445288',
            },
        ],
    ],
    preflights: [
        {
            //   color: ${theme.colors.gray?.[700] ?? '#333'};
            getCSS: ({ theme }) => `
            * {
              padding: 0;
              margin: 0;
            }
            :root{
                --brand-primary-l:#f23667;
                --brand-primary-k:#f927c9;
                --brand-primary-j:#f229d1;
                --brand-primary-h:#f2359d;
                --brand-primary-g:#f2b705;
                --brand-primary-f:#f24452;
            }
          `,
        },
    ],
    theme: {
        colors: {
            c: '#fff',
            tb: {
                deep: '#fffbdb',
                border: '#d60115',
            },
            brand: {
                p: {
                    title: '#ff4452', //class="bg-brand-primary"
                },
            },
            //     primary: 'var(--primary-color)',
            //     dark_bg: 'var(--dark-bg)',
        },
    },
    transformers: [transformerDirectives(), transformerVariantGroup()],
})
