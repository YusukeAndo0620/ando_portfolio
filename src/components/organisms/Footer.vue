<template>
  <footer class="FooterArea">
    <div class="FooterContent">
      <div class="FooterContent_item">
        <span> Copyright © ANDO portfolio 2022 </span>
      </div>
      <div class="FooterContent_item">
        <div
          class="Icon Icon--s28 Icon--github"
          @click="navigateGithub"
          @touchend="navigateGithub"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterContent",
  setup() {
    const navigateGithub = () => {
      window.open("https://github.com/YusukeAndo0620/ando_portfolio", "_blank");
    };
    return {
      navigateGithub,
    };
  },
});
</script>

<style lang="scss" scoped></style>
