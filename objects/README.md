# Scally Objects




## Contents

- [What are they?](#what-are-they)
- [Why have them?](#why-have-them)
- [How to use](#how-to-use)
- [Namespacing](#namespacing)
- [Further reading](#further-reading)




## What are they?

Objects like [layout modules](../layout/) abstract out the really common
treatments of a User Interface (UI). They're mostly concerned with the
structural aspects of the UI and carry zero cosmetic styles—objects by
themselves never look like designed ‘things’.

Layout modules *are* actually objects, they just exist in their own section as
they're only focused on UI layout patterns whereas objects take care of more
than just layout patterns e.g. make a link not look like a link, strip away
all browser default button styles, maintain a specific aspect ratio but adapt
to the width of a containing element, etc.

Objects follow the [single responsibility principle](http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/)
and the [open/closed principle](http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/).

*Scally version 1 never had objects instead they existed as utilities.
Scally version 2 moved away from being a heavily utility based framework to one
that was more focused on components which gave birth to objects meaning any
utilities that were doing too much got converted to objects.*




## Why have them?

Objects take care of the really common treatments of a UI meaning you don't
have to keep writing the same styles over and over again, instead you can focus
on writing the CSS concerned with the meat of a UI; it's [components](../components/).

Objects makes your CSS alot more DRYer, more maintainable, and more performant—
results in drastically smaller stylesheets. And objects allow you to make
far-reaching changes to your UI with simple modifications to a single object as
you have the confidence in your changes because edits to a object only ever
alter one responsibility.





## How to use

[TODO]




## Namespacing

All object classes, silent placeholder selectors, settings, and filenames
are prefixed with `o-` so that they're easily identifiable e.g.

- `.o-list-inline`
- `%o-list-inline`
- `$o-list-inline-apply-at-breakpoints`
- `_o-list-inline.scss`




## Further reading

*Make sure to read the documentation within each object Sass partial file as
it will contain information about the object and it's implementation.*

- [More Transparent UI Code with Namespaces -> Object Namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/#object-namespaces-o-)
- [CSS guidelines - The separation of concerns](http://cssguidelin.es/#the-separation-of-concerns)
- [The single responsibility principle applied to CSS](http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/)
- [The open/closed principle applied to CSS](http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/)
