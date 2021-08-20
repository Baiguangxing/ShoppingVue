<template>
  <div id="app">
    <div class="container-fluid a">
      <div class="row align-items-center b">
        <router-link class="col col-lg-2" to="/">logo</router-link>
        <ul class="col-md-auto nav">
          <li>
            <router-link to="/test">分类1</router-link>
          </li>
          <li>
            <router-link to="/test">分类2</router-link>
          </li>
          <li>
            <router-link to="/test">分类3</router-link>
          </li>
          <li>
            <router-link to="/test">分类4</router-link>
          </li>
          <li>
            <router-link to="/test">分类5</router-link>
          </li>
        </ul>
        <router-link class="col col-lg-2" to="/cart">
          购物车
          <span class="ts" v-if="this.$store.state.number">
            {{this.$store.state.number}}
          </span>
        </router-link>
      </div>
    </div>
    <router-view class="rt_view" />
  </div>
</template>

<script>
  export default {
    data(){
      return {
        // number:this.$store.state.number
      }
    },
    computed:{

    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    -webkit-user-select: none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }

  .a {
    border: 1px solid red;
    position: fixed;
    background-color: white;
  }

  .b {
    height: 80px;
  }

  .nav li {
    float: left;
    margin-right: 20px;
  }

  .rt_view {
    padding-top: 80px;
  }

  .ts {
    border: 1px solid red;
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: red;
    color: white;
    text-align: center;
    line-height: 20px;
  }
</style>