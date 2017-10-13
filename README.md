# Frontend Patterns and Practices

### TODO
- Javascript object component pattern.
- Css browser trageting.
- Sass viewport support.

## Before start the presentation

This is just another way to structure an app. The presentation is more a bunch of tips that I've recolected during the projects I worked and that I really enjoy using it. I hope you can learn something new and apply one of these tips in your projects. If you already know it, nice!

For these reasons, I want to be clear with something: Please be respectful with this work. If you are gonna say something, I expect a constructive feedback, `NOT NONSENSE CRITICISM`. Thanks.

## Presentation

- Folder structure overview.
- Sass - Base structure.
- Sass - Module/Component structure.

## Modules and Components

Similar to other architectures, here we have a folder for modules and another one for components. The idea here is the same: `Modules` represent blocks in the page, like a hero, a footer, among others, while `Components` are reusable parts that are instantiated inside modules.

In the javascript context, `Modules` are initialized by a function at the beginning, using some kind of selector to identify the `HTML parent` or `root element` and passing some options to this module before initialization (usually with `data-attributes`). `Components`, as we said before, are used inside `Modules`, so it's expected that these are initialized in the `Module` logic, using a function that explicitly initializes it.
