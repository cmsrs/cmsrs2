#!/bin/bash

if [ ! $# == 1 ]; then
  echo $"Skladnia: $0 {menu_id}"
  exit
fi



curl  -H "Authorization: Bearer u4qnlunMrSWqcyitTV06gH5C8ZlAaWar" "http://cmsrs3admin.loc/api/menus/get/$1"
