#!/bin/bash

if [ ! $# == 1 ]; then
  echo $"Skladnia: $0 {menu_id}"
  exit
fi

echo $1

curl  -H "Authorization: Bearer u4qnlunMrSWqcyitTV06gH5C8ZlAaWar"  -H "Accept:application/json"  -XDELETE    "http://cmsrs3admin.loc/api/menus/delete/$1"


