<script>
	import HeroSubNew from "./HeroSubNew.svelte";
</script>

<div class="flex-col bg-very_dark_blue p-5 my-10">
  <p class="font-inter text-soft_orange text-2xl tracking-wider">New</p>
  <div class="flex-col">
    <HeroSubNew title={"Hydrogen VS Electric Cars"} subText={"Will hydrogen-fueled cars ever catch up to EVs?"} isLast={false}/>
    <HeroSubNew title={"The Downsides of AI Artistry"} subText={"What are the possible adverse effects of on-demand AI image generation?"} isLast={false}/>
    <HeroSubNew title={"Is VC Funding Drying Up?"} subText={"Private funding by VC firms is down 50% YOY. We take a look at what that means."} isLast={true}/>
  </div>
</div>