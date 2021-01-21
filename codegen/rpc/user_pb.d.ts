// package: user
// file: rpc/user.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

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
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        firstname: string,
        lastname: string,
        birthday: string,
        phonenumber: string,
        email: string,
    }
}
