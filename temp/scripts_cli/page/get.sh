#!/bin/bash

if [ ! $# == 1 ]; then
  echo $"Skladnia: $0 {page_id}"
  exit
fi



curl  -H "Accept:application/json"    -H "Authorization: Bearer u4qnlunMrSWqcyitTV06gH5C8ZlAaWar"  "http://cmsrs3admin.loc/api/pages/get/$1"
