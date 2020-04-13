# in-scrape

*A web scraper for fetching the linkedin public profile*

## Installation

npm install --save in-scrape

## Usage

```js
var inScrape = require('in-scrape')
```

- Get the profile from linkedin URL

```js
inScrape.getProfile('path/to/linkedin/public/profile')
  .then(function(profile) {
    // success
    // profile = {
    //   name: ,
    //   headline: ,
    //   location: ,
    //   experience: [{
    //     employment: 'current' or 'past',
    //     title: ,
    //     company: ,
    //     logo: ,
    //     dateRande: ,
    //     location: ,
    //     description:
    //   }],
    //   summary: ,
    //   skills: [
    //     'skill1',
    //     'skill2',
    //      ...
    //   ],
    //   education: [{
    //     school: ,
    //     field: ,
    //     logo: ,
    //     dateRange:
    //   }]
    // }
  }, function(err) {
    // error
  });
```

- Example:

```js
inScrape.getProfile('https://in.linkedin.com/in/sachin-bansal-b4178239')
  .then(function(profile) {
    // success
    profile = {
      name: 'Mandy Sidana',
      headline: 'Product Manager at Psychd Analytics',
      location: 'Gurgaon Area, India',
      experience: [{
        title: 'Product Manager',
        company: 'Psychd',
        logo: 'https://media.licdn.com/media/AAEAAQAAAAAAAB5AAAAJDNiNDk0ODlkLTIyYTYtNGMxYS05OGQ3LWYwYjM2MmI5NWE1MQ.png',
        dateRange: 'Jan 2015 – Present (11 months)',
        location: 'Gurgaon Area, India',
        employment: 'current'
      }],
      summary: 'Product Manager',
      skills: [
        'Product Roadmap',
        'Wireframing',
        'Prototyping',
        'Node.js',
        'JavaScript',
        'CoffeeScript',
        'jQuery',
        'MongoDB',
        'PostgreSQL',
        'Redis',
        'HTML',
        'CSS',
      ],
      education: [{
          school: 'GGSIPU',
          field: 'Bachelor\'s Degree, Computer Science',
          dateRange: '2006 – 2010'
        }, {
          school: 'The Lawrence School, Sanawar',
          dateRange: '2003 – 2005'
        }
      ]
    };
  }, function(err) {
    // error
  });
```
