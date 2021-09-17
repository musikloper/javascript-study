import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRegisterDto } from './dto/userRegister.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository
  ) {}

  async signUp(userRegisterDto: UserRegisterDto): Promise<void> {
    const user = this.userRepository.createUser(userRegisterDto)
    console.log('service: ', user) 
    
    return user
  }
  
  async idcheck(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id)
      
    console.log('userService',user)
    
    return user
  }

  async loginUser(id: string, password: string): Promise<Boolean> {
    const user = await this.userRepository.findOne({id:id})
    console.log('loginUser service')
    console.log(id)
    console.log(password)
    console.log(user)
    if(!user) {
      return false
    }
    if(user.password === password) {
      return true
    } else {
      return false
    }
  }
}
