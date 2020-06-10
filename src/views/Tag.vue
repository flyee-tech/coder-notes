<template>
  <div class="tag">
    <div class="content">
      <a
        class="tag-a"
        v-for="(t, index) in tags"
        :key="index"
        :style="t.style"
        :href="'/tag/'+t.id+'?tname='+t.name"
      >
        #{{ t.name }}
      </a>
    </div>
    <Footer />
  </div>
</template>

<script>
    import Footer from "../components/Footer";
    import {getTagList} from '@/api/app'

    export default {
        name: "MTag",
        components: {Footer},
        data() {
            return {
                tags: []
            }
        },
        methods: {
            getData() {
                getTagList().then(res => {
                    console.log(res)
                    if (res.code === 200) {
                        this.tags = res.list;
                    }
                }).catch(res => {
                    this.$message.error('请求失败');
                    console.log("请求失败");
                    console.log(res);
                });

            },
        },
        mounted() {
            this.getData();
        }
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
    min-height: calc(100vh - 60px - 66px);
    margin-top: 20px;
  }
  .tag-a {
    margin-left: 33px;
    margin-top: 22px;
    display:inline-block;
  }

</style>