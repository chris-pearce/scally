# Scally Components




## Contents

- [What are they?](#what-are-they)
- [When to use?](#when-to-use)
- [How to use](#how-to-use)
  - [Using utilities](#using-utilities)
  - [Naming convention](#naming-convention)
  - [Portable and robust](#portable-and-robust)
    - [Nested components](#nested-components)
    - [Free of constraints](#free-of-constraints)
    - [Encapsulation](#encapsulation)
- [Namespacing](#namespacing)
- [Further reading](#further-reading)




## What are they?

Components are the discrete custom elements of a UI that enclose specific semantics and styling, they also make up the bulk of a UI. Some examples:

- Pagination
- Breadcrumbs
- Dialog
- Tile
- [Button](_button.scss)
- Icon

Components are extremely focused implementing only a single part of a UI, so they should never try to do too much, and is why you won't find may components in Scally. They also shouldn't be concerned or have any dependencies on ancestral context i.e. where they live in a UI, making them extremely [portable and robust](#portable-and-robust). So each component should be designed to exist as a standalone component, think of them as black boxes.





## When to use?

The [**layout**](../layout/README.md) and [**utility**](../utilities/README.md) parts of Scally should always be your first port of call when constructing a UI as they do one job and they do it very well, which is to construct UI. That's the power of Scally and [why it exists](../README.md#what-is-scally).

A component typically comes into existence when you find that a certain utility—or a bunch or utilities—can only get you so far, explained more in the [next section](#how-to-use).




## How to use

Take this common UI component:

![alt text](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/pe5iBm20LpLADVn/Screen%20Shot%202014-11-17%20at%2010.51.26%20am.png "A Scally pagination component")

You can construct a good deal of this component using a number of Scally utilities however that will only get you so far as they're parts of this component that require custom style treatments. When this happens you make the call to create a new component which in this case would be a **Pagination** component.

HTML for the pagination component:

```
<nav class="pagination" role="navigation" aria-label="Pagination">
  <ul class="pagination__list">
    <li class="pagination__list__item pagination__list__item--count">Pages 1-20 of 200</li><!--
    --><li class="pagination__list__item">
      <a href="#" class="pagination__link" rel="prev">← Prev<span class="u-hide-visually">ious page</span></a>
    </li><!--
    --><li class="pagination__list__item">
      <a href="#" class="pagination__link"><span class="u-hide-visually">Page </span>1</a>
    </li><!--
    --><li class="pagination__list__item">
      <a href="#" class="pagination__link"><span class="u-hide-visually">Page </span>2</a>
    </li><!--
    --><li class="pagination__list__item">
      <a href="#" class="pagination__link is-active"><span class="u-hide-visually">You're currently reading page </span>3</a>
    </li><!--
    --><li class="pagination__list__item pagination__list__item--skip">
      <a href="#" class="pagination__link"><span class="u-hide-visually">Jump to page </span>21</a>
    </li><!--
    --><li class="pagination__list__item">
      <a href="#" class="pagination__link"><span class="u-hide-visually">Page </span>22</a>
    </li><!--
    --><li class="pagination__list__item">
      <a href="#" class="pagination__link"><span class="u-hide-visually">Page </span>23</a>
    </li><!--
    --><li class="pagination__list__item">
      <a href="#" class="pagination__link" rel="next">Next →<span class="u-hide-visually"> page</span></a>
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
$c-pagination-background-colour:          #eee;

$c-pagination-background-hover-colour:    lighten($colour-black, 4%);

$c-pagination-border-colour:              darken($c-pagination-background-colour, 4%);


.pagination {
  @include to-rem(border, 1 solid $c-pagination-border-colour);
  @include to-rem(border-radius, $border-radius);
  @include to-rem(padding, $spacing-quarter);
  font-family: $font-family-serif;
}


  /**
   * The list `ul`, render inline.
   */

  .pagination__list {
    @extend %u-list-inline;
    @extend %u-list-inline--spacing-tiny;
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

    .pagination__list__item--skip:before {
      content: "\2026";
      display: inline-block;
      // This right spacing needs to equal the spacing of the list items
      @include to-rem(margin-right, $spacing-third);
      vertical-align: bottom;
      speak: none;
      color: $colour-text-base;
    }


     /**
      * The links.
      */

     .pagination__link {
        display: inline-block;
        @include to-rem(border, 1 solid $c-pagination-border-colour);
        @include to-rem(border-radius, $border-radius);
        @include to-rem(padding, $spacing-micro $spacing-third);
        background-color: $c-pagination-background-colour;


        /**
         * Hover and active states.
         */

        &:hover,
        &:focus,
        &.is-active {
          background-color: $c-pagination-background-hover-colour;
          color: $colour-white;
          text-decoration: none;
        }
     }
```

### Using utilities

Utilities can be used in a component however they're `@extend`ed via a [Sass silent placeholder selector](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_). As you can see from the CSS code above, the selector: `.pagination__list` is `@extend`ing the [**List Inline**](../utilities/_u-list-inline.scss) utility. To learn more about how utilities and components work together [see here](../utilities/README.md#how-to-use).

### Naming convention

The components base class name (e.g., `pagination`) reserves a namespace that can only be used by that component. Like the rest of Scally, components use the [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) naming methodology.

### Portable and robust

Components should never be concerned or have any dependencies on ancestral context i.e. where they live in a UI. What this means is that components—if built well—can be moved to different parts of a UI without breaking, making them extremely portable and robust.

To demonstrate this, let's say there is a requirement to also feature the **Pagination** component (demo'd above) in another part of the UI e.g. a dialog component. The dialog component has a lot less real estate for the pagination component to fit into meaning the component has to be modified in some way to accomodate this.

These modifications or custom styles can be applied by relying on the components ancestral context i.e. via the components parent element which in this case is the dialog component:

**CSS**

```
.dialog .pagination {
  [...]
}
```

**HTML**

```
<div class="dialog">
  <nav class="pagination"> [...] </nav>
</div>
```

However, doing this is extremely brittle because now the component has a dependency on the dialog component.

The correct way to handle this is to use the concept of a [BEM modifier](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) like so:

**CSS**

```
.pagination--compact {
  [...]
}
```

**HTML**

```
<nav class="pagination pagination--compact">
```

So now we've removed the dialog dependency meaning the component can be used anywhere in the UI.

#### Nested components

Like shown in the example above components can exist within other components i.e. the pagination component can exist in the dialog component.

Nested components like this are perfectly fine. It is important that components are never dependent upon other components. This is covered in more detail in the [previous section](#portable-and-robust) and [here](#encapsulation). This means that all components should be completely standalone and can only ever exist in isolation.

#### Free of constraints

Components should be free of widths, margins, and in most cases positioning. This allows components to be extremely portable as they can better adapt to the dimensions of an ancestral context.

Avoiding widths and margins is the most crucial here. If we use the **Pagination** component (demo'd above) and add these styles to the base class:

```
.pagination {
  [...]
  @include to-rem(width, 400);
  @include to-rem(margin-bottom, $spacing-base);
}
```

We've now fixed this component to always have a rigid width of `400px` and a bottom margin of `24px`. This may be what you want when you first create the component but adding these default styles is shortsighted and greatly reduces it's reuse because when you need to reuse the component in a different part of the UI—or if the UI it will only ever exist in changes—then the component will most likely cause breakages.

So all components should be 100% fluid i.e. do not define fixed widths. A components width is always determined by the dimensions of an ancestral context, so if you moved a component from where it's intended to live in a UI to another location in the DOM e.g. directly after the opening `body` element, the component should stretch the width of the entire viewport. In fact this is a good test to check you've made your components 100% fluid.

**The rule is that all components should rely on utilising a [layout module](../layout/) to control their layout. In most cases this will be the [grid](../layout/_l-grid.scss).**

When creating whitespace (`margin`) outside of a component e.g. a bottom margin of `24px`, it's best not to bake this into the default component styles as demonstrated above, and instead apply it either via a BEM Modifier or via a utility class e.g.

```
.pagination--bottom-spacing {@extend %c-bottom-spacing;}

<nav class="pagination pagination--bottom-spacing">
```

or:

```
<nav class="pagination u-s-mb-base">
```

They're rare cases where baking in outer spacing to the default component styles is valid, but like everything with OOCSS it should be scrutinised over.

#### Encapsulation

Components should be encapsulated as much as possible, even if that means your CSS is not as DRY as you think it could be. The main aim is to prevent styles from leaking outside of the component, this isolation prevents avoidable complexity and results in higher code reuse.

*Creating well written and highly reusable components will come more naturally if you have a strong understanding of the principles of OOCSS. I recommend checking out [this section](#further-reading) for some of my favourite resources on the subject.*




## Namespacing

[Layout modules](../layout/) and [utilities](../utilities/) are namespaced with `l-` and `u-` respectively so that they're easily identifiable. Components do not need this treatment, so for a **Dialog** component it will simply be: `.dialog`.




## Further reading

*Make sure to read the documentation within each component Sass partial file as it will contain information about the component and it's implementation.*

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
