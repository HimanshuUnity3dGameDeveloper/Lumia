import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './user.model';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'yourSecurityKey',
      signOptions: {expiresIn:'7d'}
    })
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
