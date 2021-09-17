import { Body, Controller, Get, Param, Post, Query, Redirect, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { UserRegisterDto } from './user/dto/userRegister.dto';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(private userService: UserService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  @Render('index')
  root() {
    return { message: '자 이제 시작이야' };
  }

  @Get('/index')
  @Render('index')
  goIndex() {
    return { message: 'index 시작' };
  }

  @Get('/register')
  @Render('register')
  register() {
    return { msg: '회원가입 시작이야'};
  }

  @Get('/login')
  @Render('login')
  loginpage() {
    return { msg: '로그인 페이지'}
  }


  @Post('/userregister')
  @Render('login')
  UserRegister(@Body() userRegisterDto: UserRegisterDto): Promise<void> {
    console.log('userRegisterDto')
    // let currentDate = 
    userRegisterDto.register_date = new Date()
    userRegisterDto.type = 1
    console.log(userRegisterDto)
    return this.userService.signUp(userRegisterDto)

  }

  // @Get('/idcheck')
  // @Render('idcheck')
  // idCheck(@Query() id) {
  //   console.log('idcheck컨트롤러')
  //   console.log(id)
  //   const user = async () => {
  //     await this.userService.idcheck(id)
  //   } 
  //   console.log('user ====', user)
  //   return user
  // }

  @Post('/idcheck')
  idcheckbtn(@Body() id) {
    console.log('Post idcheck')
    console.log(id)
    const data = this.userService.idcheck(id)
    console.log('컨트롤러 user : ',data)
    return data
    
  }

  @Post('/userLogin')
  @Redirect()
  async userLogin(@Body() body) {
    console.log('userLogin 컨트롤러')
    console.log(body)
    const id = body.id
    const pwd = body.password
    console.log(id)
    console.log(pwd)
    const logincheck = await this.userService.loginUser(id, pwd)
    console.log('logincheck : ', logincheck)
    if (logincheck) {
      return {url: '/loginsuccess'}
    } else {
      return {url: '/login'}

    }
  }

  @Get('/loginsuccess')
  @Render('loginsuccess')
  loginsuccess() {
    return {msg: '로그인 성공'}
  }
}
