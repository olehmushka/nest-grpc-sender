import {Injectable} from '@nestjs/common';
import {rpc} from '../../codegen/rpc/rpc';
import {GrpcContactClient} from '../lib/contact-client';
import CreateContactRequest = rpc.ICreateContactRequest;
import CreateContactResponse = rpc.ICreateContactResponse;
import GetContactsListResponse = rpc.IGetContactsListResponse;

@Injectable()
export class ContactService {
  private rpcService: GrpcContactClient;

  constructor() {
    this.rpcService = new GrpcContactClient({
      host: '0.0.0.0',
      port: 3001,
    });
  }

  public async createContact(
    input: CreateContactRequest,
  ): Promise<CreateContactResponse> {
    return this.rpcService.createContact(input);
  }

  public async getContactsList(ops: {
    skip: number;
    limit: number;
  }): Promise<GetContactsListResponse> {
    const {skip, limit} = ops;
    return this.rpcService.getContactsList({ skip, limit });
  }
}
