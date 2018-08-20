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
</style>
