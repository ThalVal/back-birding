# Use the official MySQL image as a base
FROM mysql:8.0

# Optionally: Copy custom configurations if any (uncomment if needed)
# COPY my-custom.cnf /etc/mysql/conf.d/

# Optionally: Add initialization scripts (uncomment if needed)
COPY ./scripts/ /docker-entrypoint-initdb.d/
