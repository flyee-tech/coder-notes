<template>
  <div
    id="app"
    class="app"
  >
    <Header v-if="is_public" />
    <MHeader v-else />
    <router-view />
  </div>
</template>

<script>
    import Header from "@/components/Header.vue";
    import MHeader from "@/components/MHeader.vue";

    export default {
        name: "App",
        components: {
            Header,
            MHeader
        },
        data() {
            return {
                is_public: false,
            }
        },
        mounted() {
            this.is_public = window.location.href.indexOf('manager') === -1;
            // console.log(this.$route.path)
            // console.log(window.location.href)
            // console.log(this.$router.currentRoute);
        },
    };
</script>

<style>
    .app {
        background-color: beige;
    }
</style>
