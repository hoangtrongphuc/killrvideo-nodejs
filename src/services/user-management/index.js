import { load } from '../common/load';

// Load the protobuf definition to get the service object
const file = 'user-management/user_management_service.proto';
const proto = load(file);
const { service } = proto.killrvideo.user_management.UserManagementService;

// Load events published by this service
const eventsFile = 'user-management/user_management_events.proto';
const { UserCreated } = load(eventsFile).killrvideo.user_management.events;

/**
 * The user management service implementation.
 */
const implementation = {
  createUser(call, cb) {
    cb(new Error('Not implemented'));
  },

  verifyCredentials(call, cb) {
    cb(new Error('Not implemented'));
  },

  getUserProfile(call, cb) {
    cb(new Error('Not implemented'));
  }
}; 

/**
 * User Management Service, responsible for managing/authenticating users.
 */
export default {
  service,
  implementation 
};