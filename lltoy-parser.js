"use strict";

var lex = function(str) {
  var lex = [];
  var mch = null;
  while(str.length > 0) {
    if(mch = str.match(/^\s+/)) {
      str = str.substring(mch[0].length);
    } else if(mch = str.match(/^[a-zA-Z_][a-zA-Z_0-9]*/)) {
      lex.push(mch[0]);
      str = str.substring(mch[0].length);
    } else if(mch = str.match(/^[⊸¬⊗1⅋⊥＆⊤⊕0!?]/)) {
      lex.push(mch[0]);
      str = str.substring(mch[0].length);
    } else {
      lex.push(str.charAt(0));
      str = str.substring(1);
    }
  }
  lex.push("$$");
  return lex;
};

var parseProp = function(lex, idx, prec) {
  if(prec >= 90) {
    var result0 = parseProp(lex, idx, 80);
    if(result0 == null) return null;
    var idx0 = result0[1];
    if(lex[idx0].match(/^[⊸]$/)) {
      var result1 = parseProp(lex, idx0+1, 90);
      if(result1 == null) return null;
      var idx1 = result1[1];
      return [new PropCompound("⊸", [result0[0], result1[0]]), idx1];
    } else return result0;
  } else if(prec >= 80) {
    var result0 = parseProp(lex, idx, 70);
    if(result0 == null) return null;
    var idx0 = result0[1];
    if(lex[idx0].match(/^[＆⊕]$/)) {
      var result1 = parseProp(lex, idx0+1, 80);
      if(result1 == null) return null;
      var idx1 = result1[1];
      if(lex[idx0] == "＆") {
        return [new PropCompound("＆", [result0[0], result1[0]]), idx1];
      } else {
        return [new PropCompound("⊕", [result0[0], result1[0]]), idx1];
      }
    } else return result0;
  } else if(prec >= 70) {
    var result0 = parseProp(lex, idx, 60);
    if(result0 == null) return null;
    var idx0 = result0[1];
    if(lex[idx0].match(/^[⊗⅋]$/)) {
      var result1 = parseProp(lex, idx0+1, 70);
      if(result1 == null) return null;
      var idx1 = result1[1];
      if(lex[idx0] == "⊗") {
        return [new PropCompound("⊗", [result0[0], result1[0]]), idx1];
      } else {
        return [new PropCompound("⅋", [result0[0], result1[0]]), idx1];
      }
    } else {
      return result0;
    }
  } else if(prec >= 60) {
    if(lex[idx].match(/^[¬!?]$/)) {
      var result0 = parseProp(lex, idx+1, 60);
      if(result0 == null) return null;
      var idx0 = result0[1];
      if(lex[idx] == "¬") {
        return [new PropCompound("¬", [result0[0]]), idx0];
      } else if(lex[idx] == "!") {
        return [new PropCompound("!", [result0[0]]), idx0];
      } else {
        return [new PropCompound("?", [result0[0]]), idx0];
      }
    } else {
      return parseProp(lex, idx, 50);
    }
  } else {
    if(lex[idx] == "(") {
      var result0 = parseProp(lex, idx+1, 100);
      if(result0 == null) return null;
      var idx0 = result0[1];
      if(lex[idx0] != ")") return null;
      return [result0[0], idx0+1];
    } else if(lex[idx] == "⊤") {
      return [new PropCompound("＆", []), idx+1];
    } else if(lex[idx] == "0") {
      return [new PropCompound("⊕", []), idx+1];
    } else if(lex[idx] == "1") {
      return [new PropCompound("⊗", []), idx+1];
    } else if(lex[idx] == "⊥") {
      return [new PropCompound("⅋", []), idx+1];
    } else if(lex[idx].match(/^[A-Z][A-Za-z_0-9]*$/)) {
      return [new PropCompound(lex[idx], []), idx+1];
    }
    return null;
  }
}
var parse = function(lex) {
  var result = parseProp(lex, 0, 100);
  if(result == null) return null;
  var idx = result[1];
  if(lex[idx] != "$$") return null;
  return result[0];
};
