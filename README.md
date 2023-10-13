# Sungod

## How to test the app

- npm i
- ng serve

## Considerations

- Database ends points were bigger that expected, so in order to simplify the test I have used some mock lists in the lenses menu.
- SASS has been used to simplify styling. If the whole feature was implemented for real, it could be used with better styles or using Tailwind if desired.
- The feature is responsive as showed on the Figma file, but it only has tested on Chrome browsers.

## Components architecture

Component splitting (from top to bottom):

Stimated time:

- Split Image visualizer: 8 hours.
- Collapsable menu button: 6 hours.
- Tabs component: already done!
- Colour picker menu: already done!
- Tooltip: 6 hours (first iteration it may vary in the future)
- Lenses button menu (I couldn't find it in the website): 2 hours.

Split Image visualizer:

- Aside of what is currently done, it needs loading icon (already done in the website).
- Test if draggind works well on different device (some mobile devices had limits on their sides).
- Improve cashing to improve performance in different devices.

Collapsable menu button:

- A button that shows an image or an icon. When is clicked expand a menu (on the selected direction).

Tooltip:

- Define if this overlay will be on top of other layers (basket, cookies, popups, etc).

Lenses button menu:

- A button with coloured border (tbd) that accepts an icon or a logo.

Risks:
As mentioned before, some browsers and mobile devices or touch screens has limitations on the touch areas,
so it would be higly recommended study which devices are most used by the users, to address those devices first.
