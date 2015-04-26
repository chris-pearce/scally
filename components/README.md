# Scally Components




## Contents

- [What are they?](#what-are-they)
- [When to use?](#when-to-use)
- [How to use](#how-to-use)
  - [Using layout modules, objects, and utilities in components](#using-layout-modules-objects-and-utilities-in-components)
    - [Layout modules](#layout-modules)
    - [Objects](#objects)
    - [Utilities](#utilities)
  - [Portable and robust](#portable-and-robust)
    - [Nested components](#nested-components)
    - [Free of constraints](#free-of-constraints)
    - [Encapsulation](#encapsulation)
    - [Testing](#testing)
- [Namespacing](#namespacing)
- [Further reading](#further-reading)




## What are they?

Components are the discrete custom elements of a User Interface (UI) that
enclose specific semantics and styling, they also make up the bulk of a UI.
Some examples:

- [Button](_button.scss)
- Pagination
- Breadcrumbs
- Dialog
- Icon

Components are extremely focused implementing only a single part of a UI, so
they should never try to do too much. They also shouldn't be concerned or have
any dependencies on ancestral context i.e. where they live in a UI, making them
extremely [portable and robust](#portable-and-robust). So each component should
be designed to exist as a stand-alone thing.




## When to use?

The [**layout modules**](../layout/README.md) and [**objects**](../objects/README.md)
is what you want to look at before implementing a component as they take care of
the many styles you may need. In fact your components should hardly ever need
any CSS concerned with layout as the **Layout** section exists to take care of
that for you. [**Utilities**](../utilities/README.md) should also be looked at
but only if you're needing the utilities concerned with simple, universal patterns
(multiline declarations) e.g. hide an element but only visually: `.u-hide-visually`.

So you would create a new component when you feel you have a discrete piece of
the UI that can't be built alone via the [**layout modules**](../layout/README.md)
and [**objects**](../objects/README.md).




## How to use

Take this common UI pattern:

![alt text](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/pe5iBm20LpLADVn/Screen%20Shot%202014-11-17%20at%2010.51.26%20am.png "A pagination component")

We can see that this fits the criteria of a component because it:

- is a discrete custom element of the UI,
- encloses specific semantics and styling,
- can exist completely stand-alone.

So in this case we would make the call to create a **Pagination** component.

HTML for the pagination component:

```
<nav class="c-pagination" role="navigation" aria-label="Pagination">
  <ul class="c-pagination__list">
    <li class="c-pagination__list__item c-pagination__list__item--count">Pages 1-20 of 200</li><!--
    --><li class="c-pagination__list__item">
      <a href="#" class="c-pagination__link" rel="prev">← Prev<span class="u-hide-visually">ious page</span></a>
    </li><!--
    --><li class="c-pagination__list__item">
      <a href="#" class="c-pagination__link"><span class="u-hide-visually">Page </span>1</a>
    </li><!--
    --><li class="c-pagination__list__item">
      <a href="#" class="c-pagination__link"><span class="u-hide-visually">Page </span>2</a>
    </li><!--
    --><li class="c-pagination__list__item">
      <a href="#" class="pagination__link is-active"><span class="u-hide-visually">You're currently reading page </span>3</a>
    </li><!--
    --><li class="c-pagination__list__item pagination__list__item--skip">
      <a href="#" class="c-pagination__link"><span class="u-hide-visually">Jump to page </span>21</a>
    </li><!--
    --><li class="c-pagination__list__item">
      <a href="#" class="c-pagination__link"><span class="u-hide-visually">Page </span>22</a>
    </li><!--
    --><li class="c-pagination__list__item">
      <a href="#" class="c-pagination__link"><span class="u-hide-visually">Page </span>23</a>
    </li><!--
    --><li class="c-pagination__list__item">
      <a href="#" class="c-pagination__link" rel="next">Next →<span class="u-hide-visually"> page</span></a>
    </li>
  </ul>
</nav>
```

CSS for the pagination component:

```
/* ============================================================================
   @COMPONENTS -> PAGINATION
   ========================================================================= */


/**
 * Pagination component rendered as an inline list.
 */


/**
 * Settings.
 */

// Colours
$c-pagination-border-color: darken(#eee, 4%);


.c-pagination {
  @include to-rem(padding, $spacing-quarter);
  border: 1px solid $c-pagination-border-color;
  border-radius: $border-radius;
}


  /**
   * The list `ul`, render inline.
   */

  .c-pagination__list {
    @extend %o-list-inline;
    @extend %o-list-inline--spacing-tiny;
    text-align: center;
  }


    /**
     * List items.
     */

    /**
     * Modifier: skip list item.
     *
     * Renders an ellipsis which breaks apart list items.
     */

    .c-pagination__list__item--skip:before {
      // This right spacing needs to equal the spacing of the list items
      @include to-rem(margin-right, $spacing-third);
      content: "\2026";
      display: inline-block;
      vertical-align: bottom;
      speak: none;
      color: $color-text-base;
    }


     /**
      * The links.
      */

     .c-pagination__link {
        @include to-rem(padding, $spacing-micro $spacing-third);
        display: inline-block;
        background-color: #eee;
        border: 1px solid $c-pagination-border-color;
        border-radius: $border-radius;


        /**
         * Hover and active states.
         */

        &:hover,
        &:focus,
        &.is-active {
          background-color: lighten($color-black, 4%);
          color: $color-white;
          text-decoration: none;
        }
     }
```

### Using layout modules, objects, and utilities in components

#### Layout modules

As mentioned above your components should avoid having any CSS concerned with
layout as that's the job of the [**Layout** section](../layout/). What will
typically give you the layout you need will be the [**Grid**](../layout/_grid.scss)
layout module or the [**Side-by-side**](../layout/_side-by-side.scss) layout
module. So not matter how small your layout is, always use a layout module and
apply the layout module classes direct to the components HTML.

So if we look at this UI:

[![alt text](https://s3.amazonaws.com/uploads.hipchat.com/22262/1524600/Vc5wIlln6fNNp0i/User%20account%20submit%20button.png "User account submit button component")](https://s3.amazonaws.com/uploads.hipchat.com/22262/1524600/Vc5wIlln6fNNp0i/User%20account%20submit%20button.png)

We can see that we need some layout to render the circle containing the user's
initials to the left of the user's information. We might create a component
called **User account submit button** for this but we'd apply the layout module
classes direct to the component's HTML like so:

```
<button class="c-button-user-account" type="submit">
  <span class="l-side-by-side-alt">
    <span class="l-side-by-side-alt__left">
      <span class="c-button-user-account__avatar" aria-hidden="true">c</span>
    </span>
    <span class="l-side-by-side-alt__right">
      <strong class="c-button-user-account__name">Nike</strong>
      <span class="c-button-user-account__url">nike.createsend.com</span>
      <time class="c-button-user-account__last-access" datetime="2009-11-13">Last accessed Today</time>
    </span>
  </span>
  <span class="c-button-user-account__arrow"></span>
</button>
```

**So the rule is;** never write any CSS concerned with layout for your
components if it can be taken care of by one of the layout modules and apply
the layout module classes direct to the components HTML.

#### Objects

[**Objects**](../objects/) should be treated the same as layout modules in that
they should always be used if they can. The difference is that objects should
be `@extend`'d within the component partial to avoid having object classes
littered in the component's HTML. This allows components to be more easily
updated and keeps a component self-contained. However this isn't always
possible so this rule is not set in stone.

The pagination component (demo'd above) is `@extend`ing the
[**List inline**](../objects/_o-list-inline.scss) object and one of it's
modifiers, like so:

```
.c-pagination__list {
  @extend %o-list-inline;
  @extend %o-list-inline--spacing-tiny;
  text-align: center;
}
```

**So the rule is;** if an object exists that gives you the CSS you need then
use it in your component by `@extend`ing it's silent placeholder selector, if
`@extend` isn't suitable then use the object's class direct in the component's
HTML.

#### Utilities

[**Utilities**](../utilities/) should be avoided in your components as they
typically exist to apply styles to elements that don't already have any style
hooks in place and where making those types of elements a component isn't
appropriate.

Ideally utilities should be `@extend`'d within the component partial like
Objects but if this isn't possible then using the utility class in the
components HTML is OK however this needs to be done very sparingly and only when
a component class doesn't already exist to attach the utility too. The most
common use-case for this is when you want to hide an element but only visually,
so if we look at a snippet of the HTML from the pagination component demo'd
above we can see this utility: `.u-hide-visually` being applied in the HTML:

```
<li class="c-pagination__list__item">
  <a href="#" class="c-pagination__link" rel="next">Next →<span class="u-hide-visually"> page</span></a>
</li>
```

The one exception to utilities being your last resort within components is when
you need to apply whitespace (`margin`) to the *outside* of the component,
you apply this whitespace with the [**Spacing**](_u-spacing.scss) utility, this
keeps with making components extremely [**Portable and robust**](#portable-and-robust)
and [**Free of constraints**](#free-of-constraints). So if we wanted to apply
some bottom margin to the pagination component (demo'd above) we would apply a
spacing utility like so:

```
<nav class="c-pagination  u-s-mb-base" role="navigation" aria-label="Pagination">
```

**So the rule is;** never apply single line declaration utilities e.g.
`.u-float-right {float: right;}` to a component unless it's the Spacing utility,
the rest of the time only use utilities concerned with simple, universal patterns
(multiline declarations) e.g. hide an element but only visually:
`.u-hide-visually`, pin an element to all corners of it's parent:
`.u-position-pin-all`, clear a float: `.u-clear-fix`, etc. And ideally `@extend`
utilities via their silent placeholder selectors.



### Portable and robust

Components should try their best to not be concerned or have any dependencies
on ancestral context i.e. where they live in a UI. What this means is that
components—if built well—can be moved to different parts of a UI without
breaking, making them extremely portable and robust.

To demonstrate this, let's say there is a requirement to also feature the
pagination component (demo'd above) in another part of the UI e.g. a
dialog component. The dialog component has a lot less real estate for the
pagination component to fit into meaning the component has to be modified in
some way to accommodate this, basically we need a *compact* version.

We could apply these modifications by relying on the components ancestral
context i.e. via the components parent element which in this case is the dialog
component, so something like this:

**CSS**

```
.c-dialog .c-pagination {
  [...]
}
```

**HTML**

```
<div class="c-dialog">
  <nav class="c-pagination"> [...] </nav>
</div>
```

However this isn't the most optimal way of handling things as it's highly
likely that having a *compact* version is something we're going to need in
other parts of the UI—if not now most likely down the track—therefore it should
exist within the pagination component itself not tied to another component.

So the correct way to handle this is to use the concept of a
[BEM modifier](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
like so:

**CSS**

```
.c-pagination--compact {
  [...]
}
```

**HTML**

```
<nav class="c-pagination c-pagination--compact">
```

#### Nested components

Like shown in the example above components can exist within other components
i.e. the pagination component can exist in the dialog component.

Nested components like this are perfectly fine. It is important though that
components try their best not to be dependent on other components as covered
above in the [previous section](#portable-and-robust).

However saying that this isn't always black and white (like with many things
CSS related). You will sometimes need to make some slight adjustments when in
the context of a component being nested within another component but this
should be scrutinised over to make sure it's the most optimal way of handling
things as this can be hard to refactor down the track.

Basically the last thing you want is a setup where you have many cross
dependencies across your components, as things will fast become a
**house of cards**.

Here is one example of when you might need to make adjustments to a component
when it's nested within another component; say you have a [**Button**](_button.scss)
component which is nested within a **Site header** component, and by site header
I mean the main header of the site template where you'll typically find things
like the site logo, main navigation, global search, etc.

So we may have a CTA: **Log In** in the site header component which uses the
button component but in this context the button component needs some slight
adjustments. The first thing to consider is creating a BEM modifier for the
button so that the modified version is available to be used anywhere in the UI,
not just the site header. However if you feel a BEM modifier isn't the right
choice because the adjustments are extremely specific to the site header then
you will make the adjustments within the site header component partial.

When you do this you need to include a comment so that other developers are
aware of the relationship between the components, like so:

```
.c-site-header {
  [...]


  /**
   * Extend `.c-button` in Components -> Button.
   */

  .c-button {
    @include to-rem(padding-left padding-right, 8);
    @include font-size($font-size-x-small);
  }
```

[See here](https://github.com/chris-pearce/css-guidelines/blob/master/README.md#component-extension-pointers).

#### Free of constraints

Components should be free of widths, margins, and in most cases positioning.
This allows components to be extremely portable as they can better adapt to the
dimensions of an ancestral context.

Avoiding widths and margins is the most crucial here. If we use the
**Pagination** component (demo'd above) and add these styles to the base class:

```
.c-pagination {
  @include to-rem(width, 400);
  @include to-rem(margin-bottom, $spacing-base);
  [...]
}
```

We've now fixed this component to always have a rigid width of `400px` and a
bottom margin of what `$spacing-base` is, let's say `24px`. This may be what
you want when you first create the component but adding these default styles is
shortsighted and greatly reduces it's reuse because when you need to reuse the
component in a different part of the UI—or if the UI it will only ever exist
in changes—then the component will most likely break and/or cause breakages to
UI surrounding it.

So all components should be 100% fluid i.e. do not define fixed widths. A
components width is always determined by the dimensions of an ancestral
context.

When creating whitespace (`margin`) outside of a component e.g. a bottom margin
of `24px`, it's best not to bake this into the default component styles as
demonstrated above, and instead apply it via one of the
[**Spacing**](../utilities/_u-spacing.scss) utility classes e.g.

```
<nav class="c-pagination  u-s-mb-base">
```

#### Encapsulation

Components should be encapsulated as much as possible, even if that means your
CSS is not as DRY as you think it could be. The main aim is to prevent styles
from leaking outside of the component, this isolation prevents avoidable
complexity and results in higher code reuse.

#### Testing

An excellent way to test the overrall portability and robustness of your
components is to move the component from where it's intended to live in the UI
to another location in the DOM e.g. directly after the opening `body` element.
The component should be the full width of it's parent element, so if that's
the `body` element—and the `body`/`html` elements do not have a fixed width set
on them—then your component should be the width of the viewport.

Or better still create a UI component library where all of your components are
dumped into the one web page.




## Namespacing

All component classes, settings, and filenames are prefixed with `c-` so that
they're easily identifiable e.g.

- `.c-pagination`
- `$c-pagination-foreground-color`
- `_c-pagination.scss`




## Further reading

*Make sure to read the documentation within each component Sass partial file as it will contain information about the component and it's implementation.*

- [More Transparent UI Code with Namespaces -> Component Namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/#component-namespaces-c-)
- [SMACCS](http://smacss.com/)
  - [SMACCS - Module Rules](https://smacss.com/book/type-module)
- [SUIT CSS components](https://github.com/westfieldlabs/scally/blob/master/utilities/README.md#namespace)
- [CSS guidelines](http://cssguidelin.es)
- [Principles of writing consistent, idiomatic CSS](https://github.com/necolas/idiomatic-css)
- [OOCSS code standards](https://github.com/stubbornella/oocss-code-standards)
- [SOLID CSS](http://blog.millermedeiros.com/solid-css/)
- [One Module or Two](http://snook.ca/archives/html_and_css/one-module-or-two)
- [Our (CSS) Best Practices Are Killing US](http://www.stubbornella.org/content/2011/04/28/our-best-practices-are-killing-us/)
- [The single responsibility principle applied to CSS](http://csswizardry.com/2012/05/keep-your-css-selectors-short/)
- [Principles for writing good CSS](http://blog.kaelig.fr/post/38377421139/principles-for-writing-good-css)
- [How We’re Using Modules to Organize Our Front-End Code](http://code.tutsplus.com/articles/how-were-using-modules-to-organize-our-front-end-code--cms-22702)
