//TAKE SCREEN AREA MEASURE FOR RESPONSIVE OBJECTS
let universeWidth = window.innerWidth / 2;
let universeHeight = window.innerHeight / 2;

//RESPONSIVE FEATURES FOR SUN
let sunWidth = sunHeight = universeWidth / 2 ;


//SUN OBJECT
class Sunstar{
	constructor(c,w,h){
		this.c = c;
		this.w = w;
		this.h = h;
		this.sun = document.getElementById('sun')
	}
	
	//SUN POSITION BY UNIVERSE
	position(){

		this.sun.style.marginLeft = universeWidth  - this.w / 2 + "px" 
		this.sun.style.marginTop = universeHeight  - this.h / 2 + "px";
	}
	
	//DRAW  AND RUN POSITION FOR SUN
	draw(){

		var i = 0.1;
			
		this.position();
		this.sun.style.width = this.w + 'px';
		this.sun.style.height = this.h + 'px';
		this.sun.style.borderRadius = 50 + "%";
		//this.sun.style.backgroundColor = this.c;
		
	}
}

class Planet extends Sunstar{
	constructor(c,w,h,s,t,l){
		super(c,w,h)
		this.s = s;
		this.t = t;
		this.l = l;
		this.planet = document.getElementById('planet');
	}

	draw(){
		
		this.planet.style.width = this.w + 'px'
		this.planet.style.height = this.h + 'px';
		//this.planet.style.backgroundColor = this.c;
		this.planet.style.borderRadius = 50 + "%";

	}

	position(){

		this.l += this.s;
		this.planet.style.marginTop = this.t + "%";
		this.planet.style.marginLeft = this.l + "px" 

		if(this.l > window.innerWidth - this.w * 2.5){
			this.s = -1 * this.s 
			document.getElementById("sun").style.zIndex = "2";
			document.getElementById("planet").style.zIndex = "1";
		}
		else if(this.l < 100 ){
			this.s = this.s * -1
			document.getElementById("sun").style.zIndex = "1";
			document.getElementById("planet").style.zIndex = "2";
		}
		
	}

}

//DRAW SUN
let ySun = new Sunstar('yellow',sunWidth,sunHeight);
ySun.draw();

//DRAW PLANET
let yPlanet = new Planet('',ySun.w/4,ySun.h/4,5,10,200);
yPlanet.draw();



function engine(){
	requestAnimationFrame(engine);
	yPlanet.position();
}

engine()