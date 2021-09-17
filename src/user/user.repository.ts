/* eslint-disable prettier/prettier */
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
// import * as bcrypt from 'bcryptjs';
import { User } from './entities/user.entity';
import { UserRegisterDto } from './dto/userRegister.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(userRegisterDto: UserRegisterDto): Promise<void> {
    const { id, password, name, address, address2, zipcode, register_date, type } = userRegisterDto;

    // const salt = await bcrypt.genSalt();
    // const hashedPassword = await bcrypt.hash(password,salt);
    const user = this.create({ id, password, name, address, address2, zipcode, register_date, type });

    try {
      await this.save(user);
    } catch (error) {
      console.log(error)
      // if(error.code === '23505') {
      //   throw new ConflictException('username 이미 있음')
      // } else {
      //   throw new InternalServerErrorException();
      // }
    }
  }

  

  
}
