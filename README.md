# Frontend Patterns and Practices

### TODO
- Javascript object component pattern.
- Css browser trageting.
- Sass viewport support.

## Modules and Components

Similar to other architectures, here we have a folder for modules and another one for components. The idea here is the same: `Modules` represent blocks in the page, like a hero, a footer, among others, while `Components` are reusable parts that are instantiated inside modules.

In the javascript context, `Modules` are initialized by a function at the beginning, using some kind of selector to identify the `HTML parent` or `root element` and passing some options to this module before initialization (usually with `data-attributes`). `Components`, as we said before, are used inside `Modules`, so it's expected that these are initialized in the `Module` logic, using a function that explicitly initializes it.
