class Mountain {

    constructor(n, v) {
        this.n = n;
        this.v = v;
        this.z = [];

        for (let i=0; i<=n; i++) {
            this.z[i] = [];
            for (let j=0; j<=n; j++)
                this.z[i][j] = 0;
        } 
        
        this.fract(0,0,n,n);
    }

    rndN(val) {
        return Math.floor(Math.random() * val);
    }

    rnd(val) {
        if (val == this.n) 
            return this.n*this.v;
        return (1-2*this.rndN(2))*this.rndN(val*this.v);
    }

    xFract(x1, x2, y) {
        if (x2-x1 > 1) {
            this.z[(x1+x2)>>1][y] = (this.z[x1][y] + this.z[x2][y])/2 + this.rnd(x2-x1);
            if (x2-x1 > 2) 
                this.xFract((x1+x2)>>1, x2, y);
            if (x2-x1 > 3) 
                this.xFract(x1, (x1+x2)>>1, y);
        }
    }

    yFract(x, y1, y2) {
        if (y2-y1 > 1) {
            this.z[x][(y1+y2)>>1] = (this.z[x][y1] + this.z[x][y2])/2 + this.rnd(y2-y1);
            if (y2-y1 > 2) 
                this.yFract(x, (y1+y2)>>1, y2);
            if (y2-y1 > 3) 
                this.yFract(x, y1, (y1+y2)>>1);
        }
    }

    fract(x1, y1, x2, y2) {
        if (x2-x1>1 && y2-y1>1) {
            this.z[(x1+x2)>>1][(y1+y2)>>1] = (this.z[x1][y1] + this.z[x2][y1] + this.z[x1][y2] + this.z[x2][y2]) / 4 + this.rnd(Math.max(y2-y1, x2-x1));
            this.xFract(x1, (x1+x2)>>1, (y1+y2)>>1);
            this.xFract((x1+x2)>>1, x2, (y1+y2)>>1);
            this.yFract((x1+x2)>>1, y1, (y1+y2)>>1);
            this.yFract((x1+x2)>>1, (y1+y2)>>1, y2);
            this.fract(x1, y1, (x1+x2)>>1, (y1+y2)>>1); 
            this.fract((x1+x2)>>1, y1, x2, (y1+y2)>>1); 
            this.fract(x1, (y1+y2)>>1, (x1+x2)>>1, y2); 
            this.fract((x1+x2)>>1, (y1+y2)>>1, x2, y2); 
        } 
    }

    getData() {
        return this.z;
    }

}