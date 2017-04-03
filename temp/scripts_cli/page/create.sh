#!/bin/bash


if [ ! $# == 1 ]; then
  echo $"Skladnia: $0 {menu_id}"
  exit
fi


#curl  -H "Authorization: Bearer u4qnlunMrSWqcyitTV06gH5C8ZlAaWar" "http://cmsrs3admin.loc/api/pages/index"


curl  --silent    -H "Authorization: Bearer u4qnlunMrSWqcyitTV06gH5C8ZlAaWar" -H "Accept:application/json" -H "Content-Type:application/json"   -XPOST "http://cmsrs3admin.loc/api/pages/save" -d '{"data":{ "id":"0",  "published":"1","translates":[ {"type": "page_short_title",  "lang": "pl", "value" :"p_short_pl2"},  { "type":"page_short_title", "lang": "en", "value":"p_short_en2"},{ "type": "page_title", "lang": "pl", "value" : "p_pl2" },  { "type": "page_title", "lang": "en", "value" : "p_en2"}, { "type":  "page_intro_text", "lang" : "pl", "value" : "qua..." },  {  "type":  "page_intro_text", "lang" : "en", "value" :"liqua..."} ], "is_left_menu" : "1", "is_intro_text" : "1", "menus_id":"'$1'", "contents":[{ "lang": "pl", "content":"est laborum."}, { "lang": "en", "content":"laborum."}] }}'



#curl  --silent    -H "Authorization: Bearer u4qnlunMrSWqcyitTV06gH5C8ZlAaWar" -H "Accept:application/json" -H "Content-Type:application/json"   -XPOST "http://cmsrs3admin.loc/api/pages/save" -d '{"data":{ "id":"0",  "published":"1","translates":{"page_short_title":{"pl":"p_short_pl2","en":"p_short_en2"}, "page_title":{"pl":"p_pl2","en":"p_en2"}, "page_intro_text":{"pl":"qua...","en":"liqua..."} }, "is_left_menu" : "1", "is_intro_text" : "1", "menus_id":"'$1'", "contents":{"pl":"est laborum.","en":"laborum."} }}'


#curl  --silent    -H "Authorization: Bearer u4qnlunMrSWqcyitTV06gH5C8ZlAaWar" -H "Accept:application/json" -H "Content-Type:application/json"   -XPOST "http://cmsrs3admin.loc/api/pages/save" -d '{"data":{ "id":"0",  "published":"1","translates":{"page_short_title":{"pl":"p_short_pl2","en":"p_short_en2"}, "page_title":{"pl":"p_pl2","en":"p_en2"}, "page_intro_text":{"pl":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...","en":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."} }, "is_left_menu" : "1", "is_intro_text" : "1", "menus_id":"'$1'", "contents":{"pl":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","en":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} }}'
