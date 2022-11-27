<template>
  <div class="ContactArea">
    <div class="ContactArea__header">
      <div
        class="ContactHeader__description"
        v-html="$t('contact.description')"
      />
    </div>
    <div class="ContactArea__content">
      <div class="ContactContentBtnArea">
        <div class="ContactContentBtnArea__btn" @click="sendMail">
          <div class="ContactContentBtnArea__btn-Area">
            <div
              class="ContactContentBtnArea__icon Icon Icon--s24 Icon--mail"
            />
            <div class="ContactContentBtnArea__msg">
              {{ $t("contact.message") }}
            </div>
          </div>
        </div>
      </div>
      <div class="ContactContent__description">
        {{ $t("contact.contentDescription") }}
        {{ $t("contact.part") }}@{{ $t("contact.domail") }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContactContent",
  props: {
    isHistoryShow: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props, { emit }) {
    const sendMail = () => {
      const address = ref("");
      const subject = ref("");
      const body = ref("");

      address.value = "ando08620@gmail.com";
      subject.value = "";
      body.value = "";

      location.href =
        "mailto:" +
        address.value +
        "?subject=" +
        subject.value +
        "&body=" +
        body.value;
    };
    return { sendMail };
  },
});
</script>

<style lang="scss" scoped></style>
