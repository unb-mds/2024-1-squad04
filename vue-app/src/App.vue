<template>
    <div>
      <ul>
        <li>
          <router-link :to="{name:'cadastro-page'}" >Login</router-link>
        </li>
        <li>
         <router-link :to="{name:'home-page'}" >Home</router-link>
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