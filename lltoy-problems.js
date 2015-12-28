"use strict";

var default_propositions_data = [
  "A⊸A",
  "¬¬A⊸A",
  "A⊸¬¬A",
  "A⊗B⊸A⊗B",
  "A⅋B⊸A⅋B",
  "A⊗B⊸B⊗A",
  "A⅋B⊸B⅋A",
  "A⊗(B⊗C)⊸(A⊗B)⊗C",
  "A⅋(B⅋C)⊸(A⅋B)⅋C",
  "A⊸A⊗1",
  "A⊗1⊸A",
  "A⊸A⅋⊥",
  "A⅋⊥⊸A",
  "¬A⅋¬B⊸¬(A⊗B)",
  "¬(A⊗B)⊸¬A⅋¬B",
  "¬A⊗¬B⊸¬(A⅋B)",
  "¬(A⅋B)⊸¬A⊗¬B",
  "A⊗(B⅋C)⊸(A⊗B)⅋C",
  "(B⊸C)⊸((A⊸B)⊸(A⊸C))",
  "(A⊸(B⊸C))⊸(B⊸(A⊸C))",
  "A＆B⊸A＆B",
  "A⊕B⊸A⊕B",
  "A＆B⊸B＆A",
  "A⊕B⊸B⊕A",
  "A＆(B＆C)⊸(A＆B)＆C",
  "A⊕(B⊕C)⊸(A⊕B)⊕C",
  "A⊸A＆⊤",
  "A＆⊤⊸A",
  "A⊸A⊕0",
  "A⊕0⊸A",
  "¬A⊕¬B⊸¬(A＆B)",
  "¬(A＆B)⊸¬A⊕¬B",
  "¬A＆¬B⊸¬(A⊕B)",
  "¬(A⊕B)⊸¬A＆¬B",
  "A⊸A＆A",
  "A＆A⊸A",
  "A⊸A⊕A",
  "A⊕A⊸A",
  "A⊗(B⊕C)⊸(A⊗B)⊕(A⊗C)",
  "(A⊗B)⊕(A⊗C)⊸A⊗(B⊕C)",
  "A⊗0⊸0",
  "0⊸A⊗0",
  "A⅋(B＆C)⊸(A⅋B)＆(A⅋C)",
  "(A⅋B)＆(A⅋C)⊸A⅋(B＆C)",
  "A⅋⊤⊸⊤",
  "⊤⊸A⅋⊤",
  "A⊗(B＆C)⊸(A⊗B)＆(A⊗C)",
  "A⊗⊤⊸⊤",
  "(A⅋B)⊕(A⅋C)⊸A⅋(B⊕C)",
  "0⊸A⅋0",
  "!A⊸A",
  "!!A⊸!A",
  "!A⊸!!A",
  "A⊸?A",
  "?A⊸??A",
  "??A⊸?A",
  "!A⊸!?!A",
  "?!?A⊸?A",
  "¬!A⊸?¬A",
  "?¬A⊸¬!A",
  "¬?A⊸!¬A",
  "!¬A⊸¬?A",
  "!(A＆B)⊸!A⊗!B",
  "!A⊗!B⊸!(A＆B)",
  "!⊤⊸1",
  "1⊸!⊤",
  "?(A⊕B)⊸?A⅋?B",
  "?A⅋?B⊸?(A⊕B)",
  "?0⊸⊥",
  "⊥⊸?0",
  "!?(!A＆!B)⊸!(?!A＆?!B)",
  "!(?!A＆?!B)⊸!?(!A＆!B)",
  "?!(?A⊕?B)⊸?(!?A⊕!?B)",
  "?(!?A⊕!?B)⊸?!(?A⊕?B)",
];
