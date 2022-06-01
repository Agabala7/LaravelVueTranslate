<template>
    <div>
      <div v-if="errors">
        <div v-for="(v,k) in errors" :key="k">
          <p v-for="error in v" :key="error" class="alert alert-danger">
            {{ error }}
          </p>
        </div>
      </div>
      <div v-if="success">
        <div class="alert alert-success" v-show="success">Ugurlu</div>
      </div>
        <form @submit.prevent="submitTranslate" enctype="multipart/form-data">
              <div class="card-body">
                <div class="form-group">
                  <label for="title">Başlıq</label>
                  <input type="text" class="form-control" id="title" name="title" v-model="form.title" />
                </div>
                <div class="form-group">
                  <label for="translations">Tərçümə Məzmunu</label> <br />
                  <textarea class="form-control translations" name="translations" id="translations" cols="30" rows="10" v-model="form.translations"></textarea>
                </div>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-success">Təsdiq Et</button>
              </div>
        </form>
    </div>
</template>


<script>
import { reactive } from 'vue';
import useTranslations from './translations';

export default {
  setup() {
    const form = reactive({
      'title' : '',
      'translations' : ''
    })

  const { addTranslations, errors, success } = useTranslations();

  const submitTranslate = async () => {
    await addTranslations({...form})
  }

  return {
    form,
    errors,
    submitTranslate,
    success
  }

  }
}
</script>