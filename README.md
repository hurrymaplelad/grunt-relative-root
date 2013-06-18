# grunt-relative-root

Relativize absolute paths in HTML and CSS.

You built some static website.  Maybe your gonna host it on gh-pages.  Maybe you're squating a stellar domain name, but you'd rather review the site on `<yourname>.github.io/<yourproject>` before you repoint DNS.  How do you make your pages work from both `/<yourproject/` and `/`?

Add something like this to your Gruntfile:

```js
grunt.loadNpmTasks('grunt-relative-root');

grunt.initConfig({
  relativeRoot: {
    yourTarget: {
      options: {
        root: 'public'
      },
      files: [{
        expand: true,
        cwd: '<%= relativeRoot.yourTarget.options.root %>',
        src: ['*.css', '*.js'],
        dest: 'out/'
      }]
    },
  },
})
```
## Getting Started
Grunt at least a `~0.4.1`

You should be comfy with the [grunt basics](http://gruntjs.com/getting-started) and [npm](https://npmjs.org/doc/README.html) so you can install this in your project

```shell
npm install grunt-relative-root --save-dev
```

## Options

#### root
Type: `String`
Default value: `'.'`

Local directory used as the base for relative paths. If `root: 'public'` then the URL `'/images/logo.png'` in the file `'public/events/solstice.html'` will be rewritten as `'../image/logo.png'`.

