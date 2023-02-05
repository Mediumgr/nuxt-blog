<template>
    <div>
        <!-- <el-col :xs="24" :sm="18" :md="12" :lg="10"> -->
        <app-post v-for="post in 3" :key="post"></app-post>
        <!--  </el-col> -->
    </div>
</template>

<script>
import AppPost from '@/components/main/AppPost.vue'

export default {
    components: {
        AppPost,
    },
    head: {
        title: 'Главная',
    },
}
</script>
