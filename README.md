# Gulp/Twig/Tachyons

Gulp and Twig templating with Tachyons CSS and LiveReload for good measure.
(Or G/T/T for short).

Built by [James Greig](https://www.greig.cc/) using [Gulp Twig](https://github.com/zimmen/gulp-twig.).

## Roadmap
- ~~Move JS to script.js and watch for changes~~
- ~~Watch for images in /img and move to /web/img (warning: working but buggy)~~
- ~~Allow subfolders in /web~~
- ~~Remove .html extension on index files in /web~~
- Concat and minify if more than one CSS file ~~or JS file~~ in /src
- Do the Barba.js transitions without jQuery (?)
- Switch to Tachyons Generator

### Prerequisites

- [Node and npm](https://nodejs.org/en/)
- [Gulp](https://gulpjs.com/)
- [LiveReload](http://livereload.com/extensions/)

You can check that Node and npm are installed by running the following commands from the command line:

```
node -v
npm -v
```

If both commands return a version number, then the installations were successful.

### Installing G/T/T

Clone or download this repo from GitHub:

```
git clone https://github.com/j-greig/gulptwigtachyons.git
```

Install dependencies in the local node_modules folder:

```
cd gulptwigtachyons
npm install
```

Once installed, serve up the `web` folder locally (with [Valet](https://laravel.com/docs/5.5/valet) or similar) and run the default Gulp command from your project root:


```
gulp
```

Tip: if you have Valet installed, you can do everything with a single command:

```
cd web && valet link gulptwigtachyons && valet secure && valet open && gulp
```

Now open the site and enable the LiveReload plugin in your browser.

## Editing your G/T/T site

**Important**
Make sure you edit the .twig files in `/src`, not the .html files in `/web`!

Once you have Gulp running, any changes made to the Twig templates will be autocompiled to HTML.

Reusable elements like headers or footers should be store in the `_partials` folder, then included in the main Twig templates. (See the `<nav>` element in `_layout.twig` for an example).

## Quick deploy with Surge.sh

Run `gulp deloy` to upload your site to a test url on https://surge.sh/
Note: you should first set the `domain: 'changeme.surge.sh'` line in `gulpfile.js` to a subdomain of your choosing.

## Built With

* [Gulp Twig](https://www.npmjs.com/package/gulp-twig) - Compile Twig.js templates with Gulp.
* [Tachyons](http://tachyons.io/) - CSS toolkit
* [LiveReload](http://livereload.com/) - because refreshing webpages manually is boring

## License

G/T/T is licensed under the MIT License.
