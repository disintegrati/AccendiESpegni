# AccendiESpegni

Spegniamo e accendiamo un LED collegato al GPIO di un raspberry.

Installa Node
Scarica l'intero git

$ npm install

installare anche

https://github.com/quick2wire/quick2wire-gpio-admin

con un git clone e poi

cambiare

sys/devices/virtual/gpio/ in /sys/class/gpio/

all'interno di quick2wire-gpio-admin/src/gpio-admin.c

poi

$cd quick2wire-gpio-admin $make $sudo make install $sudo adduser $USER gpio

uscire e rientrare dal terminale

in bin/www c'è il setup dei GPIO e di Socket.io
