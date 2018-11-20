# CrowdReact
CrowdReact enables expressing and archiving real-time feelings in event.

## Getting Started
Follow instructions below to get a copy of this project and run on your local machine for testing purpose.

### Prerequisite
- [nodeJS](https://nodejs.org/)
- [npm](https://npmjs.org) 

### Project setup
```sh
git clone https://github.com/YujinGaya/crowdreact # clone the project

cd ./crowdreact

npm install # Install dependencies

npm run serve # Compiles and hot-reloads for development
```

### Project Structure
All important files are under `src/` directory.

    .
    ├── dist/                 # Build results
    ├── public/               # Template for Vue to mount
    ├── src/                  # Main source directory
    │   ├── assets/           # Icons
    │   ├── components/       # Components that are not page
    |   ├── firebase/         # Firebase related utility functions
    |   ├── views/            # Pages, i.e., components that has its own URL
    │   ├── App.vue           # Root component
    │   ├── main.js           # Entry point
    │   ├── router.js         # Vue-Router settings
    |   └── ...
    ├── package.json          # Dependencies
    ├── README.md             # This file
    └── ...

## Deploy
```sh
npm install -g firebase # install firebase globally

npm run build # build sites

firebase deploy # deploy the sites and database rules
```

## Built with
- [Vue](https://vuejs.org), [Vue-Router](https://router.vuejs.org)
- [Firebase](https://firebase.google.com)
- [chart.js](https://chartjs.org)

## Authors
- [Jeongho](https://github.com/Dr-zzt)
- [Jisu](https://github.com/lazyshuu)
- [Narae](https://github.com/Naraelikelion)
- [Yujin](https://github.com/YujinGaya)


