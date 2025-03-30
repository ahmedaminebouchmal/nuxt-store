<template>
  <font-awesome-icon
    :icon="[prefix, name]"
    :class="className"
    :size="size"
  />
</template>

<script setup lang="ts">
interface Props {
  name: string
  prefix?: 'fas' | 'far' | 'fab'
  size?: 'xs' | 'sm' | 'lg' | 'xl' | '2x'
  className?: string
}

withDefaults(defineProps<Props>(), {
  prefix: 'fas',
  size: 'lg',
  className: ''
})
</script>
