<template>
  <div class="middleLineParent">
    <div class="middleLine"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.middleLineParent{
  width: 0;
  height: 0;
  margin: 0 auto;

}
.middleLine{
  position: absolute;
  top: 3.5rem;
  width: 0.3rem;
  height: 15rem;
  margin: auto;
  background-color: var(--theme-yellow);
}
</style>
