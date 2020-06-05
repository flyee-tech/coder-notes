<template>
  <div class="header">
    <button
      class="btn"
      @click="go_home"
    >
      {{ home }}
    </button>
    <button
      class="btn"
      @click="go_tag"
    >
      {{ tag }}
    </button>
    <button
      class="btn"
      @click="go_about"
    >
      {{ about }}
    </button>
    <button
      class="btn"
      @click="go_github"
    >
      {{ open_source }}
    </button>
  </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                home: '>> 主页 <<',
                about: '关于',
                tag: '标签',
                open_source: '开源',
            }
        },
        methods: {
            go_github() {
                // window.location.href = 'https://github.com/peiel/coder-notes' //当前窗口跳转
                window.open('https://github.com/peiel/coder-notes', '_blank') // 新窗口打开外链接
            },
            go_about() {
                if (this.$router.currentRoute.path === '/about') {
                    return;
                }
                this.$router.push({path: '/about'});
                this.change_router('/about')
            },
            go_home() {
                if (this.$router.currentRoute.path === '/') {
                    return;
                }
                this.$router.push({path: '/'});
                this.change_router('/')
            },
            go_tag() {
                if (this.$router.currentRoute.path === '/tag') {
                    return;
                }
                this.$router.push({path: '/tag'});
                this.change_router('/tag')
            },
            change_router(router) {
                this.home = '主页';
                this.about = '关于';
                this.tag = '标签';
                if (router === '/') {
                    this.home = '>>  主页  <<';
                }
                if (router === '/about') {
                    this.about = '>>  关于  <<';
                }
                if (router === '/tag') {
                    this.tag = '>>  标签  <<';
                }
            }
        }
    }

</script>

<style scoped>
    .header {
        height: 53px;
        width: 100%;
        /*background-color: #24292e;*/
        border-bottom: 1px solid #d3d3d3;

    }

    .btn {
        height: 80%;
        width: 15%;
    }

</style>
