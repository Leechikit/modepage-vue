<template>
    <!-- 图片模块和头图模块 -->
    <section class="pic-section common-section">
        <!-- 图片模块跳转 链接可配置 图片可配置 -->
        <a href="javascript:" @click="gotoUrl(link)"><img :src="img"></a>
    </section>
</template>
<script>
import './pic-section.scss';
import { gotoUrl } from '../../js/helper.js';
import pic_api from '../../handlers/pic.js';

export default {
    props: [
        'moduleId'
    ],
    data() {
        return {
            img: '',
            link: ''
        }
    },
    methods: {
        gotoUrl
    },
    created() {
        pic_api.getPicData(this.moduleId)
            .then(data => {
                this.img = data.img;
                this.link = data.link;
            });
    }
}
</script>