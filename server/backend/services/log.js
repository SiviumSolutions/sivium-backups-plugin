module.exports = ({strapi}) => ({

  error: (message) => {
    strapi.log.error(`Sivium backup: ${message}`);
  },

  info: (message) => {
    strapi.log.info(`Sivium backup: ${message}`);
  },

})
