<script>
  export let index = "";
  export let title = "";
  export let subText = "";
  export let image = null;
</script>

<div class="flex">
  <img src={image} alt={`${title}-image`}>
  <div>
    <p>{index}</p>
    <p>{title}</p>
    <p>{subText}</p>
  </div>
</div>