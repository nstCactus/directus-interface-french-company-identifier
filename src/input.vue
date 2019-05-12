<template>
    <div class="siret-interface">
        <span>
            <v-input class="siret-interface__input"
                     :class="{
                        'siret-interface__input--invalid': !isValid,
                        'siret-interface__input--valid': options.performValidation && isValid
                     }"
                     :id="id"
                     :name="name"
                     v-model="formattedValue"
                     :mask="mask"
                     @input="onInput"
                     :placeholder="placeholder"
                     :disabled="readonly"
                     :required="required"
                     :icon-right="iconRight"
                     :icon-right-color="!isValid ? 'danger' : 'accent'"
            ></v-input>
        </span>
        <br>
    </div>
</template>

<script>
  import mixin       from '@directus/extension-toolkit/mixins/interface';
  import typeMapping from './french-company-identifier-types';

  export default {
    mixins: [ mixin ],

    data () {
      return {
        formattedValue: this.value,
      };
    },

    computed: {
      mask () {
        return typeMapping[ this.options.type ].mask;
      },

      placeholder () {
        return typeMapping[ this.options.type ].placeholder;
      },

      isValid () {
        return this.validate(this.rawValue);
      },

      rawValue () {
        const value = this.formattedValue || '';

        return value.replace(/\s/g, '');
      },

      iconRight () {
        if (this.isValid) {
          return this.options.performValidation ? 'check' : null;
        } else {
          return 'close';
        }
      }
    },

    methods: {
      onInput () {
        this.$emit('input', this.isValid ? this.rawValue : null);
      },

      validate (value) {
        if (!this.options.performValidation || !this.required && !this.formattedValue) {
          return true;
        }

        return typeMapping[ this.options.type ].validationFunction(value);
      },
    },
  };
</script>

<style lang="scss">
    .siret-interface__input {
        &.siret-interface__input--invalid > input {
            border-color: var(--danger) !important;
            color: var(--danger) !important;

            &:focus {
                color: var(--dark-gray) !important;
            }
        }

        &.siret-interface__input--valid > input:focus {
            border-color: var(--accent) !important;
            color: var(--accent) !important;
        }

        &.siret-interface__input--valid > input + i {
            display: none;
        }

        &.siret-interface__input--valid > input:focus + i {
            display: unset;
        }
    }
</style>
