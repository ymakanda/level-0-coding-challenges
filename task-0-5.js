function areaOfaTriangle(base,hight,length){
    var side = (base + hight + length) / 2;
    return Math.sqrt(side * (side - base) * (side - hight) * (side - length));
}
areaOfaTriangle(3,4,5);
