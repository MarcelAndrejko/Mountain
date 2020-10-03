class Vector3d {

    static dotProduct(u, v) {
        return (u[0]*v[0] + u[1]*v[1] + u[2]*v[2]);
    }
    
    static crossProduct(u, v) {
        return [u[1]*v[2] - u[2]*v[1], u[2]*v[0] - u[0]*v[2], u[0]*v[1] - u[1]*v[0]];  
    }
    
    static createVector(p1, p2) {
        return [p2[0]-p1[0], p2[1]-p1[1], p2[2]-p1[2]];
    }
  
    static length(u) {
        return Math.sqrt(u[0]*u[0] + u[1]*u[1] + u[2]*u[2]); 
    }
      
    static cos(u, v) {
        return (Vector3d.dotProduct(u, v) / (Vector3d.length(u)*Vector3d.length(v)));
    }
    
}