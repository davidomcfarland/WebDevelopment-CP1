<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

        <router-link to="/" class="navbar-brand"><i class="fas fa-globe-americas"></i>The Big Picture</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/learn" class="nav-link">Learn Topics</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link to="/find" class="nav-link">Find Topics</router-link>
            </li>
          </ul>
        </div>
      </nav>
    <router-view/>
    <footer>Check this site out on GitHub</footer>
  </div>
</template>

<style>
  :root {
    --primary: #38BA43;
    --secondary: #BA6D25;
    --tertiary: #130D21;
    --background: white;
    --font: #0A0603;
  }

  * {
    box-sizing: border-box;
    background-color: inherit;
  }

  .navbar>* {
    background-color: inherit;
    z-index: 5;
  }

  .nav-item {
    padding: 15px;
  }

  html {
    background-color: var(--background);
    color: var(--font);
  }

  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    width: 100%;
    flex: 9%;
  }

  main {
    flex: 80%;
    width: 100%;
  }

  footer {
    width: 100%;
    flex: 9%;
    background-color: #343a40;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  footer * {
    color: inherit;
    text-decoration: inherit;
  }

  footer *:active, footer *:hover {
    color: inherit;
    text-decoration: inherit;
  }

</style>
