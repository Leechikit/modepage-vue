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
    import { createNamespacedHelpers } from 'vuex'

    const { mapGetters, mapActions } = createNamespacedHelpers('pic');

    export default {
        props:[
            'moduleId'
        ],
        data() {
            return {
            }
        },
        computed:{
            ...mapGetters([
                'img',
                'link'
            ])
        },
        methods:{
            ...mapActions([
                'getPicData'
            ]),
            gotoUrl
        },
        created() {
            //this.$store.dispatch('getPicData',{
            //    moduleId: this.moduleId
            //});
            this.getPicData({
                moduleId: this.moduleId
            })
        }
    }
</script>