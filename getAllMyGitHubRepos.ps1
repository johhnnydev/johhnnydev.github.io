$myGitHubUrl = "https://api.github.com/users/johhnnydev/repos"

(Invoke-RestMethod  -URI $myGitHubUrl) | Select-Object name, html_url, description, created_at | ConvertTo-Json | Out-File .\myrepos.json



# (Invoke-RestMethod  -URI $myGitHubUrl)