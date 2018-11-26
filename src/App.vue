<template>
  <div id="app">
    <router-view/>
    <div id="curtain-left"></div>
    <div id="curtain-right"></div>
  </div>
</template>

<style>
:root {
  --theme-yellow: #fde67f;
  --theme-blue: #aad5dd;
  background-color: whitesmoke;
}

#app {
  max-width: 480px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
}

#curtain-left {
  position: fixed;
  top: 0;
  left: 0;
  width: calc((100vw - 480px) / 2);
  height: 100vh;
  background-color: whitesmoke;
}

#curtain-right {
  position: fixed;
  top: 0;
  right: 0;
  width: calc((100vw - 480px) / 2);
  height: 100vh;
  background-color: whitesmoke;
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
