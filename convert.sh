#!/bin/bash

while read LINE
do
        echo $LINE
        css2sass $LINE `echo $LINE | sed s/css$/sass/p`
done < <(find . -name *.css)

