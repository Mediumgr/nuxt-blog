<template>
    <el-table :data="posts" style="width: 100%">
        <el-table-column prop="title" lable="Название" />
        <el-table-column label="Дата" width="180">
            <template slot-scope="scope">
                            <i class="el-icon-time"></i>
                            <span style="margin-left: 10px">{{ new Date(scope.row.date).toLocaleString()}}</span>
</template>
    </el-table-column>
     <el-table-column
      prop="views"
      label="Просмотры">
    </el-table-column>
         <el-table-column
      prop="comments[1]"
      label="Комментарии">
    </el-table-column>
    <el-table-column
      label="Operations">
<template slot-scope="{ row }">
    <el-button icon="el-icon-edit" size="mini" circle type="primary" @click="open(row._id)" />
    <el-button icon="el-icon-delete" size="mini" circle type="danger" @click="remove(row._id)" />
</template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetchAdmin')
    return { posts }
  },
  methods: {
    open(id) {},
    remove(id) {},
  },
}
</script>

<style scoped>
</style>
