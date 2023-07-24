<template>
  <div class="home bg-[#f03636]">
    <Icon icon="material-symbols:10k-sharp" color="black" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts" setup>
// import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
const v1 = ref(2);
// export default defineComponent({
//   name: "HomeView",
//   components: {
//     HelloWorld,
//   },
// });
</script>
