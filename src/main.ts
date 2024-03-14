import { runApp } from '@ibiz-template/vue3-components';
import VueTextFormat from 'vue-text-format';
import gridLayout from 'vue-grid-layout';
import UserRegister from './user-register';

runApp([VueTextFormat, gridLayout, UserRegister]);
