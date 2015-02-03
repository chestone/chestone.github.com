---
layout: post
title: "YADR, MacVim & Solarized Light"
categories: technologies
tags: vim YADR MacVim dotfiles Solarized
---

Recently I'd decided to completely blow away my dotfiles and switch to one of the many prepackaged dotfiles repos out there.
I decided to move on from my nearly decades old set of config files because they'd grown crufty and full of lines that I no longer remembered what purpose they originally served.
As a vim user this is a pretty big deal. I'd been using the same shortcuts, again for nearly a decade and have grown a significant amount of muslc memory around them; so this was not made lightly.
After reviewing several options and polling the [crowd](https://twitter.com/Cheston/status/552555405734199296); I've settled on [YADR](https://github.com/skwp/dotfiles) a collection of dotfiles that I find generally agreable.
I am still figuring out all of the plugins and shortcuts, but in general it is pretty good. 

Just one thing. I use MacVim and prefer the Solarized Light theme for syntax highlighting. After installing YADR and making some small changes I fired up MacVim to find this.


![MacvimYADR](/src/img/vim_broken_solarized.jpg)


Not Cool. So I tinkered and tried varying settings. After a while I grew frustrated and decided to take to GitHub and file an [issue](https://github.com/skwp/dotfiles/issues/597#issuecomment-72624161).

__TLDR; Do this.__

In your .vimrc.before add

```vim
let g:yadr_disable_solarized_enhancements = 1
```

And in your .vimrc.after add this:

```vim
if !has("gui_running")
  let g:solarized_termtrans=1
  endif
  set background=light
  colorscheme solarized
```


There you go! Enjoy the beautiful, easy on the eyes feel of Solarized Light with the freedom of MacVim.
