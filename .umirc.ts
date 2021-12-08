import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Design',
  mode: 'site',
  base: '/design',
  publicPath: '/design/',
  sass: {
    implementation: require('node-sass'),
    sassOptions: {},
  },
});
