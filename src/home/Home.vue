<template>
    <div class="home" >
        <matterPage></matterPage>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    components: {
        matterPage:() => import("./matterPage/index")
    },
    created() {},
    mounted() {},
    methods: {}
};
</script>

<style lang="scss">

</style>
<style scoped lang="scss">
.home {
    width: 100vw;
    height: 100vh;
    background: #cccccc90;
}
</style>
