# Scally Components




## Contents

- [What are they?](#what-are-they)
- [How to use?](#how-to-use)




## What are they?

Components are the discrete custom elements of a UI that enclose specific semantics and styling. They are extremely focused implementing only a single part of a UI, so they should never try to do too much. Components also shouldn't be concerned or have any dependencies on ancestral context i.e. where they live in a UI, making them extremely portable and robust.

Two examples of components could be: *pagination* and *breadcrumbs*.




## When to use?

The [Layout](layout/README.md) and [utility](Utilities/README.md) parts of Scally should always be your first port of call when constructing a UI as they do one job and they do it very well, which is to construct UI. That's the power of Scally and [why it exists](https://github.com/westfieldlabs/scally#what-is-scally).

A component typically comes into existence when you find that a layout module or a certain utility—or a bunch or utilities—can only get you so far. Well more utilities as **ALL** UI layout should be abstracted out to use something from layout which is pretty much always the grid.




## How to use?

### Styling entanglement between components

Just like everything else in Scally, Scally isolates the styles of a component. In doing so, it makes styling simpler by reducing the amount of , and prevents styles from leaking outside the component.
