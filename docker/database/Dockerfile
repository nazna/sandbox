FROM mysql:8.0.27

ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=ema

COPY my.cnf /etc/mysql/conf.d/my.cnf
COPY ddl/00-initialize-database.sql /docker-entrypoint-initdb.d/00-initialize-database.sql
COPY ddl/01-create-table-users.sql /docker-entrypoint-initdb.d/01-create-table-users.sql
