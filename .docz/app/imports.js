export const imports = {
  'index.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.md'),
  'src/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'
    ),
}
