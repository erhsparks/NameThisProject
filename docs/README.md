## Word Count World Builder

A productivity app that helps you reach your word count goals with positive visual feedback!

### Background

This app will feature a rich text editor which takes up about 70% of the screen, and a background that will change and grow as the user types. The more text a user enters, the more complete the image will be.

I'm imagining starting with just the ground, and as the user types, bricks are laid down and buildings start to grow, lights start to come on, people appear, and so on. Another background could be sprouts popping up and turning into trees and then growing leaves -- once the animation logic is in place, more backgrounds can be added.

As well as a default speed, a bonus feature could be a word count goal that users set: the app could then set the animation speed to match the total words.

### The App

At a minimum, this app will:
- Allow user input of text.
- Allow rich text editing.
- Allow users to 'zoom' (by changing the font size on click of the + and - buttons).
- Dynamically change background at a default pace as more text is entered.
- Allow users to input a word count goal and adjust animation speed accordingly.
- As this is meant to be a quick project, further ideas are outlined in the Bonus Features section.

### Wireframes

A new document has a text window and a line for the ground, maybe a few blades of grass:
![Image of new document](/docs/wireframes/new.png)

User begins to type...
![Image of document with some text](/docs/wireframes/some_text.png)

User has the power to build an entire world, just keep writing!
![Image of long document](/docs/wireframes/lots_of_text.png)

### Technologies and Architecture

While I could use React, D3, Easel, jQuery, or even plain old vanilla JS, I want to challenge myself to learn SCSS thoroughly, and do this project as much in CSS as I can!

There will be at least:
**index.html**
**reset.scss**
**text_editor.scss**
**background.scss**

### Implementation Timeline

**Day 1**
- Learn SCSS.
- Finish setting up project directory, filetree.
- Outline basic shape of app in index.html.
- Setup gh-pages.

**Day 2**
- Set up text editor.
- Set up welcome message with app overview.
- Style same.

**Day 3**
- Begin animation building.
- Find appropriate images -- start simple and build successively, iterate.
- Make sure styling is cohesive with text editor.

**Day 4**
- Finish animation building.
- Fix bugs and headaches that will inevitably make this deceptively simple-looking timeline less simple!
- Begin work on bonus features as time allows.

### Bonus Features

- Implement a user-specified word count limit for precise goals: after limit is hit, user may continue typing (so that they can edit down later -- hard word counts in forms suck!) but the background will begin to decay or fall apart in some way. Hah, or have that red mist from Goldeneye descend (or if that's a bit grim, maybe just start fading to grey, or zooming out).
- Incorporate a spell checker.
- Make this a google docs extension.
- Allow exporting as doc, google doc, pdf
- Have many backgrounds to choose from
- Be a full blown note app with backend, a la Evernote
