<template>
  <header class="header">
    <div class="left-section">
      <h1 class="website-name">TripTrekker</h1>
    </div>
    <div class="right-section">
      <nav class="navigation">
        <ul>
          <li>
            <router-link
              to="/"
              :class="{ active: isActive('/') }"
              @click="setActivePage('/')"
              >首頁</router-link
            >
          </li>
          <li>
            <router-link
              to="#my-trips"
              :class="{ active: isActive('#my-trips') }"
              @click="setActivePage('#my-trips')"
              >我的行程</router-link
            >
          </li>
          <li>
            <router-link
              to="#attraction-search"
              :class="{ active: isActive('#attraction-search') }"
              @click="setActivePage('#attraction-search')"
              >景點查詢</router-link
            >
          </li>
          <li>
            <router-link
              to="#budget-planning"
              :class="{ active: isActive('#budget-planning') }"
              @click="setActivePage('#budget-planning')"
              >預算規劃</router-link
            >
          </li>
          <li>
            <router-link
              to="#social"
              :class="{ active: isActive('#social') }"
              @click="setActivePage('#social')"
              >社群</router-link
            >
          </li>
        </ul>
      </nav>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="搜尋..."
        class="search-bar"
      />
      <img
        src="@/assets/image.png"
        alt="Avatar"
        class="avatar"
        @click="goToPersonal"
      />
    </div>
  </header>
  <div class="line"></div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const searchQuery = ref("");
const activePage = ref("#home");
const router = useRouter();

const setActivePage = (page) => {
  activePage.value = page;
};

const isActive = (page) => {
  return activePage.value === page;
};

const goToPersonal = () => {
  router.push("/personal");
  setActivePage("");
};
</script>

<style scoped>
/* 保持原有樣式不變 */
.header {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: rgb(0, 0, 0);
  margin: 0 auto;
  margin-top: 1%;
  margin-bottom: 1%;
}

.left-section {
  flex: 1;
}

.website-name {
  margin: 0;
  font-size: 24px;
  display: flex;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

.navigation ul {
  list-style: none;
  display: flex;
  gap: 35px;
  margin: 0;
  padding: 0;
}

.navigation a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  padding: 5px 10px; /* 為了讓顏色區塊顯示更明顯 */
}

.navigation a.active {
  background-color: rgb(224, 217, 217); /* 當前頁籤區塊顏色變深 */
  border-radius: 4px;
}

.navigation a:hover {
  text-decoration: underline;
}

.search-bar {
  padding: 5px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid black;
  outline: none;
}

.line {
  width: 96%;
  height: 1px;
  background-color: rgb(192, 192, 192);
  margin-left: 2%;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.avatar:hover {
  transform: scale(1.2);
}
</style>
