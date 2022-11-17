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

var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(420, 200, 80, 80);
var ground = Bodies.rectangle(window.innerWidth/2, window.innerHeight/2, 800, 20, {isStatic: true});

Composite.add(engine.world, [boxA,boxB,ground]);

Render.run(render);

var runner = Runner.create();

Runner.run(runner, engine);