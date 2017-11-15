<template>
    <div class="container">
        <pic-section v-if="currentView" module-id="1"></pic-section>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentView: true
            }
        },
        created() {
        }
    }
</script>