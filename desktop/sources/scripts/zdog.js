const Zdog = require('zdog');
const { TweenLite, Power4, Power3 } = require('gsap');

export default class ZdogCanvas {
  constructor(el) {
    console.log(el)
    this.illo = new Zdog.Illustration({
      element: '.' + el.className,
      zoom: 76
    });

    this.anchor = new Zdog.Anchor({
      addTo: this.illo,
      translate: { x: -5.5, y: -5 }
    });
    this.anchors = []
    this.palet = {
      orca: '#8acfbce5',
      orange: '#fb6753e5',
      coral: '#886467e5',
      gray:  '#607078e5',
      bgray:'#97a69ae5',
      blite:'#e1efffe5'
    }
    this.initGraph()

    this.toggle = false
  }

  bang(pat) {

    console.log('this is pat ', pat)
    const revI = this.anchors.length;
    const cur = this.anchors[1].rotate.y
    
    if (pat === '0') {
      this.anchors.forEach((p, i) => {
        TweenLite.set(p.children[1].scale, { x:0, y:0 });
        TweenLite.to(p.children[1].scale, 0.125, {
          x : 1,
          y : 1,
          ease: Power3.easeInOut,
          delay: (revI - i)  * 0.015
        })
      })
      return;
    }
    if (pat === '1') {
      // this.anchors.forEach((p, i) => {
      // TweenLite.set(p.children[0].scale, { x:0, y:0 });
      // TweenLite.to(p.children[0].scale, 0.125, {
      //   x : 1,
      //   y : 1,
      //   ease: Power3.easeInOut,
      //   delay: (revI - i)  * 0.015
      // })
      //})
      return;
    }

    this.anchors.forEach((p, i) => {
      TweenLite.to(p.rotate, 1.25, {
        y : cur - 2.35,
        ease: Power4.easeInOut
      });
      
      let mdist = 1.75;
      if (this.toggle) {
        mdist = mdist * -1;
      }

      let diff = 1.0;
      if (6 > ((i - 1)%10)) {
        diff = -1.0
      }
        const curt = p.children[0].translate.z
        TweenLite.to(p.children[0].translate, 0.75, {
          z : curt - mdist * diff,
          ease: Power4.easeInOut,
          // delay: i  * 0.015
        })
      

      const curt5 = p.children[0].rotate.z
      TweenLite.to(p.children[0].rotate, 0.75, {
        z : curt5 - mdist * 2.15,
        ease: Power4.easeInOut
      })

      const curt2 = p.children[1].translate.z
      TweenLite.to(p.children[1].translate, 0.75, {
        z : curt2 + mdist * (-diff),
        ease: Power4.easeInOut,
        delay: (revI - i) * 0.015
      })

      const curt4 = p.children[1].rotate.z
      TweenLite.to(p.children[1].rotate, 0.75, {
        x : curt4 + (mdist * 3),
        z : curt4 + (mdist * 3),
        ease: Power4.easeInOut
      })

      const curt3 = p.children[3].translate.x
      TweenLite.to(p.children[3].translate, 0.75, {
        x : curt3 + mdist,
        ease: Power4.easeInOut,
        delay: (revI - i)  * 0.015
      })

    })

    this.toggle = !this.toggle
  }

  initGraph() {
    let anchor_ = new Zdog.Anchor({
      addTo: this.anchor,
      translate: {
        x: -5.5, y: -3
      },
      rotate: { z: 45 }
    });
    // add triangle to anchor
    let triangleA = new Zdog.Box({
      addTo: anchor_,
      width: 1.25,
      height: 1.25,
      depth: 1.25,
      translate: { z: 1, y: -0.75 },
      stroke: false,
      rotate: { z: 45 },
      color: this.palet.gray,
      frontFace: this.palet.orange,
      rightFace: this.palet.blite,
      topFace: this.palet.bgray,
    });

    let circle = new Zdog.Ellipse({
      addTo: anchor_,
      diameter: 0.8,
      translate: {  y: 1 },
      rotate: { y: 45 },
      stroke: 0.3,
      color: this.palet.orca,
    });

    new Zdog.Shape({
      addTo: anchor_,
      translate: { x: 1 },
      stroke: 0.4,
      color: this.palet.orange,
    });

    let partyHat = new Zdog.Cone({
      addTo: anchor_,
      translate: { z: -0.75 },
      diameter: 0.8,
      length:  1,
      stroke: false,
      color: this.palet.coral,
      backface: this.palet.bgray,
    });

    this.anchors.push(anchor_)

    for(let i = 0; i< 6; i++) {
      for(let j = 0; j< 5; j++) {
        this.anchors.push(
          anchor_.copyGraph({
            translate: { x: i * 1.75 - 5.5, y: j * 1.75 -3 }
            // rotate: { x: i * 0.3, y: j* 0.3 }
          })
        )
      }
    }
  }

  update() {
    this.anchors.forEach((a, i) => {
      a.rotate.x += 0.0015;
      a.rotate.y -= 0.004;
    })
    
    // TweenLite.update();
    this.illo.updateRenderGraph();
  }
}
