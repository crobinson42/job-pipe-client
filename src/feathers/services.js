import feathers from './index'

export const services = {
  applicants: feathers.service('applicants'),
  forms: feathers.service('forms'),
  organizations: feathers.service('organizations'),
  registration: feathers.service('registration'),
  users: feathers.service('users'),
}

export default services
