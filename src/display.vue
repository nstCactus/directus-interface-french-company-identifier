<template>
  <div>
    <a :href="moreInfoLinkUrl" target="_blank" rel="noopener,nofollow">
      {{ displayValue }}
    </a>
  </div>
</template>

<script>
  import mixin from "@directus/extension-toolkit/mixins/interface";
  import * as vss from 'vat-siren-siret';

  export default {
    mixins: [mixin],

    computed: {
      displayValue() {
        const value = this.value || '';

        return vss.formatSIRET(value);
      },

      moreInfoLinkUrl() {
        return `https://www.societe.com/cgi-bin/search?champs=${this.value}`;
      },
    }
  }
</script>
