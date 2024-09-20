import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRpository } from './users.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRpository],
})
export class UsersModule {}
