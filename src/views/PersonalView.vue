<template>
  <div id="personal-view" class="container">
    <main>
      <ProfileComponent />
    </main>
  </div>
</template>

<script>
import ProfileComponent from "../components/personal/ProfileComponent.vue";

export default {
  name: "PersonalView",
  components: {
    ProfileComponent,
  },
};
</script>

<style scoped></style>
