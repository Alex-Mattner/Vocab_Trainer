#!/bin/bash
# echo "pwd: `pwd`"
# echo "\$0: $0"
# echo "basename: `basename $0`"
# echo "dirname: `dirname $0`"

# Eigentümer und Schreibrechte für aktuellen Ordner setzen

sudo chown -R joerg:joerg `dirname $0`
sudo chmod 777 `dirname $0`