<template>
  <div v-if="data" class="page-box">
    <professional-infos :data="data.basicInfo" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ProfessionalInfos from './professional-infos.vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data = ref<{ basicInfo: Record<string, any> }>()
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
