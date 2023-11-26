# unofficial blossomcraft item wiki
## How to Contribute
You can either make an issue or make a pull request 

## Making an issue
### Requirements
* Github account
<!-- *  -->

### what to do
[Go Here](https://github.com/Unofficial-BlossomCraft-Wikis/unofficial-blossomcraft-item-wiki/issues/new/choose)/Go to the `issues` tab in github

## Making a pull request
### Requirements
* Slight knowledge of markdown and [MDX (for landing page only)](https://mdxjs.com/)
* Github account
<!-- *  -->

### Recomended
* Slight or complete knowledge of [Astro](https://astro.build) and [Astro Starlight](https://starlight.astro.build)
<!-- *  -->

### Developing
You may either:
* [Developing locally](#developing-locally)
* [Clone the Repository](#developing-using-github-codespaces)

#### Developing locally

**Prerequisites:** we require [Node.js](https://nodejs.org) (v18 or higher). Make sure you have node installed before following these steps.

1. **Fork the repo** to your personal GitHub account by clicking <kbd>Fork</kbd> on the [main repo page][sl].

2. **Clone your fork** of the repo to your computer. Replace `YOUR-USERNAME` in the command below with your GitHub username to clone in a Terminal:

   ```sh
   git clone https://github.com/YOUR-USERNAME/unofficial-blossomcraft-item-wiki.git
   ```

3. **Change directory** to the cloned repo:

   ```sh
   cd unofficial-blossomcraft-item-wiki
   ```

4. **Install dependencies** with `npm`:

   ```sh
   npm install
   ```

#### Developing using GitHub Codespaces

1. **Create a new codespace** via https://codespaces.new/Unofficial-BlossomCraft-Wikis/unofficial-blossomcraft-item-wiki

2. pass the `--host` flag to avoid “502 Bad Gateway” errors:

   ```sh
   npm run dev -- --host
   ```

The dev container used for GitHub Codespaces can also be used with [other supporting tools](https://containers.dev/supporting), including VS Code.

### Testing visual changes while you work

Run the Astro dev server on the site to see how changes you make impact the project.

To do this run `npm run dev` from the root of the project:

```sh
npm run dev
```

You should then be able to open <http://localhost:4321> and see your changes.

[sl]: https://github.com/Unofficial-BlossomCraft-Wikis/unofficial-blossomcraft-item-wiki/pulls