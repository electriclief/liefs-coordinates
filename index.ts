export class Coord {
    width: number;
    height: number;
    x: number;
    y: number;
    constructor(width: number = 0, height: number = 0, x: number = 0, y: number = 0) {
        this.width = width; this.height = height; this.x = x; this.y = y;
    }
    getSource(el, byRoot: boolean = true) {
        if (!el) {
            let w = window, d = document, e = d.documentElement,
                g = d.getElementsByTagName("body")[0];
            this.width = w.innerWidth || e.clientWidth || g.clientWidth;
            this.height = w.innerHeight || e.clientHeight || g.clientHeight;
            this.x = 0; this.y = 0;
        } else {
            this.width = el.style.width, this.height = el.style.height;
            let x: number = el.offsetLeft, y: number = el.offsetTop;
            if (byRoot) for (x = 0, y = 0; el != null;
                x += el.offsetLeft, y += el.offsetTop, el = el.offsetParent);
            this.x = x, this.y = y;
        }
    }
}
