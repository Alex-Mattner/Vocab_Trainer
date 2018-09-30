#!/bin/bash
# echo "pwd: `pwd`"
# echo "\$0: $0"
# echo "basename: `basename $0`"
# echo "dirname: `dirname $0`"
myDB=document_archive
mysqldump=/opt/lampp/bin/mysqldump
myDate=$(date +%Y%m%d)
sqlFile=`dirname $0`/sql/$myDB\_$myDate.sql
echo "$sqlFile"
$mysqldump -u root --skip-add-locks --databases $myDB > $sqlFile