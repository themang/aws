/**
 * Modules
 */

var aws = require('aws-sdk')
var profile = require('@themang/profile')

/**
 * Load default profile
 */

load()

/**
 * Expose aws
 */

module.exports = aws

/**
 * Expose load
 */

aws.load = load


/**
 * Load profile config into aws sdk
 *
 * @param {String} p Profile name
 * @return {Object}
 */

function load(p) {
  aws.config.update(profile.get(p))
  return aws.config
}
