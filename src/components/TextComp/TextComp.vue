<script setup lang="ts">
import { defineProps } from 'vue'
import { textDefaultProps, textStylePropNames } from '../../common/defaultProps'
import { useCompCommon } from '../../hooks/useCompCommon'
import type { TextComponentProps } from '../../types/props'

const props = withDefaults(defineProps<TextComponentProps>(), {
  ...textDefaultProps
})

const { styleProps, handleClick } = useCompCommon(props, textStylePropNames)
</script>

<template>
  <component :is="tag" @click="handleClick" :style="styleProps" :class="['text-comp']">
    {{ props.text }}
  </component>
</template>

<style scoped lang="less"></style>
