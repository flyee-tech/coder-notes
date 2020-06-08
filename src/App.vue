<template>
  <div id="app" class="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
    import Header from "@/components/Header.vue";

    export default {
        name: "App",
        components: {
            Header
        }
    };
</script>

<style>
.app{
    background-color: beige;
}
</style>
