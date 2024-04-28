<template>
  <div>
    <ul>
      <li>
        <router-link :to="{name:'login'}" >Login</router-link>
      </li>
      <li>
       <router-link :to="{name:'home'}" >Home</router-link>
      </li>
    </ul>
  </div>
  <RouterView/>
</template>

<script>
export default {

}
</script>

<style>
</style>
