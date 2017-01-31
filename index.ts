export class Coord {
    static byEl(el, byRoot: boolean = true) {
        if (!el) return Coord.byWin();
        let x: number = el.offsetLeft, y: number = el.offsetTop;
        if (byRoot) for (x = 0, y = 0; el != null;
            x += el.offsetLeft, y += el.offsetTop, el = el.offsetParent);
        return new Coord(el.style.width, el.style.height, x, y);
    }
    static byWin() {
        let w = window, d = document, e = d.documentElement,
            g = d.getElementsByTagName("body")[0],
            width = w.innerWidth || e.clientWidth || g.clientWidth,
            height = w.innerHeight || e.clientHeight || g.clientHeight;
        return new Coord(width, height, 0, 0);
    }
    width: number;
    height: number;
    x: number;
    y: number;
    constructor(width: number = 0, height: number = 0, x: number = 0, y: number = 0) {
        this.width = width; this.height = height; this.x = x; this.y = y;
    }
}
