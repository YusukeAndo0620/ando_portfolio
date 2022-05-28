<template>
  <NavigationBar
    :navigationList="navigationList"
    @clickNavigate="clickNavigate"
  />
  <div class="Main" :class="{ 'MainContennt--modal_open': isSettingOpen }">
    <div class="Main--content" @click="isSettingOpen = false">
      <Stack title="Works" titleStyle="Content__title--mt24">
        <template #content>
          <WorksContent
            :worksContentList="worksContentList"
            :isImgShow="false"
            @clickWork="clickWork"
          />
        </template>
      </Stack>
    </div>
    <SettingModal
      v-if="isModalOpen"
      :isModalOpen="isSettingOpen"
      @clickClose="isSettingOpen = false"
    />
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue";
import router from "@/router";
import NavigationBar from "@/components/organisms/NavigationBar.vue";
import Stack from "@/components/organisms/Stack.vue";
import WorksContent from "@/components/organisms/WorksContent.vue";
import SettingModal from "@/components/organisms/modal/Settings.vue";
import Footer from "@/components/organisms/Footer.vue";

import _ from "lodash";
import { NavigationType } from "@/interface/navigation";
import { WorksContentType } from "@/interface/worksContent";

export default defineComponent({
  name: "WorksView",
  components: {
    NavigationBar,
    Stack,
    WorksContent,
    SettingModal,
    Footer,
  },
  setup(props) {
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
        selected: false,
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
        selected: true,
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

    const worksContentList = ref<WorksContentType[]>([
      {
        id: 1,
        title: "works.content1.title",
        subTitle: "works.content1.subTitle",
        description: "works.content1.description",
        period: "works.content1.period",
        src: "/assets/img/life_insurance.jpeg",
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
        src: "/assets/img/file_share.jpeg",
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
        src: "/assets/img/supermarket.jpeg",
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

    //ナビゲーションクリック
    const clickNavigate = (eventName: string) => {
      for (const item of navigationList.value) {
        if (_.isEqual(item.eventName, eventName) && item.selected) {
          return;
        } else if (_.isEqual(item.eventName, eventName)) {
          switch (eventName) {
            case navigationList.value[4].eventName:
              isSettingOpen.value = !isSettingOpen.value;
              break;
            default:
              router.push({
                name: item.routerName,
              });
          }
          break;
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
      isModalOpen,
      isSettingOpen,
      navigationList,
      worksContentList,
      clickNavigate,
      clickWork,
    };
  },
});
</script>
