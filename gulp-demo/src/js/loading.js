(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"loading_atlas_", frames: [[948,886,530,124],[1211,1012,206,236],[1645,508,297,298],[948,665,387,198],[1480,886,120,98],[1645,808,262,214],[1992,0,50,51],[1886,426,112,77],[0,0,717,1260],[1385,0,499,506],[719,1012,490,113],[1385,508,258,376],[719,665,227,344],[1419,1024,309,94],[1419,1120,320,82],[1730,1024,215,57],[1992,96,12,12],[1992,53,44,41],[1909,808,107,136],[1944,505,72,79],[719,0,664,663],[1944,586,74,69],[1886,0,104,424]]}
];


// symbols:



(lib.圆01 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.圆02 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.圆03 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.标题 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.星 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.猪 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.活动规则_btn = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.元宝 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.di = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.di02 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.摇一摇 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.手 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.手02 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.字 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.云01 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.云02 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.点 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.福字 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.福字02 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.红包 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.菱形 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.铜钱02 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.鞭炮 = function() {
	this.initialize(ss["loading_atlas_"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.鞭炮01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.福字();
	this.instance.parent = this;
	this.instance.setTransform(30.95,56.2);

	this.instance_1 = new lib.鞭炮();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.鞭炮01, new cjs.Rectangle(0,0,104,424), null);


(lib.菱形_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.菱形();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,664,663);


(lib.福字02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.福字02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,136);


(lib.云02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.云02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,215,57);


(lib.云01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.云01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,82);


(lib.字_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.点();
	this.instance.parent = this;
	this.instance.setTransform(227.5,80.5);

	this.instance_1 = new lib.点();
	this.instance_1.parent = this;
	this.instance_1.setTransform(227.5,80.5);

	this.instance_2 = new lib.点();
	this.instance_2.parent = this;
	this.instance_2.setTransform(227.5,80.5);

	this.instance_3 = new lib.点();
	this.instance_3.parent = this;
	this.instance_3.setTransform(227.5,80.5);

	this.instance_4 = new lib.点();
	this.instance_4.parent = this;
	this.instance_4.setTransform(227.5,80.5);

	this.instance_5 = new lib.点();
	this.instance_5.parent = this;
	this.instance_5.setTransform(227.5,80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:227.5}}]}).to({state:[{t:this.instance_1,p:{x:227.5}},{t:this.instance,p:{x:242}}]},3).to({state:[{t:this.instance_2,p:{x:227.5}},{t:this.instance_1,p:{x:242}},{t:this.instance,p:{x:257}}]},3).to({state:[{t:this.instance_3,p:{x:227.5}},{t:this.instance_2,p:{x:242}},{t:this.instance_1,p:{x:257}},{t:this.instance,p:{x:271.75}}]},3).to({state:[{t:this.instance_4,p:{x:227.5}},{t:this.instance_3,p:{x:242}},{t:this.instance_2,p:{x:257}},{t:this.instance_1,p:{x:271.75}},{t:this.instance,p:{x:286.25}}]},3).to({state:[{t:this.instance_5},{t:this.instance_4,p:{x:242}},{t:this.instance_3,p:{x:257}},{t:this.instance_2,p:{x:271.75}},{t:this.instance_1,p:{x:286.25}},{t:this.instance,p:{x:300.25}}]},3).wait(3));

	// 图层 1
	this.instance_6 = new lib.字();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,312.3,94);


(lib.手02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.手02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,227,344);


(lib.手_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.手();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,258,376);


(lib.heidi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.898)").s().p("Eg4ABicMAAAjE3MBwBAAAMAAADE3g");
	this.shape.setTransform(358.5,630);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,717,1260);


(lib.摇一摇_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.摇一摇();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,490,113);


(lib.元宝_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元宝();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,77);


(lib.活动规则_btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkqEhIAApBIJVAAIAAJBg");
	this.shape.setTransform(25.475,24.825);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// 图层 1
	this.instance = new lib.活动规则_btn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-1.25,y:-1.25},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-4.1,59.8,57.9);


(lib.猪_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.猪();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,262,214);


(lib.星_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.星();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,98);


(lib.标题_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.标题();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.标题_1, new cjs.Rectangle(0,0,387,198), null);


(lib.圆03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.圆03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297,298);


(lib.圆02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.圆02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.圆02_1, new cjs.Rectangle(0,0,206,236), null);


(lib.圆01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.圆01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,530,124);


(lib.鞭炮02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.活动规则_btn_1();
	this.instance.parent = this;
	this.instance.setTransform(53.15,76.2,1,1,0,0,0,25,25.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.活动规则_btn_1(), 3);

	this.instance_1 = new lib.鞭炮();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.鞭炮02, new cjs.Rectangle(0,0,104,424), null);


(lib.鞭炮01_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.鞭炮01();
	this.instance.parent = this;
	this.instance.setTransform(50.9,7.2,1,1,1.5004,0,0,50.9,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.4838},24).to({rotation:1.5004},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-1.4,125.7,426.59999999999997);


(lib.福字02_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.福字02_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(53.5,68,1,1,0,0,0,53.5,68);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:73.1},14).to({y:68},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,141.1);


(lib.云_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgsrA38MAAAhv3MBZXAAAMAAABv3g");
	mask.setTransform(391.05,204.225);

	// 图层 2
	this.instance = new lib.云01_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-69.2,133.45,1,1,0,0,0,160,41);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({x:839.4},774).wait(1));

	// 图层 1
	this.instance_1 = new lib.云02_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.65,28.5,1,1,0,0,0,107.5,28.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:999.75},599).wait(225));

	// 图层 4
	this.instance_2 = new lib.菱形_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(392.5,216.65,1,1,0,0,0,332,331.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(824));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(105.1,-114.8,572,663);


(lib.手02_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Av1P1QmjmjAApSQAApRGjmkQGkmjJRAAQJSAAGjGjQGkGkAAJRQAAJSmkGjQmjGkpSAAQpRAAmkmkg");
	mask.setTransform(122.7983,127.3998);

	// 图层 1
	this.instance = new lib.手02_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,256,1,1,-3.0027,0,0,62.4,256);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:62.5,rotation:5.7255,x:62.5},9).to({regX:62.4,rotation:-3.0027,x:62.4},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-8.3,265,279);


(lib.手_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgADAhOIwXwbIwYwbQgCgGQXwvQQTwtABgDQACADQbQgQQhQjgCAAQgDgBwZQrQwYQrgCAAIAAAAgEgAJghNIAAAAIAAAAg");
	mask.setTransform(130.3999,153.125);

	// 图层 1
	this.instance = new lib.手_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(59.1,310.3,1,1,-2.9861,0,0,59.1,310.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.9698,x:59.15},7).to({rotation:-2.9861,x:59.1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-9.9,305.2,375.59999999999997);


(lib.juan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.红包();
	this.instance.parent = this;
	this.instance.setTransform(457.5,337.25,0.7468,0.7468,0,25.7243,-154.2757);

	this.instance_1 = new lib.红包();
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.5,96.55);

	this.instance_2 = new lib.铜钱02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(208.8,383.55,0.5217,0.5217);

	this.instance_3 = new lib.铜钱02();
	this.instance_3.parent = this;
	this.instance_3.setTransform(84.7,276.5,0.7391,0.7391);

	this.instance_4 = new lib.铜钱02();
	this.instance_4.parent = this;
	this.instance_4.setTransform(405.15,118.55,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(30));

	// 图层 4
	this.instance_5 = new lib.手02_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(243.5,298.1,1,1,0,0,0,113.5,172);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30));

	// 图层 2
	this.instance_6 = new lib.圆03_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(252.45,253.3,1,1,0,0,0,148.5,149);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30));

	// 图层 3
	this.instance_7 = new lib.圆03_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(252.45,253.3,1,1,0,0,0,148.5,149);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.35,scaleY:1.35,x:252.4,alpha:0.3008},19,cjs.Ease.get(1)).wait(11));

	// 图层 1
	this.instance_8 = new lib.圆03_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(252.45,253.3,1,1,0,0,0,148.5,149);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({scaleX:1.7,scaleY:1.7,alpha:0.1016},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,504.9,506.6);


(lib.摇一摇_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.摇一摇_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(254.3,417.7,1,1,0,0,0,245,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 3
	this.instance_1 = new lib.手_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(248.65,280.25,1,1,0,0,0,129,188);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 1
	this.instance_2 = new lib.di02();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.摇一摇_mc, new cjs.Rectangle(0,0,499.3,506), null);


(lib.元宝_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元宝_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(56,38.5,1,1,0,0,0,56,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:33.4},14).to({y:38.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.1,112,82.1);


(lib.猪_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.猪_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(131,107,1,1,0,0,0,131,107);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:135.5,y:111.5},17).to({x:131,y:107},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,266.5,218.5);


(lib.星_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.星_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(55.3,50.8,0.109,0.109,0,0,0,55.5,51);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:55.3,regY:50.8,scaleX:1,scaleY:1,alpha:1},14).to({scaleX:1.0876,scaleY:1.0876,alpha:0,loop:false},10).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-4.4,130.5,106.60000000000001);


(lib.鞭炮02_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 活动规则
	this.instance = new lib.鞭炮02();
	this.instance.parent = this;
	this.instance.setTransform(53.2,1.4,1,1,1.5004,0,0,53.2,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0001,scaleY:1.0001,rotation:-1.4986,x:53.25},24).to({scaleX:1,scaleY:1,rotation:1.5004,x:53.2},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-1.4,126.1,426.7);


(lib.底部装饰_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 12
	this.instance = new lib.星_mc();
	this.instance.parent = this;
	this.instance.setTransform(290.1,-592.65,1,1,0,0,0,60,49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg40AZIMAAAgyPMBxpAAAMAAAAyPg");
	mask.setTransform(286.625,75.05);

	// 图层 4
	this.instance_1 = new lib.元宝_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.05,219.1,1,1,0,0,0,56,38.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 2
	this.instance_2 = new lib.元宝_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(520.85,220.1,1,1,0,0,0,56,38.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层 5
	this.instance_3 = new lib.福字02_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(88.65,188.35,1,1,-23.1729,0,0,53.5,68);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 图层 1
	this.instance_4 = new lib.福字02_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(482.3,189.45,1,1,0,0,0,53.5,68);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// 图层 6
	this.instance_5 = new lib.猪_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(114.95,192.6,1,1,0,0,180,131,107);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// 图层 10
	this.instance_6 = new lib.猪_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(453.75,193,1,1,0,0,0,131,107);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// 图层 3
	this.instance_7 = new lib.圆01_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(283.8,173.95,1,1,0,0,0,265,62);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// 图层 8
	this.instance_8 = new lib.圆02_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(470,118,1,1,0,0,0,103,118);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// 图层 9
	this.instance_9 = new lib.圆02_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(103.2,118,1,1,0,0,180,103,118);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.底部装饰_mc, new cjs.Rectangle(-16,-596.4,600.8,832.3), null);


(lib.mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.字_1();
	this.instance.parent = this;
	this.instance.setTransform(358.5,856.25,1,1,0,0,0,154.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.juan();
	this.instance_1.parent = this;
	this.instance_1.setTransform(358.55,550,1,1,0,0,0,252.5,253.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 1
	this.instance_2 = new lib.heidi("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(358.5,630,1,1,0,0,0,358.5,630);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc, new cjs.Rectangle(0,0,717,1260), null);


(lib._01_首页_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 鞭炮02
	this.instance = new lib.鞭炮02_mc();
	this.instance.parent = this;
	this.instance.setTransform(621.9,315.45,1,1,0,0,0,52,212);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 鞭炮01
	this.instance_1 = new lib.鞭炮01_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96.95,315.45,1,1,0,0,0,52,212);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 标题
	this.instance_2 = new lib.标题_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(356.65,283.25,1,1,0,0,0,193.5,99);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 摇一摇
	this.instance_3 = new lib.摇一摇_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(355.2,668.15,1,1,0,0,0,249.5,253);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 图层 4
	this.instance_4 = new lib.底部装饰_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(362.9,938.6,1,1,0,0,0,292.4,150.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// 云
	this.instance_5 = new lib.云_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(264.6,531.35,1,1,0,0,0,298.7,87.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// 图层 1
	this.instance_6 = new lib.di();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib._01_首页_mc, new cjs.Rectangle(-152.2,0,873,1260), null);


// stage content:
(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.mc();
	this.instance.parent = this;
	this.instance.setTransform(358.5,630,1,1,0,0,0,358.5,630);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.instance_1 = new lib._01_首页_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(358.5,630,1,1,0,0,0,358.5,630);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(206.3,630,514.5,630);
// library properties:
lib.properties = {
	id: '0816690561856744A93D5E4854DC66E1',
	width: 717,
	height: 1260,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"./img/loading_atlas_.png", id:"loading_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0816690561856744A93D5E4854DC66E1'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;