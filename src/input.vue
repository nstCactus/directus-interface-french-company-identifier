<template>
    <div class="siret-interface">
        <span>
            <v-input :class="{invalid: !isValid}"
                     :id="id"
                     :name="name"
                     v-model="siret"
                     v-mask="'### ### ### #####'"
                     @input="onInput"
                     placeholder="123 456 789 00016"
                     :disabled="readonly"
                     :required="required"
            ></v-input>
        </span>
        <br>
    </div>
</template>

<script>
  import mixin       from '@directus/extension-toolkit/mixins/interface';
  import * as vss  from 'vat-siren-siret';
  import { TheMask } from 'vue-the-mask';

  export default {
    directives: { TheMask },

    mixins: [ mixin ],

    data () {
      return {
        siret:    this.value,
        isValid:  false,
      };
    },

    methods: {
      onInput (event) {
        const siret = this.siret.replace(/\s/g, '');

        this.isValid = false;

        if (!vss.isSIRET(siret)) {
          this.$emit('input', null);
          return;
        }

        this.isValid = true;
        this.$emit('input', siret);
      },
    },
  };
</script>

<style lang="scss" scoped>
    input {
        border-radius: var(--border-radius);
    }

    .invalid {
        box-shadow: 0 0 5px 0 red;
    }
</style>
