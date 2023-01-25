<script>
  import retro from "../../images/image-retro-pcs.jpg";
  import laptop from "../../images/image-top-laptops.jpg";
  import controller from "../../images/image-gaming-growth.jpg";
	import Story from "./Story.svelte";

  let stories = [
    {
      title: "Reviving Retro PCs",
      subText: "What happens when old PCs are given modern upgrades?",
      image: retro
    },
    {
      title: "Top 10 Laptops of 2022",
      subText: "Our best picks for vairous needs and budgets.",
      image: laptop      
    },
    {
      title: "The Growth of Gaming",
      subText: "How the pandemic has sparked fresh opportunities.",
      image: controller
    }
  ]
</script>

<div class="flex-col">
  {#each stories as story, i }
    <Story index={`0${i}`} title={story.title} subText={story.subText} image={story.image} />
  {/each}
</div>