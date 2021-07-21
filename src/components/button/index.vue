<template>
  <div
    :class="
      type == 'Default'
        ? 'btn default'
        : type == 'primary'
        ? 'btn primary'
        : type == 'danger'
        ? 'btn danger'
        : 'btn default'
    "
  >
    <slot></slot>
  </div>
</template>
  
  <script>
export default {
  name: "alley-Button",
  props: {
    type: {
      type: String,
      default: "Default",
    },
  },
};
</script>


 <style>
.btn {
  width: 100px;
  height: 40px;
  color: #fff;
  text-align: center;
  line-height: 40px;
}
.default {
  background: red;
}

.primary {
  background: yellow;
}

.danger {
  background: #ccc;
}
</style>