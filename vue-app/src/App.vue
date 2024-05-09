<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

html{
  font-size:55%;
}
body {
  margin: 0; 
  overflow-x: hidden;
}

@media screen and (max-width: 1500px) {
  html{
    font-size:50%;
  }

}


@media screen and (max-width: 1266px) {
  html{
    font-size:45%;
  }

}


@media screen and (max-width: 658px) {
  html{
    font-size:40%;
  }
}


</style>
