<template>
  <div class="ContentArea">
    <div
      v-for="(contentItem, contentItemIdx) in contentList"
      :key="contentItemIdx"
      class="ContentArea__item"
    >
      <div class="ContentArea__title">
        <div class="title" v-if="!$_.isEmpty(contentItem.title)">
          {{ contentItem.title }}
        </div>
        <div v-if="!$_.isEmpty(contentItem.subTitle)" class="captopn">
          {{ contentItem.subTitle }}
        </div>
      </div>
      <div class="ContentArea__content">
        <img
          v-if="!$_.isEmpty(contentItem.src)"
          :src="contentItem.src"
          alt=""
        />
        <div v-if="!$_.isEmpty(contentItem.label)" class="ContentArea__text">
          <span
            v-if="contentItem.selectable"
            :class="contentItem.style"
            @clilck="clickContent(contentItem)"
            >{{ contentItem.label }}</span
          >
          <span v-else :class="contentItem.style">{{ contentItem.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, PropType } from "vue";
import { ContentType } from "@/interface/contentBlock";

export default defineComponent({
  name: "ContentBlock",
  props: {
    contentList: {
      type: Array as PropType<ContentType[]>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const clickContent = (item: ContentType) => {
      emit("clickContent", item);
    };
    return { clickContent };
  },
});
</script>

<style lang="scss" scoped></style>
