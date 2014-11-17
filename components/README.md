# Scally Components




## Contents

- [What are they?](#what-are-they)
- [When to use?](#when-to-use)
- [How to use?](#how-to-use)
  - [Using utilities](#using-utilities)
  - [Naming convention](#naming-convention)
  - [Nested components](#nested-components)
  - [Portable and robust](#portable-and-robust)
- [Namespacing](#namespacing)
- [Demo's](#demos)
- [Further reading](#further-reading)




## What are they?

Components are the discrete custom elements of a UI that enclose specific semantics and styling, they also make up the bulk of a UI. Some examples:

- Pagination
- Breadcrumbs
- Dialog
- Tile
- [Button](_button.scss)
- Icon

Components are extremely focused implementing only a single part of a UI, so they should never try to do too much. They also shouldn't be concerned or have any dependencies on ancestral context i.e. where they live in a UI, making them extremely [portable and robust](#portable-and-robust). So each component should be designed to exist as a standalone component, think of them as black boxes.






## When to use?

The [**layout**](layout/README.md) and [**utility**](Utilities/README.md) parts of Scally should always be your first port of call when constructing a UI as they do one job and they do it very well, which is to construct UI. That's the power of Scally and [why it exists](https://github.com/westfieldlabs/scally#what-is-scally).

A component typically comes into existence when you find that a certain utility—or a bunch or utilities—can only get you so far, explained more in the [next section](#how-to-use).




## How to use?

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

Utilities can be used in a component however they're `@extend`ed via a [Sass silent placeholder selector](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_). As you can see from the CSS code above, the selector: `.pagination__list` is `@extend`ing the [**List Inline**](utilities/_list-inline.scss) utility. To learn more about how utilities and components work together [see here](https://github.com/westfieldlabs/scally/blob/master/utilities/README.md#how-to-use). 

### Naming convention

The components base class name (e.g., `pagination`) reserves a namespace that can only be used by that component. Like the rest of Scally, components use the [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) naming methodology.

### Portable and robust

Components should never be concerned or have any dependencies on ancestral context i.e. where they live in a UI. What this means is that components—if built well—can be moved to different parts of a UI without breaking, making them extremely portable and robust.

To demonstrate this, let's say there is a requirement to also feature the **Pagination** component (demo'd above) in another part of the UI e.g. a dialog component. The dialog has a lot less real estate for the pagination component to exist in compared to it's default home meaning the component has to be modified in someway to accomodate this. 

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
    
However doing this is extremely brittle because now the component has a dependency on the dialog component. 

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

Nested components like this are perfectly fine, what's important is not having components being dependent on other components which is covered in the [previous section](#portable-and-robust). This means that all components should be completely standalone and only ever exist in isolation.

#### Free of widths, margins, and positioning

Components should not set their own widths, margins, and positioning. This allows components to be extremely portable as they can better adapt to the dimensions of an ancestral context.

Avoiding widths and margins is the most crucial. If we use the **Pagination** component (demo'd above) and add these styles to the base class:

```
.pagination {
  [...]
  @include to-rem(width, 400);
  @include to-rem(margin-bottom, $spacing-base);
}
```

We've now fixed this component to always have a width of `400px` and a bottom margin of `24px`. This may be what you want when you first create the component but adding these default styles is shortsighted and greatly reduces the reuse of this component. When you need to reuse the component in a different part of the UI or if it only exists in one part of the UI and that part changes then the component will most likely break especially when widths are applied.

#### Avoid element selectors

*Coming soon*.

#### Encapsulation

Avoid coupling or entangling components, even if that means the code is not as DRY as you think it should be. Isolation prevents avoidable complexity and is an important part of robust reuse. Prevents styles from leaking outside the component.

#### Outer layout

*Coming soon*.




## Namespacing

Unlike [**layout modules**](layout/README.md) and [**utilities**](Utilities/README.md), components aren't namespaced as they make up the bulk of the UI therefore are considered the most important.



## Demo's

http://codepen.io/team/westfieldlabs/full/Fvxju




## Further reading

Make sure to read the documentation within each component Sass partial file as it will contain information about the component and their implementations.

- [SMACCS - Module Rules](https://smacss.com/book/type-module).
- [SUIT CSS components](https://github.com/westfieldlabs/scally/blob/master/utilities/README.md#namespace).
