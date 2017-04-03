#!/bin/bash

if [ ! $# == 1 ]; then
  echo $"Skladnia: $0 {menu_id}"
  exit
fi


#curl   -H "Authorization: Bearer u4qnlunMrSWqcyitTV06gH5C8ZlAaWar"  -H "Accept:application/json" -H "Content-Type:application/json"   -XPOST "http://cmsrs3admin.loc/api/menus/save" -d '{"data":{ "id":"'$1'",  "published":"1","position":"1","is_link":"1","translates":{"menu_short_title":{"pl":"test_pl2_menu2 ch","en":"test_en2_menu2 ch"}}}}'


curl   -H "Authorization: Bearer u4qnlunMrSWqcyitTV06gH5C8ZlAaWar"  -H "Accept:application/json" -H "Content-Type:application/json"   -XPOST "http://cmsrs3admin.loc/api/menus/save" -d '{"data":{ "id":"'$1'",  "published":"1","position":"1","is_link":"1","translates":[ { "type": "menu_short_title", "lang":"pl", "value" :"test_menu_pl33 ch" },{ "type": "menu_short_title", "lang":"en", "value":"test_menu_en33 ch" } ]}}'
