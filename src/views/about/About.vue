<template>
  <NavigationBar
    :navigationList="navigationList"
    @clickNavigate="clickNavigate"
  />
  <div class="Main" :class="{ 'MainContennt--modal_open': isSettingOpen }">
    <div class="Main--content" @click="isSettingOpen = false">
      <Stack title="About" titleStyle="Content__title--mt24">
        <template #content>
          <AboutContent
            :aboutContent="aboutContent"
            @clickContent="clickContent"
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
import { defineComponent, ref, reactive, watch, onMounted } from "vue";
import router from "@/router";
import NavigationBar from "@/components/organisms/NavigationBar.vue";
import Stack from "@/components/organisms/Stack.vue";
import AboutContent from "@/components/organisms/AboutContent.vue";
import SettingModal from "@/components/organisms/modal/Settings.vue";
import Footer from "@/components/organisms/Footer.vue";

import _ from "lodash";
import { NavigationType } from "@/interface/navigation";
import { AboutContentType } from "@/interface/aboutContent";

export default defineComponent({
  name: "AboutView",
  components: {
    NavigationBar,
    Stack,
    AboutContent,
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
        selected: true,
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
          description: "about.history.content1.description",
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
      aboutContent,
      clickNavigate,
    };
  },
});
</script>
