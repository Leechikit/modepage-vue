<template>
    <!-- 图片模块和头图模块 -->
    <section class="pic-section common-section">
        <!-- 图片模块跳转 链接可配置 图片可配置 -->
        <a href="javascript:"><img src="http://image.yy.com/contimage/NzUweDI0ODE0NzIwMTA1MTYyMTQ.jpg"></a>
    </section>
</template>
<script>
    import './pic-section.scss';

    export default {
        data() {
            return {
                url: 'http://www.yy.com'
            }
        },
        created() {
        }
    }
</script>