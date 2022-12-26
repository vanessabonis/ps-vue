import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-orange/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Calendar from 'primevue/calendar';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';

import Tag from 'primevue/tag';
import ToolTip from 'primevue/tooltip';

import axios from 'axios';
import VueAxios from 'vue-axios';

import filtros from './shared/Filtros';

const app = createApp(App)

app.config.globalProperties.$filters = filtros;

app
.use(router).use(PrimeVue).use(VueAxios, axios);

app
.component('Dropdown', Dropdown).component('Calendar', Calendar)
.component('Button', Button).component('Tag', Tag).component('InputText', InputText)
.component('DataTable', DataTable).component('Column', Column)
.component('Card', Card).component('Dialog', Dialog);

app.directive('tooltip', ToolTip);

app.mount('#app')
