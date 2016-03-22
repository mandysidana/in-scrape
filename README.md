# in-scrape

*A web scraper for fetching the linkedin public profile*

## Installation

npm install --save in-scrape

##Usage

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
  })
  .catch(function(err) {
    // error
  });
```

- Example:

```js
inScrape.getProfile('https://in.linkedin.com/in/sachin-bansal-b4178239')
  .then(function(profile) {
    // success
    profile = {
      name: 'Sachin Bansal',
      headline: 'Senior Developer at Sifium Tech. Pvt. Ltd.',
      location: 'Noida Area, India',
      experience: [{
        title: 'Senior Developer',
        company: 'Sifium',
        logo: 'https://media.licdn.com/media/AAEAAQAAAAAAAAB5AAAAJDNiNDk0ODlkLTIyYTYtNGMxYS05OGQ3LWYwYjM2MmI5NWE1MQ.png',
        dateRange: 'June 2015 – Present (10 months)',
        location: 'Chandigarh Area, India',
        employment: 'current'
      }],
      summary: 'Web developer',
      skills: [
        'Node.js',
        'JavaScript',
        'CoffeeScript',
        'jQuery',
        'MongoDB',
        'PostgreSQL',
        'Redis',
        'HTML',
        'CSS',
        'Linux',
        'Java',
        'PHP',
        'MySQL',
        'C++',
        'C',
        'Hadoop',
        'Apache Pig'
      ],
      education: [{
          school: 'Galgotias College of Engg. and Tech.',
          field: 'Bachelor\'s Degree, Computer Science',
          dateRange: '2012 – 2016'
        }, {
          school: 'Bishop Conrad School',
          dateRange: '1997 – 2012'
        }
      ]
    };
  })
  .catch(function(err) {
    // error
  });
```