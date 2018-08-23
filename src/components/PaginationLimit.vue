<template id="pagination">
    <nav>
        <ul class="pagination">
            <li :class="{ disabled: !prev }" v-on:click="go(prev)"><span>&lsaquo;</span></li>
            <li v-for="link in links" :class="{ active: current == link, disabled: isNaN(link) }" v-on:click="go(link)"><span>{{ link }}</span></li>
            <li :class="{ disabled: !next }" v-on:click="go(next)"><span>&rsaquo;</span></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'PaginationLimit',
    props: {
        total: {
            type: Number,
            default: 0
        },
        current: {
            type: Number,
            default: 1
        },
        limit: {
            type: Number,
            default: 4,
            coerce(limit) {
                return limit - 1
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
            for (let i = 1; i <= this.total; i++) {
                pages.push(i)
            }
            return pages
        },
        links() {
            let first = [1, '...'],
            last = ['...', this.total],
            range = []

            if (this.current <= this.limit) {
                range = this.range(1, this.limit + 1)
                return (this.current + range.length) <= this.total ? range.concat(last) : range
            } else if (this.current > (this.total - this.limit)) {
                range = this.range(this.total - (this.limit), this.total)
                return (this.current - range.length) >= 1 ? first.concat(range) : range
            } else {
                range = this.range(this.current - Math.ceil(this.limit / 2), this.current + Math.ceil(this.limit / 2))
                return first.concat(range).concat(last)
            }
        },
        next() {
            let next = this.current + 1
            return next <= this.total ? next : false
        },
        prev() {
            return this.current - 1
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
