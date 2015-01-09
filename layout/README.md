# Scally Layout




## Contents

- [What is layout?](#what-is-layout)
- [Why have layout?](#why-have-layout)
- [How to use](#how-to-use)
    - [Container](#container)
    - [Grid](#grid)
        - [Responsive grid](#responsive-grid)
    - [Side-by-side](#side-by-side)
    - [Combined](#combined)
    - [Do not mix other styles](#do-not-mix-other-styles)
- [Namespace](#namespace)
- [Further reading](#further-reading)




## What is layout?

Think of layout as Lego&reg;; the bits and pieces you need to construct a UI.

Scally features three powerful layout modules:

1. [**Container**](_l-container.scss): is designed to wrap all major UI layout pieces and ensure the UI maintains a consistent width. Container is responsive. It is a fluid width controlled by percentages until it reaches it's maximum width, at which point it becomes center aligned.
2. [**Grid**](_l-grid.scss): is a powerful, fluid, nestable, mobile first grid system that allows you to set custom column widths at different viewports, making responsive layouts a sinch.
3. [**Side-by-side**](_l-side-by-side.scss): is a simple yet very powerful layout module that places any two elements side-by-side, typically for an image- and text-like content. There is also an alternative version that allows control over vertical alignment.

*From global page templates to component level layouts, the above layout modules should take care of most—if not all—the main layout patterns you'll find in a UI.*




## Why have layout?

Just like [utilities](../utilities/), layout can form a wide variety of UI layout patterns meaning as CSS authors you don't have to keep writing the same styles over and over again, instead you can abstract those common styles into nice reusable layout modules, mentioned above.

Layout modules are extremely powerful and are the real work horses of any sort of UI build especially large-scale UI builds, and here are some reasons why:

- Your CSS will be a lot DRYer and maintainable.
- You can make far-reaching changes to your UI with simple modifications to a single layout module.
- You have confidence in your changes because edits to a layout module only ever alter one responsibility.




## How to use

When you identify any type of layout in a UI then a layout module is what you need.

If we look at the home page of this [website](http://www.manchester.gov.uk/) at both mobile and desktop views:

[![alt text](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/Qz4UZwU3EGL0uJk/Manchester%20City%20Council%20Homepage%20mobile.png "Manchester City Council home page at mobile size")](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/Qz4UZwU3EGL0uJk/Manchester%20City%20Council%20Homepage%20mobile.png)

[![alt text](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/MqznltXDsqcf1Y5/Manchester%20City%20Council%20Homepage.png "Manchester City Council home page at desktop size")](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/MqznltXDsqcf1Y5/Manchester%20City%20Council%20Homepage.png)

We can identify many instances where layout modules can and should be used. Let's take the top portion of the home page at its desktop view:

[![alt text](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/lei9leil3sLgGVq/Manchester%20City%20Council%20Homepage%20header.png "Manchester City Council home page header at desktop size")](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/lei9leil3sLgGVq/Manchester%20City%20Council%20Homepage%20header.png)

### Container

You would use the container here:

[![alt text](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/0XqjkbzQbQh5Sg2/Group.png "Manchester City Council home page header container examples")](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/0XqjkbzQbQh5Sg2/Group.png)

The black boxes represent the default container. The red boxes represent modifiers of the default container which will allow the container to be full bleed, in this case it means the container will expand to the edges of the main viewport.

**The HTML**

```
<div class="l-container l-container--full-bleed">
  <div class="l-container">
    [...]
  </div>
</div>
```

[**The CSS**](_l-container.scss)

### Grid

And here is an example of where you would use the grid:

[![alt text](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/kK9jhE0eQIQ0s3C/Group%202.png "Manchester City Council home page header grid examples")](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/kK9jhE0eQIQ0s3C/Group%202.png)

The light and dark grey boxes represent individual grid cells (`l-grid__item`) which sit inside an inner container (the black box).

**The HTML** *incl. the containers*

```
<!-- Header -->
<div class="l-container l-container--full-bleed">
  <div class="l-container">
    <div class="l-grid">
      <div class="l-grid__item u-one-half-from-lap">
        [...]
      </div>
      <div class="l-grid__item u-one-half-from-lap">
        [...]
      </div>
    </div>
  </div>
</div>
<!-- //Header -->

<!-- Nav main -->
<div class="l-container l-container--full-bleed">
  <div class="l-container">
    <div class="l-grid">
      <div class="l-grid__item u-one-quarter">
        [...]
      </div>
      <div class="l-grid__item u-one-quarter">
        [...]
      </div>
      <div class="l-grid__item u-one-quarter">
        [...]
      </div>
      <div class="l-grid__item u-one-quarter">
        [...]
      </div>
    </div>
  </div>
</div>
<!-- //Nav main -->

<!-- Services -->
<div class="l-container l-container--full-bleed">
  <div class="l-container">
    <ul class="l-grid">
      <li class="l-grid__item u-one-third u-one-fifth-from-lap">
        [...]
      </li>
      <li class="l-grid__item u-one-third u-one-fifth-from-lap">
        [...]
      </li>
      <li class="l-grid__item u-one-third u-one-fifth-from-lap">
        [...]
      </li>
      <li class="l-grid__item u-one-third u-one-fifth-from-lap">
        [...]
      </li>
      <li class="l-grid__item u-one-third u-one-fifth-from-lap">
        [...]
      </li>
      [...]
    </ul>
  </div>
</div>
<!-- //Services -->
```

[**The CSS**](_l-grid.scss)

#### Responsive grid

The grid comes with the ability to apply widths to the grid cells at different viewports making it easy to construct responsive UI's. This ability isn't tied into the grid itself but uses the [**Percentage widths**](../utilities/_u-widths.scss) utilities.

By default grid cells will stack on top of eachother unless told otherwise i.e. they're completely linear. At small viewport widths e.g. handheld devices typically this is what you want, however as the viewport increases in width you can then apply widths to the grid cells turning them into columns.

So if we had a grid cell like this:

```
<div class="l-grid__item u-one-half-from-lap u-one-third-from-desk">
```

This would give you a grid item which is 100% wide unless it is on a [lap](../core/settings/_breakpoints.scss#L53) device, at which point it becomes 50% wide, or it is on a [desktop](../core/settings/_breakpoints.scss#L57) device,
at which point it becomes 33.333% wide.

[See here](../utilities/README.md#applying-at-breakpoints) about applying utilities at breakpoints.

### Side-by-side

And here is an example of where you would use the side-by-side layout module:

[![alt text](https://dl.dropboxusercontent.com/s/mvsgop57g3fm5mj/side-by-side%20layout%20module%20example%201.png "Manchester City Council home page side-by-side examples")](https://dl.dropboxusercontent.com/s/mvsgop57g3fm5mj/side-by-side%20layout%20module%20example%201.png)

[![alt text](https://dl.dropboxusercontent.com/s/spqikubn6gmdxn3/side-by-side%20layout%20module%20example%202.png "Manchester City Council home page side-by-side examples")](https://dl.dropboxusercontent.com/s/spqikubn6gmdxn3/side-by-side%20layout%20module%20example%202.png)

The grey boxes represent each side-by-side layout module.

**The HTML**

```
<div class="u-side-by-side">
  <div class="u-side-by-side__left">
    [...]
  </div>
  <div class="u-side-by-side__right">
    [...]
  </div>
</div>

<div class="u-side-by-side">
  <div class="u-side-by-side__left">
    [...]
  </div>
  <div class="u-side-by-side__right">
    [...]
  </div>
</div>

<div class="u-side-by-side">
  <div class="u-side-by-side__left">
    [...]
  </div>
  <div class="u-side-by-side__right">
    [...]
  </div>
</div>
```

**The CSS**

- [Default](_l-side-by-side.scss)
- [Alternative](_l-side-by-side-alt.scss)

You might be wondering why don't we just use the grid for this? You certainly can use the grid however you will need to specify widths for each grid cell and those widths might need changing based on the viewport size, [see here](#responsive-grid). The side-by-side layout module cells do not require widths instead the left and right cells will shrink wrap it's content making it much more easier to implement this type of layout than the grid.

### Combined

Layout modules work perfectly well with each other meaning they can be nested within each other e.g. the **side-by-side** layout module can be nested within the **grid** layout module which itself can be nested within the **container** layout module. When layout modules are combined like this they're extremely powerful taking care of most—if not all—of your UI layout needs.

So if we take this piece of UI again:

[![alt text](https://dl.dropboxusercontent.com/s/mvsgop57g3fm5mj/side-by-side%20layout%20module%20example%201.png "Manchester City Council layout module combined example")](https://dl.dropboxusercontent.com/s/mvsgop57g3fm5mj/side-by-side%20layout%20module%20example%201.png)

We can combine all our three layout modules and their modifiers to achieve this layout:

[![alt text](https://dl.dropboxusercontent.com/s/a57y2wy6wc8jwsh/layout%20modules%20combined.png "Manchester City Council layout module combined example")](https://dl.dropboxusercontent.com/s/a57y2wy6wc8jwsh/layout%20modules%20combined.png)

In order of stacking (bottom to top):

- Container *(modifier: full-bleed)*
- Container
- Grid
- Side-by-side

**The HTML**

```
<div class="l-container l-container--full-bleed">
  <div class="l-container">
    <div class="l-grid">
      <div class="l-grid__item u-one-quarter">
        [...]
      </div>
      <div class="l-grid__item u-one-quarter">
        <div class="u-side-by-side l-side-by-side--flush">
          <div class="u-side-by-side__left">
            [...]
          </div>
          <div class="u-side-by-side__right">
            [...]
          </div>
        </div>
      </div>
      <div class="l-grid__item u-one-quarter">
        <div class="u-side-by-side l-side-by-side--flush">
          <div class="u-side-by-side__left">
            [...]
          </div>
          <div class="u-side-by-side__right">
            [...]
          </div>
        </div>
      </div>
      <div class="l-grid__item u-one-quarter">
        <div class="u-side-by-side l-side-by-side--flush">
          <div class="u-side-by-side__left">
            [...]
          </div>
          <div class="u-side-by-side__right">
            [...]
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Do not mix other styles

You should never mix in any other styles with any of the layout modules. This ties in with the [Open/close principle](../utilities#openclose-principle) which is used for utilities.

So if we look at the HTML for the header demo'd above for this piece of UI:

[![alt text](https://dl.dropboxusercontent.com/s/mvens15cnriutog/side-by-side%20layout%20module%20example%203.png "Manchester City Council header")](https://dl.dropboxusercontent.com/s/mvens15cnriutog/side-by-side%20layout%20module%20example%203.png)

```
<!-- Header -->
<div class="l-container l-container--full-bleed">
  <div class="l-container">
    <div class="l-grid">
      <div class="l-grid__item u-one-half-from-lap">
        [...]
      </div>
      <div class="l-grid__item u-one-half-from-lap">
        [...]
      </div>
    </div>
  </div>
</div>
<!-- //Header -->
```

And we need to add padding to all sides of the left grid cell and add the sub nav component to the right grid cell we would mark it up like this:

```
<!-- Header -->
<div class="l-container l-container--full-bleed">
  <div class="l-container">
    <div class="l-grid">
      <div class="l-grid__item u-one-half-from-lap">
        <div class="u-s-p-base">
          [...]
        </div>
      </div>
      <div class="l-grid__item u-one-half-from-lap">
        <ul class="u-list-inline u-list-inline--spacing-base">
          [...]
        </ul>
      </div>
    </div>
  </div>
</div>
<!-- //Header -->
```




## Namespace

All layout classes should be prefixed with `l-` so that they're easily identifiable.




## Further reading

*Make sure to read the documentation within each layout Sass partial file as it will contain information about the layout module and it's implementations.*

- [CSS guidelines - The separation of concerns](http://cssguidelin.es/#the-separation-of-concerns)
- [The single responsibility principle applied to CSS](http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/)
- [The open/closed principle applied to CSS](http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/)