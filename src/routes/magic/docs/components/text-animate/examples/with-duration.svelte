<script lang="ts">
  import { TextAnimate } from "$lib/components/magic-ui/text-animate";
</script>

<div class="flex items-center justify-center">
  <TextAnimate
    content="Slower animation with custom duration"
    animation="slideUp"
    by="word"
    duration={3}
  />
</div>
