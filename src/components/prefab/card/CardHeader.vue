<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "",
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
<template>
  <div v-if="props.title !== ''" class="card-header">
    <h1 id="main-title">{{ props.title }}</h1>
    <p v-if="props.description !== ''">{{ props.description }}</p>
  </div>
</template>

<style scoped>
.card-header {
  border-radius: 0;

  > p {
    font-weight: lighter;
    margin: 0.5rem 0 3rem 0;
  }

  @media (--large-screen) {
    margin: -1rem -2rem 1rem -2rem;
    padding: 1rem 2rem;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }
}
</style>
