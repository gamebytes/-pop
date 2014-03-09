(function() {
  'use strict';

  function Menu() {

    this.startTxt = null;
    this.logo = null;
    this.music = null;
    this.bg = null;
    this.nextAnime = false;
    this.soundCtrl = 0;
    this.tapToStart = null;
    this.help = null;
    this.musicOn =null;
    this.musicOff = null;
  }

  Menu.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      
      this.bg = this.add.sprite(0,0,'background');
      this.bg.fixedToCamera = true;      
      this.logo = this.add.sprite(x,-100,'logoBall');
      this.logo.width = 164;
      this.logo.height = 164;
      //this.logo.fixedToCamera = true;
      this.logo.anchor.setTo(0.5, 0.5);
      //y = y + this.logo.height + 5;
      //this.startTxt = this.add.bitmapText(x, y, 'TAP TO START', {font: '12px minecraftia', align: 'center'});
      //this.startTxt = this.game.add.text(x, y, 'text here', { font: '20px pecita', fill: '#fff', align: 'center' });
      this.startTxt = this.game.add.text(x, y-100, '!PoP', { font: '64px pecitamedium', fill: '#fff', align: 'center' }); 

      this.startTxt.anchor.setTo(0.5, 0.5);

      
      
      
      this.tapToStart = this.add.sprite(x,370,'tapToStart');
      this.tapToStart.anchor.setTo(0.5, 0.5);
      this.tapToStart.inputEnabled = true;
      this.tapToStart.input.useHandCursor = true;      
      this.tapToStart.events.onInputDown.add(this.onDown,this);
      
      this.help = this.add.sprite(240,440,'help');
      this.help.anchor.setTo(0.5, 0.5);
      this.help.inputEnabled = true;
      this.help.input.useHandCursor = true;      
      //this.help.events.onInputDown.add(this.onDown,this);      
      
      
      this.music = this.add.audio('someChords',1,true);
      this.music.play('',0,1,true);   
      this.music.pause();
      
      this.musicOff = this.add.sprite(80,440,'musicOff');
      this.musicOff.anchor.setTo(0.5, 0.5);
      this.musicOff.inputEnabled = true;
      this.musicOff.input.useHandCursor = true;
      this.musicOff.events.onInputDown.add(this.pause,this); 
      
      
      
      
    },

    update: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;      
      var soundy = y+150;
      var logoTar = y - 100;
      this.logo.y += (logoTar - this.logo.y)*0.1;
      //this.musicCtrl.y += (soundy - this.musicCtrl.y)*0.1;
      if(this.nextAnime){
        this.logo.width += (800 - this.logo.width)*0.1;
        this.logo.height += (800 - this.logo.height)*0.1;
        if(this.logo.width >= 600){
          
          this.game.state.start('game');
          this.nextAnime = false;
        }        
      }
        

    },
    pause: function () {
      if(this.soundCtrl == 0){
        this.music.pause()
        this.soundCtrl = 1;
      }
      else{
        this.music.resume();
        this.soundCtrl = 0;
      }
      
    },
    onDown: function () {
      this.nextAnime = true;
    }
  };

  window['tapjuggler'] = window['tapjuggler'] || {};
  window['tapjuggler'].Menu = Menu;

}());
