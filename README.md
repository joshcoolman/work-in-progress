# **Nextlify - A Work In Progress...**  

**A Next JS component playground for free and for fun.**  
By Josh Coolman, Front End Developer. Portland OR.

 This is a little kitchen sink app built with NextJS. It's where I experiment with React. You'll find rough-cuts, false-starts, hair-brained ideas, silly widgets some eye candy. It's just a way for me to share work samples with some folks. So... no docs, no versions, no tests, no support :dizzy_face: but feel free to use and abuse the code! :rocket:

![app screen shots](https://firebasestorage.googleapis.com/v0/b/images-aae96.appspot.com/o/WorkInProgress.jpg?alt=media&token=c82ab6eb-287a-4d09-a9dc-245d54547321)

## Some Highlights:
- App is pretty snappy, SSR and plays well on desktop and mobile screens
- Dark and Light mode using some simple css vars
- Uses Next API Routes to access data from Unsplash and TheMovieDB
- Some handy animation components using Framer Motion
- A handful of functional components for building out more complex UI components
- A little Movie App using all the components (Putting it all together...)


# Getting Started
### Required API Keys:
Two API keys are requried to run this app locally. Both are available for free when you sign up for both [TheMovieDB](https://www.themoviedb.org/) and [Unpslpash](https://unsplash.com/)

### Local Setup:

In the root of this project, create a .env.local file with the following lines:
```
TMDB_API_KEY=(... your api key)
UNSPLASH=( ... your api key)
```

### Run Locally:
With your API keys in place (above) you can now run the following commands in terminal from the root of the projec to run this app locally:
```
npm install
npm run dev
```

You should now be able to view the app at localhost:3000



