<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
:root {
  --theme-yellow: #fde67f;
  --theme-blue: #aad5dd;
}

/* @TODO 폰트 선택. https://fonts.google.com/ 에서 하면 개발하기 좋을듯 */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

/* normalize */
html {
  line-height: 1;
  font-size: 16px;
}

body {
  margin: 0;
}

a {
  color: black;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
