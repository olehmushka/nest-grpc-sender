// package: rpc
// file: rpc/rpc.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as rpc_rpc_pb from "../rpc/rpc_pb";
import * as rpc_contact_pb from "../rpc/contact_pb";
import * as rpc_user_pb from "../rpc/user_pb";

interface IRpcService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IRpcService_ICreateUser;
    getUser: IRpcService_IGetUser;
    createContact: IRpcService_ICreateContact;
    getContactsList: IRpcService_IGetContactsList;
}

interface IRpcService_ICreateUser extends grpc.MethodDefinition<rpc_rpc_pb.CreateUserRequest, rpc_rpc_pb.CreateUserResponse> {
    path: string; // "/rpc.Rpc/CreateUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_rpc_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<rpc_rpc_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<rpc_rpc_pb.CreateUserResponse>;
    responseDeserialize: grpc.deserialize<rpc_rpc_pb.CreateUserResponse>;
}
interface IRpcService_IGetUser extends grpc.MethodDefinition<rpc_rpc_pb.GetUserRequest, rpc_rpc_pb.GetUserResponse> {
    path: string; // "/rpc.Rpc/GetUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_rpc_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<rpc_rpc_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<rpc_rpc_pb.GetUserResponse>;
    responseDeserialize: grpc.deserialize<rpc_rpc_pb.GetUserResponse>;
}
interface IRpcService_ICreateContact extends grpc.MethodDefinition<rpc_rpc_pb.CreateContactRequest, rpc_rpc_pb.CreateContactResponse> {
    path: string; // "/rpc.Rpc/CreateContact"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_rpc_pb.CreateContactRequest>;
    requestDeserialize: grpc.deserialize<rpc_rpc_pb.CreateContactRequest>;
    responseSerialize: grpc.serialize<rpc_rpc_pb.CreateContactResponse>;
    responseDeserialize: grpc.deserialize<rpc_rpc_pb.CreateContactResponse>;
}
interface IRpcService_IGetContactsList extends grpc.MethodDefinition<rpc_rpc_pb.GetContactsListRequest, rpc_rpc_pb.GetContactsListResponse> {
    path: string; // "/rpc.Rpc/GetContactsList"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_rpc_pb.GetContactsListRequest>;
    requestDeserialize: grpc.deserialize<rpc_rpc_pb.GetContactsListRequest>;
    responseSerialize: grpc.serialize<rpc_rpc_pb.GetContactsListResponse>;
    responseDeserialize: grpc.deserialize<rpc_rpc_pb.GetContactsListResponse>;
}

export const RpcService: IRpcService;

export interface IRpcServer {
    createUser: grpc.handleUnaryCall<rpc_rpc_pb.CreateUserRequest, rpc_rpc_pb.CreateUserResponse>;
    getUser: grpc.handleUnaryCall<rpc_rpc_pb.GetUserRequest, rpc_rpc_pb.GetUserResponse>;
    createContact: grpc.handleUnaryCall<rpc_rpc_pb.CreateContactRequest, rpc_rpc_pb.CreateContactResponse>;
    getContactsList: grpc.handleUnaryCall<rpc_rpc_pb.GetContactsListRequest, rpc_rpc_pb.GetContactsListResponse>;
}

export interface IRpcClient {
    createUser(request: rpc_rpc_pb.CreateUserRequest, callback: (error: Error | null, response: rpc_rpc_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: rpc_rpc_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: rpc_rpc_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: rpc_rpc_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: rpc_rpc_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: rpc_rpc_pb.GetUserRequest, callback: (error: Error | null, response: rpc_rpc_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: rpc_rpc_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: rpc_rpc_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: rpc_rpc_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: rpc_rpc_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    createContact(request: rpc_rpc_pb.CreateContactRequest, callback: (error: Error | null, response: rpc_rpc_pb.CreateContactResponse) => void): grpc.ClientUnaryCall;
    createContact(request: rpc_rpc_pb.CreateContactRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: rpc_rpc_pb.CreateContactResponse) => void): grpc.ClientUnaryCall;
    createContact(request: rpc_rpc_pb.CreateContactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: rpc_rpc_pb.CreateContactResponse) => void): grpc.ClientUnaryCall;
    getContactsList(request: rpc_rpc_pb.GetContactsListRequest, callback: (error: Error | null, response: rpc_rpc_pb.GetContactsListResponse) => void): grpc.ClientUnaryCall;
    getContactsList(request: rpc_rpc_pb.GetContactsListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: rpc_rpc_pb.GetContactsListResponse) => void): grpc.ClientUnaryCall;
    getContactsList(request: rpc_rpc_pb.GetContactsListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: rpc_rpc_pb.GetContactsListResponse) => void): grpc.ClientUnaryCall;
}

export class RpcClient extends grpc.Client implements IRpcClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createUser(request: rpc_rpc_pb.CreateUserRequest, callback: (error: Error | null, response: rpc_rpc_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: rpc_rpc_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: rpc_rpc_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: rpc_rpc_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: rpc_rpc_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: rpc_rpc_pb.GetUserRequest, callback: (error: Error | null, response: rpc_rpc_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: rpc_rpc_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: rpc_rpc_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: rpc_rpc_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: rpc_rpc_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public createContact(request: rpc_rpc_pb.CreateContactRequest, callback: (error: Error | null, response: rpc_rpc_pb.CreateContactResponse) => void): grpc.ClientUnaryCall;
    public createContact(request: rpc_rpc_pb.CreateContactRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: rpc_rpc_pb.CreateContactResponse) => void): grpc.ClientUnaryCall;
    public createContact(request: rpc_rpc_pb.CreateContactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: rpc_rpc_pb.CreateContactResponse) => void): grpc.ClientUnaryCall;
    public getContactsList(request: rpc_rpc_pb.GetContactsListRequest, callback: (error: Error | null, response: rpc_rpc_pb.GetContactsListResponse) => void): grpc.ClientUnaryCall;
    public getContactsList(request: rpc_rpc_pb.GetContactsListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: rpc_rpc_pb.GetContactsListResponse) => void): grpc.ClientUnaryCall;
    public getContactsList(request: rpc_rpc_pb.GetContactsListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: rpc_rpc_pb.GetContactsListResponse) => void): grpc.ClientUnaryCall;
}
