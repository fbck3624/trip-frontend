<template>
  <div class="recommendations">
    <h2 class="title">熱門城市推薦</h2>
    <div class="grid">
      <div class="grid-item" v-for="i in 6" :key="i">
        <div class="image-container">
          <img :src="imageSrc" alt="City Image" />
          <div class="overlay">
            <p>東京</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define the reactive image source
const imageSrc = ref(require("@/assets/image.png"));
</script>

<style scoped>
.recommendations {
  width: 60%;
  margin: 2% auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center; /* Center align the title */
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.grid-item {
  position: relative;
  width: 100%;
  padding-top: 100%; /* This ensures the grid item is a square */
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
}

.image-container img {
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 2%;
  transition: opacity 0.3s ease-in-out;
}

.image-container:hover img {
  opacity: 0.3;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  pointer-events: none; /* Ensure that the overlay does not block pointer events */
  transition: transform 0.3s ease-in-out;
}

.image-container:hover .overlay {
  transform: translate(-50%, -50%) scale(1.5);
}

.overlay p {
  margin: 0;
}
</style>
