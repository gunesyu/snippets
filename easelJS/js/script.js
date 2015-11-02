function init(){
	var canvas = document.getElementById("easel");
	var stage = new createjs.Stage(canvas);
	var centerX = canvas.width / 2,
		centerY = canvas.height / 2;

	// a rectangle
	var shape = new createjs.Shape();
	shape.graphics.beginFill("rgb(216,216,255)");
	shape.graphics.drawRect(0,0,100,100);
	/* -----------   same process with chaining ---- a lot simpler and professional  ----------------  */
	//shape.graphics.beginFill("rgb(162,216,255)").drawRect(0,0,100,100);
	shape.x = centerX;
	shape.y = 50;	// beginning of the shape is at the center of the stage
	shape.regX = 100/2;
	shape.regY = 100/2;  // change the registration point so center of the shape is at the center of the stage
	stage.addChild(shape);

	// a text
	var sentence = new createjs.Text();
	sentence.text = "Something, something, something, dark side..."
	sentence.font = "bold 30px Times";
	sentence.color = "dark";
	// .text, .font, .color can also set at construction i.e. .Text(text,font,color)
	// this form is more useful when you change properties as a result of scene interaction
	sentence.x = 75;
	sentence.y = 125;
	sentence.textAlign = "center";
	sentence.lineWidth = 150;
	sentence.lineHeight = 75;
	stage.addChild(sentence);

	// working with prepared graphic files (bitmaps)
	var ship = new createjs.Bitmap("images/ship.svg");
	ship.x = centerX;
	ship.y = centerY;
	ship.regX = 50;
	ship.regY = 50;
	stage.addChild(ship);

	// working with spritesheets
	var ss = new createjs.SpriteSheet({
		animations : { fly : [0, 15], explode : [16, 20, "fly"] },
		images : ["images/shipsprites.png"],
		frames : { regX : 50, regY : 50, height : 100, width : 100 }
	});
	var ship2 = new createjs.BitmapAnimation(ss);
	ship2.gotoAndPlay("fly");
	stage.addChild(ship2);

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
		shape.rotation += 5;
		shape.skewX += 4;

		// tracking mouse movement with a friction
		var difX = stage.mouseX - ship2.x;
		var difY = stage.mouseY - ship2.y;
		// using random function to shaking effect
		ship2.x += difX/5 + ( Math.random() - .5 )*3;
		ship2.y += difY/5 + ( Math.random() - .5 )*3;

		// trigonometry for oscillating effect, circular motion and orientation
		ship.x = centerX + ( Math.sin(createjs.Ticker.getTicks() / 20)*200 );
		// getTicks is increasing number, 20 controls speed but inversely proportional, 200 controls range of motion
		// add cosine for circular motion
		ship.y = centerY + ( Math.cos(createjs.Ticker.getTicks() / 20 )*200);
		// arctangent to orient to the mouse position
		ship.rotation = Math.atan2(stage.mouseX - ship.x, stage.mouseY - ship.y)*180/Math.PI;

		// mouse events
		ship2.onClick = function(e){
			ship2.gotoAndPlay("explode");
		}

		stage.update();
	});

	
}