<template>
  <div id="create-itinerary-view" class="container">
    <main>
      <!-- 控制按鈕固定在右側 -->
      <div class="view-mode-controls">
        <ModelSelectorComponent
          :viewMode="viewMode"
          @update:viewMode="handleViewModeChange"
        />
      </div>

      <div class="content-area">
        <!-- 只有在 Day 模式下顯示 DaySwitchComponent 和 AttractionsListComponent -->
        <div class="day-switch" v-if="viewMode === 'day'">
          <DaySwitchComponent
            :days="days"
            :selectedDay="selectedDay"
            @update:selectedDay="handleDaySelection"
          />
        </div>
        <div class="attractions-area" v-if="viewMode === 'day'">
          <AttractionsListComponent
            :attractions="itinerary[selectedDay - 1].attractions"
            :selectedDay="selectedDay"
          />
        </div>
        <div class="right-area" v-if="viewMode === 'day'">
          <div class="todo">
            <TodoListComponent
              :tasks="itinerary[selectedDay - 1].tasks"
              @update:tasks="updateTasks"
            />
            <!-- <div class="account">
              <ExpenseTrackerComponent />
            </div> -->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModelSelectorComponent from "../components/trip/ModelSelectorComponent.vue";
import DaySwitchComponent from "../components/trip/DaySwitchComponent.vue";
import AttractionsListComponent from "../components/trip/AttractionsListComponent.vue";
import TodoListComponent from "../components/trip/TodoListComponent.vue";
// import ExpenseTrackerComponent from "../components/trip/ExpenseTrackerComponent.vue";

const viewMode = ref("day"); // 預設顯示「Day」視圖

const handleViewModeChange = (mode) => {
  viewMode.value = mode; // 更新視圖模式
};

const days = ref([1, 2, 3, 4, 5, 6, 7]);
const selectedDay = ref(1);

const handleDaySelection = (day) => {
  selectedDay.value = day;
};

const itinerary = ref(
  days.value.map(() => ({
    attractions: [
      {
        name: "Attraction 1",
        notes: "Notes 1",
        image: require("@/assets/image.png"),
      },
      {
        name: "Attraction 2",
        notes: "Notes 2",
        image: require("@/assets/image.png"),
      },
      {
        name: "Attraction 3",
        notes: "Notes 3",
        image: require("@/assets/image.png"),
      },
      {
        name: "Attraction 4",
        notes: "Notes 4",
        image: require("@/assets/image.png"),
      },
      {
        name: "Attraction 5",
        notes: "Notes 5",
        image: require("@/assets/image.png"),
      },
      {
        name: "Attraction 6",
        notes: "Notes 6",
        image: require("@/assets/image.png"),
      },
    ],
  }))
);

const updateTasks = (tasks) => {
  itinerary.value[selectedDay.value - 1].tasks = tasks;
};
</script>

<style scoped>
.container {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between; /* 將內容分布到兩側 */
}

main {
  display: block;
  flex: 1;
}

.view-mode-controls {
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* 控制按鈕固定在右側 */
  width: 90%;
}

.day-switch {
  width: 10%;
  padding-right: 2%;
}

.content-area {
  display: flex;
}

.attractions-area {
  width: 50%;
}

.right-area {
  width: 35%;
}

.top {
  display: flex;
}
</style>
