<template>
  <div class="Content" :id="contentId">
    <div
      class="Content__title"
      :class="[{ 'Content__title--on': isShowFlg }, titleStyle]"
    >
      <div class="Content__title--txt">
        {{ title }}
        <div
          class="Content__title--border"
          :class="{ 'Content__title--border--on': isShowFlg }"
        ></div>
      </div>
    </div>
    <div class="ContentArea" :class="{ 'ContentArea--on': isShowFlg }">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StackContent",
  props: {
    contentId: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    titleStyle: {
      type: String,
      required: false,
    },
    isShowFlg: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped></style>
