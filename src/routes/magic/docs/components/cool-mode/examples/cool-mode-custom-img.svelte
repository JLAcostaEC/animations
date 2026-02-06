<script lang="ts">
  import { CoolMode } from "$lib/components/magic-ui/cool-mode";
</script>

<div class="relative flex justify-center">
  <CoolMode
    options={{
      particle:
        "https://pbs.twimg.com/profile_images/1782811051504885763/YR5-kWOI_400x400.jpg",
    }}
  >
    <button
      class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
    >
      Click Me!
    </button>
  </CoolMode>
</div>
