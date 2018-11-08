<template>
  <div class="emotion-buttons">
    <div v-for="emotion in ['angry', 'curious', 'love', 'boring', 'like', 'surprise']"
      :key="emotion"
      class="emotion-button">
      {{ emotion }}
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.emotion-buttons {
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
}

.emotion-buttons .emotion-button {
  padding: 1rem;
  text-align: center;
}
</style>
