<template>
  <div class="common-layout">
    <div>
      <el-menu
        :default-active="defaultActive"
        background-color="#2e4050"
        text-color="#fff"
        class="menu"
        router
      >
        <h3 class="juan">南浔积分系统</h3>
        <el-menu-item
          :index="e.meta?.perPath + '/' + e.path"
          v-for="e in childrenList"
          :key="e.path"
        >
          <el-icon><document /></el-icon>
          <span>{{ e.meta?.title }}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <div class="header">
        <div class="header-avtr">
          <el-badge :value="13" :max="99" class="item">
            <el-icon size="22"><Bell /></el-icon>
          </el-badge>
          <img
            src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
            alt=""
            class="header-img"
          />
          <el-dropdown>
            <div class="el-dropdown-link">
              刘岩松
              <el-icon>
                <arrow-down />
              </el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <!-- <span>刘岩松</span> -->
        </div>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bell, ArrowDown } from "@element-plus/icons-vue"
import { childrenList } from "@/router/index"

const route = useRoute()

let defaultActive = ref("/index/flowerPpoints")
defaultActive.value = route.fullPath
</script>

<style lang="scss" scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #eee;
  display: flex;
  .menu {
    width: 220px;
    height: 100%;
    overflow: auto;
  }
}
.juan {
  padding: 10px 0;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  color: #fff;
}
.content {
  overflow: auto;
  flex: 1;
  position: relative;
  padding: 10px;
  .header {
    height: 60px;
    padding: 0 40px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: end;
    .header-avtr {
      display: flex;
      align-items: center;
      .item {
        height: 17px;
      }
    }
    .header-img {
      width: 40px;
      height: 40px;
      margin: 0 20px 0 40px;
      vertical-align: bottom;
    }
  }
  .main {
    height: calc(100% - 70px);
    padding: 10px;
    margin-top: 10px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 5px;
    overflow: auto;
  }
}
.el-dropdown-link:focus {
  outline: none;
}
</style>
