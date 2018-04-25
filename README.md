# react-bomb

An example of pretty fast recursive rendering that will piss you off.

## How to use

Launch the dev server and stay way from **that** button.

```
yarn && yarn start
```

You can try it on a production build as well.

## Should we consider this a bug?

We have some limit of calling `this.setState(...)`, but let's keep this kind of
API tricks just for fun.

It's very easy to defuse.
