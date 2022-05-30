import { ref } from "vue"
import axios from "axios";
import { useRouter } from "vue-router";

export default function useTranslations() {

    const errors = ref('')
    const success = ref('')
    const translations = ref([])
    const edits = ref([])
    const router = useRouter()

    const addTranslations = async (data) => {
        errors.value = '',
        success.value = false;
        try {
            await axios.post('/api/translations', data)
            await router.push({ name : 'translations.add' })
            errors.value = `<div class="alert alert-success">Ugurlu oldu</div>`
            success.value = true;
        } catch (e) {
            if(e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const getTranslations = async () => {
        let response = await axios.get('/api/translations')
        translations.value = response.data.data;
    }

    const deleteTranslations = async (id) => {
        await axios.delete(`/api/translations/${id}`)
    }

    const getTranslationsEdit = async (id) => {
        let response = await axios(`/api/translations/${id}`)
        edits.value = response.data.data;
    }

    const editTranslations = async (id) => {
            errors.value = ''
            try {
                await axios.put(`/api/translations/${id}`, edits.value)
                await router.push({name : 'translations.list'})
            } catch (e) {
                if(e.response.status === 422) {
                    errors.value = e.response.data.errors
                }
            }
        
    }

    return {
        errors,
        addTranslations,
        translations,
        getTranslations,
        deleteTranslations,
        getTranslationsEdit,
        edits,
        editTranslations,
        success,
    }

}