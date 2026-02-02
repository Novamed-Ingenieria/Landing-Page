param(
  [string]$path
)
Add-Type -AssemblyName System.Drawing
$i = [System.Drawing.Image]::FromFile($path)
Write-Output "WIDTH:$($i.Width)"
Write-Output "HEIGHT:$($i.Height)"
$i.Dispose()
$fi = Get-Item $path
Write-Output "BYTES:$($fi.Length)"
