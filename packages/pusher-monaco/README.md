# `@otjs/pusher-monaco`

[![Npm Version](https://img.shields.io/npm/v/@otjs/pusher-monaco)](https://www.npmjs.com/package/@otjs/pusher-monaco)
[![Weekly Downloads](https://img.shields.io/npm/dw/@otjs/pusher-monaco)](https://www.npmjs.com/package/@otjs/pusher-monaco)
[![Minified Zipped Size](https://img.shields.io/bundlephobia/minzip/@otjs/pusher-monaco)](https://www.npmjs.com/package/@otjs/pusher-monaco)
[![Types](https://img.shields.io/npm/types/@otjs/pusher-monaco)](https://www.npmjs.com/package/@otjs/pusher-monaco)
[![License](https://img.shields.io/npm/l/@otjs/pusher-monaco)](https://github.com/Progyan1997/Operational-Transformation/blob/main/packages/pusher-monaco/LICENSE)
[![Dependencies](https://img.shields.io/librariesio/release/npm/@otjs/pusher-monaco)](https://www.npmjs.com/package/@otjs/pusher-monaco)
[![Dependents](https://img.shields.io/librariesio/dependents/npm/@otjs/pusher-monaco)](https://www.npmjs.com/package/@otjs/pusher-monaco)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@otjs/pusher-monaco)](https://github.com/Progyan1997/Operational-Transformation/blob/main/.github/SECURITY.md)
[![Stars](https://img.shields.io/github/stars/Progyan1997/Operational-Transformation)](https://github.com/Progyan1997/Operational-Transformation)
[![Forks](https://img.shields.io/github/forks/Progyan1997/Operational-Transformation)](https://github.com/Progyan1997/Operational-Transformation)
[![Discussions](https://img.shields.io/github/discussions/Progyan1997/Operational-Transformation)](https://github.com/Progyan1997/Operational-Transformation/discussions)

## Description

> Real-time collaborative editor with out of the box binding with Pusher and Monaco Editor.

## Installation

- To install using [Yarn](https://yarnpkg.com) _(recommended)_:

```sh
$ yarn add @otjs/pusher-monaco
```

- To install using [Npm](https://www.npmjs.com):

```sh
$ npm i @otjs/pusher-monaco
```

### Peer Dependencies

Make sure to install all the peer dependencies beforehand:

[![Pusher](https://img.shields.io/npm/dependency-version/@otjs/pusher-monaco/peer/pusher-js)](https://www.npmjs.com/package/pusher-js)
[![Monaco Editor](https://img.shields.io/npm/dependency-version/@otjs/pusher-monaco/peer/monaco-editor)](https://microsoft.github.io/monaco-editor)

## Usage

```ts
import { PusherMonacoEditor } from "@otjs/pusher-monaco";

const pusherMonaco = new PusherMonacoEditor({
  channel:                // Channel Reference in Pusher
  editor:                 // Monaco Editor instance
  announcementDuration:   // Duration to hide Cursor tooltip (optional)
  userId:                 // Unique Identifier for current user
  userColor:              // Unique Color Code for current user
  userName:               // Human readable Name or Short Name (optional)
});
```

**Note**: An API documentation will be shipped along with the package. This will power intellisense in the editor of your choice.

## Testing

We are using [Jest](https://jestjs.io) to form our Unit Test Suite. [Nyc _(formerly known as Istanbul)_](https://istanbul.js.org/) is used for coverage reporting.

To run all the unit test suites in local dev environment, run the following after dependencies have been installed:

```sh
$ yarn test
```

## Reporting a Bug

Head on to [**Discussion**](https://github.com/Progyan1997/Operational-Transformation/discussions) section to report a bug or to ask for any feature. Use this [template](https://github.com/Progyan1997/Operational-Transformation/discussions/30) to make it structural and helpful for the maintainer and the contributors. Feel to add your queries about using this library as well under _Q & A_ section of it. Remember, do not create any Issues by yourself, maintainers of this repository will open one if deemed necessary.

## Changelog

See [CHANGELOG](https://github.com/Progyan1997/Operational-Transformation/blob/main/CHANGELOG.md) for more details on what has been changed in the latest release.

## Contributing

See [Contributing Guidelines](https://github.com/Progyan1997/Operational-Transformation/blob/main/.github/CONTRIBUTING.md).

## License

This project is licensed under the terms of the MIT license, see [LICENSE](https://github.com/Progyan1997/Operational-Transformation/blob/main/packages/pusher-monaco/LICENSE) for more details.