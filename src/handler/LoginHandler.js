import { BaseHandler } from "../socket/BaseHandler";
import {loginController} from "../logic/LoginController";

export class LoginHandler extends BaseHandler{

    onOpen(handlerContext){
      loginController.view(handlerContext);
      super.onOpen(handlerContext);
    }
    
}