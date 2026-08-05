import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema ({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatarUrl: { type: String, default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' },
    postNumber: {type: Number, default: 0},
    followerNumber: {type: Number, default: 0},
    followingNumber: {type: Number, default: 0},
    profileBio: {type: String, default: null}
});

export interface User extends mongoose.Document {
    fullname: string;
    email: string;
    username: string;
    password: string;
    avatarUrl: string;
    postNumber: number;
    followerNumber: number;
    followingNumber: number;
    profileBio: string;
}