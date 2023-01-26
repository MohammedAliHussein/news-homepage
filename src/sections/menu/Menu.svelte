<script>
  import closeMenu from "../../images/icon-menu-close.svg";

  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  import { circOut } from "svelte/easing"; 

  let dispatcher = createEventDispatcher()
  const ANIMATION_DURATION = 500;

  function handleMenuClose() {
    dispatcher("closeMenu");
  }
</script>

<div in:fly="{{ x: 200, easing: circOut, opacity: 1, duration: ANIMATION_DURATION }}" out:fly="{{ x: 0, easing: circOut, opacity: 1, duration: ANIMATION_DURATION }}" class="h-screen w-8/12 absolute right-0 top-0 p-7 bg-off_white">
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