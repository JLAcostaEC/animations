<script lang="ts">
  import Table from "../markdown/Table.svelte";
  import Thead from "../markdown/Thead.svelte";
  import Tbody from "../markdown/Tbody.svelte";
  import Tr from "../markdown/Tr.svelte";
  import Th from "../markdown/Th.svelte";
  import Td from "../markdown/Td.svelte";
  import InfoPopover from "./InfoPopover.svelte";
  import { cn } from "$lib/utils";

  type PropDef = {
    name: string;
    type: string;
    default?: string;
    required?: boolean;
    description?: string;
  };

  type PropsTable = {
    name: string;
    desc?: string;
    props: PropDef[];
  };

  let {
    headers = ["Name", "Type", "Default", "Description"],
    keys = ["name", "type", "default", "description"],
    data,
  }: {
    headers?: string[];
    keys?: string[];
    data: PropsTable | PropDef[];
  } = $props();

  const isPropsTable = (data: PropsTable | PropDef[]): data is PropsTable => {
    return "props" in data;
  };

  const tableData = isPropsTable(data) ? data.props : data;
  const tableHeaders = isPropsTable(data)
    ? ["Name", "Type", "Default", "Description"]
    : headers;
  const tableKeys = isPropsTable(data)
    ? ["name", "type", "default", "description"]
    : keys;
</script>

<Table>
  <Thead>
    <Tr>
      {#each tableHeaders as header (header)}
        <Th>{header}</Th>
      {/each}
    </Tr>
  </Thead>
  <Tbody>
    {#each tableData as row, i (i)}
      <Tr>
        {#each tableKeys as key, index (key)}
          <Td>
            <span class="inline-flex items-center">
              <code
                class={cn(
                  "rounded-lg border border-border bg-card-muted px-1.5 py-0.5 font-normal text-foreground shadow-sm mono",
                )}
              >
                {key === "default" && row.required
                  ? "required"
                  : (row as any)[key] || ""}
              </code>
              {#if index === 0 && row.description}
                <InfoPopover description={row.description} />
              {/if}
            </span>
          </Td>
        {/each}
      </Tr>
    {/each}
  </Tbody>
</Table>
