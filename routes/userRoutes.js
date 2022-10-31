import express from 'express';
import controllers from '../controllers/userControllers.js';

const {getAllUsers, getaHero, CreateUser, updateHero, retireaUser} = controllers();

const userRouter = express.Router();


userRouter.route('/').get(getAllUsers).post(CreateUser);
userRouter.route('/:id').get(getaHero).put(updateHero).delete(retireaUser)

export default userRouter;
