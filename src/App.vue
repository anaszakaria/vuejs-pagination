<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

ul {
    margin: 0;
    padding: 0;
}

li {
    list-style-type: none;
}

table {
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto;
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
    padding: 0;
    overflow: auto;
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

.page-item, .prev-item, .next-item {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 2px;
    color: inherit;
    cursor: pointer;
    display: block;
    float: left;
    margin-right: 0.25rem;
    a {
        display: block;
        padding: 5px 10px;
    }
    &:active,
    &:hover  {
        border-color: darken(#ddd, 10%);
    }
    &.active {
        background-color: #fc0;
        border-color: darken(#fc0, 10%);
        color: #fff;
    }
    &.disabled {
        opacity: 0.75;
        pointer-events: none;
    }
}
</style>
