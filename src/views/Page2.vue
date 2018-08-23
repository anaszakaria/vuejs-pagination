<template lang="html">
    <paginationsimple
    :total-pages="totalPages"
    :total="totalItems"
    :per-page="perPage"
    :current-page="currentPage"
    @pagechanged="onPageChange"
    />
</template>

<script>
import PaginationSimple from '../components/PaginationSimple.vue'

export default {
    name: 'Page2',
    components: {
        'paginationsimple': PaginationSimple
    },
    data() {
        return {
            persons: [
                {
                    name: 'Anas',
                    age: 38,
                    job: 'Programmer',
                    gender: 'M'
                },
                {
                    name: 'Abu',
                    age: 33,
                    job: 'Lecturer',
                    gender: 'M'
                },
                {
                    name: 'Fatimah',
                    age: 31,
                    job: 'Lecturer',
                    gender: 'F'
                },
                {
                    name: 'Zainab',
                    age: 25,
                    job: 'Programmer',
                    gender: 'F'
                },
                {
                    name: 'Hamzah',
                    age: 42,
                    job: 'Doctor',
                    gender: 'M'
                },
                {
                    name: 'Halimah',
                    age: 34,
                    job: 'Doctor',
                    gender: 'F'
                },
                {
                    name: 'Zaki',
                    age: 45,
                    job: 'Engineer',
                    gender: 'M'
                },
                {
                    name: 'Zul',
                    age: 29,
                    job: 'Engineer',
                    gender: 'M'
                },
                {
                    name: 'Farah',
                    age: 44,
                    job: 'Engineer',
                    gender: 'F'
                },
                {
                    name: 'Johan',
                    age: 38,
                    job: 'Programmer',
                    gender: 'M'
                },
                {
                    name: 'Faizul',
                    age: 39,
                    job: 'Lecturer',
                    gender: 'M'
                },
                {
                    name: 'Rohani',
                    age: 35,
                    job: 'Programmer',
                    gender: 'F'
                },
            ],
            currentPage: 1,
            perPage: 5
        }
    },
    methods: {
        onPageChange(page) {
            this.currentPage = page;
        }
    },
    computed: {
        totalPages() {
            console.log(Math.ceil(this.persons.length / this.perPage))
            return Math.ceil(this.persons.length / this.perPage)
        },
        totalItems() {
            return this.persons.length
        }
    }
}
</script>

<style lang="css">

</style>
