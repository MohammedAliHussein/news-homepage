<script>
  import image from "../../images/image-web-3-mobile.jpg";
	import HeroNew from "./HeroNew.svelte";
	import HeroText from "./HeroText.svelte";
</script>

<div class="w-full py-7">
  <div>
    <img src={image} alt="hero-graphic" />
    <div class="flex-col w-full">
      <HeroText />
    </div>
  </div>
  <HeroNew />
</div>