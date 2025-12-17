<script setup lang="ts"></script>

<template>
  <div class="form-group">
    <slot></slot>
  </div>
</template>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
</style>
