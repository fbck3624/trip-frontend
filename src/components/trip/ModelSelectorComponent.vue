<template>
  <div class="model-selector">
    <button :class="{ active: viewMode === 'day' }" @click="setViewMode('day')">
      Day
    </button>
    <button
      :class="{ active: viewMode === 'week' }"
      @click="setViewMode('week')"
    >
      Week
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  viewMode: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:viewMode"]);

const setViewMode = (mode) => {
  emit("update:viewMode", mode);
};
</script>

<style scoped>
.model-selector {
  display: flex;
}

.model-selector button {
  flex: 1;
  margin-left: 10px; /* 調整按鈕間距 */
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.model-selector button.active {
  background-color: #8e44ad;
  color: white;
}

.model-selector button:first-child {
  margin-left: 0;
  width: 200px;
  height: 50px;
}
</style>
