"use strict";var status=0,time=2;!function(){var r=AdobeAn.getComposition("0816690561856744A93D5E4854DC66E1"),c=r.getLibrary(),u=r.getSpriteSheet(),l=r.getImages();function d(){var t;this.init=function(a){createjs.MotionGuidePlugin.install();var e=new createjs.LoadQueue(!1);e.installPlugin(createjs.Sound),e.addEventListener("fileload",function(e){var t,n;t=e,n=r.getImages(),t&&"image"==t.item.type&&(n[t.item.id]=t.result)}),e.addEventListener("complete",function(e){!function(e,t){var n=e.target,o=c.ssMetadata;for(i=0;i<o.length;i++)u[o[i].name]=new createjs.SpriteSheet({images:[n.getResult(o[i].name)],frames:o[i].frames});a()}(e)}),c.properties.manifest.push({src:"yaoyiyao.mp3",id:"yaoyiyao"}),c.properties.manifest.push({src:"jieguo.mp3",id:"jieguo"}),e.loadManifest(c.properties.manifest)};var n=function(t){var n=t.mcIndex,i=t.mcRule,o=t.mcWin,a=t.mcUnwin;[n,o,i,a].map(function(e){e.on("click",function(e){e.stopPropagation()}),e!==n&&(e.visible=!1),e!=i&&e.on("ruleClick",function(e){i.visible=!0,t.addChild(i),i.gotoAndPlay("go")})}),setTimeout(function(){0!=status?(o.visible=!0,o.gotoAndPlay(1)):0==time&&(a.visible=!0,a.gotoAndPlay(1))},100),n.lottery_btn.on("click",function(e){time--,0==status?(a.visible=!0,a.gotoAndPlay(1)):1==status&&(o.visible=!0,o.gotoAndPlay(1))});var s=i.rule_form;s.jp_btn.on("click",function(e){s.gotoAndStop("r_jp");var t=s.jp_info;switch(parseInt(status)){case 0:t.visible=!1;break;case 1:t.visible=!0,t.status.text="未领取";break;case 2:t.visible=!0,t.status.text="已领取"}}),s.sm_btn.on("click",function(e){s.gotoAndStop("r_sm")}),i.btn.on("click",function(e){i.gotoAndPlay("out")}),a.on("result",function(e){0==time&&e.target.gotoAndStop(1)}),a.again_btn.on("click",function(e){0!=time&&(a.visible=!1,n.gotoAndPlay(0))}),o.btn.on("click",function(e){1==status&&this.gotoAndStop(1)}),o.on("status",function(e){var t=e.target;2==status&&t.gotoAndStop(1)})};this.create=function(e){return t=new c.index,setTimeout(function(){n(t),e&&e()},400),t}}window.onload=function(){var e,o,a,s;e=document.getElementById("canvas"),o=new createjs.Stage(e),createjs.Touch.enable(o),createjs.Ticker.setFPS(40),createjs.Ticker.addEventListener("tick",o),a=function(t){r=AdobeAn.getComposition("6A6ABC374E04D048886570FB1C0CF844"),c=r.getLibrary(),u=r.getSpriteSheet(),l=r.getImages(),o.addChild(t);var n=new d;n.init(function(){var e=n.create(function(){o.removeChild(t),o.addChild(e),o.enableMouseOver()})})},(s=new createjs.LoadQueue(!1)).addEventListener("fileload",function(e){e&&"image"==e.item.type&&(l[e.item.id]=e.result)}),s.addEventListener("complete",function(e){var t=e.target,n=c.ssMetadata;for(i=0;i<n.length;i++)u[n[i].name]=new createjs.SpriteSheet({images:[t.getResult(n[i].name)],frames:n[i].frames});s.removeAllEventListeners(),s=void 0;var o=new c.loading;m("./js/index-0858f591ee.js",function(){a&&a(o)})}),s.loadManifest(c.properties.manifest)};var m=function(e,t){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");i.src=e,i.async=!0,n.appendChild(i),t&&(i.onload=t),i.onerror=function(e){throw new URIError("The script "+e.target.src+" is not accessible.")}}}();