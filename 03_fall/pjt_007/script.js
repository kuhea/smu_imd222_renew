var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
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

var boxA = Bodies.rectangle(500,300, 80, 80,{isStatic:true});
var boxB = Bodies.rectangle(500,400, 80, 80);
var boxC = Bodies.rectangle(500,500, 80, 80);
var boxD = Bodies.circle(30, 75, 3);

var AtoB = Constraint.create({
    bodyA: boxA,
    bodyB: boxB,
})

var BtoC = Constraint.create({
    bodyA: boxB,
    bodyB: boxC,
})


Composite.add(engine.world, [ground1,ground2,boxA,boxB,boxC,AtoB,BtoC,boxD]);

Render.run(render);

var runner = Runner.create();

Runner.run(runner, engine);