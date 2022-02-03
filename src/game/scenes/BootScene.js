import { Scene } from 'phaser'
import sky from '@/game/assets/sky.png'
//import bomb from '@/game/assets/bomb.png'
import ground from '@/game/assets/platform.png'
//import star from '@/game/assets/star.png'
import dude from '@/game/assets/dude.png'
import thudMp3 from '@/game/assets/thud.mp3'
import thudOgg from '@/game/assets/thud.ogg'


export default class BootScene extends Scene {

  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', sky)
    this.load.image('bomb', "https://ouch-cdn2.icons8.com/nYy5UCyTINyxxLoOtzdE8Qp-BpvDb01D53HLllP-Xr0/rs:fit:256:257/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzcz/L2QwOTNhMTNiLTVl/MGItNDIwMy1hNzhh/LWUyYjc0Y2NjMWNk/NC5zdmc.png")
    this.load.audio('thud', [thudMp3, thudOgg])
    this.load.image('ground', ground);
    this.load.image('star', "https://ouch-cdn2.icons8.com/9Xpx7OnizaqoS8ZL4_x-0_xCxKAFa59aM7mO1i8lo9w/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDQ4/L2JlY2EzNzQyLWU3/NGItNDk4MS1hN2Iw/LTQxZDg1N2IyZTkz/ZC5zdmc.png");
    this.load.spritesheet('dude', dude, { frameWidth: 32, frameHeight: 48 });
  }

  create () {
    this.scene.start('PlayScene')
  }
}
