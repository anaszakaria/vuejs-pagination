<template>
    <div class="">
        <p>Current page: {{ current }}</p>
        <pagination :total="total" :current="current" :limit="limit" v-on:paginate="setCurrent"></pagination>
    </div>
</template>

<script>
import PaginationLimit from '@/components/PaginationLimit'

export default {
    name: 'Page1',
    components: {
        'pagination': PaginationLimit
    },
    data() {
        return {
            total: 12,
            current: 1,
            limit: 4
        }
    },
    methods: {
        setCurrent: function (page) {
            this.current = page;
        }
    }
}
</script>

<style lang="scss">

</style>
