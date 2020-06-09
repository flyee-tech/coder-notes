<template>
  <div class="item">
    <h1
      class="title"
      @click="go_article"
    >
      <b>{{ title }}</b>
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
            aId:{
                type: Number,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            }
        },
        methods: {
            go_article() {
                console.log('test')
                console.log(this.aId)
                window.location.href = '/article/' + this.aId
            }
        }
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
