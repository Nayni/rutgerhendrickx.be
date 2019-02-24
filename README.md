<p align="center">
  <a href="https://rutgerhendrickx.be">
    <img alt="rutgerhendrickx.be" src="./src/images/rh-icon.png" width="80" />
  </a>
</p>
<h1 align="center">
  rutgerhendrickx.be
</h1>

This is the source code of my own personal website (a curriculum vitae). It's built using:

- [Gatsby](https://www.gatsbyjs.org/)
- [React (duh)](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI](https://material-ui.com/)

The project is hosted using [Firebase](https://firebase.google.com/).

## 🚀 Quick start

1.  **Run locally**

    Run the site with gatsby locally:

    ```sh
    # using yarn
    yarn start

    # using npm
    npm run start
    ```

1.  **Build for production**

    Build the site with gatsby:

    ```sh
    # using yarn
    yarn build

    # using npm
    npm run build
    ```

## 💫 Deploy

This project uses [CircleCI](https://circleci.com) to build and deploy itself. To deploy a new version to production:

```sh
# checkout master
git checkout master

# create a tag of the release
git tag v1.0.0

# push the tag
git push --tags origin
```
