<template>
  <div>
    <div class="row">
      <div class="col-sm-3 md-3">
        <span>Videos</span>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 mx-auto ">
        <b-form-input
          v-model="url"
          placeholder="Enter your name"
          type="url"
        ></b-form-input>
        <p>or</p>
        <b-form-file
          accept="MP4"
          v-model="file1"
          :state="Boolean(file1)"
        ></b-form-file>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file1: null,
    };
  },
};
</script>

<style></style>
