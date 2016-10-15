## React frontend coding challenge

You'll be building a simple react component: an avatar picker. It looks like this:

![Pick an avatar](./avatar_picker.gif "Pick me!")

The user clicks on the avatar to open a popover which allows the user to choose another avatar from the list. After a click a (fake) HTTP request is made (while a loading spinner runs), the popover closes and the new avatar will appear in the inital view.

### Design and behaviour:

* The initially shown avatar is the first in the given list of avatars
* The initial avatar which opens the popover has a border of 1px on hover and active state
* The avatar icons are shown in groups of 4, aligned left (with 6 icons it will exactly look like it does in the gif)
* The popover opens with a scaling animation that overbounces a bit (see gif; you're free to choose values for the animation that look good in your opinion, or close to what you see above)
* The currently chosen avatar has a blue border of 3px
* The avatar list icons have grey border and are overlaid by a blue colored area with an opacity of 20% on hover
* The loading spinner should look like shown above. It is also blue.
* The popover fades out with a scaling animation (no overbounce)
* A click outside the popover area will result in the popover closing
* Simulate a server request/response by showing the spinner for exactly one second before choosing the avatar
* The popover is closed when an avatar is chosen

### Colors and measurements (we won't count exact pixels):

* Avatar image
  * height: 60px, width: 60px, perfect circles
  * border for initial image: hover, focus 1px, color: rgb(155, 160, 163)
  * avatar list images:
    * border on hover: 3px border, color rgb(155, 160, 163);
    * overlay on hover: color rgb(122, 161, 178), opacity: 20%
    * border spinner, currently active avatar: color: rgb(122, 161, 178)
    * margin between two avatars: 14px
* Popover
  * width: 280px
  * height: variable
  * rounded corners of 2px radius
  * background: rgb(44, 48, 51)
  * drop shadow: color: rgb(102, 102, 102), size 2px, blur 10px
  * padding: 14px
  * triangle: equilateral, 8px each side
* "Choose your avatar" title
  * font: 'Source Sans Pro' (use the google font)
  * color: rgb(249, 249, 249)
  * size: 16px
  * margin top and bottom: 14px

### Instructions:

* This is going to be a react component which is being passed just one property: the list of available avatars. This list contains the src of the image file, the avatar label and a unique avatar id. The number of avatars can vary (let's say up to 12). For this example please use the following array:

```
[
  { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
  { "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
  { "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
  { "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
  { "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
  { "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
]
```

(you may adjust the paths to your needs of course)

* Requested browser compatibility: IE11 and up, current versions of Chrome, FF, Safari
* You may split up the main component in as many sub-components as you see fit
* Think of it as a component that will end up in a large, scalable react app. Consider this when writing HTML and CSS as well.
* You're free to use as many third party JS libraries that you see fit
* You're NOT allowed to use any third party CSS libraries
* You're free to use any build tools that you like (including CSS pre/post-processors). Do not focus on the tooling though. Choose tools that get you going quickly (when you're unsure, [create-react-app](https://github.com/facebookincubator/create-react-app/) might work well for you).
* Only use the image assets given in this repository and do not modify the files in any way
* Use proper semantics when writing HTML (for example: the avatar list has to be a `<ul>` and all the children just `<li>` elements)
