<template>
<div class="block-header block-header-default">
                <h3 class="block-title">Tərçümə Redaktə Et</h3>
            </div>
    <div class="block-content block-content-full">
      <div v-if="errors">
        <div v-for="(v,k) in errors" :key="k">
          <p v-for="error in v" :key="error" class="alert alert-danger">
            {{ error }}
          </p>
        </div>
      </div>
        <form @submit.prevent="submiteditTranslate" enctype="multipart/form-data">
              <div class="card-body">
                <div class="form-group">
                  <label for="title">Başlıq</label>
                  <input type="text" class="form-control" id="title" name="title" v-model="edits.title" />
                </div>
                <div class="form-group">
                  <label for="translations">Tərçümə Məzmunu</label> <br />
                  <textarea class="form-control" name="translations" id="translations" cols="30" rows="10" v-model="edits.translations"></textarea>
                </div>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-success">Təsdiq Et</button>
              </div>
        </form>
    </div>
</template>
<script>
import useTranslations from '../translations/translations';
import { onMounted } from 'vue';

export default {

    props : {
            id : {
                require : true,
                type : String
            }
        },

    setup(props) {

        const { errors ,edits, getTranslationsEdit, editTranslations } = useTranslations()
    
        onMounted(getTranslationsEdit(props.id))

        const submiteditTranslate = async () => {
            await editTranslations(props.id)
        }

        return {
            errors,
            edits,
            submiteditTranslate
        }
    
    }
}
</script>