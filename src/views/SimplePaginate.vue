<template>
    <div class="">
        <h3>Pagination simple, no first and last page</h3>
        <paginationsimple :total-pages="totalPages" :per-page="perPage" :current-page="currentPage" @pagechanged="onPageChange"></paginationsimple>

        <section class="table-data">
            <table>
                <thead>
                    <tr>
                        <th @click="sort('name')">Name</th>
                        <th @click="sort('age')">Age</th>
                        <th @click="sort('job')">Job</th>
                        <th @click="sort('gender')">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in sortedArray">
                        <td>{{ item.name }}</td>
                        <td>{{ item.age }}</td>
                        <td>{{ item.job }}</td>
                        <td>{{ item.gender }}</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="grid-data">
            <div class="item-info" v-for="item in sortedArray">
                <ul>
                    <li>Name: {{ item.name }}</li>
                    <li>Age: {{ item.age }}</li>
                    <li>Job: {{ item.job }}</li>
                    <li>Gender: {{ item.gender }}</li>
                </ul>
            </div>
        </section>

        <paginationsimple :total-pages="totalPages" :per-page="perPage" :current-page="currentPage" @pagechanged="onPageChange"></paginationsimple>
    </div>

</template>

<script>
import axios from 'axios'
import PaginationSimple from '../components/PaginationSimple.vue'

export default {
    name: 'SimplePagination',
    components: {
        'paginationsimple': PaginationSimple
    },
    data() {
        return {
            users: [],
            currentPgSort: 'name',
            currentPgSortDir: 'asc',
            currentPage: 1,
            perPage: 5
        }
    },
    methods: {
        onPageChange(page) {
            this.currentPage = page;
        },
        sort(s) {
            if(s === this.currentPgSort) {
                this.currentPgSortDir = this.currentPgSortDir==='asc'?'desc':'asc'
            }
            this.currentPgSort = s
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.users.length / this.perPage)
        },
        totalItems() {
            return this.users.length
        },
        sortedArray() {
            return this.users.sort((a,b) => {
                let modifier = 1
                if(this.currentPgSortDir === 'desc') modifier = -1
                if(a[this.currentPgSort] < b[this.currentPgSort]) return -1 * modifier
                if(a[this.currentPgSort] > b[this.currentPgSort]) return 1 * modifier
                return 0
            }).filter((row, index) => {
                let start = (this.currentPage-1)*this.perPage
                let end = this.currentPage*this.perPage
                if(index >= start && index < end) return true
            })
        },
        totalPg() {
            return Math.ceil(this.users.length / this.perPage)
        }
    },
    created() {
        axios.get('http://localhost:8080/data/users.json')
        .then(response => {
            this.users = response.data
        })
        .catch(e => {
            console.log('error')
        })
    }
}
</script>
