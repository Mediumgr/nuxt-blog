<template>
  <div class="error-layout">
    <div class="error-content">
      <h1 class="error-title">Ошибка 404</h1>
      <nuxt-link to="/">Back at home page</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.error-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.error-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 4rem;
}

.error-title {
  color: blueviolet;
  margin-bottom: 1rem;
}
</style>
