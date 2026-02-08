$components = @(
    @{ name = "animated-shiny-text"; examples = 2 },
    @{ name = "aurora-text"; examples = 2 },
    @{ name = "avatar-circles"; examples = 2 },
    @{ name = "typing-animation"; examples = 2 }
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Creating Remaining Components" -ForegroundColor Cyan
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
