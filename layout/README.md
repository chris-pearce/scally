# Scally Layout




## Contents

- [What is layout?](#what-is-layout)
- [Why have layout?](#why-have-layout)
- [How to use](#how-to-use)
  - [Responsive grid](#responsive-grid)
  - [Use in isolation](#use-in-isolation)
- [Namespace](#namespace)
- [New layout modules](#new-layout-modules)
- [Demo's](#demos)




## What is layout?

Scally features two powerful layout modules:

### [Container](_l-container.scss)

Container wraps all major UI layout pieces ensuring UI is consistent mainly with widths. Container is responsive in that it will be a fluid width using `%` up until it hits it's a maximum width where it's then becomes center aligned.

### [Grid](_l-grid.scss)

Grid is a powerful fluid and nestable mobile first grid system allowing you to set custom column widths at different viewports, making responsive layouts a sinch.

See [demo's](#demos).

Also in the [utilities](../utilities/) section of Scally there is the [**Side by Side** utility](../utilities/_u-side-by-side.scss) which applies an extremely common UI layout pattern. *This will be moved to the layout section, [see](https://github.com/westfieldlabs/scally/issues/153)*.

*From global page template layouts right down to component level layouts, the above layout modules should take care of most—if not all—the main layout patterns you'll find in a UI.*

Think of layout as Lego&reg;.




## Why have layout?

Just like [utilities](../utilities/), layout can form a wide variety of UI layout patterns meaning as CSS authors you don't have to keep writing the same styles over and over again, instead you can abstract those common styles into nice reusable layout modules, mentioned above.

Again like utilities, layout modules are extremely powerful and are the real work horses of any sort of UI build especially large-scale UI builds, and here are some reasons why:

- Your CSS will be a lot DRYer.
- You can make far-reaching changes to your UI by simply modifying a layout module only once.
- You can make safer changes because you know that when editing a layout module you are only ever altering one responsibility.




## How to use

When you identify any type of layout in a UI then a layout module is what you need.

If we look at the home page of this website at both mobile and desktop views:

![alt text](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/Qz4UZwU3EGL0uJk/Manchester%20City%20Council%20Homepage%20mobile.png "Manchester City Council home page at mobile size")

![alt text](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/MqznltXDsqcf1Y5/Manchester%20City%20Council%20Homepage.png "Manchester City Council home page at desktop size")

We can identify many instances of where layout modules can be used. Let's take the top portion of the home page at it's desktop view:

![alt text](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/lei9leil3sLgGVq/Manchester%20City%20Council%20Homepage%20header.png "Manchester City Council home page header at desktop size")

Here is where you would use the container:

![alt text](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/0XqjkbzQbQh5Sg2/Group.png "Manchester City Council home page header container examples")

The black boxes represent the default container. The red boxes represent modifiers of the default container which make the container go full bleed to the edges of it's container, which in this case is the main viewport.

**The HTML**

```
<div class="l-container l-container--full-bleed">
  <div class="l-container">
    [...]
  </div>
</div>
```

[**The CSS**](_l-container.scss)

And here is where you would use the grid:

![alt text](https://s3.amazonaws.com/uploads.hipchat.com/33649/339750/kK9jhE0eQIQ0s3C/Group%202.png "Manchester City Council home page header grid examples")

The light and grey boxes represent the grid cells which sit inside the inner black container.

**The HTML** *incl. the containers*

```
<!-- Header -->
<div class="l-container l-container--full-bleed">
  <div class="l-container">
    <div class="l-grid">
      <div class="l-grid-item u-one-half-from-lap">
        [...]
      </div>
      <div class="l-grid-item u-one-half-from-lap">
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
      <div class="l-grid-item u-one-quarter">
        [...]
      </div>
      <div class="l-grid-item u-one-quarter">
        [...]
      </div>
      <div class="l-grid-item u-one-quarter">
        [...]
      </div>
      <div class="l-grid-item u-one-quarter">
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
      <li class="l-grid-item u-one-third u-one-fifth-from-lap">
        [...]
      </li>
      <li class="l-grid-item u-one-third u-one-fifth-from-lap">
        [...]
      </li>
      <li class="l-grid-item u-one-third u-one-fifth-from-lap">
        [...]
      </li>
      <li class="l-grid-item u-one-third u-one-fifth-from-lap">
        [...]
      </li>
      <li class="l-grid-item u-one-third u-one-fifth-from-lap">
        [...]
      </li>
      [...]
    </ul>
  </div>
</div>
<!-- //Services -->
```

[**The CSS**](_l-grid.scss)

### Responsive grid

The grid comes with the ability to apply widths to the grid cells at different viewports making it easy to contruct responsive UI's. This ability isn't tied into the grid itself but uses the [**Widths** utility](../utilities/_u-widths.scss).

By default grid cells will stack on top of eachother unless told otherwise i.e. they're completely linear. At small viewport widths like at handheld devices typically this is what you want, however as the viewport increases in width you can then apply widths to the grid cells turning them into columns.

So if we had a grid cell like this:

```
<div class="l-grid__item u-one-half-from-lap u-one-third-from-desk">
```

This would give you a grid item which is 100% width unless it is on a [lap](../core/settings/_breakpoints.scss#L53)
device, at which point it becomes 50% wide, or it is on a [desktop](../core/settings/_breakpoints.scss#L57) device,
at which point it becomes 33.333% width.

[See here](../utilities/_u-widths.scss#applying-at-breakpoints) about applying utilities at breakpoints.

### Use in isolation

All of the layout modules should exist on their own, they are for layout
purposes only. You should never mix in other styles with a layout module e.g. a grid cell, this ties in with the [Open/close principle](../utilities#openclose-principle) which is used for utilities.

Layout modules should be thought of as shelves. They contain content but are not content in themselves. You put up your shelves then fill them with your stuff.

So if we look at the HTML for the header demo'd above:

```
<!-- Header -->
<div class="l-container l-container--full-bleed">
  <div class="l-container">
    <div class="l-grid">
      <div class="l-grid-item u-one-half-from-lap">
        [...]
      </div>
      <div class="l-grid-item u-one-half-from-lap">
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
      <div class="l-grid-item u-one-half-from-lap">
        <div class="u-s-p-base">
          [...]
        </div>
      </div>
      <div class="l-grid-item u-one-half-from-lap">
        <ul class="u-list-inline u-list-inline--spacing-base">
          [...]
        </ul>
      </div>
    </div>
  </div>
</div>
<!-- //Header -->
```

Read more [here](http://cssguidelin.es/#the-separation-of-concerns) about this separation of concerns.




## Namespace

All layout classes should be prefixed with `l-` so that they're easily identifiable.




## New layout modules

[See here](../utilities#new-utilities).




## Demo's

- [Grid](http://codepen.io/team/westfieldlabs/full/cjyHK)
- [Container](http://codepen.io/team/westfieldlabs/full/GiCzg)