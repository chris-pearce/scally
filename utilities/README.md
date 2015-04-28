# Scally Utilities




## Contents

- [What are they?](#what-are-they)
- [Demos](#demos)
- [Why have them?](#why-have-them)
- [How to use](#how-to-use)
  - [An example](#an-example)
  - [Applying to components](#applying-to-components)
- [Specificity](#specificity)
- [Namespacing](#namespacing)
- [Further reading](#further-reading)




## What are they?

Utilities are your helper classes and typically your last resort when needing
to apply styles to an element.

They apply really common CSS styles either as a single declaration e.g. float
an element to the right: `.u-float-right`, or a very simple, universal pattern
(multiline declaration) e.g. hide an element but only visually:
`.u-hide-visually`.

There scope is only ever one element i.e. utilities can't affect child elements
of the element they're being applied too and they never have any styles that
are concerned with cosmetics.

Utilities follow the [single responsibility principle](http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/)
and the [open/closed principle](http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/).




## Demos

<http://s.codepen.io/chris-pearce/full/WbMgMp> (work in progress)




## Why have them?

Utilities exist because every UI consists of really common styles that will
need to be applied many times, therefore it makes sense to abstract these
styles into nice reusable CSS snippets i.e. utilities. It's the same reason why
[objects](../objects/README.md) and [layout modules](../layout/README.md)
exist. The difference though with utilities is that they sit right at the
bottom of the food chain—so to speak—in comparison to the other Scally
sections, because they're so simple and low-level, and aren't too far away from
inline styles.

With that said and even though it's rare they'll always be the need to apply
utilities to a UI as not everything can be a
[component](../components/README.md) or taken care of by
objects and layout modules. In these scenarios, if utilities didn't exist, we
would have issues like:

- Where do these types of styles live in our CSS architecture?
- Lots of *micro* components that aren't *true* components.
- CSS not being as DRY and maintainable as it could be because we would have to
  keep writing the same styles over and over again.

Utilities help keep our CSS DRY and maintainable and enable us to make
far-reaching changes to our UI with simple modifications to a single utility
because we have the confidence that edits to a utility will only ever alter one
responsibility.




## How to use

Each utility applies a single style e.g.

```
// Center align text
%u-text-align-center,
.u-text-align-center {text-align: center;}
```

Or a very simple, universal pattern (multiline declaration) e.g.

```
// Pin an element to all corners of its parent
%u-position-pin-all,
.u-position-pin-all {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
```

Utility classes are applied directly to the HTML element or `@extend`ed via
it's [Sass silent placeholder selector](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_).

If the element already has a component class e.g. `.c-box` then utility classes
shouldn't be applied to the element as the styling needs to be taken care of by
the component itself in order to keep the component nicely self-contained, see
the section below: [Applying to components](#applying-to-components).

It should be acknowledged—like with most things CSS related—that the above is
not completely black and white, what matters is that you know when you're
overusing utilities. And this comes back to the last resort approach mentioned
in the [What are they?](#what-are-they) section above.

They're two exceptions to utilities being your last resort: the
[**Spacing**](_u-spacing.scss) utility and the
[**Percentage widths**](_u-widths.scss) utility. The **Percentage widths**
utility is a fundamental part of the Grid layout module giving the grid items
their percentage based widths e.g. `.u-one-half`, `.u-three-quarters`, etc. The
**Spacing** utility which includes a lot of spacing rules via the `margin` and
`padding` properties can be used to apply spacing to the *outside* (`margin`)
of elements especially components.

### An example

If we look at a snippet of the UI from this
[home page](http://www.manchester.gov.uk/):

[![alt text](https://s3.amazonaws.com/uploads.hipchat.com/22262/1524600/Rzy0WiEjhhp25k5/Screen%20Shot%202015-04-15%20at%208.12.45%20pm.png "Some UI from the Manchester City Council home page")](https://s3.amazonaws.com/uploads.hipchat.com/22262/1524600/Rzy0WiEjhhp25k5/Screen%20Shot%202015-04-15%20at%208.12.45%20pm.png)

We can construct almost all of it using a mixture of:

- [Base styles](../core/base/) for things like headings, links, paragraphs,
  etc.
- [Grid layout module](../layout/_l-grid.scss) to layout the sets of 2 and 4
  columns.
- [Container layout module](../layout/_l-container.scss) to group this set of
  content, center align it and apply the global width.
- [Button component](../components/_c-button.scss) for the *More ...* CTA
  buttons.
- Theme styles to apply the dark background and white text/yellow links.

The missing treatment is the center alignment of all the text and this is where
using a utility—one of the **Text** alignment utilities:
[`.u-text-align-center`](../utilities/_u-text.scss)—would make sense, otherwise
we'd have to **a)** create a *micro* component/object that just applies
`text-align: center` which is overkill and doesn't fit the criteria of a
component/object *OR* **b)** just hack that style into our CSS architecture
somewhere which can get real messy quick.

We could just apply the utility to the main container element which would be
the container layout module, like so:

```
<div class="l-container l-container--full-bleed  u-text-align-center">
  <div class="l-container">
    [ ... ]
  </div>
</div>
```

Note how the utility class comes last in the class attribute? The order is:

1. Components
2. Layout modules
3. Objects
4. Utilities

Preferably separated by 2 empty spaces to improve readability.

### Applying to components

It's quite rare to apply utilities in the context of components as components
are discrete custom elements of a UI that enclose specific semantics and
styling therefore applying lots of utilities to them doesn't make them as
self-contained, portable, and maintainable as they need to be. The exception to
this is when we need to apply really common universal patterns which are
multiline declaration blocks e.g. hide an element but only visually:
`.u-hide-visually`. When these types of utilities are needed you would apply
the utility via its Sass silent placeholder selector using the `@extend`
directive, rather than applying the utility class to the component HTML, however
some utilities can be applied to the component HTML:

- [Hide](_u-hide.scss)
- [Toggle visibility](_u-toggle-visibility.scss)

As mentioned already the most important thing with utilities is knowing how to use them appropriately.

If we had a **Modal dialog** component and part of that component was the
overlay that sits behind the dialog—covering the entire viewport—we could make
use of one of the **Position** utilities: `.u-position-pin-all` which will pin
an element—in this case the overlay—to all corners of it's parent—in this case
the main viewport.

A code example:

**HTML**

```
<div class="c-modal-dialog__overlay"></div>
```

**CSS**

```
.modal__overlay {
    @extend %u-position-pin-all;
    [ ... ]
}
```

And we may have to provide some text in this component for users of assistive
technology e.g. screen reader users. In this case we can apply the utility
class direct to the HTML as the element we're applying it too only exists for
this reason therefore it's overkill to have to create a new component class
just for this, especially when we may have to apply this treatment a few
times. So it might look something like this:

```
<div class="c-modal-dialog__header">
  <span class="u-hide-visually">Beginning of dialog window. It begins with a heading 1 called "Registration Form". Escape will cancel and close the window. This form does not collect any actual information.</span>
  <h1 class="c-modal-dialog__title">Registration Form</h1>
  [...]
</div>
```

**Do not `@extend` single declarations** as there is no benefit in doing
this, components only need to make use of utilities when they're applying
universal patterns which are multiline declarations.




## Specificity

Utilities always need to *win* when it comes to specificity (CSS' first C; the
cascade) as they should always *just work* otherwise they're not doing their
job properly i.e. you should never be needing to override a utility's styles.
If you are then you're not using them correctly.

To ensure this Scally does the following:

- Applies the `!important` keyword to all utilities to boost their specificity.
- Declares all utilities last in the Scally framework so they're compiled after
  everything else.




## Namespacing

All utility classes, silent placeholder selectors, settings, and filenames
are prefixed with `u-` so that they're easily identifiable e.g.

- `.u-text-align-center`
- `%u-text-align-center`
- `$u-text-apply-at-breakpoints`
- `_u-text.scss`




## Further reading

*Make sure to read the documentation within each utility Sass partial file as
it will contain information about the specific utility and it's implementation.*

- [More Transparent UI Code with Namespaces -> Utility Namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/#utility-namespaces-u-)
- [The single responsibility principle applied to CSS](http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/)
- [The open/closed principle applied to CSS](http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/)
- [When to use `@extend`; when to use a mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
- [The Role of Utility Classes](http://davidtheclark.com/on-utility-classes/)
- [CSS guidelines - The separation of concerns](http://cssguidelin.es/#the-separation-of-concerns)
