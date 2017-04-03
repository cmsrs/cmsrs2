#!/bin/bash

if [ ! $# == 1 ]; then
  echo $"Skladnia: $0 {page_id}"
  exit
fi

#echo $1

curl  -H "Accept:application/json"  -XDELETE    "http://cmsrs3admin.loc/api/pages/delete/$1"


