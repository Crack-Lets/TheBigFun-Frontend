import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";

import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css';

import Card from "primevue/card";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import SelectButton from "primevue/selectbutton";
import Toolbar from "primevue/toolbar";
import Listbox from "primevue/listbox";
import Divider from "primevue/divider";
import InputText from "primevue/inputtext";
import ScrollPanel from "primevue/scrollpanel";
import DataTable from "primevue/datatable";
createApp(App)
    .use(PrimeVue, { ripple: true })
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)
    .component('pv-listbox',Listbox)
    .component('pv-divider',Divider)
    .component('pv-inputext',InputText)
    .component('pv-scrollpanel',ScrollPanel)
    .component('pv-datatable', DataTable)
    .mount('#app')

