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
        [/^bc-(.+)$/, ([, color]) => ({ 'border-color': `#${color}` })],
        [
            'card-shadow',
            {
                'box-shadow':
                    '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017',
            },
        ],
    ],
    theme: {
        colors: {
            veryCool: '#0000ff', // class="text-very-cool"
            brand: {
                primary: 'hsla(var(--hue, 217), 78%, 51%)', //class="bg-brand-primary"
            },
            //     primary: 'var(--primary-color)',
            //     dark_bg: 'var(--dark-bg)',
        },
    },
    transformers: [transformerDirectives(), transformerVariantGroup()],
})
