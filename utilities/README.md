# Scally Utilities




## Contents

- [What are they?](#what-are-they)
- [Demo's](#demos)
- [Why have them?](#why-have-them)
- [How to use](#how-to-use)
- [Specificity](#specificity)
- [Namespace](#namespace)
- [New utilities](#new-utilities)
- [Further reading](#further-reading)




## What are they?

Utilities are your helper classes and typically your last resort. 

They apply a single rule e.g. float an element to the right: `.u-float-right`, or a very simple, universal pattern e.g. hide an element but only visually: `.u-hide-visually`. They never have any styles that are concerned with cosmetics and they must always follow the [single responsibility principle](http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/).




## Demo's

<http://s.codepen.io/chris-pearce/full/WbMgMp> (work in progress)




## Why have them?

Utilities exist because in every UI build they'll always be the need to apply simple low-level common styles to parts of a UI that don't belong to any sort of a [component](../components/README.md). In these scenerios, if utilities didn't exist, we would have issues like:

- Where do those types of styles live in our CSS architecture? 
- Lots of super *micro* components that aren't true components that only exist to avoid having to use utility classes in your markup.
- CSS not being DRY as we would have to keep writing those styles over and over.

Some utilities don't just apply single rules but apply simple, universal patterns e.g. Clear an element to contain its floated children: `.u-clear-fix`, pin an element to all corners of it's parent: `.u-position-pin-all`, hide an element but only visually: `.u-hide-visually`, etc.

So utilities help keep our CSS a lot DRYer and maintainable. And enable us to make far-reaching changes to our UI with simple modifications to a single utility because we have the confidence that edits to a utility will only ever alter one responsibility.




## How to use

Each utility applies a single rule e.g.

```
// Center align text
%u-text-align-center,
.u-text-align-center {text-align: center;}
```

Or a very simple, universal pattern e.g.

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

To apply utilities apply the utility class or classes directly to the HTML element but only if the element you're applying it to doesn't already have an existing style hook (class) which in most cases it will as it'll be a component. This comes back to the last resort approach mentioned in the [What are they?](#what-are-they) section above.

It's quite rare to apply utilities in the context of components, when it is needed it's mostly the utilities that apply universal patterns e.g. hide an element but only visually: `.u-hide-visually`. When this is needed you would typically apply the utility via its [Sass silent placeholder selector](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_) using the `@extend` directive.

So if we had a **Modal** component and part of that component was the overlay that sits behind the modal covering the entire viewport we could make use of the the above `u-position-pin-all` utility which will pin the overlay to all corners of the main viewport e.g.

**HTML**

    <div class="modal__cover"> [...] </div>

**CSS**

    .modal__cover {
        @extend %u-position-pin-all;
        [...]
    }

We want to keep as little utilities in the markup as possible.




## Specificity

Utilities always need to *win* when it comes to specificity (CSS' first C; the cascade) as they should always *just work* otherwise they're not doing their job properly i.e. you should never be needing to override a utility's styles. If you are then you're not using them correctly, [see](#open-close-principle).

That's why utilities are declared last when pulling in the Scally framework via your [master stylesheet](../style.scss) so they're compiled after everything else.




## Namespace

All utility classes/silent placeholder selectors are prefixed with `u-` so that they're easily identifiable.




## New utilities

You can create new utilities in your [project specific CSS](../README.md#your-styles) however because utilities are so focused it's probably better off in the Scally framework. So create a [Scally GitHub issue](https://github.com/westfieldlabs/scally/issues) to have it considered for inclusion into the framework or even better [submit a PR](https://github.com/westfieldlabs/scally#contributing).




## Further reading

*Make sure to read the documentation within each utility Sass partial file as it will contain information about the utility and it's implementations.*

- [The single responsibility principle applied to CSS](http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/)
- [The open/closed principle applied to CSS](http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/)
- [When to use `@extend`; when to use a mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
- [The Role of Utility Classes](http://davidtheclark.com/on-utility-classes/)
