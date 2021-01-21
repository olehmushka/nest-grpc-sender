import {Controller, Get, Post, HttpCode, Body, Param} from '@nestjs/common';
import {rpc} from '../../codegen/rpc/rpc';
import {UserService} from './user.service';
import CreateUserRequest = rpc.CreateUserRequest;
import CreateUserResponse = rpc.ICreateUserResponse;
import GetUserResponse = rpc.IGetUserResponse;

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  public async createContact(
    @Body() rawRequest: CreateUserRequest,
  ): Promise<CreateUserResponse> {
    return this.userService.createUser(rawRequest);
  }

  @Get(':id')
  public async getContactsList(
    @Param('id') id,
  ): Promise<GetUserResponse> {
    return this.userService.getUser(id);
  }
}
