<template>
  <header class="header">
    <div class="left-section">
      <h1 class="website-name">TripTrekker</h1>
    </div>
    <div class="right-section">
      <button class="menu-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="navigation" :class="{ 'show-menu': isMenuOpen }">
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
              to="create-itinerary"
              :class="{ active: isActive('create-itinerary') }"
              @click="setActivePage('create-itinerary')"
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
const isMenuOpen = ref(false);

const setActivePage = (page) => {
  activePage.value = page;
  isMenuOpen.value = false;
};

const isActive = (page) => {
  return activePage.value === page;
};

const goToPersonal = () => {
  router.push("/personal");
  setActivePage("");
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
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
  padding: 5px 10px;
}

.navigation a.active {
  background-color: rgb(224, 217, 217);
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

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.menu-toggle span {
  width: 100%;
  height: 3px;
  background-color: black;
  transition: all 0.3s linear;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .navigation {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: white;
    flex-direction: column;
    align-items: center;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }

  .navigation.show-menu {
    max-height: 300px;
  }

  .navigation ul {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }

  .navigation li {
    margin: 10px 0;
  }

  .search-bar {
    display: none;
  }
}
</style>
