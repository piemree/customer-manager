<template >
  <div>
    <a href="">Back</a>
    <div class="header">
      <h1>Customer Name</h1>
      <section>
        <button class="btn edit">Edit</button>
        <button class="btn del">Delete</button>
      </section>
    </div>
    <hr>
    <section class="info">
     <ul>
         <li>phone</li>
         <li>e-mail</li>
         <li>city</li>
         <li>village</li>
         <li>street</li>
     </ul>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
hr{
    margin: 2rem 0;
}
.info{
    width: 100%;
  
}
.info  li{
border: 1px solid grey;
border-bottom: none;
}
.info  li:nth-last-child(1){
border-bottom: 1px solid grey;
}
.header{
  display: flex;
  align-items: flex-end;
  height: 5rem;
  justify-content: space-between;
}
.edit{

  background-color: rgb(78, 78, 197);
}
.del{

  background-color: rgb(230, 54, 54);
}
</style>