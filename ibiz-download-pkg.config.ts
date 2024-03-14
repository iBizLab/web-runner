// eslint-disable-next-line import/no-extraneous-dependencies
import { defineDownloadPkgConfig } from '@ibiz-template/cli';

export default defineDownloadPkgConfig({
  clean: true,
  registry: 'http://172.16.240.221:8081/repository/ibizsys/',
  outDir: './public/plugins',
  // 依赖包填写示例
  dependencies: [
    'vue@2.7.13',
    'vue@3.3.8',
    'vue@next',
    '@steedos/filters@2.x',
    '@steedos/accounts@2.5.x',
    '@ibiz-template-plugin/antv-x6-design@0.0.1-dev.13',
  ],
});
