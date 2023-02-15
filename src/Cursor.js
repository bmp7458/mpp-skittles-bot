class Vector2 {
    x;
    y;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

const SCREEN_SIDES = {
    TOP: 0,
    BOTTOM: 90,
    LEFT: 0,
    RIGHT: 100
}

class Cursor {
    constructor(id, x, y) {
        this.id = id;
        this.position = new Vector2(x || 50, y || 50);
        this.velocity = new Vector2();
        this.velocity = new Vector2((2/5) / 2, (2/7) / 2);
        this.acceleration = new Vector2();
        this.t = Date.now();
        this.ot = Date.now();
        this.dt = 0;

        this.offset = (this.id / TOTAL_IDS) * 360;

        this.followPos = new Vector2(50, 50);

        this.g = 0.9;

        this.xflip = false;
        this.yflip = false;

        this.angle = 0;
        this.angle2 = 0;
        this.angle3 = 0;
        this.angle4 = 0;
        this.angle5 = 0;
        this.angle6 = 0;

        this.calc = new Vector2(50, 50);
        this.calcVel = new Vector2(1, 1);

        this.mode = 'raycast';

        this.size = new Vector2(20, 20);
    }

    startAnimation() {
        this.cursorInterval = setInterval(() => {
            this.update();
        }, 1000 / 60);
    }

    stopAnimation() {
        clearInterval(this.cursorInterval);
    }

    update() {
        this.t = Date.now();
        this.dt = (this.t - this.ot) / 1000;

        let r;
        let r2;
        let r3;
        let r4;
        let r5;
        let r6;

        switch (this.mode) {
            case 'circle':
                // this.followPos.y += this.velocity.y;
                //     this.velocity.x = -this.velocity.x;

                //     this.velocity.y = -this.velocity.y;

                // this.angle += 1;
                
                if (this.angle > 360) {
                    this.angle -= 360;
                }
                this.angle2 += 2;

                //     if (this.angle2 < 90) {
                //     }
                //     if (this.angle2 > -90) {
                //     }
                
                if (this.angle2 > 360) {
                    this.angle2 -= 360;
                }

                if (this.angle2 < 0) {
                    this.angle2 += 360;
                }
                // this.angle3 += 9;
                
                if (this.angle3 > 360) {
                    this.angle3 -= 360;
                }
                
                if (this.angle4 > 360) {
                    this.angle4 -= 360;
                }
                
                if (this.angle5 > 360) {
                    this.angle5 -= 360;
                }
                
                if (this.angle6 > 360) {
                    this.angle6 -= 360;
                }

                r = this.angle * (Math.PI / 180);
                r2 = this.angle2 * (Math.PI / 180);
                r3 = this.angle3 * (Math.PI / 180);
                r4 = this.angle4 * (Math.PI / 180);
                r5 = this.angle5 * (Math.PI / 180);
                r6 = this.angle6 * (Math.PI / 180);
                // this.followPos.y = 50 // + (Math.cos(r5) * 5);
                // this.velocity.y += this.acceleration.y;
                // this.position.x += this.velocity.x * this.dt;

                //     this.velocity.y -= 15;

                //     this.velocity.y += 15;
                
                //     this.velocity.x -= 15;

                //     this.velocity.x += 15;

                // this.position.y = this.followPos.y + (Math.sin(this.position.x / 5) * 10)
                this.size.x = Math.sin(r2) * 20;
                this.size.y = Math.cos(r3) * 20;
                this.calc.x = this.followPos.x + ((Math.sin(r + this.offset) * this.size.x) / 2);
                this.calc.y = this.followPos.y + (Math.cos(r + this.offset) * this.size.y);
                break;
            case 'dvd':
                this.position.x += this.velocity.x * this.dt;
                this.position.y += this.velocity.y * this.dt;

                if (this.position.x > SCREEN_SIDES.RIGHT || this.position.x < SCREEN_SIDES.LEFT) {
                    this.velocity.x = -this.velocity.x;
                }

                if (this.position.y > SCREEN_SIDES.BOTTOM || this.position.y < SCREEN_SIDES.TOP) {
                    this.velocity.y = -this.velocity.y;
                }
                break;
            case 'sine':
                this.angle += this.velocity.x;
                if (this.angle > 360) {
                    this.angle -= 360;
                }
                r = (this.angle + (this.id * 5)) * (Math.PI / 180);
                this.calc.x = (this.id / TOTAL_IDS) * 100;
                this.calc.y = this.followPos.y + Math.sin(r) * 5;
                break;
			case 'tangent':
				this.angle += this.velocity.x;

				if (this.angle > 360) {
					this.angle -= 360;
				}

				r = (this.angle + (this.id * 5)) * (Math.PI / 180);
				
				this.calc.x = (this.id / TOTAL_IDS) * 100;
				this.calc.y = this.followPos.y + Math.tan(r) * 5;

				break;
            case 'circle2':
                // this.followPos.y += this.velocity.y;
                //     this.velocity.x = -this.velocity.x;

                //     this.velocity.y = -this.velocity.y;

                this.angle += 1;
                
                if (this.angle > 360) {
                    this.angle -= 360;
                }
                this.angle2 += 2;

                //     if (this.angle2 < 90) {
                //     }
                //     if (this.angle2 > -90) {
                //     }
                
                if (this.angle2 > 360) {
                    this.angle2 -= 360;
                }

                if (this.angle2 < 0) {
                    this.angle2 += 360;
                }
                // this.angle3 += 2;
                
                if (this.angle3 > 360) {
                    this.angle3 -= 360;
                }
                
                if (this.angle4 > 360) {
                    this.angle4 -= 360;
                }

                this.angle5 += 3;
                
                if (this.angle5 > 360) {
                    this.angle5 -= 360;
                }

                this.angle6 += 1;
                
                if (this.angle6 > 360) {
                    this.angle6 -= 360;
                }

                r = this.angle * (Math.PI / 180);
                r2 = this.angle2 * (Math.PI / 180);
                r3 = this.angle3 * (Math.PI / 180);
                r4 = this.angle4 * (Math.PI / 180);
                r5 = this.angle5 * (Math.PI / 180);
                r6 = this.angle6 * (Math.PI / 180);
                // this.followPos.y = 50 // + (Math.cos(r5) * 5);
                // this.velocity.y += this.acceleration.y;
                // this.position.x += this.velocity.x * this.dt;

                //     this.velocity.y -= 15;

                //     this.velocity.y += 15;
                
                //     this.velocity.x -= 15;

                //     this.velocity.x += 15;

                // this.position.y = this.followPos.y + (Math.sin(this.position.x / 5) * 10)
                this.size.x = Math.sin(r2) * 20;
                this.size.y = Math.cos(r3) * 20;
                this.calc.x = this.followPos.x + ((Math.sin(r + this.offset) * this.size.x) / 2);
                this.calc.y = this.followPos.y + (Math.cos(r + this.offset) * this.size.y);
                break;
            case 'figure8':
                this.angle += this.velocity.x;
                if (this.angle > 360) {
                    this.angle -= 360;
                }
                r = (this.angle + (this.id * 5)) * (Math.PI / 180);
                this.calc.x = this.followPos.x + Math.cos(r) * 10;
                this.calc.y = this.followPos.y + Math.sin(r * 2) * 10;
                
                break;
            case 'cosmic':
                this.angle += this.velocity.x;
                if (this.angle > 360) {
                    this.angle -= 360;
                }
                r = (this.angle + (this.id * 5)) * (Math.PI / 180);
                this.calc.x = this.followPos.x + Math.sin(r) * 10;
                this.calc.y = this.followPos.y + Math.cos(r * 3) * 10;
                
                break;
            case 'heart':
                this.angle += 0.01;
                
                if (this.angle + this.offset > 360) {
                    this.angle -= 360;
                }

                let ang = this.angle + this.offset;

                this.calc.x = ((16 * (Math.sin(ang) ** 3)) / 2) + this.followPos.x;
                this.calc.y = -((13 * (Math.cos(ang))) - (5 * (Math.cos(ang * 2))) - (Math.cos(ang * 4))) - 5 + this.followPos.y;
                break;
            case 'fullsine':
                this.angle += this.velocity.x;
                if (this.angle > 360) {
                    this.angle -= 360;
                }
                r = (this.angle + (this.id * 5)) * (Math.PI / 180);
                this.calc.x = (this.id / TOTAL_IDS) * 100;
                this.calc.y = this.followPos.y + Math.sin(r) * 50;
                break;
            case 'line':
                this.angle += this.velocity.x;
                if (this.angle > 360 * 1000) {
                    this.angle -= 360 * 1000;
                }
                r = (this.angle + (this.id * 5)) * (Math.PI / 180);
                this.calc.x = (this.offset / 2) + (Math.cos(r) * 5)/2;
                this.calc.y = this.calc.x + (Math.sin(r) * 5);
                break;
            case 'line2':
                this.angle += this.velocity.x;
                if (this.angle > 360 * 1000) {
                    this.angle -= 360 * 1000;
                }
                r = (this.angle + (this.id * 5)) * (Math.PI / 180);
                this.calc.x = (this.offset / 2) + (Math.cos(r) * 5)/2;
                this.calc.y = (-(this.calc.x + (Math.sin(r) * 5))) + 100;
                break;
            case 'circle3':
                // this.followPos.y += this.velocity.y;
                //     this.velocity.x = -this.velocity.x;

                //     this.velocity.y = -this.velocity.y;

                this.angle += 100 * this.dt;
                
                if (this.angle > 360) {
                    this.angle -= 360;
                }
                this.angle2 += 100 * this.dt;

                //     if (this.angle2 < 90) {
                //     }
                //     if (this.angle2 > -90) {
                //     }
                
                if (this.angle2 > 360) {
                    this.angle2 -= 360;
                }

                if (this.angle2 < 0) {
                    this.angle2 += 360;
                }
                // this.angle3 += 2;
                
                if (this.angle3 > 360) {
                    this.angle3 -= 360;
                }
                
                if (this.angle4 > 360) {
                    this.angle4 -= 360;
                }

                this.angle5 += 3;
                
                if (this.angle5 > 360) {
                    this.angle5 -= 360;
                }

                this.angle6 += 1;
                
                if (this.angle6 > 360) {
                    this.angle6 -= 360;
                }

                r = this.angle * (Math.PI / 180);
                r2 = this.angle2 * (Math.PI / 180);
                r3 = this.angle3 * (Math.PI / 180);
                r4 = this.angle4 * (Math.PI / 180);
                r5 = this.angle5 * (Math.PI / 180);
                r6 = this.angle6 * (Math.PI / 180);
                // this.followPos.y = 50 // + (Math.cos(r5) * 5);
                // this.velocity.y += this.acceleration.y;
                // this.position.x += this.velocity.x * this.dt;

                //     this.velocity.y -= 15;

                //     this.velocity.y += 15;
                
                //     this.velocity.x -= 15;

                //     this.velocity.x += 15;

                // this.position.y = this.followPos.y + (Math.sin(this.position.x / 5) * 10)
                this.size.x = Math.sin(r2) * 20;
                this.size.y = Math.cos(r3) * 20;
                this.calc.x = this.followPos.x + ((Math.sin(r + this.offset) * this.size.x) / 2);
                this.calc.y = this.followPos.y + (Math.cos(r + this.offset) * this.size.y);
                break;
            case 'circle4':
                // this.followPos.y += this.velocity.y;
                //     this.velocity.x = -this.velocity.x;

                //     this.velocity.y = -this.velocity.y;

                this.angle += -(300 * this.dt);
                
                if (this.angle > 360) {
                    this.angle -= 360;
                }
                this.angle2 += 50 * this.dt;

                //     if (this.angle2 < 90) {
                //     }
                //     if (this.angle2 > -90) {
                //     }
                
                if (this.angle2 > 360) {
                    this.angle2 -= 360;
                }

                if (this.angle2 < 0) {
                    this.angle2 += 360;
                }
                // this.angle3 += 2;
                
                if (this.angle3 > 360) {
                    this.angle3 -= 360;
                }
                
                if (this.angle4 > 360) {
                    this.angle4 -= 360;
                }

                this.angle5 += 3;
                
                if (this.angle5 > 360) {
                    this.angle5 -= 360;
                }

                this.angle6 += 1;
                
                if (this.angle6 > 360) {
                    this.angle6 -= 360;
                }

                r = this.angle * (Math.PI / 180);
                r2 = this.angle2 * (Math.PI / 180);
                r3 = this.angle3 * (Math.PI / 180);
                r4 = this.angle4 * (Math.PI / 180);
                r5 = this.angle5 * (Math.PI / 180);
                r6 = this.angle6 * (Math.PI / 180);
                // this.followPos.y = 50 // + (Math.cos(r5) * 5);
                // this.velocity.y += this.acceleration.y;
                // this.position.x += this.velocity.x * this.dt;

                //     this.velocity.y -= 15;

                //     this.velocity.y += 15;
                
                //     this.velocity.x -= 15;

                //     this.velocity.x += 15;

                // this.position.y = this.followPos.y + (Math.sin(this.position.x / 5) * 10)
                this.size.x = Math.sin(r2) * 20;
                this.size.y = Math.cos(r3) * 20;
                this.calc.x = this.followPos.x + ((Math.sin(r + this.offset) * this.size.x) / 2);
                this.calc.y = this.followPos.y + (Math.cos(r + this.offset) * this.size.y);
                break;
            case 'raycast':
                this.position.x = (this.id / TOTAL_IDS) * 100;
                this.position.y = 50;
                break;
                function shapeRectangle(cursors, id, w, h, a){
                    //////////////
                    // cursors  number of cursors you have
                    // id       cursor id
                    // w        width of rectangle in unit of pixels
                    // h        height of rectangle in unit of pixels
                    // a        the rotation of rectangle
                   
                     // for the sake of condensing code,
                     // also predefinitions
                     let s,c,z=Math.PI,p,q,x,y;
                     [s,c] = [Math.sin(z*a/180),Math.cos(z*a/180)];
                     
                     // the drawing of unrotated square
                     p = w * 2 + h * 2; // perimeter
                     q = (id % cursors) * p / cursors; // position
                     x  = (q<0      ?0:(q<w      ?+(q      ): w))-h/4;
                     y  = (q<w      ?0:(q<w+h    ?+(q-w    ): h))-w/4;
                     x += (q<w+h    ?0:(q<w+h+w  ?-(q-w-h  ):-w))-h/4;
                     y += (q<w+h+w  ?0:(q<w+h+w+h?-(q-w-h-w):-h))-w/4;
                     
                     // return the rotated the square
                    return [c*x-s*y,s*x+c*y]
                   }

            case 'test':
                r = this.angle * (Math.PI / 180);
                r2 = this.angle2 * (Math.PI / 180);
                r3 = this.angle3 * (Math.PI / 180);
                r4 = this.angle4 * (Math.PI / 180);
                r5 = this.angle5 * (Math.PI / 180);
                r6 = this.angle6 * (Math.PI / 180);
                var k = shapeRectangle(50, this.id, 20, 20, 25)
                this.calc.x = this.followPos.x + k[0]
                this.calc.y = this.followPos.y + k[1]
                break;

        }

        if (this.mode !== 'dvd') {
            if (this.calc.x > this.position.x) {
                this.position.x += this.calcVel.x;
            } else {
                this.position.x -= this.calcVel.x;
            }

            if (this.calc.y > this.position.y) {
                this.position.y += this.calcVel.y;
            } else {
                this.position.y -= this.calcVel.y;
            }

            if (this.position.x < this.calc.x + 3 && this.position.x > this.calc.x - 3) {
                this.position.x = this.calc.x;
            }

            if (this.position.y < this.calc.y + 3 && this.position.y > this.calc.y - 3) {
                this.position.y = this.calc.y;
            }
        }
        this.ot = this.t;
    }
}

module.exports = {
    Cursor
}
