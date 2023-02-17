## 0x06. React Immutable

## Resources
**Read or watch:**
- [Immutable Object concept](https://en.wikipedia.org/wiki/Immutable_object)
- [Immutable.js Documentation](https://immutable-js.com/docs/v4.2.4/)
- [Immutable.js GitHub](https://github.com/immutable-js/immutable-js)

## Learning Objectives
- Immutable objects. Who, what, when, where, and why?
- How to use the Immutable.js library to bring immutability to Javascript
- The differences between List and Map
- How to use Merge, Concat, and Deep Merging
- What a lazy Seq is

## Requirements
- Allowed editors: **vi**, **vim**, **emacs**, **Visual Studio Code**
- All of your files will be interpreted/compiled on Ubuntu 18.04 LTS using ``node 12.x.x`` and ``npm 6.x.x``
- Al files end with a new line
- All functions must be exported

### Setup
- Install NodeJS ``12.11.x``
- Install npm ``6.11.x``

The script below installs the above 2 at the specified versions
```
$ curl -sl https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
$ sudo bash nodesource_setup.sh
$ sudo apt install nodejs
```

### Provided files
**babel.config.js**
Click to show/hide file contents
```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

**jsconfig.json**
Click to show/hide file contents
```
{
  "compilerOptions": {
    "target": "es6"
  },
  "exclude": [
    "node_modules"
  ]
}
```

package.json
Click to show/hide file contents
```
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  },
  "dependencies": {
    "immutable": "^4.0.0-rc.12"
  }
}
```
