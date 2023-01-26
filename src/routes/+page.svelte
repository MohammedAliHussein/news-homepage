<script>
  import "../tailwind.css";
  import Navbar from "../sections/header/Navbar.svelte";
	import Hero from "../sections/hero/Hero.svelte";
	import TopStories from "../sections/top-stories/TopStories.svelte";
  import Menu from "../sections/menu/Menu.svelte";

  let showingMenu = false;

  function handleMenu() {
    showingMenu = !showingMenu;
  }
</script>

<div class="w-full p-5 bg-off_white">
  {#if showingMenu}
    <Menu on:closeMenu={handleMenu}/>
  {/if}
  <div>
    <Navbar on:menu={handleMenu} />
    <Hero />
    <TopStories />
  </div>
</div>