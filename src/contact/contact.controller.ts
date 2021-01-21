import {Controller, Get, Post, HttpCode, Body, Query} from '@nestjs/common';
import {rpc} from '../../codegen/rpc/rpc';
import {ContactService} from './contact.service';
import CreateContactRequest = rpc.CreateContactRequest;
import CreateContactResponse = rpc.ICreateContactResponse;
import GetContactsListResponse = rpc.IGetContactsListResponse;

@Controller('/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @HttpCode(201)
  public async createContact(
    @Body() rawRequest: CreateContactRequest,
  ): Promise<CreateContactResponse> {
    return this.contactService.createContact(rawRequest);
  }

  @Get()
  public async getContactsList(
    @Query('skip') skip,
    @Query('limit') limit,
  ): Promise<GetContactsListResponse> {
    return this.contactService.getContactsList({skip, limit});
  }
}
