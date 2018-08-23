<template>
    <div class="">
        <h2>Pagination Simple</h2>
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
                }
            ],
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
            console.log(Math.ceil(this.persons.length / this.perPage))
            return Math.ceil(this.persons.length / this.perPage)
        },
        totalItems() {
            return this.persons.length
        },
        sortedArray() {
            console.log(this.persons)
            return this.persons.sort((a,b) => {
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
            return Math.ceil(this.persons.length / this.perPage)
        }
    }
}
</script>

<style lang="scss" scoped>
.table-data {
    margin: 12px;
}

.grid-data {
    margin: 12px 0;
    overflow: auto;
}

.item-info {
    float: left;
    width: 20%;
    padding: 8px;
    ul {
        background: #333;
        color: #FFF;
    }
    li {
        text-align: left;
        padding: 12px;
    }
}
</style>
