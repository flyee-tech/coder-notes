<template>
  <div class="tag">
    <div class="content">
      <h1>This is an about tag</h1>
    </div>
    <Footer />
  </div>
</template>

<script>
    import Footer from "../components/Footer";
    export default {
        components: {Footer}
    }
</script>

<style>

    .tag {
        width: 66%;
        text-align: left;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
    }
    .content {
        min-height: calc(100vh - 60px - 88px);
    }

</style>