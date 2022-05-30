import { createRouter, createWebHistory } from "vue-router";

import addTranslations from '../components/translations/addTranslations.vue'
import listTranslations from '../components/translations/listTranslations.vue'
import editTranslations from '../components/translations/editTranslations.vue'

const routes = [
    {
        path : '/translations/create',
        name : 'translations.add',
        component : addTranslations        
    },
    {
        path : '/list-translations',
        name : 'translations.list',
        component : listTranslations
    },
    {
        path : '/edit-translations/:id',
        name : 'translations.edit',
        component : editTranslations,
        props : true
    }
]

export default createRouter({
    history : createWebHistory(),
    routes
})