param(
    [Parameter(Mandatory=$true)]
    [string]$ComponentName,

    [Parameter(Mandatory=$false)]
    [int]$ExampleCount = 2
)

# Convert component name to different formats
$kebabCase = $ComponentName.ToLower() -replace '_', '-'
$pascalCase = (Get-Culture).TextInfo.ToTitleCase($ComponentName -replace '-', ' ' -replace '_', ' ') -replace ' ', ''
$titleCase = (Get-Culture).TextInfo.ToTitleCase($ComponentName -replace '-', ' ' -replace '_', ' ')

# Base directory
$baseDir = "src\routes\magic\docs\components\$kebabCase"

# Create directory structure
Write-Host "Creating component: $titleCase ($kebabCase)" -ForegroundColor Green
New-Item -ItemType Directory -Path $baseDir -Force | Out-Null
New-Item -ItemType Directory -Path "$baseDir\examples" -Force | Out-Null
New-Item -ItemType Directory -Path "$baseDir\llms.txt" -Force | Out-Null

# Create +page.svelte
$pageSvelte = @"
<script lang="ts">
  import { page } from "`$app/state";
  import { H1, H2, Paragraph, H3 } from "`$lib/components/docs/markdown/index";
  import ${pascalCase}Raw from "`$lib/components/magic-ui/$kebabCase/$kebabCase.svelte?raw";
  import type { CodeBlock } from "`$lib/components/ui/code";

  import { PreviewComponent } from "`$lib/components/ui/preview-component";
  import InstallComponent from "`$lib/components/docs/base/InstallComponent.svelte";
  import APITable from "`$lib/components/docs/base/APITable.svelte";
  import { CopyPageDropdown } from "`$lib/components/docs/copy-page-dropdown";
  import SingleCodeFilename from "`$lib/components/ui/code/single-code-filename.svelte";
  import { data } from "./data";

  const code: CodeBlock = {
    filename: "${pascalCase}.svelte",
    filecode: ${pascalCase}Raw,
    lang: "svelte",
    isExpand: true,
  };

  const PreviewComp = `$derived(data.preview);
  const installUrl = `$derived(``${page.url.origin}/r/`${data.id}.json``);
  const llmsTxtUrl = `$derived(``${page.url}/llms.txt``);
</script>

<div>
  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
    <H1 id="introduction">{data.title}</H1>
    <CopyPageDropdown componentName={data.title} {llmsTxtUrl} />
  </div>
  <Paragraph>
    {data.description}
  </Paragraph>

  <!-- Preview Component -->
  <div class="my-6">
    <PreviewComponent code={data.previewCode}>
      {#if PreviewComp}
        <PreviewComp />
      {/if}
    </PreviewComponent>
  </div>

  <H2 id="installation">Installation</H2>
  <InstallComponent
    {installUrl}
    tailwindConfig={data.tailwind ? { code: data.tailwind } : undefined}
    codeBlocks={[code]}
    folderStructure={data.folderStructure}
    class="my-4"
  />

  <!-- Examples Section -->
  {#if data.examples && data.examples.length > 0}
    <H2 id="examples">Examples</H2>
    {#each data.examples as example}
      <div class="my-6">
        <H3 id={example.name.toLowerCase().replace(/\s+/g, '-')}>{example.name}</H3>
        <PreviewComponent code={example.code}>
          <example.preview />
        </PreviewComponent>
      </div>
    {/each}
  {/if}

  <!-- Props Section -->
  {#if data.props && data.props.length > 0}
    <H2 id="props">Props</H2>
    {#each data.props as prop}
      <APITable data={prop} />
    {/each}
  {/if}
</div>
"@

Set-Content -Path "$baseDir\+page.svelte" -Value $pageSvelte -Encoding UTF8

# Create data.ts
$dataTs = @"
import type { CodeBlock } from "`$lib/components/ui/code";
import type { Example } from "`$lib/types/examples";
import type { SEO } from "`$lib/types/seo";
import type { ComponentDoc, ComponentMeta } from "`$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
"@

for ($i = 1; $i -le $ExampleCount; $i++) {
    $exampleName = "$kebabCase-example-$i"
    $examplePascal = (Get-Culture).TextInfo.ToTitleCase($exampleName -replace '-', ' ') -replace ' ', ''
    $dataTs += "`nimport Example$i from ""./examples/$exampleName.svelte"";"
    $dataTs += "`nimport Example${i}Raw from ""./examples/$exampleName.svelte?raw"";"
}

$dataTs += @"


/** Component metadata for navigation */
export const meta: ComponentMeta = {
  id: "$kebabCase",
  title: "$titleCase",
  description: "A description for $titleCase component.",
  category: "animation",
  badge: "new",
};

const examples: Example[] = [
"@

for ($i = 1; $i -le $ExampleCount; $i++) {
    $dataTs += @"

  {
    name: "Example $i",
    preview: Example$i,
    code: {
      filename: "$kebabCase-example-$i.svelte",
      filecode: Example${i}Raw,
      lang: "svelte",
    },
  },
"@
}

$dataTs += @"

];

const seo: SEO = {
  title: "$titleCase - SV5 Animations",
  description: "Learn how to create $titleCase effects in Svelte using the SV5 Animations library.",
  keywords: ["Svelte", "$titleCase", "SV5 Animations", "Animation", "Web Design"],
};

export const data: ComponentDoc = {
  ...meta,
  preview: Preview,
  previewCode: {
    filename: "$kebabCase.svelte",
    filecode: PreviewCode,
    lang: "svelte",
    hideLines: true,
    highlight: [2],
  },
  examples,
  seo,
  props: [
    {
      name: "$pascalCase",
      desc: "A component for $titleCase.",
      props: [
        { name: "class", type: "string", default: '""', description: "Additional CSS classes to apply" },
      ],
    },
  ],
  folderStructure: ``src/
└── lib/
    └── components/
        └── magic-ui/
            └── $kebabCase/
                └── $kebabCase.svelte``,
};
"@

Set-Content -Path "$baseDir\data.ts" -Value $dataTs -Encoding UTF8

# Create docs.md
$docsMd = @"
# $titleCase

A description for $titleCase component.

## Installation

``````bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/$kebabCase.json
``````

## Usage

``````svelte
<script lang="ts">
  import $pascalCase from "`$lib/components/magic-ui/$kebabCase/$kebabCase.svelte";
</script>

<$pascalCase>
  <!-- Your content here -->
</$pascalCase>
``````

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ``class`` | ``string`` | ``""`` | Additional CSS classes to apply |

## Examples
"@

for ($i = 1; $i -le $ExampleCount; $i++) {
    $docsMd += "`n`n### Example $i`n`nDescription for example $i."
}

Set-Content -Path "$baseDir\docs.md" -Value $docsMd -Encoding UTF8

# Create llms.txt/+server.ts
$serverTs = @"
import type { RequestHandler } from "./`$types";
import docs from "../docs.md?raw";

export const GET: RequestHandler = async () => {
	return new Response(docs, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
};
"@

Set-Content -Path "$baseDir\llms.txt\+server.ts" -Value $serverTs -Encoding UTF8

# Create example files
$previewSvelte = @"
<script lang="ts">
  import $pascalCase from "`$lib/components/magic-ui/$kebabCase/$kebabCase.svelte";
</script>

<div class="flex items-center justify-center w-full h-full min-h-[200px]">
  <$pascalCase>
    Preview Example
  </$pascalCase>
</div>
"@

Set-Content -Path "$baseDir\examples\preview.svelte" -Value $previewSvelte -Encoding UTF8

for ($i = 1; $i -le $ExampleCount; $i++) {
    $exampleName = "$kebabCase-example-$i"
    $exampleSvelte = @"
<script lang="ts">
  import $pascalCase from "`$lib/components/magic-ui/$kebabCase/$kebabCase.svelte";
</script>

<div class="flex items-center justify-center w-full h-full min-h-[200px]">
  <$pascalCase>
    Example $i Content
  </$pascalCase>
</div>
"@
    Set-Content -Path "$baseDir\examples\$exampleName.svelte" -Value $exampleSvelte -Encoding UTF8
}

Write-Host "`nComponent structure created successfully!" -ForegroundColor Green
Write-Host "`nCreated files:" -ForegroundColor Yellow
Write-Host "  - $baseDir\+page.svelte"
Write-Host "  - $baseDir\data.ts"
Write-Host "  - $baseDir\docs.md"
Write-Host "  - $baseDir\llms.txt\+server.ts"
Write-Host "  - $baseDir\examples\preview.svelte"
for ($i = 1; $i -le $ExampleCount; $i++) {
    $exampleName = "$kebabCase-example-$i"
    Write-Host "  - $baseDir\examples\$exampleName.svelte"
}

Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Create the actual component in: src\lib\components\magic-ui\$kebabCase\$kebabCase.svelte"
Write-Host "2. Update the component descriptions in data.ts and docs.md"
Write-Host "3. Implement the example variations"
Write-Host "4. Add the component to the registry.json"
Write-Host "5. Update navigation if needed"
