<template>
  <div id="app">
    <div>
      <b-sidebar
        id="sidebar-1"
        title="LOGO"
        visible
        no-close-on-route-change
        no-header-close
        width="100px"
      >
        <router-link to="/students" class="link-secondary">
          <div class="px-3 py-2 btn">
            <img
              src="https://img.icons8.com/pastel-glyph/64/000000/student-male--v2.png"
              height="25px"
            />
            Students
          </div>
        </router-link>
        <router-link to="/plan" class="link-secondary">
          <div class="px-3 py-2 btn">
            <img
              src="https://img.icons8.com/wired/64/000000/book.png"
              height="25px"
            />
            Lesson Plan
          </div>
        </router-link>
        <router-link to="/settings" class="link-secondary">
          <div class="px-3 py-2 btn">
            <img
              src="https://img.icons8.com/material-outlined/24/000000/settings--v1.png"
              height="25px"
            />
            Settings
          </div>
        </router-link>
      </b-sidebar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
