// package: rpc
// file: rpc/rpc.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as rpc_contact_pb from "../rpc/contact_pb";
import * as rpc_user_pb from "../rpc/user_pb";

export class CreateUserRequest extends jspb.Message { 
    getFirstname(): string;
    setFirstname(value: string): void;

    getLastname(): string;
    setLastname(value: string): void;

    getBirthday(): string;
    setBirthday(value: string): void;

    getPhonenumber(): string;
    setPhonenumber(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
    static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
    export type AsObject = {
        firstname: string,
        lastname: string,
        birthday: string,
        phonenumber: string,
        email: string,
    }
}

export class CreateUserResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): rpc_user_pb.User | undefined;
    setData(value?: rpc_user_pb.User): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
    static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
    export type AsObject = {
        data?: rpc_user_pb.User.AsObject,
        timestamp: number,
    }
}

export class GetUserRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetUserResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): rpc_user_pb.User | undefined;
    setData(value?: rpc_user_pb.User): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserResponse;
    static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
    export type AsObject = {
        data?: rpc_user_pb.User.AsObject,
        timestamp: number,
    }
}

export class CreateContactRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getPhonenumber(): string;
    setPhonenumber(value: string): void;

    getUserid(): string;
    setUserid(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateContactRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateContactRequest): CreateContactRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateContactRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateContactRequest;
    static deserializeBinaryFromReader(message: CreateContactRequest, reader: jspb.BinaryReader): CreateContactRequest;
}

export namespace CreateContactRequest {
    export type AsObject = {
        name: string,
        phonenumber: string,
        userid: string,
    }
}

export class CreateContactResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): rpc_contact_pb.Contact | undefined;
    setData(value?: rpc_contact_pb.Contact): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateContactResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateContactResponse): CreateContactResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateContactResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateContactResponse;
    static deserializeBinaryFromReader(message: CreateContactResponse, reader: jspb.BinaryReader): CreateContactResponse;
}

export namespace CreateContactResponse {
    export type AsObject = {
        data?: rpc_contact_pb.Contact.AsObject,
        timestamp: number,
    }
}

export class GetContactsListRequest extends jspb.Message { 
    getSkip(): number;
    setSkip(value: number): void;

    getLimit(): number;
    setLimit(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetContactsListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetContactsListRequest): GetContactsListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetContactsListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetContactsListRequest;
    static deserializeBinaryFromReader(message: GetContactsListRequest, reader: jspb.BinaryReader): GetContactsListRequest;
}

export namespace GetContactsListRequest {
    export type AsObject = {
        skip: number,
        limit: number,
    }
}

export class GetContactsListResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<rpc_contact_pb.Contact>;
    setDataList(value: Array<rpc_contact_pb.Contact>): void;
    addData(value?: rpc_contact_pb.Contact, index?: number): rpc_contact_pb.Contact;

    getTimestamp(): number;
    setTimestamp(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetContactsListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetContactsListResponse): GetContactsListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetContactsListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetContactsListResponse;
    static deserializeBinaryFromReader(message: GetContactsListResponse, reader: jspb.BinaryReader): GetContactsListResponse;
}

export namespace GetContactsListResponse {
    export type AsObject = {
        dataList: Array<rpc_contact_pb.Contact.AsObject>,
        timestamp: number,
    }
}
