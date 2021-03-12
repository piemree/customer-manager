<template>
  <div class="home">
    <h1>Customers</h1>
    <input type="text" placeholder="Enter a name" id="search-bar" />
    <table>
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
      <tr>
        <td>Emre</td>
        <td>Demir</td>
        <td>xpokales@gmail.com</td>
        <td><button>view</button></td>
      </tr>
      <tr>
        <td>Emre</td>
        <td>Demir</td>
        <td>xpokales@gmail.com</td>
        <td><button>view</button></td>
      </tr>
      <tr>
        <td>Emre</td>
        <td>Demir</td>
        <td>xpokales@gmail.com</td>
        <td><button>view</button></td>
      </tr>
      <tr>
        <td>Emre</td>
        <td>Demir</td>
        <td>xpokales@gmail.com</td>
        <td><button>view</button></td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name:'Home'
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
}
table {
  width: 100%;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
</style>