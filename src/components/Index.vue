<template>
<div id="index">
  <head-nav></head-nav>
  <welcome></welcome>
</div>
</template>

<script>
import headNav from '@/components/headNav'
import welcome from '@/components/welcome'

export default {
  name: 'Index',
  components: {
    'head-nav': headNav,
    'welcome': welcome
  }
}
</script>

<style>

</style>
