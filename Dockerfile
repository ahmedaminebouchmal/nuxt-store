# Use MariaDB as base image
FROM mariadb:latest

# Set environment variables from .env file
ARG MYSQL_ROOT_PASSWORD
ARG MYSQL_DATABASE
ARG MYSQL_USER
ARG MYSQL_PASSWORD

ENV MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
ENV MYSQL_DATABASE=${MYSQL_DATABASE}
ENV MYSQL_USER=${MYSQL_USER}
ENV MYSQL_PASSWORD=${MYSQL_PASSWORD}

# Create directory for custom configuration
RUN mkdir -p /etc/mysql/conf.d

# Add custom MariaDB configuration
COPY <<-EOT /etc/mysql/conf.d/my.cnf
[mysqld]
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci
skip-character-set-client-handshake
default-storage-engine = INNODB
max_connections = 100
EOT

# Create directory for initialization scripts
RUN mkdir -p /docker-entrypoint-initdb.d

# Expose MariaDB port
EXPOSE 3306

# Note: Data persistence is handled by Railway volumes
# Configure your volume in Railway dashboard

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
  CMD mysqladmin ping -h localhost -u $MYSQL_USER --password=$MYSQL_PASSWORD || exit 1
