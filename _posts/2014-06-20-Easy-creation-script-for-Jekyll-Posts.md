---
layout: post
title: "Easy creation script for Jekyll Posts"
categories: jekyll shell
---

Since I have started using Jekyll for blog like sites I was initially frustrated in all of the boilerplate that had to be written in simple post creation. So I wrote a little script to help generate the basic Jekyll boilerplate front-matter.

```bash
#!/bin/sh

echo "What would you like the title of your post to be?"
read post_name
echo "What categories would you like this post to be under?(space seperated list)"
read categories

today=$( date "+%Y-%m-%d" )
rawpost="$today-$post_name.md"
post=${rawpost// /-}
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
title: "$post_name"
categories: $categories
---
EOF

echo "Post: $title created."
```
I feel like this sort of thing really belongs in Jekyll itself since it is all boilerplate for posts, but until then this works. Enjoy.
