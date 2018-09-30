$myDB = "document_archive"
$myDate = Get-Date -Format _yyyyMMdd
$sqlFile = $PSScriptRoot + "/sql/" + $myDB + "_" + $myDate + ".sql"
Write-Output($sqlFile)
C:\xampp\mysql\bin\mysqldump.exe -u root --skip-add-locks --databases $myDB > $sqlFile