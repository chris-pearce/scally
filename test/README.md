# Scally Tests

<http://scally.github.io/scally/test>

## Installation

1. Fork the [Scally GitHub repo](https://github.com/chris-pearce/scally) then
   create a local clone of your fork using `git clone …`.
2. `cd [to/where/you/created/a/local/clone] test`.
3. `npm install`

## Grunt Tasks

- `grunt`

    *Runs the default tasks, performs a watch on certain tasks, and makes the site available on <http://localhost:9000>.*
- `grunt build`

    *Runs the build tasks, final destination is the `dist/test` folder.
    :small_red_triangle:*
- `grunt deploy`

    *Runs the build tasks then pushes the `dist/` folder to the remote
    `gh-pages` branch.*
- `grunt testScally`

    *Runs the tasks to compile the Scally library for testing purposes. If
    you're working on the Scally library then you can use
    `grunt testScallyWatch`.*

:small_red_triangle:
We're using `dist/test` so we can have both the **Scally Test Suite** and the
**Scally Docs** available at this GitHub Pages URL:
<http://scally.github.io/>. **Scally Docs** sits in the root of the `gh-pages`
branch, the **Scally Test Suite** sits in the `test` sub-folder, available at: <http://scally.github.io/scally/test>.
