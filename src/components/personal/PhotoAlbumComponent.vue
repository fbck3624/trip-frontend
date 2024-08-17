<template>
  <div class="photo-grid">
    <div class="photo-item" v-for="photo in photos" :key="photo.id">
      <img :src="photo.url" :alt="'Photo ' + photo.id" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  photos: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.photo-item {
  width: 350px;
  padding-top: 300px; /* Creates a square aspect ratio */
  position: relative; /* Makes positioning of child elements easier */
  overflow: hidden;
  border-radius: 8px;
}

.photo-item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the area while maintaining its aspect ratio */
}
</style>
