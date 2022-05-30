<template>
<div class="block-header block-header-default">
                <h3 class="block-title">Tərçümə siyahısı</h3>
            </div>
<div class="block-content block-content-full">
    <table class="table table-bordered table-striped table-vcenter js-dataTable-full">
                    <thead>
                        <tr>
                            <th>Başlıq</th>
                            <th class="d-none d-sm-table-cell" style="width: 60%;">Tərçümə Məzmunu</th>
                            <th class="d-none d-sm-table-cell" style="width: 15%;">Əməliyyatlar</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr v-for="translate in translations" :key="translate.id">
                            <td class="font-w600">{{ translate.title }}</td>
                            <td class="d-none d-sm-table-cell">{{ translate.translations }}</td>
                            <td class="text-center">
                                <button class="btn btn-outline-danger" @click="destroyTranslations(translate.id)">Sil</button>
                                <!-- <button class="btn btn-outline-primary mt-1">Redaktə et</button> -->
                                <router-link class="btn btn-outline-primary mt-1" :to="{ name : 'translations.edit', params : { id: translate.id } }">Redaktə et</router-link>
                            </td>
                        </tr>
                        
                    </tbody>
    </table>
</div>
</template>

<script>
import useTranslations from '../translations/translations';
import { onMounted } from "vue";

export default {
    setup() {
        const { translations, getTranslations, deleteTranslations } = useTranslations()

        onMounted(getTranslations)

        const destroyTranslations = async (id) => {
            if(!window.confirm('Silmək istədiyindən əminsən ?')) {
                return
            }

            await deleteTranslations(id);
            await getTranslations();
        }

        return {
            translations,
            destroyTranslations
        }

    }
}

</script>