<template>
    <div>
        <h1>Добавить комментарий</h1>
        <el-form ref="form" :model="controls" :rules="rules" @submit.native.prevent="onSubmit">
            <el-form-item label="Ваше имя" prop="name">
                <el-input v-model.trim="controls.name" />
            </el-form-item>
            <el-form-item label="Текст комментария" prop="text">
                <el-input v-model.trim="controls.text" type="textarea" resize="none" :rows="2" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" round native-type="submit" :loading="loading">Добавить комментарий</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      controls: {
        name: '',
        text: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Имя не может быть пустым',
            trigger: 'blur',
          },
        ],
        text: [
          {
            required: true,
            message: 'Введите ваш комментарий',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          /* const formData = {
            name: this.controls.name,
            text: this.controls.text,
            postId: '',
          } */
          try {
            this.$message.success('Комментарий добавлен')
            this.$emit('created')
          } catch (e) {
            this.loading = false
          }
        }
      })
    },
  },
}
</script>

<style scoped>
</style>
