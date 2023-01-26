<script>
  export let index = "";
  export let title = "";
  export let subText = "";
  export let image = null;
</script>

<div class="flex py-4 h-36">
  <img src={image} alt={`${title}-image`} class="object-fit h-full">
  <div class="h-full flex flex-col justify-between pl-4">
    <p class="font-inter text-grayish_blue text-3xl font-extrabold">{index}</p>
    <p class="font-inter text-very_dark_blue text-l font-extrabold">{title}</p>
    <p class="font-inter text-very_dark_blue text-sm tracking-wider line-4 opacity-60">{subText}</p>
  </div>
</div>
