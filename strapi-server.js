'use strict';

module.exports = {
  register({ strapi }) {
    strapi.customFields.register({
      name: 'icon-picker',
      plugin: 'tablericons-field',
      type: 'text'
    });
  },
}
