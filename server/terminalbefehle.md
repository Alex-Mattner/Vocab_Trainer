# MySQL-Terminalbefehle Ubuntu und Windows

## Gesamtbackup

    /opt/lampp/bin/mysqldump -u root --all-databases > /opt/lampp/htdocs/_sql/all_databases.sql
bzw.
    C:\xampp\mysql\bin\mysqldump.exe -u root --all-databases > c:\xampp\htdocs\_sql\all_databases.sql

## Backup Projektdatenbank

    /opt/lampp/bin/mysqldump -u root blog > /opt/lampp/htdocs/blog/_sql/blog_with_data.sql
bzw.
     C:\xampp\mysql\bin\mysqldump.exe -u root blog > c:\xampp\htdocs\blog\_sql\blog_with_data.sql

## Import

    /opt/lampp/bin/mysql -u root blog < /opt/lampp/htdocs/blog/_sql/blog.sql
bzw.
    C:\xampp\mysql\bin\mysql.exe -u root blog < c:\xampp\htdocs\blog\_sql\blog.sql

## Terminal als root starten

    /opt/lampp/bin/mysql -u root blog --default-character-set=utf8
bzw.
    C:\xampp\mysql\bin\mysql.exe -u root blog --default-character-set=utf8

## Rechte für Ordner ändern
    sudo chown -R joerg:joerg /opt/lampp/htdocs/teil2/dokumentenarchiv/inc/klassen
    sudo chmod 777 /opt/lampp/htdocs/teil2/dokumentenarchiv/inc/klassen
    sudo chown -R joerg:joerg /opt/lampp/htdocs/teil2/tag25/paketversand/paketsendungen
    sudo chmod 777 /opt/lampp/htdocs/teil2/tag25/paketversand/paketsendungen

sudo chown -R joerg:joerg /opt/lampp/htdocs/teil2/tag27/dokumentenarchiv/uploaded_documents
sudo chmod 777 /opt/lampp/htdocs/teil2/tag27/dokumentenarchiv/uploaded_documents
