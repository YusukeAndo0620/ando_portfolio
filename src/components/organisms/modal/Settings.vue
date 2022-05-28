<template>
  <div :class="[{ 'Modal--off': !isModalOpen }, { Modal: isModalOpen }]">
    <div class="ModalArea">
      <div class="ModalHeaderArea">
        <div class="HeaderArea">
          <div class="HeaderArea__titile">{{ $t("setting.title") }}</div>
          <div class="HeaderArea__close" @click="clickClose">
            <span class="close"></span>
          </div>
        </div>
      </div>
      <div class="ModalContenArea">
        <div
          v-for="(contentItem, contentItemIdx) in modalContentList"
          :key="contentItemIdx"
          class="ContentArea"
          :class="contentItem.style"
        >
          <div class="ContentArea__title">{{ $t(contentItem.title) }}</div>
          <div class="ContentArea__description">
            {{ $t(contentItem.description) }}
          </div>
          <div class="ContentArea__select-area">
            <div
              v-for="(selectItem, selectItemIdx) in contentItem.selectList"
              :key="selectItemIdx"
              class="ContentAreaSelectBlock"
              :class="{
                'ContentAreaSelectBlock--selected': selectItem.selected,
              }"
              @click="clickItem(contentItem.id, selectItem)"
            >
              <div
                class="ContentAreaSelectBlock__label"
                :class="selectItem.style"
              >
                {{ $t(selectItem.label) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { SettingContentType, SelectContent } from "@/interface/settingContent";
import store from "@/store";
import _ from "lodash";
//多言語
import i18n from "@/i18n/locales/index";
import { localize } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json";
import ja from "@vee-validate/i18n/dist/locale/ja.json";
localize({
  en,
  ja,
});

export default defineComponent({
  name: "SettingsContent",
  props: {
    contentList: {
      type: String,
      required: true,
    },
    isModalOpen: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props, { emit }) {
    //レンダリング制御:モーダル表示
    // const isOpen = computed((): boolean => {
    //   const tempFlg = ref(false);
    //   if (!props.isModalOpen) {
    //     nextTick(() => {
    //       tempFlg.value = false;
    //     });
    //   } else {
    //     tempFlg.value = true;
    //   }
    //   return tempFlg.value;
    // });
    const modalContentList = ref<SettingContentType[]>([
      {
        id: 1,
        title: "setting.mode.title",
        description: "setting.mode.description",
        style: "",
        selectList: [
          {
            id: 1,
            label: "setting.mode.lightMode",
            value: "lightMode",
            selected: true,
            style: "",
          },
          {
            id: 2,
            label: "setting.mode.darkMode",
            value: "darkMode",
            selected: false,
            style: "",
          },
        ],
      },
      {
        id: 2,
        title: "setting.language.title",
        description: "setting.language.description",
        style: "",
        selectList: [
          {
            id: 1,
            label: "setting.language.japanese",
            value: "ja",
            selected: true,
            style: "",
          },
          {
            id: 2,
            label: "setting.language.english",
            value: "en",
            selected: false,
            style: "",
          },
        ],
      },
    ]);

    //言語（store）
    const storeLanguge = store.getters.language;
    //モード（store）
    const storeDisplayMode = store.getters.displayMode;

    //初期レンダリング時、storeから値取得し、選択状況を判定する。

    //選択中となっている物を更新
    const changeSelectedValue = (mainId: number, subId: number) => {
      const idx = modalContentList.value.findIndex((item: SettingContentType) =>
        _.isEqual(item.id, mainId)
      );
      for (const item of modalContentList.value[idx].selectList) {
        if (_.isEqual(item.id, subId)) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      }
    };

    //言語設定
    const changeLanguage = (id: number) => {
      //日本語
      if (id === 1) {
        i18n.global.locale = "ja";
        localize("ja", ja);
        //英語
      } else if (id === 2) {
        localize("en", en);
        i18n.global.locale = "en";
      }
    };

    //ライトモード、ダークモードの設定
    const changeMode = (id: number) => {
      const html = document.documentElement;
      if (id === 1) {
        html.classList.add("light-mode");
        html.classList.remove("dark-mode");
      } else if (id === 2) {
        html.classList.remove("light-mode");
        html.classList.add("dark-mode");
      } else {
        html.classList.add("light-mode");
        html.classList.remove("dark-mode");
      }
    };

    //言語、モード切り替え時
    const clickItem = (id: number, item: SelectContent) => {
      if (item.selected) {
        return;
      }
      const tempObj = reactive({
        id: 1,
        value: "",
      });
      tempObj.id = item.id;
      tempObj.value = item.value;

      if (id === 1) {
        //モード切り替え
        changeMode(item.id);
        store.commit("setDisplayMode", tempObj);
      } else if (id === 2) {
        //言語切り替え
        changeLanguage(item.id);
        store.commit("setLanguage", tempObj);
      }
      changeSelectedValue(id, item.id);
    };

    const clickClose = () => {
      emit("clickClose");
    };

    //初期レンダリング時、storeから値取得し、選択状況を判定する。
    //モード
    changeSelectedValue(1, storeDisplayMode.id);
    changeMode(storeDisplayMode.id);
    console.log(storeDisplayMode.id);
    //言語
    changeSelectedValue(2, storeLanguge.id);
    changeLanguage(storeLanguge.id);

    // watch(
    //   isOpen,
    //   (oldVal, newVal) => {
    //     console.log("test");
    //     if (oldVal) {
    //       // isOpen.value = oldVal;
    //       setTimeout(() => {
    //         // isOpen.value = newVal;
    //       }, 1000 * 5);
    //     }
    //   },
    //   { deep: true }
    // );

    return { clickItem, modalContentList, clickClose };
  },
});
</script>

<style lang="scss" scoped></style>
