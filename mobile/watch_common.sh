#!/bin/bash

# Keep common files synced since react native can't alias/import above root:
# https://github.com/facebook/react-native/issues/637#issuecomment-109628336


chsum1=""

while [[ true ]]
do
    chsum2=`find ../common/ -type f -exec md5 {} \;`
    if [[ $chsum1 != $chsum2 ]] ; then           
        rsync -r ../common ./src
        chsum1=$chsum2
    fi
    sleep 2
done
