import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslint from 'vite-plugin-eslint';
import legacy from '@vitejs/plugin-legacy';
// import { visualizer } from 'rollup-plugin-visualizer'; // 打包内容分析
import IBizVitePlugin from './vite-plugins/ibiz-vite-plugin';

/**
 * 判断是否为自定义标签
 *
 * @author chitanda
 * @date 2023-01-03 16:01:00
 * @param {string} tag
 * @return {*}  {boolean}
 */
function isCustomElement(tag: string): boolean {
  return tag.startsWith('ion-');
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    entries: [
      '@floating-ui/dom',
      '@ibiz-template/core',
      '@ibiz-template/model-helper',
      '@ibiz-template/runtime',
      '@ibiz-template/them',
      '@ibiz-template/vue3-components',
      '@ibiz-template/vue3-util',
      '@ibiz-template/web-theme',
      '@ibiz/model-core',
      '@ibiz-template/devtool',
      '@imengyu/vue3-context-menu',
      '@monaco-editor/loader',
      '@wangeditor/editor',
      '@wangeditor/editor-for-vue',
      'async-validator',
      'cherry-markdown',
      'dayjs',
      'echarts',
      'element-plus',
      'file-saver',
      'lodash-es',
      'monaco-editor',
      'nprogress',
      'path-browserify',
      'vue-grid-layout',
      'pinia',
      'qs',
      'qx-util',
      'ramda',
      'vue',
      'vue-i18n',
      'vue-router',
      'vue-grid-layout',
      'vue-text-format',
      'vuedraggable',
      'xlsx',
      'interactjs',
      'mqtt/dist/mqtt.min',
      '@ibiz-template-plugin/ai-chat',
      '@antv/x6',
      '@antv/x6-plugin-clipboard',
      '@antv/x6-plugin-dnd',
      '@antv/x6-plugin-export',
      '@antv/x6-plugin-history',
      '@antv/x6-plugin-keyboard',
      '@antv/x6-plugin-minimap',
      '@antv/x6-plugin-scroller',
      '@antv/x6-plugin-selection',
      '@antv/x6-plugin-snapline',
      '@antv/x6-plugin-stencil',
    ],
  },
  build: {
    rollupOptions: {
      external: [
        'vue',
        'vue-router',
        'vue-i18n',
        'element-plus',
        'async-validator',
        'dayjs',
        'interactjs',
        'echarts',
        'axios',
        'qs',
        'ramda',
        'lodash-es',
        'qx-util',
        'vuedraggable',
        'pinia',
        'mqtt/dist/mqtt.min',
        '@floating-ui/dom',
        'vue-grid-layout',
        '@imengyu/vue3-context-menu',
        '@wangeditor/editor',
        '@wangeditor/editor-for-vue',
        '@ibiz-template/core',
        '@ibiz-template/runtime',
        '@ibiz-template/vue3-util',
        '@ibiz-template/model-helper',
        '@ibiz-template/vue3-components',
        '@ibiz-template-plugin/ai-chat',
        '@ibiz-template/web-theme',
        '@ibiz-template/devtool',
        '@antv/x6',
        'cherry-markdown',
        '@antv/x6',
        '@antv/x6-plugin-clipboard',
        '@antv/x6-plugin-dnd',
        '@antv/x6-plugin-export',
        '@antv/x6-plugin-history',
        '@antv/x6-plugin-keyboard',
        '@antv/x6-plugin-minimap',
        '@antv/x6-plugin-scroller',
        '@antv/x6-plugin-selection',
        '@antv/x6-plugin-snapline',
        '@antv/x6-plugin-stencil',
      ],
    },
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api/gsmgmt__gsweb': {
        target: 'http://172.16.103.158:30062',
        rewrite(path) {
          return path.replace('/api', '');
        },
        changeOrigin: true,
      },
      '/api/pms__sclpmswebapp': {
        target: 'http://172.16.103.158:30061',
        rewrite(path) {
          return path.replace('/api', '');
        },
        changeOrigin: true,
      },
      '/api/pms__portalwebapp': {
        target: 'http://172.16.103.158:30060',
        rewrite(path) {
          return path.replace('/api', '');
        },
        changeOrigin: true,
      },
      '/api/sztrainsys__web/portal/mqtt/mqtt': {
        rewrite(path) {
          return path.replace('/api', '');
        },
        target: 'ws://172.16.240.140:20086',
        changeOrigin: true,
      },
      '/api/sztrainsys__web': {
        rewrite(path) {
          return path.replace('/api', '');
        },
        target: 'http://172.16.240.140:20086',
        changeOrigin: true,
      },
      '/api/qdehr__qdehrapp/portal/mqtt/mqtt': {
        target: 'ws://172.16.240.140:46020',
        changeOrigin: true,
      },
      '/api/qdehr__qdehrapp': {
        target: 'http://172.16.102.14:32028',
        changeOrigin: true,
      },
      '/api/ibizcloudcoreos__dcmgr': {
        target: 'http://172.16.102.14:32030',
        changeOrigin: true,
      },
      // '/api/centralstudio__centralstudio/remotemodel/': {
      //   target: 'http://nginx:20003',
      //   changeOrigin: true,
      // },
      '/api/centralstudio__centralstudio': {
        rewrite(path) {
          return path.replace('/api', '');
        },
        target: 'http://172.16.220.130:30080',
        // target: 'http://172.16.240.140:46116',
        changeOrigin: true,
      },
      '/api/test1__pluginapp': {
        target: 'http://172.16.220.130:30041',
        changeOrigin: true,
      },
      '/api/ibizdemoold__sample': {
        rewrite(path) {
          return path.replace('/api', '');
        },
        target: 'http://172.16.220.130:30202',
        changeOrigin: true,
      },
      '/api/ibizcloudmgr__cloudmgr': {
        target: 'http://172.16.240.140:45415',
        changeOrigin: true,
      },
      '/api/ibizkms__webapp': {
        target: 'http://172.16.220.130:30105',
        changeOrigin: true,
      },
      '/api/demosys__web': {
        rewrite(path) {
          return path.replace('/api', '');
        },
        target: 'http://172.16.103.169:30054',
        changeOrigin: true,
      },
      '/api/oa__web': {
        target: 'http://172.16.102.14:32006',
        changeOrigin: true,
      },
      '/api/demosys__webvue3': {
        rewrite(path) {
          return path.replace('/api', '');
        },
        target: 'http://172.16.103.169:30054',
        changeOrigin: true,
      },
      '/api/ibizmodelingia__webapp': {
        target: 'http://172.16.220.130:30104',
        changeOrigin: true,
      },
      '/api/zcyw__web': {
        target: 'http://172.16.220.14:31002',
        changeOrigin: true,
      },
      '/api/zcyw__web/portal/mqtt/mqtt': {
        target: 'ws://172.16.220.14:31002',
        changeOrigin: true,
      },
      '/api/zhks__web': {
        target: 'http://172.16.220.14:32002',
        changeOrigin: true,
      },
      '/api/eam__eamweb': {
        target: 'http://172.16.102.14:32010',
        changeOrigin: true,
      },
      '/api/formdesign__formdesign': {
        target: 'http://172.16.220.130:30200',
        changeOrigin: true,
      },
      '/api/dataflowdesign__dataflowdesign': {
        target: 'http://172.16.220.130:30300',
        changeOrigin: true,
      },
      '/api/workflowdesign__workflowdesign': {
        target: 'http://172.16.220.130:30400',
        changeOrigin: true,
      },
      '/api/ibizplm__plmweb': {
        target: 'http://172.16.220.130:30510',
        changeOrigin: true,
      },
      '/api/ibizplm__plmweb/portal/mqtt/mqtt': {
        target: 'ws://172.16.220.130:30510',
        changeOrigin: true,
      },
      '/api/ibizoa__web': {
        target: 'http://172.16.220.130:30610',
        changeOrigin: true,
      },
      '/api/ibizoa__web/portal/mqtt/mqtt': {
        target: 'ws://172.16.220.130:46020',
        changeOrigin: true,
      },
      '/api/szjcxx__web': {
        target: 'http://172.16.220.14:31032',
        rewrite(path) {
          return path.replace('/api', '');
        },
        changeOrigin: true,
      },
      '/api/logicdesign__logicdesign': {
        target: 'http://172.16.220.130:30321',
        changeOrigin: true,
      },
      '/api/ibizsysmgr__sysmgr': {
        target: 'http://172.16.103.187:30101',
        changeOrigin: true,
      },
      '/api/ibizsysmgr__sysmgr/portal/mqtt/mqtt': {
        target: 'ws://172.16.103.187:30101',
        changeOrigin: true,
      },
    },
    cors: true,
    fs: {
      strict: false,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@ibiz-template/theme/style/global.scss";',
      },
    },
  },
  plugins: [
    eslint({
      include: 'src/**/*.{ts,tsx,js,jsx}',
    }),
    vue({
      template: {
        compilerOptions: {
          isCustomElement,
        },
      },
    }),
    vueJsx({
      isCustomElement,
    }),
    legacy({ externalSystemJS: true }),
    IBizVitePlugin(),
    // visualizer(),
  ],
});
