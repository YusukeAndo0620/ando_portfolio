<template>
  <div class="SkillArea">
    <div class="SkillHeader">
      <div class="SkillHeader__title">
        <div class="SkillHeader__title-icon">
          <div class="Icon" :class="skillContent.iconClass"></div>
        </div>
        <div class="SkillHeader__title-txt">{{ $t(skillContent.title) }}</div>
      </div>
      <div class="SkillHeader__description">
        <span v-html="$t(skillContent.description)"></span>
      </div>
    </div>
    <div class="SkillContent">
      <div class="SkillContentHeader">
        <div class="SkillContentHeader__label">
          {{ $t("skill.common.label") }}
        </div>
        <div class="SkillContentHeader__experience">
          {{ $t("skill.common.experience") }}
        </div>
        <div class="SkillContentHeader__level">
          {{ $t("skill.common.level") }}
        </div>
      </div>
      <div
        v-for="(item, itemIdx) in skillContent.contentList"
        :key="itemIdx"
        class="SkillContentItem"
        :class="item.style"
      >
        <div class="SkillContentItem__label">{{ item.label }}</div>
        <div class="SkillContentItem__experience">
          {{ item.experience >= 12 ? item.experience / 12 : item.experience }}
          {{
            item.experience / 12 > 1
              ? $t("skill.common.years")
              : item.experience / 12 === 1
              ? $t("skill.common.year")
              : item.experience > 1
              ? $t("skill.common.months")
              : $t("skill.common.month")
          }}
        </div>
        <div class="SkillContentItem__level">
          <div
            v-for="(number, numberIdx) in 5"
            :key="numberIdx"
            class="Icon Icon--s16 Icon--skill"
            :class="{ 'Icon--skill__on': item.level >= number }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { SkillContentType } from "@/interface/skillContent";

export default defineComponent({
  name: "SkillContent",
  props: {
    skillContent: {
      type: Object as PropType<SkillContentType>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped></style>
