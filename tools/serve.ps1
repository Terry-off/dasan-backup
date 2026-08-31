# 백업 사이트 로컬 미리보기 서버  (사용법: powershell -ExecutionPolicy Bypass -File serve.ps1)
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$port = 8899
$mime = @{ '.html'='text/html; charset=utf-8'; '.htm'='text/html; charset=utf-8'; '.css'='text/css; charset=utf-8';
  '.cm'='text/css; charset=utf-8'; '.js'='application/javascript; charset=utf-8'; '.mjs'='application/javascript; charset=utf-8';
  '.json'='application/json; charset=utf-8'; '.png'='image/png'; '.jpg'='image/jpeg'; '.jpeg'='image/jpeg'; '.gif'='image/gif';
  '.svg'='image/svg+xml'; '.ico'='image/x-icon'; '.webp'='image/webp'; '.woff'='font/woff'; '.woff2'='font/woff2';
  '.ttf'='font/ttf'; '.eot'='application/vnd.ms-fontobject'; '.mp4'='video/mp4'; '.xml'='application/xml' }
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Serving $root at http://localhost:$port/"
while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
    $rel = [System.Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/')
    if ($rel -eq '') { $rel = 'index.html' }
    $path = Join-Path $root $rel
    if (Test-Path $path -PathType Container) { $path = Join-Path $path 'index.html' }
    if (Test-Path $path -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($path).ToLower()
      $ct = $mime[$ext]; if (-not $ct) { $ct = 'application/octet-stream' }
      $bytes = [System.IO.File]::ReadAllBytes($path)
      $ctx.Response.ContentType = $ct
      $ctx.Response.Headers.Add('Cache-Control','no-cache')
      $ctx.Response.ContentLength64 = $bytes.Length
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $ctx.Response.StatusCode = 404
      $b = [System.Text.Encoding]::UTF8.GetBytes('404')
      $ctx.Response.OutputStream.Write($b, 0, $b.Length)
    }
    $ctx.Response.Close()
  } catch { }
}
