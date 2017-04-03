#!/bin/bash

if [ ! $# == 1 ]; then
  echo $"Skladnia: $0 {page_id}"
  exit
fi


# not Auth ??? - todo
curl    -H "Authorization: Bearer u4qnlunMrSWqcyitTV06gH5C8ZlAaWar"   --form name=myfileparam --form file=@test.jpg \
  -Fdata='{"pages_id": "'$1'", "file": "file"}' \
  -Fsubmit=Build \
	http://cmsrs3admin.loc/api/images/upload

