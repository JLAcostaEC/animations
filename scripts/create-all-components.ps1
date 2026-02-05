$components = @(
    @{ name = "animated-beam"; examples = 3 },
    @{ name = "animated-circular-progress-bar"; examples = 3 },
    @{ name = "animated-grid-pattern"; examples = 3 },
    @{ name = "animated-list"; examples = 3 },
    @{ name = "animated-theme-toggler"; examples = 2 },
    @{ name = "blur-fade"; examples = 3 },
    @{ name = "border-beam"; examples = 3 },
    @{ name = "cool-mode"; examples = 2 },
    @{ name = "dot-pattern"; examples = 3 },
    @{ name = "file-tree"; examples = 3 }
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Creating Multiple Components" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

foreach ($component in $components) {
    Write-Host "`nProcessing: $($component.name)..." -ForegroundColor Yellow
    & .\scripts\create-component.ps1 -ComponentName $component.name -ExampleCount $component.examples
    Write-Host "`n----------------------------------------`n"
}

Write-Host "`n========================================" -ForegroundColor Green
Write-Host "  All Components Created Successfully!" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Green

Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "Total components created: $($components.Count)" -ForegroundColor White
Write-Host "`nComponents:" -ForegroundColor Cyan
foreach ($component in $components) {
    Write-Host "  Check $($component.name) (with $($component.examples) examples)" -ForegroundColor Green
}
