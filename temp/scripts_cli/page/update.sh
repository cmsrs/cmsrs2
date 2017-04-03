#!/bin/bash

if [ ! $# == 2 ]; then
  echo $"Skladnia: $0 {menu_id} {page_id}"
  exit
fi


curl  --silent    -H "Authorization: Bearer u4qnlunMrSWqcyitTV06gH5C8ZlAaWar" -H "Accept:application/json" -H "Content-Type:application/json"   -XPOST "http://cmsrs3admin.loc/api/pages/save" -d '{"data":{ "id":"'$2'",  "published":"1","translates":[ {"type": "page_short_title",  "lang": "pl", "value" :"p_short_pl2 ch"},  { "type":"page_short_title", "lang": "en", "value":"p_short_en2 ch"},{ "type": "page_title", "lang": "pl", "value" : "p_pl2 ch" },  { "type": "page_title", "lang": "en", "value" : "p_en2 ch"}, { "type":  "page_intro_text", "lang" : "pl", "value" : "qua... ch" },  {  "type":  "page_intro_text", "lang" : "en", "value" :"liqua... ch"} ], "is_left_menu" : "1", "is_intro_text" : "1", "menus_id":"'$1'", "contents":[{ "lang": "pl", "content":"est laborum. ch"}, { "lang": "en", "content":"laborum. ch"}] }}'



#curl    -H "Accept:application/json" -H "Content-Type:application/json"   -XPOST "http://cmsrs3admin.loc/api/pages/save" -d '{"data":{ "id":"'$2'",  "published":"1","translates":{"page_short_title":{"pl":"p_short_pl2_ch","en":"p_short_en2_ch"}, "page_title":{"pl":"p_pl2_ch","en":"p_en2_ch"}, "page_intro_text":{"pl":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...","en":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."} }, "is_left_menu" : "1", "is_intro_text" : "1", "menus_id":"'$1'", "contents":{"pl":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","en":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} }}'
