import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Design',
  mode: 'site',
  sass: {
    // The default value is Dart Sass. If you want to use Node Sass instead, you can install the node-sass dependency and use this configuration item
    implementation: require('node-sass'),
    // The configuration item passed to Dart Sass or Node Sass can be a Function
    sassOptions: {},
  },
  alias: {
    '@': '/src',
  },
});
