#!/bin/bash

for cssfile in `find src/css -name "*.css" -print | grep -v min.css`
do
	uglifycss ${cssfile} > `echo ${cssfile} | sed -e 's/\.css//'`.min.css
done
