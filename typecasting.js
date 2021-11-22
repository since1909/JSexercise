//강제 변환

var a = {
    valueOf : function() {
        return "43";
    }
};

var b = {
    toString : function() {
        return "43";
    }
};

var c = [4,2];
c.toString = function() {
    return this.join("");
}