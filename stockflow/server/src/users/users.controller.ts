import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../common/guards/roles.guard.js';
import { Roles } from '../common/decorators/roles.decorator.js';
import { GetUser } from '../common/decorators/get-user.decorator.js';
import { UsersService } from './users.service.js';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('me')
  getProfile(@GetUser() user: any) {
    return user;
  }

  @Roles('ADMIN', 'MANAGER')
  @Get()
  getAll() {
    return this.usersService.getAll();
  }
}
