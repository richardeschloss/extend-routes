import { extendPages } from '@nuxt/kit'

export default function () {
  extendPages(pages => {
    pages.push({
      name: 'myRoute',
      path: `/myRoute`,
      file: '~/some-page.js',
    })
  })
}
