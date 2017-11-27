<template>
    <div class="container">
        <pic-section v-if="modpic.isShow" module-id="modpic.moduleId"></pic-section>
    </div>
</template>
<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            modpic: {
                isShow: false,
                moduleId: ''
            }
        }
    },
    computed: {
        ...mapGetters([
            'page_info',
            'module_info'
        ])
    },
    created() {
        const PAGEID = this.$route.params.pageid;
        this.$store.dispatch('getPageInfo', PAGEID).then(() => {
            $(document.head).append(`<style>
                .global-title-color {
                    color: ${this.page_info.titleColor} !important;
                }
                .global-button-color {
                    color: ${this.page_info.iconColor} !important;
                }
                .global-button-bgcolor {
                    background-color: ${this.page_info.bgColor} !important;
                }
                </style>`);

            this.module_info.forEach(item => {
                this[`mod${item.moduleName}`].isShow = true;
                this[`mod${item.moduleName}`].moduleId = item.moduleId;
                Vue.component('pic-section', (resolve)=>{
                    require(['../components/pic-section/pic-section.vue'], resolve);
                });
            });
        });
    }
}
</script> 