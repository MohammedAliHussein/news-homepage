<script>
  export let title = "";
  export let subText = "";
  export let isLast = false;
</script>

<div class="flex-col {isLast === false ? "py-5 border-b border-grayish_blue" : "pt-5"}">
  <p class="font-inter text-white text-lg font-bold tracking-wider">{title}</p>
  <p class="font-inter text-grayish_blue text-sm font-medium tracking-wider py-3">{subText}</p>
</div>