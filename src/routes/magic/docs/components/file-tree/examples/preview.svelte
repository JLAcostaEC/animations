<script lang="ts">
  import { Tree, Folder, File, CollapseButton, type TreeViewElement } from "$lib/components/magic-ui/file-tree";

  const elements: TreeViewElement[] = [
    {
      id: "1",
      name: "src",
      children: [
        {
          id: "2",
          name: "lib",
          children: [
            { id: "3", name: "index.ts" },
            { id: "4", name: "utils.ts" },
          ],
        },
        {
          id: "5",
          name: "routes",
          children: [
            { id: "6", name: "+page.svelte" },
            { id: "7", name: "+layout.svelte" },
          ],
        },
      ],
    },
    {
      id: "8",
      name: "package.json",
    },
    {
      id: "9",
      name: "README.md",
    },
  ];
</script>

<div class="flex items-center justify-center w-full h-full min-h-[400px] p-6">
  <div class="w-full max-w-md border rounded-lg p-4 bg-background">
    <div class="mb-4 flex items-center justify-between">
      <h3 class="text-lg font-semibold">Project Files</h3>
      <CollapseButton {elements} class="text-sm">
        Expand All
      </CollapseButton>
    </div>
    <Tree {elements} initialSelectedId="6" initialExpandedItems={["1", "5"]}>
      <Folder element="src" value="1">
        <Folder element="lib" value="2">
          <File value="3">index.ts</File>
          <File value="4">utils.ts</File>
        </Folder>
        <Folder element="routes" value="5">
          <File value="6">+page.svelte</File>
          <File value="7">+layout.svelte</File>
        </Folder>
      </Folder>
      <File value="8">package.json</File>
      <File value="9">README.md</File>
    </Tree>
  </div>
</div>
