<template>
  <div class="admin-layout-wrap">
    <el-container :style="{height: '100%'}">
        <el-aside width="450px">
          <app-aside />
        </el-aside>
        <el-main>
            <nuxt />
        </el-main>
    </el-container>
    </div>
</template>

<script>
import AppAside from '@/components/admin/AppAside'

export default {
  components: {
    AppAside,
  },
}
</script>

<style scoped>
.admin-layout-wrap {
  width: 100%;
  height: 100vh;
}
</style>
