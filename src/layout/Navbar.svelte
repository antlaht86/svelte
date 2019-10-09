<script>
  import { Link } from "svelte-routing";
  import { isDrawerOpen } from "../store/store.js";

  function openMenu() {
    console.log("open!");
    isDrawerOpen.update(n => !n);
  }

  let customWidth;

  if ($isDrawerOpen) {
    customWidth = "250px";
  } else {
    customWidth = "0px";
  }
</script>

<style>
  span {
    border-bottom-color: red !important;
  }

  .background {
    background-image: linear-gradient(
      to left,
      #c428e5,
      #b025d4,
      #9d22c3,
      #8a1eb2,
      #781aa1
    );
  }

  ul {
    margin-left: 15px;
    margin-right: 15px;
  }

  #container-nav {
    display: flex;
  }

  /* The side navigation menu */
  .sidenav {
    height: 100%; /* 100% Full-height */

    position: fixed; /* Stay in place */
    z-index: 1000; /* Stay on top */
    top: 55px; /* Stay at the top */
    background-color: #811ca9; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  }

  .sidenavOpen {
    width: 250px; /* 0 width - change this with JavaScript */
    left: 250px;
  }

  /* The navigation menu links */
  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #ffffff;
    display: block;
    transition: 0.3s;
  }

  /* When you mouse over the navigation links, change their color */
  .sidenav a:hover {
    color: #f1f1f1;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }

  .z-index-10000 {
    z-index: 10000;
  }
</style>

<div id="mySidenav"  class:sidenavOpen="{$isDrawerOpen === true}" class="sidenav ">
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<div class="navbar-fixed z-index-10000">
  <nav>
    <div class="nav-wrapper background">
      <div id="container-nav">
        <ul class="left">
          <li>
            <button
              class="btn-floating btn-large waves-effect waves-light red"
              on:click={openMenu}>
              {$isDrawerOpen ? 'Close' : 'Open'}
            </button>
          </li>
        </ul>
        <Link to="/">
          <span class="brand-logo">Sopiva</span>
        </Link>
      </div>
    </div>
  </nav>
</div>
