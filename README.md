# SigmundBlow

Traitement temps réel pour Pure data 

cd ~/src
git clone --recursive https://github.com/gllmAR/sigmundBlow

#### installer pd



#### installer node

#### installer rhizome

#### systemD 

li : 
https://www.digitalocean.com/community/tutorials/understanding-systemd-units-and-unit-files

sudo cp ~/src/sigmundBlow/services/* /etc/systemd/system/

sudo systemctl daemon-reload

sudo systemctl enable sb-pd.service

sudo systemctl enable sb-rh.service

sudo chmod 0644 /etc/systemd/system/sb-pd.service 

sudo chmod 0644 /etc/systemd/system/sb-rh.service 
	
#### run le script ;

/home/pi/src/pd-0.46-7/bin/pd -nogui -listdev -audiodev "3,3" /home/pi/src/sigmundBlow/_sigmundBlow.pd