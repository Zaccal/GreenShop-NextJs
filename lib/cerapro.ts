import localFont from 'next/font/local'

const cerapro = localFont({
  src: [
    {
      path: '../public/fonts/cerapro/woff2/Fontspring-DEMO-cerapro-thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/cerapro/woff2/Fontspring-DEMO-cerapro-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/cerapro/woff2/Fontspring-DEMO-cerapro-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/cerapro/woff2/Fontspring-DEMO-cerapro-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/cerapro/woff2/Fontspring-DEMO-cerapro-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/cerapro/woff2/Fontspring-DEMO-cerapro-black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-cerapro',
  fallback: ['Arial', 'sans-serif'],
})

const ceraproItalic = localFont({
  src: [
    {
      path: '../public/fonts/cerapro/woff2/Fontspring-DEMO-cerapro-thinitalic.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/cerapro/woff2/Fontspring-DEMO-cerapro-blackitalic.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/cerapro/woff2/Fontspring-DEMO-cerapro-bolditalic.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/cerapro/woff2/Fontspring-DEMO-cerapro-mediumitalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/cerapro/woff2/Fontspring-DEMO-cerapro-regularitalic.woff2',
      weight: '400',
      style: 'itlaic',
    },
    {
      path: '../public/fonts/cerapro/woff2/Fontspring-DEMO-cerapro-lightitalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/cerapro/woff2/Fontspring-DEMO-cerapro-thinitalic.woff2',
      weight: '100',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-cerapro-italic',
  fallback: ['sans-serif'],
})

export { cerapro, ceraproItalic }
