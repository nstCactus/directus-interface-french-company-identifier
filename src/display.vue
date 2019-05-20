<template>
  <div>
    <a :href="moreInfoLinkUrl" @click="onClick" target="_blank" rel="noopener,nofollow">
      {{ displayValue }}
    </a>
  </div>
</template>

<script>
  import mixin from "@directus/extension-toolkit/mixins/interface";
  import typeMapping from './french-company-identifier-types';

  export default {
    mixins: [mixin],

    computed: {
      displayValue() {
        const value = this.value || '';

        return typeMapping[this.options.type].formatFunction(value);
      },

      moreInfoLinkUrl() {
        return `https://www.societe.com/cgi-bin/search?champs=${this.value}`;
      },
    },

    methods: {
      onClick(event) {
        event.stopPropagation();
      },
    },
  }
</script>
