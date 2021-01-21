// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var rpc_rpc_pb = require('../rpc/rpc_pb.js');
var rpc_contact_pb = require('../rpc/contact_pb.js');
var rpc_user_pb = require('../rpc/user_pb.js');

function serialize_rpc_CreateContactRequest(arg) {
  if (!(arg instanceof rpc_rpc_pb.CreateContactRequest)) {
    throw new Error('Expected argument of type rpc.CreateContactRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_rpc_CreateContactRequest(buffer_arg) {
  return rpc_rpc_pb.CreateContactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_CreateContactResponse(arg) {
  if (!(arg instanceof rpc_rpc_pb.CreateContactResponse)) {
    throw new Error('Expected argument of type rpc.CreateContactResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_rpc_CreateContactResponse(buffer_arg) {
  return rpc_rpc_pb.CreateContactResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_CreateUserRequest(arg) {
  if (!(arg instanceof rpc_rpc_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type rpc.CreateUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_rpc_CreateUserRequest(buffer_arg) {
  return rpc_rpc_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_CreateUserResponse(arg) {
  if (!(arg instanceof rpc_rpc_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type rpc.CreateUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_rpc_CreateUserResponse(buffer_arg) {
  return rpc_rpc_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_GetContactsListRequest(arg) {
  if (!(arg instanceof rpc_rpc_pb.GetContactsListRequest)) {
    throw new Error('Expected argument of type rpc.GetContactsListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_rpc_GetContactsListRequest(buffer_arg) {
  return rpc_rpc_pb.GetContactsListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_GetContactsListResponse(arg) {
  if (!(arg instanceof rpc_rpc_pb.GetContactsListResponse)) {
    throw new Error('Expected argument of type rpc.GetContactsListResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_rpc_GetContactsListResponse(buffer_arg) {
  return rpc_rpc_pb.GetContactsListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_GetUserRequest(arg) {
  if (!(arg instanceof rpc_rpc_pb.GetUserRequest)) {
    throw new Error('Expected argument of type rpc.GetUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_rpc_GetUserRequest(buffer_arg) {
  return rpc_rpc_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_GetUserResponse(arg) {
  if (!(arg instanceof rpc_rpc_pb.GetUserResponse)) {
    throw new Error('Expected argument of type rpc.GetUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_rpc_GetUserResponse(buffer_arg) {
  return rpc_rpc_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RpcService = exports.RpcService = {
  createUser: {
    path: '/rpc.Rpc/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: rpc_rpc_pb.CreateUserRequest,
    responseType: rpc_rpc_pb.CreateUserResponse,
    requestSerialize: serialize_rpc_CreateUserRequest,
    requestDeserialize: deserialize_rpc_CreateUserRequest,
    responseSerialize: serialize_rpc_CreateUserResponse,
    responseDeserialize: deserialize_rpc_CreateUserResponse,
  },
  getUser: {
    path: '/rpc.Rpc/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: rpc_rpc_pb.GetUserRequest,
    responseType: rpc_rpc_pb.GetUserResponse,
    requestSerialize: serialize_rpc_GetUserRequest,
    requestDeserialize: deserialize_rpc_GetUserRequest,
    responseSerialize: serialize_rpc_GetUserResponse,
    responseDeserialize: deserialize_rpc_GetUserResponse,
  },
  createContact: {
    path: '/rpc.Rpc/CreateContact',
    requestStream: false,
    responseStream: false,
    requestType: rpc_rpc_pb.CreateContactRequest,
    responseType: rpc_rpc_pb.CreateContactResponse,
    requestSerialize: serialize_rpc_CreateContactRequest,
    requestDeserialize: deserialize_rpc_CreateContactRequest,
    responseSerialize: serialize_rpc_CreateContactResponse,
    responseDeserialize: deserialize_rpc_CreateContactResponse,
  },
  getContactsList: {
    path: '/rpc.Rpc/GetContactsList',
    requestStream: false,
    responseStream: false,
    requestType: rpc_rpc_pb.GetContactsListRequest,
    responseType: rpc_rpc_pb.GetContactsListResponse,
    requestSerialize: serialize_rpc_GetContactsListRequest,
    requestDeserialize: deserialize_rpc_GetContactsListRequest,
    responseSerialize: serialize_rpc_GetContactsListResponse,
    responseDeserialize: deserialize_rpc_GetContactsListResponse,
  },
};

exports.RpcClient = grpc.makeGenericClientConstructor(RpcService);
