#!/bin/bash

# iptables configuration
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 172.1.0.3
iptables -t nat -A POSTROUTING -p tcp -j SNAT --to-source 172.1.0.2

# ufw configuration
ufw allow from 172.0.0.1 to 172.0.0.2 port 80 # allow incoming traffic from main host
ufw route allow from 172.0.0.1 to 172.1.0.3 # allow traffic forwarding to classifier
ufw enable

sleep infinity