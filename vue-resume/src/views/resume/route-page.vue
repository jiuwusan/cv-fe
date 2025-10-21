<template>
  <div class="page-box">
    <basic-info :data="data.basicInfo" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import BasicInfo from './basic-info.vue'

const data = ref<{ basicInfo: Record<string, string> }>({ basicInfo: {} })
const route = useRoute()
onMounted(() => {
  ;(async () => {
    data.value = await import(`./${route.params.name}.json`)
    console.log(data.value)
  })()
})
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
