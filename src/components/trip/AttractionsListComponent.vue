<template>
  <div class="attractions">
    <h2>Day {{ selectedDay }} Attractions</h2>
    <div class="attractions-list">
      <div
        v-for="(attraction, index) in attractions"
        :key="index"
        class="attraction-item"
      >
        <img :src="attraction.image" alt="Attraction Image" />
        <div class="attraction-details">
          <p class="attraction-name">{{ attraction.name }}</p>
          <p class="attraction-notes">{{ attraction.notes }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  attractions: Array,
  selectedDay: Number,
});
</script>

<style scoped>
.attractions {
  margin-top: 20px;
}

.attractions-list {
  display: flex;
  flex-direction: column;
}

.attraction-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.attraction-item img {
  width: 100px; /* 調整圖片寬度 */
  height: 75px; /* 調整圖片高度 */
  margin-right: 10px; /* 調整圖片與文字的間距 */
}

.attraction-details {
  display: flex;
  flex-direction: column;
}

.attraction-name {
  font-weight: bold;
}

.attraction-notes {
  color: #555;
}
</style>
