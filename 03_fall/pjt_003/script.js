var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

var engine = Engine.create();

var render = Render.create({
    element: document.body,
    engine: engine
});
render.canvas.width = window.innerWidth;
render.canvas.height = window.innerHeight;

var ground1 = Bodies.rectangle(window.innerWidth/2, window.innerHeight/1.1, 800, 20, {isStatic: true});
var ground2 = Bodies.rectangle(window.innerWidth/1.1, window.innerHeight/1.5, 800, 20, {isStatic: true});

let mouseX = 0
let mouseY = 0
window.addEventListener("mousemove", (e)=> {
    mouseX = e.clientX
    mouseY = e.clientY
})

function makeBox(){
    let boxA=Bodies.rectangle(mouseX, mouseY,40,40, {friction:0, restitution:0.8})
    let boxB=Bodies.circle(200, 400, 40, {friction:1, restitution:0.2})
    //restitution 0은 탄력이 없고, 1은 탄력이 100임.
    Composite.add(engine.world,[boxA, boxB])
}
 
setInterval(makeBox, 500)
//박스 생성 속도

Composite.add(engine.world, [ground1,ground2]);

Render.run(render);

var runner = Runner.create();

Runner.run(runner, engine);