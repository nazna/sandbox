#!/bin/bash -eu

for filename in $(/bin/ls /tmp/database/schema/*); do
  psql --dbname postgres --username postgres --file "${filename}"
done

for filename in $(/bin/ls /tmp/database/dml/*); do
  psql --dbname postgres --username postgres --file "${filename}"
done
