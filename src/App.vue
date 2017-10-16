<template>
  <div id="app">
    <Controls/>
    <Information/>
  </div>
</template>

<script>
import Information from './components/Information'
import Controls from './components/Controls'

export default {
  name: 'app',
  components: {
    Information,
    Controls
  }
}
</script>

<style>
#app {
  padding: 0 40px;
}
</style>
