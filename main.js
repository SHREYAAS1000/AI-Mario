function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")  // used to put canvas in html]
	video = createCapture(VIDEO)
	video.size(800,300);
	video.parent("gameconsole");
	instializeInSetup(mario);


	poseNet = ml5.poseNet(video, modelloaded);
	poseNet.on("pose",gotposes)
}

function draw() {
	game()
}


function modelloaded ()
{
console.log("Model is loaded")
}

function gotposes(results)
{
	if(results.length > 0)
	{
		console.log(results)
		noseX = results[0].pose.nose.x
		noseY = results[0].pose.nose.y
	}
}








