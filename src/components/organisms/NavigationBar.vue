<template>
  <div
    class="NavigationArea"
    :class="[
      { ' NavigationArea--off': isNotNavigationShow },
      { ' NavigationArea--on': !isNotNavigationShow },
    ]"
  >
    <div class="NavigationArea__content">
      <div
        class="NavigationArea__logo"
        @click="clickNavigate(navigationList[0])"
      >
        <img src="@/assets/img/ando_logo.png" alt="" />
      </div>
      <div
        class="NavigationContent__txt"
        @click="clickNavigate(navigationList[0])"
      >
        ANDO'S PORTFOLIO
      </div>
      <ul>
        <li
          v-for="(navigateItem, navigateidx) in navigationList"
          :key="navigateidx"
          @click="clickNavigate(navigateItem)"
        >
          <span
            class="NavigationArea__item"
            :class="
              (navigateItem.style, { 'selected-title': navigateItem.selected })
            "
            >{{ navigateItem.label }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NavigationType } from "@/interface/navigation";

export default defineComponent({
  name: "NavigationBar",
  props: {
    navigationList: {
      type: Array as PropType<NavigationType[]>,
      required: true,
    },
    isNotNavigationShow: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props, { emit }) {
    const clickNavigate = (item: NavigationType) => {
      emit("clickNavigate", item.eventName);
    };
    return { clickNavigate };
  },
});
</script>

<style lang="scss" scoped></style>
