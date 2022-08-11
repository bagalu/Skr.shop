<template>
    <div class="title">
        <h1 class="title_h">{{ title }}</h1>
        <span class="title_span">Home&emsp;/&emsp;Secondary</span>
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        title: String
    }
}
</script>

<style>
.title {
    margin-bottom: 25px;
}

.title_h {
    color: #333;
    font-size: 36px;
    font-weight: 100;
    margin-top: 60px;
}

.title_span {
    font-size: 14px;
    color: #333;
}
</style>