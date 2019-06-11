const Zdog = require('zdog');
const TweenLite = require('gsap');

export default class ZdogCanvas {
  constructor(el) {
    console.log(el)
    this.illo = new Zdog.Illustration({
      element: '.' + el.className,
      zoom: 80
    });

    this.anchor = new Zdog.Anchor({
      addTo: this.illo,
      translate: { x: -2.5, y: -2.5 }
    });
    this.anchors = []
    this.initGraph()
  }

  bangA() {

  }

  initGraph() {
    let anchor_ = new Zdog.Anchor({
      addTo: this.anchor,
      translate: {
        x: -4.5, y: -3
      },
      rotate: { z: 45 }
    });
    // add triangle to anchor
    let triangleA = new Zdog.Box({
      addTo: anchor_,
      translate: { z: 1, y: -0.75 },
      stroke: false,
      rotate: { z: 45 },
      color: '#334',
      rearFace: '#025',
      topFace: '#CC0',
    });

    let circle = new Zdog.Ellipse({
      addTo: anchor_,
      diameter: 0.8,
      translate: {  y: 1 },
      rotate: { y: 45 },
      stroke: 0.3,
      color: '#02C',
    });

    new Zdog.Shape({
      addTo: anchor_,
      translate: { x: 1 },
      stroke: 0.6,
      color: '#6F6',
    });

    let partyHat = new Zdog.Cone({
      addTo: anchor_,
      translate: { z: -0.75 },
      diameter: 0.8,
      length:  1,
      stroke: false,
      color: '#632',
      backface: '#F00',
    });

    this.anchors.push(anchor_)

    for(let i = 0; i< 5; i++) {
      for(let j = 0; j< 5; j++) {
        this.anchors.push(
          anchor_.copyGraph({
            translate: { x: i * 1.5 - 4.5, y: j * 1.5 -3 }
          })
        )
      }
    }

    

  }

  update() {
    this.anchors.forEach((a) => {
      // a.rotate.y += 0.013;
      a.rotate.x += 0.005;
      a.rotate.z = 45;
    })
    
    this.illo.updateRenderGraph();
  }
}
