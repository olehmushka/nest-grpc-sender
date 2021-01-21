// package: contact
// file: rpc/contact.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class Contact extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getPhonenumber(): string;
    setPhonenumber(value: string): void;

    getUserid(): string;
    setUserid(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contact.AsObject;
    static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contact;
    static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
}

export namespace Contact {
    export type AsObject = {
        id: string,
        name: string,
        phonenumber: string,
        userid: string,
    }
}
