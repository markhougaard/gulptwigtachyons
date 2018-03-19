# Gulp Twig Tachyons

Gulp and Twig templating with Tachyons CSS for good measure.

## Roadmap
- Watch for JS changes
- Concat and minify if more than one CSS or JS file in /src
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

### Installing

Clone or download this repo from GitHub:

```
git clone https://github.com/j-greig/gulptwigtachyons.git
```

Install dependencies in the local node_modules folder:

```
cd gulptwigtachyons
npm install
```

Once installed, link the `web` folder (with [Valet](https://laravel.com/docs/5.5/valet) or similar) and run the default Gulp command:


```
gulp
```

Now open the site and enable the LiveReload plugin in your browser.

## Built With

* [Tachyons](http://tachyons.io/) - CSS toolkit
* [Gulp Twig](https://www.npmjs.com/package/gulp-twig) - Compile Twig.js templates with Gulp.

## License

This project is licensed under the MIT License.
