# Scally Objects




## Contents

- [What are they?](#what-are-they)
- [Why have them?](#why-have-them)
- [How to use](#how-to-use)
- [Namespacing](#namespacing)
- [Further reading](#further-reading)




## What are they?

Objects like [layout modules](../layout/README.md) abstract out the really
common treatments of a UI. They're mostly concerned with the structural aspects
of the UI and carry zero cosmetic styles—objects by themselves never look like
designed ‘things’.

Layout modules *are* technically objects, they just exist in their own section
as they're only focused on UI layout patterns whereas objects take care of more
than just layout patterns e.g. make a link not look like a link, strip away
all browser default button styles, maintain a specific aspect ratio but adapt
to the width of a containing element, etc.

Objects follow the [single responsibility principle](http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/)
and the [open/closed principle](http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/).

*Scally version 1 did not have a separate concept of objects, instead they
existed as utilities. Scally version 2 moved away from being a heavily utility
based framework to one that was more focused on components. Many of the
utilities in version 1 were not acting as true utilities (single declarations
or simple universal patterns), and these were converted to objects.*




## Why have them?

Objects take care of the really common treatments of a UI meaning you don't
have to keep writing the same styles over and over again, instead you can focus
on writing the CSS concerned with the meat of a UI; it's
[components](../components/README.md).

Objects help keep our CSS DRY and maintainable and more performant—resulting in
drastically smaller stylesheets. And objects allow you to make far-reaching
changes to your UI with simple modifications to a single object as you have the
confidence in your changes because edits to a object only ever alter one
responsibility.





## How to use

Objects like layout modules should be considered first when creating any new UI
including when in the context of components.

Objects can be applied directly to the HTML if what they're being applied too
isn't a component. If it is a component then it should be `@extend`ed via it's
[Sass silent placeholder selector](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_)
from within the component partial. However if this means creating component
classes that exist only for objects to be `@extend`ed from then avoid this and
just apply the object directly to the HTML. It's not a hard rule how objects
are applied within components, the main thing is to strive for consistency.

The most used and the most powerful object is the
[**List inline**](_o-list-inline.scss) object which simply renders list items
(`li`) horizontally instead of their default vertical rendering. This object
can potentially save hundreds of lines of CSS as having list items render
horizontally is such a common UI treatment. Some examples of its application
within components:

```scss
.c-pagination {
  @extend %o-list-inline;
  @extend %o-list-inline--spacing-tiny;
}
```

```scss
.c-nav-main {
  @extend %o-list-inline;
  @extend %o-list-inline--spacing-small;
}
```

```scss
.c-breadcrumbs {
  @extend %o-list-inline;
  @extend %o-list-inline--spacing-base-both;
  @extend %o-list-inline--delimited-slash;
}
```

Or on an element that isn't really part of any component:

```html
<ul class="o-list-inline">
  <li><a href="/terms">Terms &amp; Conditions</a></li>
  <li><a href="/policy">Privacy policy</a></li>
  <li><small>&copy; Scally 2015</small></li>
</ul>
```

They're some objects that setup base styles for elements e.g.

- [**Table** object](_o-table.scss)
- [**List** object](_o-list.scss)

And some objects that normalize certain elements e.g. the [**Button** object](
_o-button.scss).




## Namespacing

All object classes, silent placeholder selectors, settings, and filenames
are prefixed with `o-` so that they're easily identifiable e.g.

- `.o-list-inline`
- `%o-list-inline`
- `$o-list-inline-apply-at-breakpoints`
- `_o-list-inline.scss`




## Further reading

*Make sure to read the documentation within each object Sass partial file as
it will contain information about the specific object and it's
implementation.*

- [More Transparent UI Code with Namespaces -> Object Namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/#object-namespaces-o-)
- [CSS guidelines - The separation of concerns](http://cssguidelin.es/#the-separation-of-concerns)
- [The single responsibility principle applied to CSS](http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/)
- [The open/closed principle applied to CSS](http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/)
