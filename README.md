<<<<<<< HEAD
# ZCore Finance UIkit

[![Version](https://img.shields.io/npm/v/@pancakeswap-libs/uikit)](https://www.npmjs.com/package/@pancakeswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@pancakeswap-libs/uikit)](https://www.npmjs.com/package/@pancakeswap-libs/uikit)

ZCore Finance UIkit is a set of React components and hooks used to build pages on ZCore Finance's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @pancakeswap-libs/uikit`
=======
#  Bitvio UIkit

[![Version](https://img.shields.io/npm/v/@bitvio/ondel-uikit)](https://www.npmjs.com/package/@bitvio/ondel-uikit) [![Size](https://img.shields.io/bundlephobia/min/@pancakeswap-libs/uikit)](https://www.npmjs.com/package/@bitvio/ondel-uikit)

Bitvio UIkit is a set of React components and hooks used to build pages on Pancake's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @bitvio/ondel-uikit`
>>>>>>> refs/remotes/origin/master

## Setup

### Theme

<<<<<<< HEAD
Before using ZCore Finance UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@pancakeswap-libs/uikit'
=======
Before using Bitvio UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@bitvio/ondel-uikit'
>>>>>>> refs/remotes/origin/master
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
<<<<<<< HEAD
import { ResetCSS } from '@pancakeswap-libs/uikit'
=======
import { ResetCSS } from '@bitvio/ondel-uikit'
>>>>>>> refs/remotes/origin/master
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/master
