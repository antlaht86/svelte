<script>
  import "../node_modules/materialize-css/dist/css/materialize.min.css";
  import "../node_modules/materialize-css/dist/js/materialize.min.js";
  import { Router, Route } from "svelte-routing";

  import Navbar from "./layout/Navbar.svelte";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }

  .background {
    background-image: linear-gradient(
      #c428e5,
      #b025d4,
      #9d22c3,
      #8a1eb2,
      #781aa1
    );
  }
</style>

<Router>
  <div class="background">
    <Navbar />
    <div class="container ">
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </div>

</Router>
