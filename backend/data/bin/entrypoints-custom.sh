#!/bin/bash

set -e

### If initial database is set, wipe the current database and update the schema.
if [ ! -z $up_db ]
then
  ### Doctrine schema update with entities.
  symfony console d:d:d --force --no-interaction
  symfony console d:d:c --no-interaction
  symfony console d:s:u --force --no-interaction
fi

exec "$@"
