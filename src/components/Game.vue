<template>
    <div id="game">
        <head-nav></head-nav>
        <answer-button></answer-button>
        <div class="container">
          <div class="col-md-8 col-md-offset-2">
            <div class="row">
              
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import headNav from '@/components/headNav'
import answerButton from '@/components/answerButton'

export default {
  name: 'Game',
  components: {
    'head-nav': headNav,
    'answer-button': answerButton
  }
}
</script>

<style>

</style>
