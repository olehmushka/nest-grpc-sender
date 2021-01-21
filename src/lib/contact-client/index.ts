import {GrpcContactClientParams} from './interfaces';
import {rpc} from '../../../codegen/rpc/rpc';
import CreateContactRequest = rpc.ICreateContactRequest;
import CreateContactResponse = rpc.ICreateContactResponse;
import GetContactsListRequest = rpc.IGetContactsListRequest;
import GetContactsListResponse = rpc.IGetContactsListResponse;
import * as grpc from 'grpc';
import * as services from '../../../codegen/rpc/rpc_grpc_pb';
import * as contracts from '../../../codegen/rpc/rpc_pb';

export class GrpcContactClient {
  private client: services.RpcClient;

  constructor(params: GrpcContactClientParams) {
    const {host, port} = params;
    const serverUrl = `${host}:${port}`;

    this.client = new services.RpcClient(serverUrl, grpc.credentials.createInsecure());
  }

  public createContact(
    contact: CreateContactRequest,
  ): Promise<CreateContactResponse> {
    const request = new contracts.CreateContactRequest();
    request.setName(contact.name);
    request.setPhonenumber(contact.phoneNumber);
    request.setUserid(contact.userId);

    return new Promise((resolve, reject) => {
      this.client.createContact(
        request,
        (error: Error | null, response: contracts.CreateContactResponse) => {
          if (error) {
            return reject(error);
          }
          const responseData = response.getData();
          resolve({
            data: {
              id: responseData.getId(),
              name: responseData.getName(),
              phoneNumber: responseData.getPhonenumber(),
              userId: responseData.getUserid(),
            },
            timestamp: response.getTimestamp(),
          });
        },
      );
    });
  }

  public getContactsList(
    params: GetContactsListRequest,
  ): Promise<GetContactsListResponse> {
    const request = new contracts.GetContactsListRequest();
    request.setSkip(params.skip);
    request.setLimit(params.limit);

    return new Promise((resolve, reject) => {
      this.client.getContactsList(
        request,
        (error: Error | null, response: contracts.GetContactsListResponse) => {
          if (error) {
            return reject(error);
          }
          const responseData = response.getDataList();
          resolve({
            data: responseData.map((r) => ({
              id: r.getId(),
              name: r.getName(),
              phoneNumber: r.getPhonenumber(),
              userId: r.getUserid(),
            })),
            timestamp: response.getTimestamp(),
          });
        },
      );
    });
  }
}
