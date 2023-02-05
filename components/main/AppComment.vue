<template>
    <el-card class="comment">
        <div class="comment-header">
          <span>Person name</span>
          <i class="el-icon-time"></i>
          <span>{{new Date().toLocaleString()}}</span>
        </div>
        <div class="comment-text">
          Lorem, ipsum. {{comment}}
        </div>
    </el-card>
</template>

<script>
export default {
  props: {
    comment: {
      type: Number || String,
      default: 0,
    },
  },
}
</script>

<style scoped>
.comment {
  margin-bottom: 1rem;
}

.comment-header {
  display: flex;
  justify-content: flex-start;
  margin-block: 0.5rem;
}

.comment-text {
  white-space: pre-line;
}
</style>
