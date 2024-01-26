#!/bin/bash

# iptables configuration
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -t nat -A PREROUTING -s firewall -p tcp --dport 80 -j DNAT --to-destination 172.2.0.3:4200 # route http traffic to front end
iptables -t nat -A POSTROUTING -s firewall -p tcp -j SNAT --to-source 172.2.0.2

npm start
