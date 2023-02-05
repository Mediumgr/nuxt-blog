<template>
    <article class="post">
        <header class="post-header">
            <div class="post-title">
                <h1>Post title</h1>
                <nuxt-link to="/"><i class="el-icon-back"></i></nuxt-link>
            </div>
            <div class="post-info">
                <small class="el-icon-time">{{new Date().toLocaleString()}}</small>
                <small><i  class="el-icon-view"></i> 42</small>
            </div>
            <div class="post-image">
                <img src="https://www.trn-news.ru/Ru/Upload/Image/tailand4567.jpg" alt="post image" class="post-img">
            </div>
        </header>
        <main class="post-content">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat inventore cumque tempore amet, expedita consequatur, nam non, iusto maxime quasi eius dolor pariatur sit fugit aspernatur eaque tempora iste at.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat inventore cumque tempore amet, expedita consequatur, nam non, iusto maxime quasi eius dolor pariatur sit fugit aspernatur eaque tempora iste at.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat inventore cumque tempore amet, expedita consequatur, nam non, iusto maxime quasi eius dolor pariatur sit fugit aspernatur eaque tempora iste at.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat inventore cumque tempore amet, expedita consequatur, nam non, iusto maxime quasi eius dolor pariatur sit fugit aspernatur eaque tempora iste at.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat inventore cumque tempore amet, expedita consequatur, nam non, iusto maxime quasi eius dolor pariatur sit fugit aspernatur eaque tempora iste at.</p>
        </main>
        <footer>
            <comment-form v-if="canAddComment" @created="createCommentHandler">
            </comment-form>
            <div v-if="true" class="comments">
                <app-comment v-for="comment in 4" :key="comment" :comment="comment"></app-comment>
            </div>
            <div v-else class="text-center">No comments</div>
        </footer>
    </article>
</template>

<script>
import AppComment from '@/components/main/AppComment.vue'
import CommentForm from '@/components/main/CommentForm.vue'

export default {
    components: {
        AppComment,
        CommentForm,
    },
    data() {
        return {
            canAddComment: true,
        }
    },
    validate({ params }) {
        return Boolean(params.id)
    },
    methods: {
        createCommentHandler() {
            this.canAddComment = false
        },
    },
}
</script>

<style scoped>
.post {
    max-width: 600;
    margin: 0 auto;
}

.post-title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

.post-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
}

.post-image img {
    widows: 100%;
    height: auto;
}

.post-header {
    margin-bottom: 1.5rem;
}

.post-content {
    margin-bottom: 1.5rem;
}
</style>
