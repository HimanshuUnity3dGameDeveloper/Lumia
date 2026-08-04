import { ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { User } from './user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    
    constructor(
        @InjectModel('User') private userModel: Model<User>
    ) {}

    // Create a new user
    async createUser(request: any){
        try{
            const saltRound = 10;
            const hashedPassword = await bcrypt.hash(request.password, saltRound);

            const newUser = new this.userModel({
                fullname: request.fullname,
                email: request.email,
                username: request.username,
                password: hashedPassword,
                avatar: request.avatar
            });

            return await newUser.save();
        }catch (error: any){
            console.error('Error creating user:', error);

            if (error.code === 11000) {
                throw new ConflictException('User with this email or username already exists.');
            }

            throw new InternalServerErrorException('Error creating user: ' + error.message);
        }
        
    }

    // Find a user by identity and password
    async findUserByIdentityAndPassword(identity: string, password: string){
        // Find the user by email or username
        const newUser = await this.userModel.findOne({
            $or:[
                { email: identity },
                { username: identity }
            ]
        });

        if(!newUser){
            throw new UnauthorizedException('User not found');
        }

        // Compare the requested password with stored password through bcrypt..
        const isPasswordValid = await bcrypt.compare(password, newUser.password);
        if(!isPasswordValid){
            throw new UnauthorizedException('Invalid password');
        }

        // Return user data (excluding password for security)
        const { password: _, ...result } = newUser.toObject();
        return result;
    }

    // Find a user by ID
    async getUser(id: string){
        return this.userModel.findById(id).exec();
    }

    async updateAvatar(userId: string, imagePath: string) {
        const updatedUser = await this.userModel.findByIdAndUpdate(
            userId, 
            { avatarUrl: imagePath },
            { returnDocument: 'after' }
        ).exec();

        if(!updatedUser){
            throw new NotFoundException('User not found');
        }

        return updatedUser;
    }
}
