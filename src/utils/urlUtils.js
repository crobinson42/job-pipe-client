// URL and router utility methods
import qs from 'query-string'

/**
 * This method returns all query param values from the url passed
 * @param {Object}
 * @param {string} url
 * @return {string[]}
 */
export const getAllQueryParams = (url) => {
  // regression change to params
  url = url.url || url

  return qs.parse(url)
}

/**
 * This method returns a search query param value from the url passed
 * @param {Object}
 * @param {string} key
 * @param {string} url
 * @return {string}
 */
export const getQueryParam = ({ key, url }) => {
  if (!key) return undefined

  const location = window.location || {}

  const search = qs.parse(url || location.search)

  return search[key]
}

/**
 * This method takes the url, hash, or [react-router].location.search value then
 * parses to see if the passed key => value pair exist & match
 * @param {Object}
 * @param {string} key
 * @param {string} value
 * @param {string} url
 * @return {boolean}
 */
export const queryMatch = ({ key, url, value }) => {
  if (!url || !key || !value) return false

  const search = qs.parse(url)

  if (search[key] && search[key] === value) return true

  return false
}

/**
 * This methods checks the passed in url search params for a key.
 * If no url is passed, it will use the location global on window
 * @param {string} key
 * @param {string} url
 * @return {boolean}
 */
export const queryParamExists = ({ key, url }) => {
  if (!key || typeof url !== 'string') return false

  const location = window.location || {}

  const search = qs.parse(url || location.search)

  return Object.prototype.hasOwnProperty.call(search, key)
}

/**
 * This methods will remove a query param from the url/search
 * param passed in.
 * @param {string} key
 * @param {string} url
 * @return {string} url with removed key query param
 */
export const removeQueryParam = ({ key, url }) => {
  if (!key) return url

  const location = window.location || {}

  const search = qs.parse(url || location.search)

  delete search[key]

  return qs.stringify(search)
}

/**
 * This method will set the url params in the url search passed in.
 * The history param should be the history used inside the app ie:
 * the react-router history.
 * @param params {String|Object}
 * @param history {Object}
 */
export const setUrlParams = (params, history) => {
  const urlParams = getAllQueryParams(window.location.search)

  // take a string or object for params
  const _params = typeof(params) === 'string' ? qs.parse(params) : params

  const newUrlParams = { ...urlParams, ..._params }

  if (!history || (history && !history.push)) {
    throw new Error('urlUtils.js setUrlParams() `history` param required')
  }

  history.push(`${window.location.pathname}?${qs.stringify(newUrlParams)}`)
}

window.setUrlParams = (params) => setUrlParams.call(params, )
