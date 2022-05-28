<template>
  <div class="WorksContentArea">
    <div
      class="WorksContentMenu"
      :class="{ 'WorksContentMenu--no_img': isImgShow }"
    >
      <div
        v-for="(contentItem, contentItemIdx) in worksContentList"
        :key="contentItemIdx"
        class="WorksContentMenu__item"
      >
        <div class="WorksContentDetail__img" @click="clickWork(contentItem)">
          <img
            v-if="!$_.isEmpty(contentItem.src)"
            :src="contentItem.src"
            alt=""
            :class="{ selected: contentItem.selected }"
          />
        </div>
      </div>
    </div>
    <div class="WorksContentDetailArea">
      <div
        v-for="(selectedItem, selectedItemIdx) in worksContentList"
        :key="selectedItemIdx"
        class="WorksContentDetail"
      >
        <div
          v-if="selectedItem.selected"
          class="WorksContentDetail__content"
          :class="{ 'WorksContentDetail__content--no_img': !isImgShow }"
        >
          <div v-if="isImgShow" class="WorksContentDetail__img">
            <img
              v-if="!$_.isEmpty(selectedItem.src)"
              :src="selectedItem.src"
              alt=""
            />
          </div>
          <div
            class="WorksContentDetailStack"
            :class="{ 'WorksContentDetailStack--no_md_top': !isImgShow }"
          >
            <div class="WorksContentDetailStack__title" id="workCompany">
              {{ $t("works.common.campanyName") }}
            </div>
            <div class="WorksContentDetailStack__content">
              <div class="WorksContentDetail__title">
                <div class="title" v-if="!$_.isEmpty(selectedItem.title)">
                  {{ $t(selectedItem.title) }}
                </div>
                <div v-if="!$_.isEmpty(selectedItem.subTitle)" class="caption">
                  {{ $t(selectedItem.subTitle) }}
                </div>
              </div>
            </div>
          </div>
          <div class="WorksContentDetailStack">
            <div class="WorksContentDetailStack__title" id="workDiscription">
              {{ $t("works.common.description") }}
            </div>
            <div class="WorksContentDetailStack__content">
              <div class="WorksContentDetail__discription">
                <div
                  v-if="!$_.isEmpty(selectedItem.description)"
                  class="WorksContentDetail__discription--text"
                >
                  {{ $t(selectedItem.description) }}
                </div>
              </div>
            </div>
          </div>
          <div class="WorksContentDetailStack--vertical" id="workPhase">
            <div class="WorksContentDetailStack__title--vertical">
              {{ $t("works.common.devPhase.title") }}
            </div>
            <div class="WorksContentDetailStack__content--vertical">
              <div class="WorksContentDevelopmentPhaseArea">
                <div class="WorksContentDevelopmentPhase__content">
                  <div class="DevelopmentPhaseTable">
                    <div class="DevelopmentPhaseTableHeader">
                      <div class="DevelopmentPhaseTable__header">
                        {{ $t("works.common.devPhase.definition") }}
                      </div>
                      <div class="DevelopmentPhaseTable__header">
                        {{ $t("works.common.devPhase.basicDesign") }}
                      </div>
                      <div class="DevelopmentPhaseTable__header">
                        {{ $t("works.common.devPhase.detailDesign") }}
                      </div>
                      <div class="DevelopmentPhaseTable__header">
                        {{ $t("works.common.devPhase.coding") }}
                      </div>
                      <div class="DevelopmentPhaseTable__header">
                        {{ $t("works.common.devPhase.unitTest") }}
                      </div>
                      <div class="DevelopmentPhaseTable__header">
                        {{ $t("works.common.devPhase.integrationTest") }}
                      </div>
                      <div class="DevelopmentPhaseTable__header">
                        {{ $t("works.common.devPhase.systemTest") }}
                      </div>
                      <div class="DevelopmentPhaseTable__header">
                        {{ $t("works.common.devPhase.maintenance") }}
                      </div>
                    </div>
                    <div class="DevelopmentPhaseTableContent">
                      <div class="DevelopmentPhase">
                        <div class="DevelopmentPhaseItem">
                          <div
                            v-if="selectedItem.developmentPhase.definition"
                            class="DevelopmentPhaseItem__on"
                          ></div>
                        </div>
                        <div class="DevelopmentPhaseItem">
                          <div
                            v-if="selectedItem.developmentPhase.basicDesign"
                            class="DevelopmentPhaseItem__on"
                          ></div>
                        </div>
                        <div class="DevelopmentPhaseItem">
                          <div
                            v-if="selectedItem.developmentPhase.detailDesign"
                            class="DevelopmentPhaseItem__on"
                          ></div>
                        </div>
                        <div class="DevelopmentPhaseItem">
                          <div
                            v-if="selectedItem.developmentPhase.coding"
                            class="DevelopmentPhaseItem__on"
                          ></div>
                        </div>
                        <div class="DevelopmentPhaseItem">
                          <div
                            v-if="selectedItem.developmentPhase.unitTest"
                            class="DevelopmentPhaseItem__on"
                          ></div>
                        </div>
                        <div class="DevelopmentPhaseItem">
                          <div
                            v-if="selectedItem.developmentPhase.integrationTest"
                            class="DevelopmentPhaseItem__on"
                          ></div>
                        </div>
                        <div class="DevelopmentPhaseItem">
                          <div
                            v-if="selectedItem.developmentPhase.systemTest"
                            class="DevelopmentPhaseItem__on"
                          ></div>
                        </div>
                        <div class="DevelopmentPhaseItem">
                          <div
                            v-if="selectedItem.developmentPhase.maintenance"
                            class="DevelopmentPhaseItem__on"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="WorksContentDetailStack--vertical">
            <div class="WorksContentDetailStack__title--vertical">
              {{ $t("works.common.achievement.title") }}
            </div>
            <div class="WorksContentDetailStack__achievement-description">
              {{ $t("works.common.acievementDescription") }}
            </div>
            <div class="WorksContentDetailStack__content--vertical">
              <div class="WorksContentAchievementArea">
                <div class="WorksContentAchievement__content">
                  <div class="AchievementTable">
                    <div class="AchievementTableHeader">
                      <div class="AchievementTable__header">
                        {{ $t("works.common.achievement.header.item") }}
                      </div>
                      <div class="AchievementTable__header">
                        {{ $t("works.common.achievement.header.content") }}
                      </div>
                      <div class="AchievementTable__header">
                        {{ $t("works.common.achievement.header.achievement") }}
                      </div>
                    </div>
                    <div
                      class="AchievementTableContent"
                      :style="{ height: workTableHeight + 'px' }"
                    >
                      <div
                        v-for="(item, itemIdx) in selectedItem.achievementList"
                        :key="itemIdx"
                        class="AchievementList"
                        :class="item.style"
                      >
                        <div class="AchievementList--label">
                          {{ $t(item.label) }}
                        </div>

                        <div class="AchievementList--description">
                          {{ $t(item.description) }}
                        </div>

                        <div class="AchievementList--archievement">
                          {{ $t(item.archievement) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, watch, onMounted } from "vue";
import { WorksContentType } from "@/interface/worksContent";

export default defineComponent({
  name: "WorksContent",
  props: {
    worksContentList: {
      type: Array as PropType<WorksContentType[]>,
      required: true,
    },
    isImgShow: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  setup(props, { emit }) {
    const workTableHeight = ref(0);

    const changeTableBodyHeight = () => {
      const workCompany = document.getElementById("workCompany");
      const workDiscription = document.getElementById("workDiscription");
      const workPhase = document.getElementById("workPhase");
      const totalHeight = ref(0);
      if (workCompany != null && workDiscription != null && workPhase != null) {
        totalHeight.value =
          workCompany.offsetHeight +
          workDiscription.offsetHeight +
          workPhase.offsetHeight;
      }
      //marginと「実績」、テーブルヘッダーの高さ
      totalHeight.value += 32 + 8 + 30 + 16 + 16;

      workTableHeight.value = 580 - totalHeight.value;
    };
    onMounted(() => {
      changeTableBodyHeight();
    });

    const clickWork = (item: WorksContentType) => {
      emit("clickWork", item);
    };
    watch(props.worksContentList, () => {
      changeTableBodyHeight();
    });
    return { clickWork, workTableHeight };
  },
});
</script>

<style lang="scss" scoped></style>
