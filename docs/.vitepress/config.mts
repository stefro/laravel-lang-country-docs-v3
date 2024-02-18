import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Laravel LangCountry V3",
  description: "The localisation package for auto date-formats, language switcher helper and more.",
  lastUpdated: true,
  base: '/laravel-lang-country-docs-v3',
  themeConfig: {
    logo: 'logo.svg',
    nav: [
      {
        text: 'Version 3 (legacy)',
        items: [
          {
            text: 'Latest version',
            link: 'https://stefro.github.io/laravel-lang-country/'
          }
        ]
      },
    ],

    sidebar: [
      {
        text: '<div class="danger custom-block"><p class="custom-block-title">Legacy</p><p>This documentation is for version 3.x and is no longer maintained. <br> Please visit <a href="https://stefro.github.io/laravel-lang-country/" target="_blank" rel="noreferrer">the new documentation</a> for the latest version.</p></div>',
        link: 'https://stefro.github.io/laravel-lang-country/'
      },
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          {text: 'Introduction', link: '/'},
          {text: 'Installation', link: '/getting-started/installation'},
          {text: 'Change log', link: '/getting-started/changelog'},
          {text: 'Upgrade guide', link: '/getting-started/upgrade'},
        ]
      }, {
        text: 'Usage',
        collapsed: false,
        items: [
          {text: 'Configuration', link: '/usage/configuration'},
          {text: 'Language switcher', link: '/usage/language-switcher'},
          {text: 'Middleware', link: '/usage/middleware'},
          {text: 'Date/time helpers', link: '/usage/date-time'},
          {text: 'Language helpers', link: '/usage/language'},
          {text: 'Currency helpers', link: '/usage/currency'},
          {text: 'Overrides', link: '/usage/override'},
        ]
      }, {
        text: 'Contribute',
        collapsed: true,
        items: [
          {text: 'How can you help?', link: 'contribute/country-info'},
          {text: 'Contribution', link: 'contribute/contribution'}
        ]
      }
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/stefro/laravel-lang-country'}
    ],
    search: {
      provider: 'local'
    }
  },
  head: [
    [
      'script',
      {async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-ZNPSG44PGL'}
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZNPSG44PGL');`
    ]
  ]
})
