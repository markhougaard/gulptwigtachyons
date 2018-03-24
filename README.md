Based on [j-greig/gulptwigtachyons](https://github.com/j-greig/gulptwigtachyons).

---

This repo is basically just a ripped version of the same concept.

# What's happening?

Twig takes care of the templates, CSS is knocked out of the park with Tachyons, and there's a tiny Express server with LiveReload so it just updates without you having to hit refresh all the time. That's the stuff.

## What do I need to make it work?

- [Node and npm](https://nodejs.org/en/)
- [Gulp](https://gulpjs.com/)

If you didn't already run into it, you'll figure out soon enough that Gulp needs to be installed globally. No, I don't know why either, but here's how:

```
npm install -g gulp
```

## Now, how do I make it work?

Clone this repo:

```
git clone https://github.com/marksdk/gulptwigtachyons.git
```

Install the dependencies:

```
cd gulptwigtachyons
npm install
```

Run the default Gulp command:

```
gulp
```

Now open your browser of choice at `http://localhost:3000` and marvel at the wonder that is something that actually works on your computer.

## Now what?

Make sure you edit the .twig files in `/src`, not the .html files in `/web`. If you do that, it will treat you well, and as long as you have Gulp running, all of your changes in the Twig templates will automatically be compiled to HTML. 🎩 Magic ✨

Place reusable elements in the `_partials` folder, and include them in the other Twig templates. (See the `<nav>` element in `_layout.twig` for an example).

## License

G/T/T is licensed under the MIT License, luckily.
