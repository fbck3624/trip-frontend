<template>
  <main>
    <div>
      <CarouselComponent />
    </div>
    <div>
      <CreateItineraryComponent @itinerary-created="handleItineraryCreated" />
    </div>
    <div>
      <RecommendCategoryComponent />
    </div>
  </main>
</template>

<script>
import CarouselComponent from "@/components/common/CarouselComponent.vue";
import CreateItineraryComponent from "@/components/home/CreateItineraryComponent.vue";
import RecommendCategoryComponent from "@/components/home/RecommendCategoryComponent.vue";

export default {
  name: "HomeView",
  components: {
    CarouselComponent,
    CreateItineraryComponent,
    RecommendCategoryComponent,
  },
};
</script>

<style>
main {
  text-align: center;
}
</style>
