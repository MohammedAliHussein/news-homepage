<script>
  import openMenu from "../../images/icon-menu.svg";
  import logo from "../../images/logo.svg";

  import { createEventDispatcher } from "svelte";

  let dispatcher = createEventDispatcher();

  function handleMenuClick() {
    dispatcher("menu")
  }
</script>

<div class="flex w-full items-center justify-between">
  <img src={logo} class="object-fit h-7" alt="logo">
  <img src={openMenu} class="object-fit h-4 cursor-pointer" alt="open-menu" on:click={handleMenuClick} on:keydown on:keyup on:keypress>
</div>