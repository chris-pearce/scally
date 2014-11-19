# Scally Layout




## Contents

- [What is layout?](#what-is-layout)
- [Why have layout?](#why-have-layout)
- [How to use](#how-to-use)
- [Namespace](#namespace)
- [Demo's](#demos)




## What is layout?

Scally features two powerful layout modules:

### [Container](_l-container.scss)

Container wraps all major UI layout pieces ensuring UI is consistent mainly with widths. Container is responsive in that it will be a fluid width using `%` up until it hits it's a maximum width where it's then center aligned.

### [Grid](_l-grid.scss)

Grid is a powerful fluid and nestable mobile first grid system allowing you to set custom column widths at different viewports, making responsive layouts a sinch.

See [demo's](#demos).

Also in the [utilities](../utilities/) section of Scally there is the [**Side by Side** utility](../utilities/_u-side-by-side.scss) which applies an extremely common UI layout pattern.

*From global page template layouts right down to component level layouts, the above layout modules should take care of most—if not all—the main layout patterns you'll find in a UI.*

Think of layout as Lego&reg;.




## Why have layout?

Just like [utilities](../utilities/), layout can form a wide variety of UI layout patterns meaning as CSS authors you don't have to keep writing the same styles over and over again, instead you can abstract those common styles into nice reusable layout modules, mentioned above.

Again like utilities, layout modules are extremely powerful and are the real work horses of any sort of UI build especially large-scale UI builds, and here are some reasons why:

- Your CSS will be a lot DRYer.
- You can make far-reaching changes to your UI by simply modifying a layout module only once.
- You can make safer changes because you know that when editing a layout module you are only ever altering one responsibility.
- Your UI layout will be consistent.




## How to use

Wherever you see any type of layout in a UI then this should be handled by a layout module.

*More to come*.




## Namespace

All layout classes should be prefixed with `l-` so that they're easily identifiable.




## Demo's

- [Grid](http://codepen.io/team/westfieldlabs/full/cjyHK)
- [Container](http://codepen.io/team/westfieldlabs/full/GiCzg)