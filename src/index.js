import { ClientBootStrap } from "./socket/ClientBootStrap";
import { PacketCodec } from "./handler/PacketCodec";
import { LoginHandler } from "./handler/LoginHandler";
import { ConsoleHandler } from "./handler/ConsoleHandler";


export class GameClient {

    constructor(url) {
        this.url = url;
    }
    connect() {
        let bootstrap = new ClientBootStrap().handler(function (handlerChain) {
            handlerChain.addLast(new PacketCodec());
            handlerChain.addLast(new ConsoleHandler());
            handlerChain.addLast(new LoginHandler());
        });
            return bootstrap.bind(this.url);

    }
}
export let channel =new GameClient("ws://localhost:4010/ws").connect();

