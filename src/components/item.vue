<template>
  <div class="item">
    <h1 class="title">
      {{ title }}
    </h1>
    <p>
      {{ content }}
    </p>
  </div>
</template>

<script>
    export default {
        name: "Item",
        data() {
            return {}
        },
        props: {
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            }
        },
    }
</script>

<style>

    .item {
        margin-top: 10px;
        margin-left: 10px;

    }

    .title {
        border-bottom: 1px solid #d3d3d3;
    }

</style>
