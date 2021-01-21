import {GrpcUserClientParams} from './interfaces';
import {rpc} from '../../../codegen/rpc/rpc';
import CreateUserRequest = rpc.ICreateUserRequest;
import CreateUserResponse = rpc.ICreateUserResponse;
import GetUserRequest = rpc.IGetUserRequest;
import GetUserResponse = rpc.IGetUserResponse;
import * as grpc from 'grpc';
import * as services from '../../../codegen/rpc/rpc_grpc_pb';
import * as contracts from '../../../codegen/rpc/rpc_pb';

export class GrpcUserClient {
  private client: services.RpcClient;

  constructor(params: GrpcUserClientParams) {
    const {host, port} = params;
    const serverUrl = `${host}:${port}`;

    this.client = new services.RpcClient(serverUrl, grpc.credentials.createInsecure());
  }

  public createUser(
    contact: CreateUserRequest,
  ): Promise<CreateUserResponse> {
    const request = new contracts.CreateUserRequest();
    request.setFirstname(contact.firstName);
    request.setLastname(contact.lastName);
    request.setBirthday(contact.birthday);
    request.setPhonenumber(contact.phoneNumber);
    request.setEmail(contact.email);

    return new Promise((resolve, reject) => {
      this.client.createUser(
        request,
        (error: Error | null, response: contracts.CreateUserResponse) => {
          if (error) {
            return reject(error);
          }
          const responseData = response.getData();
          resolve({
            data: {
              id: responseData.getId(),
              firstName: responseData.getFirstname(),
              lastName: responseData.getLastname(),
              phoneNumber: responseData.getPhonenumber(),
              birthday: responseData.getBirthday(),
              email: responseData.getEmail(),
            },
            timestamp: response.getTimestamp(),
          });
        },
      );
    });
  }

  public getUser(
    params: GetUserRequest,
  ): Promise<GetUserResponse> {
    const request = new contracts.GetUserRequest();
    request.setId(params.id);

    return new Promise((resolve, reject) => {
      this.client.getUser(
        request,
        (error: Error | null, response: contracts.GetUserResponse) => {
          if (error) {
            return reject(error);
          }
          const responseData = response.getData();
          resolve({
            data: {
              id: responseData.getId(),
              firstName: responseData.getFirstname(),
              lastName: responseData.getLastname(),
              phoneNumber: responseData.getPhonenumber(),
              birthday: responseData.getBirthday(),
              email: responseData.getEmail(),
            },
            timestamp: response.getTimestamp(),
          });
        },
      );
    });
  }
}
