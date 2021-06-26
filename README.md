#  Bitvio UIkit

[![Version](https://img.shields.io/npm/v/@bitvio/ondel-uikit)](https://www.npmjs.com/package/@bitvio/ondel-uikit) [![Size](https://img.shields.io/bundlephobia/min/@pancakeswap-libs/uikit)](https://www.npmjs.com/package/@bitvio/ondel-uikit)

Bitvio UIkit is a set of React components and hooks used to build pages on Pancake's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @bitvio/ondel-uikit`

## Setup

### Theme

Before using Bitvio UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@bitvio/ondel-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@bitvio/ondel-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

