FROM ubuntu:24.04

# Installing necessary tools
RUN apt-get update && \
    apt-get install -y iputils-ping curl net-tools ufw tcpdump

COPY entry_point.sh /usr/local/bin/config_file.sh
RUN chmod +x /usr/local/bin/config_file.sh

ENTRYPOINT ["/usr/local/bin/config_file.sh"]
