class Transform3d {

    constructor() {
        this.setRotationAngleX(1);
        this.setRotationAngleY(1);
        this.setRotationAngleZ(1);
    }
    
    toRad(angle) {
        return angle*(Math.PI/180);
    }
    
    setRotationAngleX(angle) {
        this.rotationAngleX = [angle, Math.sin(this.toRad(angle)), Math.cos(this.toRad(angle))]
    }

    setRotationAngleY(angle) {
        this.rotationAngleY = [angle, Math.sin(this.toRad(angle)), Math.cos(this.toRad(angle))]
    }

    setRotationAngleZ(angle) {
        this.rotationAngleZ = [angle, Math.sin(this.toRad(angle)), Math.cos(this.toRad(angle))]
    }
    
    rotateX(p) {
        return [p[0], p[1]*this.rotationAngleX[2]-p[2]*this.rotationAngleX[1], p[1]*this.rotationAngleX[1]+p[2]*this.rotationAngleX[2]];
    }

    rotateY(p) {
        return [p[2]*this.rotationAngleY[1]+p[0]*this.rotationAngleY[2], p[1], p[1]*this.rotationAngleY[2]-p[0]*this.rotationAngleY[1]];
    }
  
    rotateZ(p) {
        return [p[0]*this.rotationAngleZ[2]-p[1]*this.rotationAngleZ[1], p[0]*this.rotationAngleZ[1]+p[1]*this.rotationAngleZ[2], p[2]];
    }

}