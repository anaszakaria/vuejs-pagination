<template>
    <div id="home" style="overflow-x:auto;">
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
                <tr v-for="person in sortedPersons">
                    <td>{{person.name}}</td>
                    <td>{{person.age}}</td>
                    <td>{{person.job}}</td>
                    <td>{{person.gender}}</td>
                </tr>
            </tbody>
        </table>

        <section class="pagination">
            <ul>
                <li @click="firstPage"><<</li>
                <li @click="prevPage"><</li>
                <li v-for="(index, pageNum) in pageLists" @click="gotoPage(index)">{{ index }}</li>
                <li @click="nextPage">></li>
                <li @click="lastPage">>></li>
            </ul>
        </section>

        <div class="">
            <span>debug: sort={{ currentSort }}, dir={{ currentSortDir }}, page={{ currentPage }}, pageSize={{ pageSize }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
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
            currentSort: 'name',
            currentSortDir: 'asc',
            pageSize: 4,
            currentPage: 1
        }
    },
    methods: {
        sort(s) {
            //if s == current sort, reverse
            if(s === this.currentSort) {
                this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc'
            }
            this.currentSort = s
        },
        nextPage() {
            if((this.currentPage*this.pageSize) < this.persons.length) this.currentPage++
        },
        prevPage() {
            if(this.currentPage > 1) this.currentPage--
        },
        firstPage() {
            this.currentPage = 1
        },
        lastPage() {
            this.currentPage = Math.ceil(this.persons.length / this.pageSize)
        },
        gotoPage(pageNum) {
            this.currentPage = pageNum
        }
    },
    computed: {
        sortedPersons:function() {
            return this.persons.sort((a,b) => {
                let modifier = 1
                if(this.currentSortDir === 'desc') modifier = -1
                if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier
                if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier
                return 0
            }).filter((row, index) => {
                let start = (this.currentPage-1)*this.pageSize
                let end = this.currentPage*this.pageSize
                if(index >= start && index < end) return true
            })
        },
        pageLists() {
            const pageLists = []
            const totalPage = Math.ceil(this.persons.length / this.pageSize)
            for(let i=0; i<totalPage; i++) {
                pageLists.push(i + 1)
            }
            console.log(pageLists)
            return pageLists
        }
    },
    created() {

    }
}
</script>

<style lang="scss">
#home > table {
    margin: 0 auto;
}

.pagination {
    max-width: 800px;
    overflow: auto;
    margin: 8px auto;
    ul {
        overflow: auto;
        background: #fff2e6;
        padding: 12px;
        margin: 8px 0;
    }
    li {
        cursor: pointer;
        list-style-type: none;
        float: left;
        width: 30px;
        padding: 4px;
        border-right: 1px solid #CCC;
        &:hover {
            background: #333;
            color: #FFF;
        }
    }
}
</style>
