<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { dict } from "@/api/common"
import { Result } from "@/types/http"

type List = {
  count: number
  name: string
}

const count = ref("不需要引ref")

const list = ref<List[]>()

// const getData = async () => {
//   const res = await dict("/fmsv2/society/getDuBanTypeCount")
//   list.value = res.data
// }
// getData()
</script>

<style lang="scss" scoped></style>
