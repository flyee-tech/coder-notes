<template>
  <div class="item">
    <h1
      class="title"
      @click="go_article"
    >
      <b>{{ title }}</b>
    </h1>
    <p>
      {{ content.replace(/#*`*/g,'').substr(0, 200)+'...' }}
    </p>
    <a
      :href="'/article/'+this.aId"
      style="color: green;font-size: 20px"
    >继续阅读全文 »</a>
  </div>
</template>

<script>
    export default {
        name: "Item",
        data() {
            return {}
        },
        props: {
            aId: {
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
                if (this.$route.path.indexOf('manager') === -1) {
                    window.location.href = '/article/' + this.aId;
                } else {
                    window.open('/manager/article/' + this.aId, '_blank') // 新窗口打开外链接
                }
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
        cursor: pointer
    }

</style>
