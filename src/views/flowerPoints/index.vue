<template>
  <div class="hass">花积分</div>
  <el-button type="primary" @click="drawer = true">点击出现左抽屉框</el-button>
  <el-button type="primary" @click="drawer1 = true">点击出现右抽屉框</el-button>
  <el-drawer direction="ltr" v-model="drawer" :with-header="false">
    <span>左边!</span>
  </el-drawer>
  <el-drawer direction="rtl" v-model="drawer1" :with-header="false">
    <span>右边!</span>
  </el-drawer>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/pinia/index"
import { storeToRefs } from "pinia/dist/pinia"

const counterStore = useCounterStore()
const router = useRouter()
let drawer = ref(false)
let drawer1 = ref(false)

// 不使用 storeToRefs ，不是响应式数据
const { count, age } = storeToRefs(counterStore)

const add = () => {
  // count.value++
  counterStore.increment()
}
</script>

<style lang="scss" scoped></style>
