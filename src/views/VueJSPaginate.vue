<template>
    <div>
        <h3>Pagination with vuejs-paginate</h3>

        <paginate
        v-model="page"
        :page-count="totalPg"
        :margin-pages="1"
        :page-range="pgSize"
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
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'VueJSPaginate',
    data() {
        return {
            users: [],
            page: 1,
            currentPgSort: 'name',
            currentPgSortDir: 'asc',
            //pgLimit: 4,
            pgSize: 5
        }
    },
    methods: {
        onPageChange(pageNum) {
            console.log(pageNum)
        },
        sort(s) {
            if(s === this.currentPgSort) {
                this.currentPgSortDir = this.currentPgSortDir==='asc'?'desc':'asc'
            }
            this.currentPgSort = s
        }
    },
    computed: {
        sortedArray() {
            return this.users.sort((a,b) => {
                let modifier = 1
                if(this.currentPgSortDir === 'desc') modifier = -1
                if(a[this.currentPgSort] < b[this.currentPgSort]) return -1 * modifier
                if(a[this.currentPgSort] > b[this.currentPgSort]) return 1 * modifier
                return 0
            }).filter((row, index) => {
                let start = (this.page-1)*this.pgSize
                let end = this.page*this.pgSize
                if(index >= start && index < end) return true
            })
        },
        totalPg() {
            return Math.ceil(this.users.length / this.pgSize)
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

<style lang="scss">

</style>
