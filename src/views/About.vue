<template>
  <div class="about">
    <div class="content">
      <h1>This is an about page</h1>
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
    .about {
        width: 66%;
        text-align: left;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
    }
    .content {
      min-height: calc(100vh - 60px - 66px);
      margin-top: 20px;
    }
</style>
