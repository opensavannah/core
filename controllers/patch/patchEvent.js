/**
 *  Dependencies
 */
const requireDir = require('require-dir')
const helpers = requireDir('../../helpers', {recurse: true})

/**
 *  Exports
 */

module.exports = {
  method: 'patch',
  endpoint: '/api/events/:eventId',
  jwt: true,
  authenticated: true,
  roles: ['core', 'superAdmin'],
  middleware: [],
  controller: helpers.mortimer.eventResource.patchDoc()
}
