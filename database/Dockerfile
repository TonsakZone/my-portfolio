FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=1155
ENV MYSQL_DATABASE=portfolio

ADD backup.sql /docker-entrypoint-initdb.d

EXPOSE 3307
