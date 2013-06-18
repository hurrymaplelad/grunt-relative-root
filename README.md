# grunt-relative-root

Relativize absolute paths in HTML and CSS.

You built some static website.  Maybe your gonna host it on gh-pages.  Maybe you're squating a stellar domain name, but you'd rather review the site on `<yourname>.github.io/<yourproject>` before you repoint DNS.  How do you make your pages work from both `/<yourproject/` and `/` ?  Read on!

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-relative-root --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-relative-root');
```

## The "relativeRoot" task

### Overview
In your project's Gruntfile, add a section named `relativeRoot` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  relativeRoot: {
    options: {
      // Task-specific options go here.
    },
    yourTarget: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```
<!--
### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.
 -->