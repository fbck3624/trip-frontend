<template>
  <div class="my-trips">
    <div class="trips-header">
      <h2>我的行程</h2>
      <button class="view-all-btn" @click="viewAllTrips">查看我的行程</button>
    </div>
    <div class="trips-table">
      <div class="trips-column-names">
        <span>行程</span>
        <span>地點</span>
        <span>時間</span>
        <span>天數</span>
        <span>預算</span>
        <span>花費</span>
        <span>景點數</span>
        <span>人數</span>
      </div>
      <ul class="trips-list">
        <li v-for="trip in trips" :key="trip.id" class="trip-item">
          <div class="trip-info">
            <img :src="trip.image" :alt="trip.name" class="trip-image" />
            <div>
              <h4>{{ trip.name }}</h4>
              <p class="trip-description">{{ trip.description }}</p>
            </div>
          </div>
          <p class="trip-location">{{ trip.location }}</p>
          <p class="trip-date">{{ trip.date }}</p>
          <p class="trip-days">{{ trip.days }} 天</p>
          <p class="trip-budget">NT$ {{ formatNumber(trip.budget) }}</p>
          <p class="trip-cost">NT$ {{ formatNumber(trip.cost) }}</p>
          <p class="trip-sights">{{ trip.sights }}</p>
          <p class="trip-people">{{ trip.people }} 人</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const trips = ref([
  {
    id: 1,
    name: "東京探索",
    description: "體驗日本文化",
    image: require("@/assets/image.png"),
    location: "日本東京",
    date: "2024/01/02",
    days: 5,
    budget: 45000,
    cost: 42000,
    sights: 15,
    people: 2,
  },
  {
    id: 2,
    name: "巴黎浪漫",
    description: "藝術與美食之旅",
    image: require("@/assets/image.png"),
    location: "法國巴黎",
    date: "2022/05/13",
    days: 7,
    budget: 80000,
    cost: 78000,
    sights: 20,
    people: 4,
  },
  {
    id: 3,
    name: "紐約冒險",
    description: "城市探索之旅",
    image: require("@/assets/image.png"),
    location: "美國紐約",
    date: "2019/10/15",
    days: 6,
    budget: 70000,
    cost: 68000,
    sights: 18,
    people: 3,
  },
]);

const viewAllTrips = () => {
  console.log("查看我的行程");
};

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
</script>

<style scoped>
.my-trips {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: Arial, sans-serif;
}

.trips-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.trips-header h2 {
  font-size: 2rem;
  color: #333;
  margin: 0;
}

.view-all-btn {
  background-color: #7c4dff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.view-all-btn:hover {
  background-color: #6a3bff;
  transform: translateY(-2px);
}

.trips-table {
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.trips-column-names {
  display: flex;
  background-color: #fff;
  padding: 15px;
  font-weight: bold;
  color: #666;
  border-bottom: 1px solid #eee;
}

.trips-column-names span,
.trip-item > * {
  flex: 1;
  text-align: center;
}

.trips-column-names span:first-child,
.trip-info {
  flex: 2;
  text-align: left;
}

.trips-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.trip-item {
  display: flex;
  align-items: center;
  padding: 20px 15px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
}

.trip-info {
  display: flex;
  align-items: center;
}

.trip-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 15px;
  border-radius: 10px;
}

.trip-info h4 {
  margin: 0;
  font-size: 1.1rem;
  color: #333;
}

.trip-description {
  margin: 5px 0 0;
  font-size: 0.9rem;
  color: #666;
}

.trip-location,
.trip-date,
.trip-days,
.trip-budget,
.trip-cost,
.trip-sights,
.trip-people {
  font-size: 0.9rem;
  color: #333;
}

.trip-budget,
.trip-cost {
  color: #50b83c;
  font-weight: bold;
}
</style>
