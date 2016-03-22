var Promise = require('bluebird');
var x = require('x-ray')();

module.exports.getProfile = function(profileUrl) {
  return new Promise(function(resolve, reject) {
    x(profileUrl, {
      name: '#name',
      headline: '.headline',
      location: '#demographics .locality',
      experience: x('#experience .positions', '.position', [{
        title: '.item-title',
        company: '.item-subtitle',
        logo: '.logo img@data-delayed-url',
        dateRange: '.date-range',
        location: '.location',
        description: '.description'
      }]),
      summary: x('#summary', '.description p@html'),
      skills: x('#skills .pills', ['.skill span']),
      education: x('#education .schools', '.school', [{
        school: '.item-title',
        field: '.item-subtitle',
        logo: '.logo img@data-delayed-url',
        dateRange: '.date-range'
      }])
    })(function(err, profile) {
      if (err) {
        return reject(err);
      } else {
        profile.experience = profile.experience.map(function(experience) {
          if (experience.dateRange.indexOf('Present') !== -1) {
            experience.employment = 'current';
          } else {
            experience.employment = 'past';
          }
          return experience;
        });
        profile.summary = profile.summary.replace(/<br>/g, ' ');
        return resolve(profile);
      }
    });
  });
};