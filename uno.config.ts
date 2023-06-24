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
        presetWebFonts({ provider: 'fontshare' }),
        presetIcons({ scale: 1.2, warn: true }),
    ],
    shortcuts: [
        ['wh-full', 'w-full h-full'],
        ['f-c-c', 'flex justify-center items-center'],
        ['flex-col', 'flex flex-col'],
        ['text-ellipsis', 'truncate'],
        [
            'icon-btn',
            'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
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
            'card-shadow',
            {
                'box-shadow':
                    '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017',
            },
        ],
        [
            'title-decorate',
            {
                content: '"●"',
                display: 'inline-block',
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
