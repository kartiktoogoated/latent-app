import { Router } from "express";
import userRouter from "./User"

const router: Router = Router();

router.use("/user",userRouter);

export default router;