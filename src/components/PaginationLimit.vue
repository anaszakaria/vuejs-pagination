<template id="pagination">
    <nav>
        <ul class="pagination">
            <li :class="{ disabled: !prev }" v-on:click="go(prev)"><span>&lsaquo;</span></li>
            <li v-for="link in links" :class="{ active: currentPg == link, disabled: isNaN(link) }" v-on:click="go(link)"><span>{{ link }}</span></li>
            <li :class="{ disabled: !next }" v-on:click="go(next)"><span>&rsaquo;</span></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'PaginationLimit',
    props: {
        totalPg: {
            type: Number,
            default: 0
        },
        currentPg: {
            type: Number,
            default: 1
        },
        pgLimit: {
            type: Number,
            default: 4,
            coerce(pgLimit) {
                return pgLimit - 1
            }
        }
    },
    data() {
        return {

        }
    },
    computed: {
        pages() {
            let pages = []
            for (let i = 1; i <= this.totalPg; i++) {
                pages.push(i)
            }
            return pages
        },
        links() {
            let first = [1, '...'],
            last = ['...', this.totalPg],
            range = []

            if (this.currentPg <= this.pgLimit) {
                range = this.range(1, this.pgLimit + 1)
                return (this.currentPg + range.length) <= this.totalPg ? range.concat(last) : range
            } else if (this.currentPg > (this.totalPg - this.pgLimit)) {
                range = this.range(this.totalPg - (this.pgLimit), this.totalPg)
                return (this.currentPg - range.length) >= 1 ? first.concat(range) : range
            } else {
                range = this.range(this.currentPg - Math.ceil(this.pgLimit / 2), this.currentPg + Math.ceil(this.pgLimit / 2))
                return first.concat(range).concat(last)
            }
        },
        next() {
            let next = this.currentPg + 1
            return next <= this.totalPg ? next : false
        },
        prev() {
            return this.currentPg - 1
        },
        show() {
            return this.next || this.prev
        }
    },
    methods: {
        range(start, end) {
            let pages = []
            for (let i = start - 1; i < end; i++) {
                if (this.pages[i]) {
                    pages.push(this.pages[i])
                }
            }
            return pages
        },
        go(page) {
            if (isNaN(page)) {
                return
            }
            this.$emit('paginate', page)
        }
    }
}
</script>

<style lang="scss">

</style>
