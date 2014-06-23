---
layout: post
title: "iTerm2 & vim with Solarized color scheme."
categories: iterm2 vim solarized
---

So I ran into some weird issues with background color bleed when using iTerm2 & vim on OSX. So I thought I’d write my solution up since I found a lot of incorrect information out there.

 Step 1: Open iTerm2’s preferences:

  - Preferences -> Terminal -> ‘Report Terminal Type’ = xterm-256color

 Step 2: Open up your .vimrc and add these lines.

```vim
set background=dark
" solarized options 
let g:solarized_termcolors = 256
let g:solarized_visibility = "high"
let g:solarized_contrast = "high"
colorscheme solarized
```

It’s just that easy!
