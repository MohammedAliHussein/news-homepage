<script>
  import closeMenu from "../../images/icon-menu-close.svg";

  import { createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { circOut } from "svelte/easing"; 

  let dispatcher = createEventDispatcher()

  function handleMenuClose() {
    dispatcher("closeMenu");
  }
</script>

<div class="w-full h-screen bg-opaque_black absolute top-0 left-0" in:fade="{{ easing: circOut, duration: 500 }}" on:click={handleMenuClose} on:keydown on:keyup on:keypress></div>
<div class="h-screen w-8/12 absolute right-0 top-0 p-7 bg-off_white" in:fly="{{ x: 200, easing: circOut, opacity: 1, duration: 500 }}">
  <div class="flex justify-end">
    <img src={closeMenu} alt="close-menu" class="object-fit cursor-pointer" on:click={handleMenuClose} on:keydown on:keyup on:keypress>
  </div>
  <div class="w-full mt-24">
    <ul>
      <li class="font-inter text-very_dark_blue text-xl my-5 cursor-pointer">Home</li>
      <li class="font-inter text-very_dark_blue text-xl my-5 cursor-pointer">New</li>
      <li class="font-inter text-very_dark_blue text-xl my-5 cursor-pointer">Popular</li>
      <li class="font-inter text-very_dark_blue text-xl my-5 cursor-pointer">Trending</li>
      <li class="font-inter text-very_dark_blue text-xl my-5 cursor-pointer">Categories</li>
    </ul>
  </div>
</div>
