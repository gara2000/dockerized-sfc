FROM node:20.10.0

COPY app /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g @angular/cli
RUN npm install

COPY entry_point.sh /usr/local/bin/entry_point.sh
RUN chmod +x /usr/local/bin/entry_point.sh

ENTRYPOINT ["/usr/local/bin/entry_point.sh"]