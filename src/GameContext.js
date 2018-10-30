
class GameContext{

    constructor(){
        this.gameArea=document.getElementById("game");
        
    }
    clear(){
        this.gameArea.innerHTML="";
    }
    appenderMsg(msg){
        const p=document.createElement("p");
        p.innerHTML=msg;
        this.gameArea.appendChild(p);
    }
    appenderElement(e){
        this.gameArea.appendChild(e);
    }
    canvas(){
        ReactDOM.render((
            <canvas id="canvas" width="600" height="600">抱歉，您的浏览器不支持canvas元素</canvas>
        ),gameContext.gameArea)
        global.canvas=document.getElementById(canvas);
    }
}
export const gameContext =new GameContext();