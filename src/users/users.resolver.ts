import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './models/User';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { DeleteUserInput } from './dto/input/delete-user.input';

@Resolver(() => User)
export class UsersResolver {

  constructor(private readonly userService: UsersService) { }

  @Query(() => User, { name: 'getUserById', nullable: true })
  getUser(@Args() getUserArgs: GetUserArgs): User {

    return this.userService.getUser(getUserArgs);

  }

  @Query(() => [User], { name: 'getAllUsers', nullable: 'items' })
  getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {

    return this.userService.getUsers(getUsersArgs);

  }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput): User {

    return this.userService.createUser(createUserData);

  }

  @Mutation(() => User)
  updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {

    return this.userService.updateUser(updateUserData);

  }

  @Mutation(() => User)
  deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User {

    return this.userService.deleteUser(deleteUserData);

  }
}
