<template>
    <div class="content">
        <h1 class="content_h">{{ title }}专区</h1>
        <span>www.stride.fun</span>
    </div>
</template>

<script>
export default {
    name: 'ContentTitle',
    props: {
        title: String
    }

}
</script>

<style>
.content {
    width: 100%;
    height: 296px;
    background-color: #5a5a5a;
    font-weight: 200;
    padding: 45px 35px 0 47px;
    text-align: left;
    color: #fff;
}

.content_h {
    text-align: left;
    font-size: 40px;
}
</style>