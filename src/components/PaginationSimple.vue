<template>
    <nav>
        <ul class="pagination">
            <li :class="{ disabled: isInFirstPage }" v-on:click="onClickFirstPage" :disabled="isInFirstPage"><span>&laquo;</span></li>
            <li :class="{ disabled: isInFirstPage }" v-on:click="onClickPreviousPage" :disabled="isInFirstPage"><span>&lsaquo;</span></li>
            <li v-for="page in pages" :class="{ active: isPageActive(page.name) }" v-on:click="onClickPage(page.name)"><span>{{ page.name }}</span></li>
            <li :class="{ disabled: isInLastPage }" v-on:click="onClickNextPage" :disabled="isInLastPage"><span>&rsaquo;</span></li>
            <li :class="{ disabled: isInLastPage }" v-on:click="onClickLastPage" :disabled="isInLastPage"><span>&raquo;</span></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        maxVisibleButtons: {
            type: Number,
            required: false,
            default: 3
        },
        totalPages: {
            type: Number,
            required: true
        },
        pgSize: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        }
    },
    computed: {
        startPage() {
            if (this.currentPage === 1) {
                return 1
            }
            if (this.currentPage === this.totalPages) {
                return this.totalPages - this.maxVisibleButtons + 1
            }
            return this.currentPage - 1
        },
        endPage() {
            return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages)
        },
        pages() {
            let range = []
            for (let i=this.startPage; i<=this.endPage; i++) {
                range.push({
                    name: i,
                    isDisabled: i === this.currentPage
                })
            }
            return range
        },
        isInFirstPage() {
            return this.currentPage === 1
        },
        isInLastPage() {
            return this.currentPage === this.totalPages
        }
    },
    methods: {
        onClickFirstPage() {
            this.$emit('pagechanged', 1)
        },
        onClickPreviousPage() {
            if (this.currentPage === 1) {
                return
            }
            this.$emit('pagechanged', this.currentPage - 1)
        },
        onClickPage(page) {
            this.$emit('pagechanged', page)
        },
        onClickNextPage() {
            if (this.currentPage === this.totalPages) {
                return
            }
            this.$emit('pagechanged', this.currentPage + 1)
        },
        onClickLastPage() {
            this.$emit('pagechanged', this.totalPages)
        },
        isPageActive(page) {
            return this.currentPage === page
        }
    }
}
</script>

<style lang="css">

</style>
