<template>
  <div
    id="app"
    class="app"
  >
    <Header v-if="is_public === 1" />
    <MHeader v-if="is_public === 2" />
    <ArticleHeader v-if="is_public === 3" />
    <router-view />
  </div>
</template>

<script>
    import Header from "@/components/Header.vue";
    import MHeader from "@/components/MHeader.vue";
    import ArticleHeader from "./components/ArticleHeader";

    export default {
        name: "App",
        components: {
            ArticleHeader,
            Header,
            MHeader
        },
        data() {
            return {
                is_public: 1,
            }
        },
        mounted() {
            if (window.location.href.indexOf('article') !== -1) {
                this.is_public = 3;
            } else if (window.location.href.indexOf('manager') !== -1) {
                this.is_public = 2;
            } else {
                this.is_public = 1;
            }
            // console.log(this.$route.path)
            console.log(window.location.href)
            // console.log(this.$router.currentRoute);
        },
    };
</script>

<style>
    .app {
        background-color: beige;
    }
</style>
