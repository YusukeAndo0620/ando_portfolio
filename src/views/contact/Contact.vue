<template>
  <NavigationBar
    :navigationList="navigationList"
    @clickNavigate="clickNavigate"
  />
  <div class="Main" :class="{ 'MainContennt--modal_open': isSettingOpen }">
    <div class="Main--content" @click="isSettingOpen = false">
      <Stack title="Contact" titleStyle="Content__title--mt24">
        <template #content>
          <ContactContent @clickContent="clickContent" />
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
import ContactContent from "@/components/organisms/ContactContent.vue";
import SettingModal from "@/components/organisms/modal/Settings.vue";
import Footer from "@/components/organisms/Footer.vue";

import _ from "lodash";
import { NavigationType } from "@/interface/navigation";
import { AboutContentType } from "@/interface/aboutContent";

export default defineComponent({
  name: "ContactView",
  components: {
    NavigationBar,
    Stack,
    ContactContent,
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
        selected: false,
      },
      {
        label: "Contact",
        id: "contact",
        eventName: "nabigateContact",
        routerName: "Contact",
        style: "",
        selected: true,
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
      clickNavigate,
    };
  },
});
</script>
