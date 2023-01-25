<script>
  export let index = "";
  export let title = "";
  export let subText = "";
  export let image = null;
</script>

<div class="flex py-4">
  <img src={image} alt={`${title}-image`} class="object-fit h-36">
  <div class="flex-col items-stretch pl-5">
    <p class="font-inter text-grayish_blue text-3xl font-extrabold">{index}</p>
    <p class="font-inter text-very_dark_blue text-l font-extrabold">{title}</p>
    <p class="font-inter text-very_dark_blue text-sm tracking-wider line-4">{subText}</p>
  </div>
</div>