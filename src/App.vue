<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

table {
    border-collapse: collapse;
    width: 100%;
    max-width: 800px;
    th, td {
        text-align: left;
        padding: 8px;
    }
    th {
        background-color: #4CAF50;
        color: white;
        cursor: pointer;
        &:hover {
            background: #333;
            color: #FFF;
        }
    }
    tr:nth-child(even){background-color: #f2f2f2}
}

.pagination {
    display: inline-block;
    list-style: none;
    margin: 0 0 1.5rem;
    padding: 0;
    li {
        display: inline;
        > span {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 2px;
            color: inherit;
            cursor: pointer;
            display: block;
            float: left;
            padding: 5px 10px;
            margin-right: 0.25rem;
        }
        &:active,
        &:hover {
            > span {
                border-color: darken(#ddd, 10%);
            }
        }
        &.active {
            > span {
                background-color: #fc0;
                border-color: darken(#fc0, 10%);
                color: #fff;
            }
        }
        &.disabled {
            > span {
                opacity: 0.75;
                pointer-events: none;
            }
        }
    }
}
</style>
