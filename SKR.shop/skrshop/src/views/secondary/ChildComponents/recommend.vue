<template>
    <div class="recommend">
        <h2 class="recommend_h">
            今日推荐</h2>
    </div>
</template>

<script>
export default {
    name: 'recommend',
}
</script>

<style>
.recommend {
    width: 100%;
    border-bottom: 3px solid #000000;
    display: flex;
    justify-content: flex-end;
    height: 51px;
}

.recommend_h {
    width: 99%;
    cursor: pointer;
    font-size: 16px;
    color: #000000;
    font-weight: 700;
    text-align: left;
}
</style>