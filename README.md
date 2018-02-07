# tiny-trello

Light-weight version of the popular project management software Trello.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Additional Packages Used
* bootstrap
* ember-cli-mirage
* ember-composable-helpers
* ember-drag-drop
* ember-modal-dialog

## Installation

* `git clone <repository-url>` this repository
* `cd tiny-trello`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Notes:
I was able to complete all the requirements and did some manual testing to make sure everything works, hope I didn’t miss anything. The only thing I’ve noticed is that when you create multiple lists with many items, and then you drag and drop items into different lists, the order of the lists change. This is because I’m using helper group-by, which I think groups them by the earliest item it sees, so it’s hard to maintain the order of the lists. Better way would be to create a separate model for a list and then associate items with it, that way it would be easy to keep the order of the lists. I decided to leave this simple approach, wasn’t sure if fixing this is necessary, since reordering items wasn’t even required in the specs.
