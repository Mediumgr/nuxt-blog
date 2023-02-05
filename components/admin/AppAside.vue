<template>
    <el-row class="tac">
        <el-col :span="12" class="menu_col">
            <el-menu router :default-active="$route.path" class="menu">
                <el-menu-item index="/admin">
                    <i class="el-icon-menu"></i>
                    <span>Аналитика</span>
                </el-menu-item>
                <el-menu-item index="/admin/create">
                    <i class="el-icon-edit-outline"></i>
                    <span>Создать</span>
                </el-menu-item>
                <el-menu-item index="/admin/list">
                    <i class="el-icon-tickets"></i>
                    <span>Посты</span>
                </el-menu-item>
                <el-menu-item index="/admin/user">
                    <i class="el-icon-service"></i>
                    <span>Пользователи</span>
                </el-menu-item>
                <el-menu-item index="/admin/logout">
                    <i class="el-icon-setting"></i>
                    <span>Выйти</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {}
</script>

<style scoped>
.tac {
  height: 100%;
}

.menu_col {
  height: 100%;
}

.menu {
  height: 100%;
}
</style>
