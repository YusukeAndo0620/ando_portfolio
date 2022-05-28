<template>
  <div class="AboutContentArea">
    <div class="AboutContentArea__introduction">
      <div class="IntroductionArea">
        <div class="IntroductionImg">
          <img
            v-if="!$_.isEmpty(aboutContent.src)"
            :src="aboutContent.src"
            alt=""
          />
        </div>
        <div class="IntroductionContent">
          <div
            v-for="(
              introduction, introductionIdx
            ) in aboutContent.introductionList"
            :key="introductionIdx"
            class="Introduction"
            :class="introduction.style"
          >
            <div class="Introduction__label">{{ $t(introduction.label) }}</div>
            <div class="Introduction__description">
              {{ $t(introduction.description) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isHistoryShow" class="AboutContentArea__history">
      <table class="HistoryTable">
        <thead>
          <tr class="HistoryHeader_line">
            <th>
              <div class="HistoryTable__header">
                {{ $t("about.history.year") }}
              </div>
            </th>
            <th>
              <div class="HistoryTable__header">
                {{ $t("about.history.content") }}
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="HistoryTableContent">
          <tr
            v-for="(item, itemIdx) in aboutContent.aboutHistoryList"
            :key="itemIdx"
            class="History"
            :class="item.style"
          >
            <td>
              <div class="History__label">
                {{ $t(item.year) }}
              </div>
            </td>
            <td>
              <div
                v-html="$t(item.description)"
                class="HistoryList__description"
              ></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, PropType } from "vue";
import { AboutContentType } from "@/interface/aboutContent";

export default defineComponent({
  name: "AboutContent",
  props: {
    aboutContent: {
      type: Object as PropType<AboutContentType>,
      required: true,
    },
    isHistoryShow: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props, { emit }) {
    const clickContent = () => {
      emit("clickContent");
    };
    return { clickContent };
  },
});
</script>

<style lang="scss" scoped></style>
