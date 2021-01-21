import {Injectable} from '@nestjs/common';
import {rpc} from '../../codegen/rpc/rpc';
import {GrpcUserClient} from '../lib/user-client';
import CreateUserRequest = rpc.ICreateUserRequest;
import CreateUserResponse = rpc.ICreateUserResponse;
import GetUserResponse = rpc.IGetUserResponse;

@Injectable()
export class UserService {
  private rpcService: GrpcUserClient;

  constructor() {
    this.rpcService = new GrpcUserClient({
      host: '0.0.0.0',
      port: 3001,
    });
  }

  public async createUser(
    input: CreateUserRequest,
  ): Promise<CreateUserResponse> {
    return this.rpcService.createUser(input);
  }

  public async getUser(id: string): Promise<GetUserResponse> {
    return this.rpcService.getUser({id});
  }
}
