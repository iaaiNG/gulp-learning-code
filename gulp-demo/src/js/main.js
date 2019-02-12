var status = 2; // 0没中奖，1中奖未领取，2中奖已领取
var time = 0;

(function () {
  var comp = AdobeAn.getComposition("0816690561856744A93D5E4854DC66E1");
  var lib = comp.getLibrary();
  var ss = comp.getSpriteSheet();
  var images = comp.getImages();
  function IndexApp() {
    var exportRoot

    this.init = function (onComplete) {
      // --- write your JS code here ---
      createjs.MotionGuidePlugin.install();

      var loader = new createjs.LoadQueue(false);
      loader.installPlugin(createjs.Sound);
      loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
      loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
      lib.properties.manifest.push({ src: "yaoyiyao.mp3", id: "yaoyiyao" });
      lib.properties.manifest.push({ src: "jieguo.mp3", id: "jieguo" });
      loader.loadManifest(lib.properties.manifest);

      function handleFileLoad(evt, comp) {
        var images = comp.getImages();
        if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
      }

      function handleComplete(evt, comp) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for (var i = 0; i < ssMetadata.length; i++) {
          ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
        }
        onComplete()
      }
    };

    function playSound(id, loop) {
      return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
    }

    var controller = function (root) {

      var mcIndex = root.mcIndex, mcRule = root.mcRule, mcWin = root.mcWin, mcUnwin = root.mcUnwin
      var mcs = [mcIndex, mcWin, mcRule, mcUnwin]
      mcs.map(mc => {
        mc.on('click', e => {
          e.stopPropagation()
        })
        if (mc !== mcIndex) {
          mc.visible = false
        }
        if (mc != mcRule) {
          mc.on('ruleClick', function (e) {
            mcRule.visible = true
            root.addChild(mcRule)
            mcRule.gotoAndPlay('go')
          })
        }
      })

      function initStatus() {
        if (status != 0) {
          mcWin.visible = true
          mcWin.gotoAndPlay(1)
        } else if (time == 0) {
          mcUnwin.visible = true
          mcUnwin.gotoAndPlay(1)
        }
      }
      setTimeout(() => {
        initStatus()
      }, 100);

      mcIndex.lottery_btn.on('click', e => {
        time--
        if (status == 0) {
          mcUnwin.visible = true
          mcUnwin.gotoAndPlay(1)
        } else if (status == 1) {
          mcWin.visible = true
          mcWin.gotoAndPlay(1)
        }
      })
      var form = mcRule.rule_form
      form.jp_btn.on('click', e => {
        form.gotoAndStop('r_jp')
        var obj = form.jp_info
        switch (parseInt(status)) {
          case 0: {
            obj.visible = false
            break
          }
          case 1: {
            obj.visible = true
            obj.status.text = "未领取"
            break
          }
          case 2: {
            obj.visible = true
            obj.status.text = "已领取"
            break
          }
        }
      })
      form.sm_btn.on('click', e => {
        form.gotoAndStop('r_sm')
      })
      mcRule.btn.on('click', e => {
        mcRule.gotoAndPlay('out')
      })
      mcUnwin.on('result', e => {
        if (time == 0) {
          var obj = e.target
          obj.gotoAndStop(1)
        }
      })
      mcUnwin.again_btn.on('click', e => {
        if (time != 0) {
          mcUnwin.visible = false
          mcIndex.gotoAndPlay(0)
        }
      })
      mcWin.btn.on('click', function (e) {
        if (status == 1) {
          this.gotoAndStop(1)
        }
      })
      mcWin.on('status', e => {
        var obj = e.target
        if (status == 2) {
          obj.gotoAndStop(1)
        }
      })
    };

    /**
     * 重写父类方法
     * @return {lib.game01|game01}
     */
    this.create = function (complete) {
      exportRoot = new lib.index();
      setTimeout(function () {
        controller(exportRoot);
        complete && complete();
      }, 400);
      return exportRoot;
    };
  }

  window.onload = function () {
    var canvas, stage;
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    createjs.Touch.enable(stage);
    createjs.Ticker.setFPS(40);
    createjs.Ticker.addEventListener("tick", stage);
    initLoading(function (view) {
      comp = AdobeAn.getComposition("6A6ABC374E04D048886570FB1C0CF844");
      lib = comp.getLibrary();
      ss = comp.getSpriteSheet();
      images = comp.getImages();
      stage.addChild(view);
      var indApp = new IndexApp();
      indApp.init(
        function () {
          var eRoot = indApp.create(function () {
            stage.removeChild(view);
            stage.addChild(eRoot);
            stage.enableMouseOver();
          });
        },
      );//end init
    });

  };

  function initLoading(complete) {

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);

    function handleFileLoad(evt) {
      if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
    }

    function handleComplete(evt) {
      var queue = evt.target;
      var ssMetadata = lib.ssMetadata;
      for (var i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
      }
      loader.removeAllEventListeners();
      loader = undefined;
      var exportRoot = new lib.loading();
      importScript('./js/index.js', function () {
        complete && complete(exportRoot);
      });

    }
  }

  var importScript = function (url, callback) {
    var oHead = document.head || document.getElementsByTagName("head")[0];
    var imported = document.createElement('script');
    imported.src = url;
    imported.async = true;
    oHead.appendChild(imported);
    callback && (imported.onload = callback);
    imported.onerror = function (oError) {
      throw new URIError("The script " + oError.target.src + " is not accessible.");
    };
  };

})()
