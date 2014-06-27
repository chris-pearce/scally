# Scally Core

This is the mandatory part of Scally, without the Core Scally won't work.

The Core acts like the foundation of your project providing important things like:

- Global variables (Settings) to house all common styles to keep your CSS nicely organised and
maintainable. Every variable can be easily overridden allowing you to have absolute control.
- [Normalize](http://necolas.github.io/normalize.css/).
- A reset to remove the default spacing and border from ALL HTML elements to make everything a
level playing field. The reset does other things like remove default bullets from lists and change
the `box-sizing` property to the more friendly `border-box` value (although this is optional).
- Debug styles to detect any improperly nested or potentially invalid markup, or any potentially
inaccessible code.
- Handy Sass functions and mixins to make writing CSS easier and DRY*ey*.
- Base styles to set the core styles for the main HTML elements of a project e.g. links, headings,
paragraphs, etc. These have a very low specificity.