<template>
  <div class="column">
    <div class="my-name">
      <img src="@/assets/image/info.svg" class="my-name-icon" />
      <div>
        {{ data.name }} - <span style="font-size: 16px">{{ data.position }}</span>
      </div>
    </div>
    <div class="person">
      <div class="person-ul">
        <div class="person-li">
          <img src="@/assets/image/phone.svg" class="person-li-icon" />
          <div>15923649848</div>
        </div>
        <div class="person-li">
          <img src="@/assets/image/mail.svg" class="person-li-icon" />
          <div>huzhangrong497@qq.com</div>
        </div>
      </div>
      <div class="person-ul">
        <div class="person-li">
          <img src="@/assets/image/zhicheng.svg" class="person-li-icon" />
          <div>CET4 / 软件设计师</div>
        </div>
        <div class="person-li">
          <img src="@/assets/image/xuewei.svg" class="person-li-icon" />
          <div>计算机科学与技术/全日制/本科</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: Record<string, string>
}>()
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
