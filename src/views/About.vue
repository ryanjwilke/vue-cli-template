<template>
  <div class="about">
    <h1>This is an about page</h1>

    <hr />

    <h2>Hello World Function</h2>
    <p>{{ helloWorld }}</p>

    <h2>Hello World Async Function</h2>
    <p>{{ helloWorldAsync }}</p>

    <h2>FaunaDB Function</h2>
    <p>{{ fauna }}</p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'about',
    beforeMount() {
      axios
        .get('/.netlify/functions/hello')
        .then((resp) => { this.helloWorld = resp.data.msg })
        .catch(() => { this.helloWorld = 'An error occurred.' })

      axios
        .get('/.netlify/functions/hello-async')
        .then((resp) => { this.helloWorldAsync = resp.data.msg })
        .catch(() => { this.helloWorldAsync = 'An error occurred.' })

      axios
        .get('/.netlify/functions/fauna')
        .then((resp) => { this.fauna = JSON.stringify(resp.data) })
        .catch(() => { this.fauna = 'An error occurred.' })
    },
    data() {
      return {
        fauna: 'Placeholder',
        helloWorld: 'Placeholder',
        helloWorldAsync: 'Placeholder',
      }
    }
  }
</script>
