var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'ownCloud 5.0 Release Party<br>',
    subtitle: 'How to write your ownCloud app',
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/owncloud-logo-square.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Inconsolata'
    ]
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Bernhard Posselt',
    company: 'ownCloud Inc.',
    gplus: '',
    twitter: '',
    www: '',
    github: 'http://github.com/Raydiation'
  }/*, {
    name: 'Second Name',
    company: 'Job Title, Google',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'
  }*/]
};

