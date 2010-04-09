#!/bin/bash

while read LINE
do
        echo $LINE
        css2sass $LINE `echo $LINE | sed s/css$/sass/p`
done < <(find . -name *.css)

while read LINE
do
        echo $LINE
        html2haml $LINE `echo $LINE | sed s/html$/haml/p`
done < <(find . -name '*.html')

