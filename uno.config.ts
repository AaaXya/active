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
                background: 'linear-gradient(#f23667, #f927c9)',
            },
        ],
        [
            'card-shadow',
            {
                'box-shadow':
                    '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017',
            },
        ],
    ],
    preflights: [
        {
            getCSS: ({ theme }) => `
            * {
              color: ${theme.colors.gray?.[700] ?? '#333'};
              padding: 0;
              margin: 0;
            }
            :root{
                --brand-primary-light:#f23667;
                }
                .dark {
                    background: #222;
                    color: #fff
                }
          `,
        },
    ],
    theme: {
        colors: {
            bgMotify: 'linear-gradient(#f23667, #f927c9)',
            brand: {
                primary: {
                    light: '#f23667',
                    dark: '#f927c9',
                }, //class="bg-brand-primary"
            },
            //     primary: 'var(--primary-color)',
            //     dark_bg: 'var(--dark-bg)',
        },
    },
    transformers: [transformerDirectives(), transformerVariantGroup()],
})
