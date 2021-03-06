import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listTagController = new ListTagsController()
const listUserController = new ListUsersController()

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated , ensureAdmin ,createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAuthenticated ,createComplimentController.handle )
router.get("/users/compliments/send", ensureAuthenticated ,listUserSendComplimentsController.handle )
router.get("/users/compliments/receiver", ensureAuthenticated ,listUserReceiverComplimentsController.handle)
router.get("/tags" ,ensureAuthenticated, ensureAdmin , listTagController.handle )
router.get("/users",ensureAuthenticated, ensureAdmin , listUserController.handle )
export { router };
