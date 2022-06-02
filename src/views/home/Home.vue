<template>
  <div>
    <NavigationBar
      :navigationList="navigationList"
      :isNotNavigationShow="isNotNavigationShow"
      @clickNavigate="clickNavigate"
    />
    <div class="Main" :class="{ 'MainContennt--modal_open': isSettingOpen }">
      <div
        id="home"
        class="Main--content"
        @click="isSettingOpen = false"
        @wheel="scrollDisplay"
        @touchmove="scrollDisplay"
      >
        <div class="MainContentImgArea">
          <div class="MainContentImg">
            <img src="@/assets/img/top_ground.png" alt="" />
          </div>
        </div>
        <Stack
          :isShowFlg="isAboutShow"
          title="About"
          titleStyle="Content__title--mt24"
          contentId="about"
        >
          <template #content>
            <AboutContent :aboutContent="aboutContent" :isHistoryShow="true" />
          </template>
        </Stack>
        <Stack :isShowFlg="isSkillShow" title="SKill" contentId="skill">
          <template #content>
            <div class="SkillContentArea">
              <SkillContent
                v-for="(skillContent, skillContentidx) in skillContentList"
                :key="skillContentidx"
                :skillContent="skillContent"
              />
              <div class="SkillDescriptionArea">
                <div class="SkillDescriptionContent">
                  <div class="SkillDescriptionContent__item">
                    <div class="SkillDescriptionContentItem__icon">
                      <div
                        v-for="(number, numberIdx) in 5"
                        :key="numberIdx"
                        class="Icon Icon--s16 Icon--skill Icon--skill__on"
                      ></div>
                    </div>
                    <div class="SkillDescriptionContentItem__txt">
                      <span v-html="$t('skill.skillDescription.level5')"></span>
                    </div>
                  </div>
                  <div class="SkillDescriptionContent__item">
                    <div class="SkillDescriptionContentItem__icon">
                      <div
                        v-for="(number, numberIdx) in 4"
                        :key="numberIdx"
                        class="Icon Icon--s16 Icon--skill Icon--skill__on"
                      ></div>
                    </div>
                    <div class="SkillDescriptionContentItem__txt">
                      <span v-html="$t('skill.skillDescription.level4')"></span>
                    </div>
                  </div>
                  <div class="SkillDescriptionContent__item">
                    <div class="SkillDescriptionContentItem__icon">
                      <div
                        v-for="(number, numberIdx) in 3"
                        :key="numberIdx"
                        class="Icon Icon--s16 Icon--skill Icon--skill__on"
                      ></div>
                    </div>
                    <div class="SkillDescriptionContentItem__txt">
                      <span v-html="$t('skill.skillDescription.level3')"></span>
                    </div>
                  </div>
                  <div class="SkillDescriptionContent__item">
                    <div class="SkillDescriptionContentItem__icon">
                      <div
                        v-for="(number, numberIdx) in 2"
                        :key="numberIdx"
                        class="Icon Icon--s16 Icon--skill Icon--skill__on"
                      ></div>
                    </div>
                    <div class="SkillDescriptionContentItem__txt">
                      <span v-html="$t('skill.skillDescription.level2')"></span>
                    </div>
                  </div>
                  <div class="SkillDescriptionContent__item">
                    <div class="SkillDescriptionContentItem__icon">
                      <div
                        v-for="(number, numberIdx) in 1"
                        :key="numberIdx"
                        class="Icon Icon--s16 Icon--skill Icon--skill__on"
                      ></div>
                    </div>
                    <div class="SkillDescriptionContentItem__txt">
                      <span v-html="$t('skill.skillDescription.level1')"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Stack>
        <Stack :isShowFlg="isWorksShow" title="Works" contentId="works">
          <template #content>
            <WorksContent
              :worksContentList="worksContentList"
              :isImgShow="false"
              @clickWork="clickWork"
            />
          </template>
        </Stack>
        <Stack
          :isShowFlg="isContactShow"
          title="Contact"
          titleStyle="Content__title--mt24"
          contentId="contact"
        >
          <template #content>
            <ContactContent @clickContent="clickContent" />
          </template>
        </Stack>
        <FooterContent v-if="isContactShow" />
      </div>
      <SettingModal
        v-if="isModalOpen"
        :isModalOpen="isSettingOpen"
        @clickClose="isSettingOpen = false"
      />
    </div>
  </div>
</template>

<script sertup lang="ts">
import { defineComponent, ref, reactive, watch, onMounted } from "vue";
import router from "@/router";
import NavigationBar from "@/components/organisms/NavigationBar.vue";
import Stack from "@/components/organisms/Stack.vue";
import AboutContent from "@/components/organisms/AboutContent.vue";
import WorksContent from "@/components/organisms/WorksContent.vue";
import SkillContent from "@/components/organisms/SkillContent.vue";
import ContactContent from "@/components/organisms/ContactContent.vue";

import SettingModal from "@/components/organisms/modal/Settings.vue";
import FooterContent from "@/components/organisms/Footer.vue";
import _ from "lodash";
import { NavigationType } from "@/interface/navigation";
import { AboutContentType } from "@/interface/aboutContent";
import { WorksContentType } from "@/interface/worksContent";
import { SkillContentType } from "@/interface/skillContent";

export default defineComponent({
  name: "HomeView",
  components: {
    NavigationBar,
    Stack,
    WorksContent,
    AboutContent,
    SkillContent,
    ContactContent,
    SettingModal,
    FooterContent,
  },
  setup() {
    //About表示フラグ
    const isAboutShow = ref(false);
    //Skill表示フラグ
    const isSkillShow = ref(false);
    //Works表示フラグ
    const isWorksShow = ref(false);
    //Works表示フラグ
    const isContactShow = ref(false);

    //スマホ スクロール時の位置
    const targetYPosition = ref(0);

    //スマホ メニューバー表示OFFフラグ
    const isNotNavigationShow = ref(false);

    //モーダル表示フラグ
    const isModalOpen = ref(false);
    //設定モーダル表示フラグ
    const isSettingOpen = ref(false);

    const navigationList = ref<NavigationType[]>([
      {
        label: "Home",
        id: "home",
        eventName: "nabigateHome",
        routerName: "Home",
        style: "",
        selected: true,
      },
      {
        label: "About",
        id: "about",
        eventName: "nabigateAbout",
        routerName: "About",
        style: "",
        selected: false,
      },
      {
        label: "Works",
        id: "works",
        eventName: "nabigateWorks",
        routerName: "Works",
        style: "",
        selected: false,
      },
      {
        label: "Contact",
        id: "contact",
        eventName: "nabigateContact",
        routerName: "Contact",
        style: "",
        selected: false,
      },
      {
        label: "Settings",
        id: "settings",
        eventName: "openSettings",
        routerName: "Settings",
        style: "",
        selected: false,
      },
    ]);

    const aboutContent = reactive<AboutContentType>({
      title: "About",
      src: require("@/assets/img/profile.png"),
      style: "",
      introductionList: [
        {
          label: "about.introduction.name.label",
          description: "about.introduction.name.description",
          style: "",
        },
        {
          label: "about.introduction.birthday.label",
          description: "about.introduction.birthday.description",
          style: "",
        },
        {
          label: "about.introduction.from.label",
          description: "about.introduction.from.description",
          style: "",
        },
        {
          label: "about.introduction.finalEducation.label",
          description: "about.introduction.finalEducation.description",
          style: "",
        },
        {
          label: "about.introduction.programminglanguage.label",
          description: "about.introduction.programminglanguage.description",
          style: "",
        },
        {
          label: "about.introduction.framework.label",
          description: "about.introduction.framework.description",
          style: "",
        },
      ],
      aboutHistoryList: [
        {
          year: "about.history.content1.year",
          description: "about.history.content1.description",
          style: "",
        },
        {
          year: "about.history.content2.year",
          description: "about.history.content2.description",
          style: "",
        },
        {
          year: "about.history.content3.year",
          description: "about.history.content3.description",
          style: "",
        },
        {
          year: "about.history.content4.year",
          description: "about.history.content4.description",
          style: "",
        },
        {
          year: "about.history.content5.year",
          description: "about.history.content5.description",
          style: "",
        },
        {
          year: "about.history.content6.year",
          description: "about.history.content6.description",
          style: "",
        },
      ],
    });

    const skillContentList = ref<SkillContentType[]>([
      {
        title: "skill.language.title",
        description: "skill.language.description",
        iconClass: "Icon--program",
        style: "",
        contentList: [
          {
            label: "HTML",
            experience: 24,
            level: 5,
            style: "",
          },
          {
            label: "CSS",
            experience: 24,
            level: 5,
            style: "",
          },
          {
            label: "Javascript",
            experience: 24,
            level: 4,
            style: "",
          },
          {
            label: "Typescript",
            experience: 24,
            level: 4,
            style: "",
          },
          {
            label: "SCSS",
            experience: 24,
            level: 4,
            style: "",
          },
          {
            label: "Java",
            experience: 24,
            level: 4,
            style: "",
          },
        ],
      },
      {
        title: "skill.others.title",
        description: "skill.others.description",
        iconClass: "Icon--pc",
        style: "",
        contentList: [
          {
            label: "Slack",
            experience: 24,
            level: 5,
            style: "",
          },
          {
            label: "ZOOM",
            experience: 24,
            level: 5,
            style: "",
          },
          {
            label: "VSCode",
            experience: 24,
            level: 4,
            style: "",
          },

          {
            label: "Teams",
            experience: 12,
            level: 4,
            style: "",
          },
          {
            label: "SorceTree",
            experience: 24,
            level: 4,
            style: "",
          },
          {
            label: "TortoseGit",
            experience: 24,
            level: 4,
            style: "",
          },
          {
            label: "Figma",
            experience: 24,
            level: 4,
            style: "",
          },
          {
            label: "A5",
            experience: 24,
            level: 3,
            style: "",
          },
          {
            label: "Eclipse",
            experience: 24,
            level: 3,
            style: "",
          },
          {
            label: "Intellij",
            experience: 12,
            level: 3,
            style: "",
          },
        ],
      },
      {
        title: "skill.frontend.title",
        description: "skill.frontend.description",
        iconClass: "Icon--program",
        style: "",
        contentList: [
          {
            label: "Vue.js(Vue3)",
            experience: 12,
            level: 5,
            style: "",
          },
          {
            label: "Edge.js",
            experience: 12,
            level: 2,
            style: "",
          },
        ],
      },
      {
        title: "skill.backend.title",
        description: "skill.backend.description",
        iconClass: "Icon--program",
        style: "",
        contentList: [
          {
            label: "Spring Boot",
            experience: 24,
            level: 4,
            style: "",
          },
          {
            label: "Struts",
            experience: 3,
            level: 2,
            style: "",
          },
        ],
      },
      {
        title: "skill.db.title",
        description: "skill.db.description",
        iconClass: "Icon--db",
        style: "",
        contentList: [
          {
            label: "MySQL",
            experience: 24,
            level: 5,
            style: "",
          },
          {
            label: "Mybatis",
            experience: 24,
            level: 5,
            style: "",
          },
          {
            label: "Oracle",
            experience: 12,
            level: 3,
            style: "",
          },
        ],
      },
      {
        title: "skill.infra.title",
        description: "skill.infra.description",
        iconClass: "Icon--infra",
        style: "",
        contentList: [
          {
            label: "AWS(EC2, S3 etc)",
            experience: 12,
            level: 2,
            style: "",
          },
        ],
      },
    ]);

    const worksContentList = ref<WorksContentType[]>([
      {
        id: 1,
        title: "works.content1.title",
        subTitle: "works.content1.subTitle",
        description: "works.content1.description",
        period: "works.content1.period",
        src: require("@/assets/img/insurance.svg"),
        style: "",
        selected: true,
        developmentPhase: {
          definition: false,
          basicDesign: false,
          detailDesign: false,
          coding: true,
          unitTest: true,
          integrationTest: true,
          systemTest: false,
          maintenance: false,
        },
        achievementList: [
          {
            label: "works.content1.achievementList1.label",
            description: "works.content1.achievementList1.description",
            archievement: "works.content1.achievementList1.archievement",
            style: "",
          },
          {
            label: "works.content1.achievementList2.label",
            description: "works.content1.achievementList2.description",
            archievement: "works.content1.achievementList2.archievement",
            style: "",
          },
          {
            label: "works.content1.achievementList3.label",
            description: "works.content1.achievementList3.description",
            archievement: "works.content1.achievementList3.archievement",
            style: "",
          },
        ],
      },
      {
        id: 2,
        title: "works.content2.title",
        subTitle: "works.content2.subTitle",
        description: "works.content2.description",
        period: "works.content2.period",
        src: require("@/assets/img/file_sharing.svg"),
        style: "",
        selected: false,
        developmentPhase: {
          definition: false,
          basicDesign: true,
          detailDesign: true,
          coding: true,
          unitTest: true,
          integrationTest: false,
          systemTest: false,
          maintenance: false,
        },
        achievementList: [
          {
            label: "works.content2.achievementList1.label",
            description: "works.content2.achievementList1.description",
            archievement: "works.content2.achievementList1.archievement",
            style: "",
          },
          {
            label: "works.content2.achievementList2.label",
            description: "works.content2.achievementList2.description",
            archievement: "works.content2.achievementList2.archievement",
            style: "",
          },
          {
            label: "works.content2.achievementList3.label",
            description: "works.content2.achievementList3.description",
            archievement: "works.content2.achievementList3.archievement",
            style: "",
          },
          {
            label: "works.content2.achievementList4.label",
            description: "works.content2.achievementList4.description",
            archievement: "works.content2.achievementList4.archievement",
            style: "",
          },
          {
            label: "works.content2.achievementList5.label",
            description: "works.content2.achievementList5.description",
            archievement: "works.content2.achievementList5.archievement",
            style: "",
          },
          {
            label: "works.content2.achievementList6.label",
            description: "works.content2.achievementList6.description",
            archievement: "works.content2.achievementList6.archievement",
            style: "",
          },
          {
            label: "works.content2.achievementList7.label",
            description: "works.content2.achievementList7.description",
            archievement: "works.content2.achievementList7.archievement",
            style: "",
          },
        ],
      },
      {
        id: 3,
        title: "works.content3.title",
        subTitle: "works.content3.subTitle",
        description: "works.content3.description",
        period: "works.content3.period",
        src: require("@/assets/img/shopping.svg"),
        style: "",
        selected: false,
        developmentPhase: {
          definition: false,
          basicDesign: false,
          detailDesign: false,
          coding: true,
          unitTest: true,
          integrationTest: true,
          systemTest: false,
          maintenance: false,
        },
        achievementList: [
          {
            label: "works.content3.achievementList1.label",
            description: "works.content3.achievementList1.description",
            archievement: "works.content3.achievementList1.archievement",
            style: "",
          },
          {
            label: "works.content3.achievementList2.label",
            description: "works.content3.achievementList2.description",
            archievement: "works.content3.achievementList2.archievement",
            style: "",
          },
          {
            label: "works.content3.achievementList3.label",
            description: "works.content3.achievementList3.description",
            archievement: "works.content3.achievementList3.archievement",
            style: "",
          },
          {
            label: "works.content3.achievementList4.label",
            description: "works.content3.achievementList4.description",
            archievement: "works.content3.achievementList4.archievement",
            style: "",
          },
        ],
      },
    ]);

    //スクロール時のナビゲーション選択状態変更
    const chengeNavChecked = (targetId: string) => {
      for (const item of navigationList.value) {
        if (_.isEqual(item.id, targetId)) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      }
    };

    //ナビゲーションクリック
    const clickNavigate = (eventName: string) => {
      for (const item of navigationList.value) {
        if (_.isEqual(item.eventName, eventName) && item.selected) {
          return;
        } else if (_.isEqual(item.eventName, eventName)) {
          const target = document.getElementById(item.id);
          if (target != null) {
            const blueLeft = target.getBoundingClientRect().left;
            const blueTop =
              window.pageYOffset + target.getBoundingClientRect().top - 50;
            switch (eventName) {
              case "nabigateWorks":
                if (isWorksShow.value) {
                  window.scrollTo({
                    left: blueLeft,
                    top: blueTop,
                    behavior: "smooth",
                  });
                }
                break;
              case "nabigateContact":
                if (isContactShow.value) {
                  window.scrollTo({
                    left: blueLeft,
                    top: blueTop,
                    behavior: "smooth",
                  });
                }
                break;
              default:
                window.scrollTo({
                  left: blueLeft,
                  top: blueTop,
                  behavior: "smooth",
                });
            }
            item.selected = true;
          } else {
            switch (eventName) {
              case navigationList.value[4].eventName:
                isSettingOpen.value = !isSettingOpen.value;
                break;
              default:
            }
          }
        } else {
          item.selected = false;
        }
      }
    };

    //work選択
    const clickWork = (item: WorksContentType) => {
      for (const workItem of worksContentList.value) {
        if (_.isEqual(item.id, workItem.id)) {
          workItem.selected = true;
        } else {
          workItem.selected = false;
        }
      }
    };

    //スクロール
    const scrollDisplay = () => {
      const targetY = window.scrollY;
      if (targetY === null) {
        return;
      }
      //属性取得
      const aboutTarget = document.getElementById("about");
      const skillTarget = document.getElementById("skill");
      const worksTarget = document.getElementById("works");
      const contactTarget = document.getElementById("contact");

      //位置取得
      const aboutPosition = ref();
      const skillPosition = ref();
      const worksPosition = ref();
      const contactPosition = ref();

      const targetId = ref("home");

      if (aboutTarget != null) {
        aboutPosition.value =
          window.pageYOffset + aboutTarget.getBoundingClientRect().top - 49;
      }
      if (skillTarget != null) {
        skillPosition.value =
          window.pageYOffset + skillTarget.getBoundingClientRect().top - 49;
      }
      if (worksTarget != null) {
        worksPosition.value =
          window.pageYOffset + worksTarget.getBoundingClientRect().top - 49;
      }
      if (contactTarget != null) {
        contactPosition.value =
          window.pageYOffset + contactTarget.getBoundingClientRect().top - 200;
      }

      if (targetY > 0) {
        targetId.value = "about";
        if (!isAboutShow.value) {
          isAboutShow.value = true;
        }
      }

      if (targetY > skillPosition.value - 300) {
        targetId.value = "about";
        if (!isSkillShow.value) isSkillShow.value = true;
      }

      if (targetY > worksPosition.value - 400) {
        if (!isWorksShow.value) {
          isWorksShow.value = true;
        }
        if (targetY > worksPosition.value) {
          targetId.value = "works";
        }
      }
      if (targetY > contactPosition.value - 400) {
        if (!isContactShow.value) {
          isContactShow.value = true;
        }
        if (targetY > contactPosition.value) {
          targetId.value = "contact";
        }
      }

      chengeNavChecked(targetId.value);

      //スマホブラウザ メニューバー表示判定
      isNotNavigationShow.value = targetYPosition.value <= targetY - 30;
      targetYPosition.value = targetY;
    };

    //モーダル状態監視
    watch(isSettingOpen, (newVal, oldVal) => {
      if (oldVal) {
        setTimeout(() => {
          isModalOpen.value = newVal;
        }, 1000 * 0.3);
      } else {
        isModalOpen.value = newVal;
      }
    });

    //画面上部に移動
    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return {
      isAboutShow,
      isSkillShow,
      isWorksShow,
      isContactShow,
      isNotNavigationShow,
      isModalOpen,
      isSettingOpen,
      navigationList,
      aboutContent,
      worksContentList,
      skillContentList,
      scrollDisplay,
      clickWork,
      clickNavigate,
    };
  },
});
</script>
