<template>
    <div>
        <h3>Pagination component with 'li' tag surrounded</h3>
        <!-- The 'pagination' style using in containerClass comes from bootstrap -->
        <paginate
        v-model="page"
        :page-count="12"
        :margin-pages="1"
        :page-range="5"
        :container-class="'pagination'"
        :page-class="'page-item'"
        :page-link-class="'page-link-item'"
        :prev-class="'prev-item'"
        :prev-link-class="'prev-link-item'"
        :next-class="'next-item'"
        :next-link-class="'next-link-item'"
        :break-view-class="'break-view'"
        :break-view-link-class="'break-view-link'"
        :first-last-button="true"
        :click-handler="onPageChange"
        ></paginate>
    </div>
</template>

<script>
export default {
    data() {
        return {
            page: 1
        }
    },
    methods: {
        onPageChange(pageNum) {
            console.log(pageNum)
        }
    }
}
</script>

<style lang="scss">

</style>
