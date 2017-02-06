var Coord = (function () {
    function Coord(width, height, x, y) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    Coord.prototype.getSource = function (el, byRoot) {
        if (byRoot === void 0) { byRoot = true; }
        if (!el) {
            var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0];
            this.width = w.innerWidth || e.clientWidth || g.clientWidth;
            this.height = w.innerHeight || e.clientHeight || g.clientHeight;
            this.x = 0;
            this.y = 0;
        }
        else {
            this.width = el.style.width;
            this.height = el.style.height;
            var x = el.offsetLeft, y = el.offsetTop;
            if (byRoot)
                for (x = 0, y = 0; el != null; x += el.offsetLeft, y += el.offsetTop, el = el.offsetParent)
                    ;
            this.x = x;
            this.y = y;
        }
    };
    return Coord;
}());
