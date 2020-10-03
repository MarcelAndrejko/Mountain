class Svg {
    
    constructor() {
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttributeNS(null, "preserveAspectRatio", "xMidYMid meet");
        this.strokeColor = [0,0,0];
        this.fillColor = [0,0,0];
    }
    
    getSvgElement() {
        return this.svg;
    }
    
    setViewBox(x,y,width,height) {
        this.svg.setAttributeNS(null, 'viewBox', x + ',' + y + ',' + width + ',' + height);
    }
    
    setStrokeColor(color) {
        this.strokeColor = color;
    }
    
    setFillColor(color) {
        this.fillColor = color;
    }
    
    colorToString(color) {
        return "rgba("+color[0]+","+color[1]+","+color[2]+",1)";
    }
    
    tetragon(p1, p2, p3, p4) {
        let element = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        element.setAttributeNS(null, 'points', p1[0]+','+p1[1]+' '+p2[0]+','+p2[1]+' '+p3[0]+','+p3[1]+' '+p4[0]+','+p4[1]);
        element.setAttributeNS(null, 'style', "fill:"+this.colorToString(this.fillColor)+";stroke:"+this.colorToString(this.strokeColor)+";stroke-width:0.25%");
        element.setAttributeNS(null, 'vector-effect', "non-scaling-stroke");
        this.svg.appendChild(element);
    }
    
}