<template>
    <el-card class="post" shadow="hover">
        <header slot="header" class="post-header">
            <h3>Post title</h3>
            <small class="el-icon-time">{{new Date().toLocaleString()}}</small>
        </header>
        <div class="flex">
            <div class="post-body">
                <img src="https://www.trn-news.ru/Ru/Upload/Image/tailand4567.jpg" alt="post image" class="post-imh">
            </div>
            <footer class="post-footer">
                <el-button round @click="openPost">Открыть</el-button>
                <span>
              <i class="el-icon-message"></i>
              12
            </span>
            </footer>
        </div>
    </el-card>
</template>

<script>
export default {
    methods: {
        openPost() {
            const id = 'test-id'
            this.$router.push(`/post/${id}`)
        },
    },
}
</script>

<style scoped>
.flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.post {
    height: auto;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;
}

.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.post-img {
    width: 100%;
    height: auto;
}

.post-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
}
</style>
