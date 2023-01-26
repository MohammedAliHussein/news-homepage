<script>
  import image from "../../images/image-web-3-mobile.jpg";
  import imageDesktop from "../../images/image-web-3-desktop.jpg";
	import HeroNew from "./HeroNew.svelte";
	import HeroText from "./HeroText.svelte";
</script>

<div class="w-full flex flex-col md:flex-row py-7">
  <div>
    <picture>
      <source
        srcset={imageDesktop}
        media="(min-width: 768px)"
      >
      <img src={image} alt="hero-graphic"/>
    </picture>
    <div class="flex flex-col w-full md:flex-row">
      <HeroText />
    </div>
  </div>
  <HeroNew />
</div>