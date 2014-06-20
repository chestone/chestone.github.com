#!/bin/sh

echo "What would you like the title of your post to be?"
read post_name
echo "What categories would you like this post to be under?(space seperated list)"
read categories

today=$( date "+%Y-%m-%d" )
post="$today-$post_name.md"
echo "Your post name is $post"
if [ ! -f "$post" ]
then
    touch $post
else
    echo "Post with the name $title has already been created. Please try another name." 1>&2
    exit 1
fi

cat <<EOF >> $post
---
layout: post
title: $post_name
categories: $categories
---
EOF

echo "Post: $title created."
