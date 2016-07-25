'use strict';

let values = {
  1: {
    y: { column: 'a', value: 2 },
    m: { column: 'a', value: 4 },
    n: { column: 'a', value: 6 }
  },
  11: {
    y: { column: 'a', value: 2 },
    m: { column: 'a', value: 4 },
    n: { column: 'a', value: 5 }
  },
  21: {
    y: { column: 'a', value: 3 },
    m: { column: 'a', value: 3 },
    n: { column: 'a', value: 6 }
  },
  31: {
    y: { column: 'a', value: 2 },
    m: { column: 'a', value: 4 },
    n: { column: 'a', value: 5 }
  },
  41: {
    y: { column: 'a', value: 5 },
    m: { column: 'a', value: 3 },
    n: { column: 'a', value: 3 }
  },
  51: {
    y: { column: 'a', value: 3 },
    m: { column: 'a', value: 3 },
    n: { column: 'a', value: 5 }
  },
  61: {
    y: { column: 'a', value: 3 },
    m: { column: 'a', value: 4 },
    n: { column: 'a', value: 4 }
  },
  71: {
    y: { column: 'a', value: 6 },
    m: { column: 'a', value: 3 },
    n: { column: 'a', value: 3 }
  },
  81: {
    y: { column: 'a', value: 3 },
    m: { column: 'a', value: 3 },
    n: { column: 'a', value: 6 }
  },
  91: {
    y: { column: 'a', value: 3 },
    m: { column: 'a', value: 3 },
    n: { column: 'a', value: 5 }
  },
  101: {
    y: { column: 'a', value: 5 },
    m: { column: 'a', value: 3 },
    n: { column: 'a', value: 3 }
  },
  111: {
    y: { column: 'a', value: 6 },
    m: { column: 'a', value: 2 },
    n: { column: 'a', value: 2 }
  },
  121: {
    y: { column: 'a', value: 2 },
    m: { column: 'a', value: 3 },
    n: { column: 'a', value: 6 }
  },
  131: {
    y: { column: 'a', value: 3 },
    m: { column: 'a', value: 4 },
    n: { column: 'a', value: 6 }
  },
  141: {
    y: { column: 'a', value: 5 },
    m: { column: 'a', value: 3 },
    n: { column: 'a', value: 2 }
  },
  151: {
    y: { column: 'a', value: 5 },
    m: { column: 'a', value: 3 },
    n: { column: 'a', value: 3 }
  },
  161: {
    y: { column: 'a', value: 6 },
    m: { column: 'a', value: 3 },
    n: { column: 'a', value: 3 }
  },
  171: {
    y: { column: 'a', value: 2 },
    m: { column: 'a', value: 3 },
    n: { column: 'a', value: 6 }
  },
  181: {
    y: { column: 'a', value: 6 },
    m: { column: 'a', value: 3 },
    n: { column: 'a', value: 2 }
  },
  191: {
    y: { column: 'a', value: 2 },
    m: { column: 'a', value: 2 },
    n: { column: 'a', value: 6 }
  },
  2: {
    y: { column: 'b', value: 2 },
    m: { column: 'b', value: 3 },
    n: { column: 'b', value: 6 }
  },
  12: {
    y: { column: 'b', value: 5 },
    m: { column: 'b', value: 4 },
    n: { column: 'b', value: 4 }
  },
  22: {
    y: { column: 'b', value: 6 },
    m: { column: 'b', value: 5 },
    n: { column: 'b', value: 3 }
  },
  32: {
    y: { column: 'b', value: 3 },
    m: { column: 'b', value: 5 },
    n: { column: 'b', value: 6 }
  },
  42: {
    y: { column: 'b', value: 5 },
    m: { column: 'b', value: 4 },
    n: { column: 'b', value: 4 }
  },
  52: {
    y: { column: 'b', value: 6 },
    m: { column: 'b', value: 4 },
    n: { column: 'b', value: 3 }
  },
  62: {
    y: { column: 'b', value: 3 },
    m: { column: 'b', value: 5 },
    n: { column: 'b', value: 6 }
  },
  72: {
    y: { column: 'b', value: 2 },
    m: { column: 'b', value: 5 },
    n: { column: 'b', value: 6 }
  },
  82: {
    y: { column: 'b', value: 5 },
    m: { column: 'b', value: 4 },
    n: { column: 'b', value: 4 }
  },
  92: {
    y: { column: 'b', value: 2 },
    m: { column: 'b', value: 3 },
    n: { column: 'b', value: 7 }
  },
  102: {
    y: { column: 'b', value: 6 },
    m: { column: 'b', value: 4 },
    n: { column: 'b', value: 3 }
  },
  112: {
    y: { column: 'b', value: 6 },
    m: { column: 'b', value: 4 },
    n: { column: 'b', value: 3 }
  },
  122: {
    y: { column: 'b', value: 2 },
    m: { column: 'b', value: 5 },
    n: { column: 'b', value: 6 }
  },
  132: {
    y: { column: 'b', value: 3 },
    m: { column: 'b', value: 4 },
    n: { column: 'b', value: 6 }
  },
  142: {
    y: { column: 'b', value: 2 },
    m: { column: 'b', value: 5 },
    n: { column: 'b', value: 6 }
  },
  152: {
    y: { column: 'b', value: 5 },
    m: { column: 'b', value: 5 },
    n: { column: 'b', value: 3 }
  },
  162: {
    y: { column: 'b', value: 3 },
    m: { column: 'b', value: 3 },
    n: { column: 'b', value: 6 }
  },
  172: {
    y: { column: 'b', value: 2 },
    m: { column: 'b', value: 2 },
    n: { column: 'b', value: 6 }
  },
  182: {
    y: { column: 'b', value: 2 },
    m: { column: 'b', value: 4 },
    n: { column: 'b', value: 6 }
  },
  192: {
    y: { column: 'b', value: 2 },
    m: { column: 'b', value: 5 },
    n: { column: 'b', value: 6 }
  },
  3: {
    y: { column: 'c', value: 6 },
    m: { column: 'c', value: 5 },
    n: { column: 'c', value: 3 }
  },
  13: {
    y: { column: 'c', value: 3 },
    m: { column: 'c', value: 3 },
    n: { column: 'c', value: 6 }
  },
  23: {
    y: { column: 'c', value: 3 },
    m: { column: 'c', value: 4 },
    n: { column: 'c', value: 5 }
  },
  33: {
    y: { column: 'c', value: 2 },
    m: { column: 'c', value: 6 },
    n: { column: 'c', value: 6 }
  },
  43: {
    y: { column: 'c', value: 4 },
    m: { column: 'c', value: 4 },
    n: { column: 'c', value: 5 }
  },
  53: {
    y: { column: 'c', value: 2 },
    m: { column: 'c', value: 5 },
    n: { column: 'c', value: 6 }
  },
  63: {
    y: { column: 'c', value: 3 },
    m: { column: 'c', value: 4 },
    n: { column: 'c', value: 6 }
  },
  73: {
    y: { column: 'c', value: 5 },
    m: { column: 'c', value: 3 },
    n: { column: 'c', value: 3 }
  },
  83: {
    y: { column: 'c', value: 6 },
    m: { column: 'c', value: 3 },
    n: { column: 'c', value: 3 }
  },
  93: {
    y: { column: 'c', value: 2 },
    m: { column: 'c', value: 4 },
    n: { column: 'c', value: 6 }
  },
  103: {
    y: { column: 'c', value: 3 },
    m: { column: 'c', value: 4 },
    n: { column: 'c', value: 6 }
  },
  113: {
    y: { column: 'c', value: 5 },
    m: { column: 'c', value: 5 },
    n: { column: 'c', value: 3 }
  },
  123: {
    y: { column: 'c', value: 3 },
    m: { column: 'c', value: 4 },
    n: { column: 'c', value: 6 }
  },
  133: {
    y: { column: 'c', value: 3 },
    m: { column: 'c', value: 5 },
    n: { column: 'c', value: 6 }
  },
  143: {
    y: { column: 'c', value: 2 },
    m: { column: 'c', value: 4 },
    n: { column: 'c', value: 6 }
  },
  153: {
    y: { column: 'c', value: 3 },
    m: { column: 'c', value: 5 },
    n: { column: 'c', value: 5 }
  },
  163: {
    y: { column: 'c', value: 5 },
    m: { column: 'c', value: 5 },
    n: { column: 'c', value: 2 }
  },
  173: {
    y: { column: 'c', value: 3 },
    m: { column: 'c', value: 3 },
    n: { column: 'c', value: 6 }
  },
  183: {
    y: { column: 'c', value: 3 },
    m: { column: 'c', value: 3 },
    n: { column: 'c', value: 6 }
  },
  193: {
    y: { column: 'c', value: 6 },
    m: { column: 'c', value: 4 },
    n: { column: 'c', value: 4 }
  },
  4: {
    y: { column: 'd', value: 1 },
    m: { column: 'd', value: 5 },
    n: { column: 'd', value: 6 }
  },
  14: {
    y: { column: 'd', value: 2 },
    m: { column: 'd', value: 3 },
    n: { column: 'd', value: 6 }
  },
  24: {
    y: { column: 'd', value: 2 },
    m: { column: 'd', value: 4 },
    n: { column: 'd', value: 6 }
  },
  34: {
    y: { column: 'd', value: 2 },
    m: { column: 'd', value: 3 },
    n: { column: 'd', value: 5 }
  },
  44: {
    y: { column: 'd', value: 2 },
    m: { column: 'd', value: 4 },
    n: { column: 'd', value: 6 }
  },
  54: {
    y: { column: 'd', value: 2 },
    m: { column: 'd', value: 4 },
    n: { column: 'd', value: 5 }
  },
  64: {
    y: { column: 'd', value: 2 },
    m: { column: 'd', value: 4 },
    n: { column: 'd', value: 5 }
  },
  74: {
    y: { column: 'd', value: 1 },
    m: { column: 'd', value: 3 },
    n: { column: 'd', value: 6 }
  },
  84: {
    y: { column: 'd', value: 2 },
    m: { column: 'd', value: 3 },
    n: { column: 'd', value: 5 }
  },
  94: {
    y: { column: 'd', value: 3 },
    m: { column: 'd', value: 4 },
    n: { column: 'd', value: 5 }
  },
  104: {
    y: { column: 'd', value: 5 },
    m: { column: 'd', value: 4 },
    n: { column: 'd', value: 2 }
  },
  114: {
    y: { column: 'd', value: 3 },
    m: { column: 'd', value: 4 },
    n: { column: 'd', value: 5 }
  },
  124: {
    y: { column: 'd', value: 1 },
    m: { column: 'd', value: 3 },
    n: { column: 'd', value: 5 }
  },
  134: {
    y: { column: 'd', value: 1 },
    m: { column: 'd', value: 3 },
    n: { column: 'd', value: 5 }
  },
  144: {
    y: { column: 'd', value: 2 },
    m: { column: 'd', value: 4 },
    n: { column: 'd', value: 6 }
  },
  154: {
    y: { column: 'd', value: 6 },
    m: { column: 'd', value: 4 },
    n: { column: 'd', value: 2 }
  },
  164: {
    y: { column: 'd', value: 3 },
    m: { column: 'd', value: 4 },
    n: { column: 'd', value: 6 }
  },
  174: {
    y: { column: 'd', value: 1 },
    m: { column: 'd', value: 3 },
    n: { column: 'd', value: 5 }
  },
  184: {
    y: { column: 'd', value: 1 },
    m: { column: 'd', value: 4 },
    n: { column: 'd', value: 5 }
  },
  194: {
    y: { column: 'd', value: 2 },
    m: { column: 'd', value: 4 },
    n: { column: 'd', value: 5 }
  },
  5: {
    y: { column: 'e', value: 6 },
    m: { column: 'e', value: 4 },
    n: { column: 'e', value: 3 }
  },
  15: {
    y: { column: 'e', value: 3 },
    m: { column: 'e', value: 4 },
    n: { column: 'e', value: 5 }
  },
  25: {
    y: { column: 'e', value: 2 },
    m: { column: 'e', value: 3 },
    n: { column: 'e', value: 6 }
  },
  35: {
    y: { column: 'e', value: 3 },
    m: { column: 'e', value: 4 },
    n: { column: 'e', value: 4 }
  },
  45: {
    y: { column: 'e', value: 6 },
    m: { column: 'e', value: 4 },
    n: { column: 'e', value: 4 }
  },
  55: {
    y: { column: 'e', value: 3 },
    m: { column: 'e', value: 4 },
    n: { column: 'e', value: 5 }
  },
  65: {
    y: { column: 'e', value: 5 },
    m: { column: 'e', value: 4 },
    n: { column: 'e', value: 2 }
  },
  75: {
    y: { column: 'e', value: 4 },
    m: { column: 'e', value: 4 },
    n: { column: 'e', value: 5 }
  },
  85: {
    y: { column: 'e', value: 6 },
    m: { column: 'e', value: 3 },
    n: { column: 'e', value: 3 }
  },
  95: {
    y: { column: 'e', value: 3 },
    m: { column: 'e', value: 3 },
    n: { column: 'e', value: 5 }
  },
  105: {
    y: { column: 'e', value: 3 },
    m: { column: 'e', value: 4 },
    n: { column: 'e', value: 4 }
  },
  115: {
    y: { column: 'e', value: 2 },
    m: { column: 'e', value: 4 },
    n: { column: 'e', value: 5 }
  },
  125: {
    y: { column: 'e', value: 4 },
    m: { column: 'e', value: 4 },
    n: { column: 'e', value: 5 }
  },
  135: {
    y: { column: 'e', value: 5 },
    m: { column: 'e', value: 4 },
    n: { column: 'e', value: 4 }
  },
  145: {
    y: { column: 'e', value: 4 },
    m: { column: 'e', value: 4 },
    n: { column: 'e', value: 3 }
  },
  155: {
    y: { column: 'e', value: 3 },
    m: { column: 'e', value: 3 },
    n: { column: 'e', value: 6 }
  },
  165: {
    y: { column: 'e', value: 6 },
    m: { column: 'e', value: 4 },
    n: { column: 'e', value: 3 }
  },
  175: {
    y: { column: 'e', value: 6 },
    m: { column: 'e', value: 4 },
    n: { column: 'e', value: 3 }
  },
  185: {
    y: { column: 'e', value: 0 },
    m: { column: 'e', value: 1 },
    n: { column: 'e', value: 5 }
  },
  195: {
    y: { column: 'e', value: 0 },
    m: { column: 'e', value: 1 },
    n: { column: 'e', value: 5 }
  },
  6: {
    y: { column: 'f', value: 5 },
    m: { column: 'f', value: 4 },
    n: { column: 'f', value: 4 }
  },
  16: {
    y: { column: 'f', value: 6 },
    m: { column: 'f', value: 3 },
    n: { column: 'f', value: 3 }
  },
  26: {
    y: { column: 'f', value: 5 },
    m: { column: 'f', value: 4 },
    n: { column: 'f', value: 4 }
  },
  36: {
    y: { column: 'f', value: 4 },
    m: { column: 'f', value: 4 },
    n: { column: 'f', value: 5 }
  },
  46: {
    y: { column: 'f', value: 4 },
    m: { column: 'f', value: 4 },
    n: { column: 'f', value: 5 }
  },
  56: {
    y: { column: 'f', value: 6 },
    m: { column: 'f', value: 4 },
    n: { column: 'f', value: 3 }
  },
  66: {
    y: { column: 'f', value: 3 },
    m: { column: 'f', value: 4 },
    n: { column: 'f', value: 4 }
  },
  76: {
    y: { column: 'f', value: 5 },
    m: { column: 'f', value: 4 },
    n: { column: 'f', value: 3 }
  },
  86: {
    y: { column: 'f', value: 4 },
    m: { column: 'f', value: 4 },
    n: { column: 'f', value: 6 }
  },
  96: {
    y: { column: 'f', value: 2 },
    m: { column: 'f', value: 3 },
    n: { column: 'f', value: 6 }
  },
  106: {
    y: { column: 'f', value: 6 },
    m: { column: 'f', value: 4 },
    n: { column: 'f', value: 3 }
  },
  116: {
    y: { column: 'f', value: 5 },
    m: { column: 'f', value: 4 },
    n: { column: 'f', value: 3 }
  },
  126: {
    y: { column: 'f', value: 5 },
    m: { column: 'f', value: 5 },
    n: { column: 'f', value: 3 }
  },
  136: {
    y: { column: 'f', value: 4 },
    m: { column: 'f', value: 4 },
    n: { column: 'f', value: 6 }
  },
  146: {
    y: { column: 'f', value: 3 },
    m: { column: 'f', value: 3 },
    n: { column: 'f', value: 5 }
  },
  156: {
    y: { column: 'f', value: 5 },
    m: { column: 'f', value: 4 },
    n: { column: 'f', value: 2 }
  },
  166: {
    y: { column: 'f', value: 6 },
    m: { column: 'f', value: 6 },
    n: { column: 'f', value: 3 }
  },
  176: {
    y: { column: 'f', value: 3 },
    m: { column: 'f', value: 3 },
    n: { column: 'f', value: 5 }
  },
  186: {
    y: { column: 'f', value: 6 },
    m: { column: 'f', value: 4 },
    n: { column: 'f', value: 2 }
  },
  196: {
    y: { column: 'f', value: 0 },
    m: { column: 'f', value: 3 },
    n: { column: 'f', value: 5 }
  },
  7: {
    y: { column: 'g', value: 3 },
    m: { column: 'g', value: 4 },
    n: { column: 'g', value: 6 }
  },
  17: {
    y: { column: 'g', value: 5 },
    m: { column: 'g', value: 4 },
    n: { column: 'g', value: 4 }
  },
  27: {
    y: { column: 'g', value: 5 },
    m: { column: 'g', value: 4 },
    n: { column: 'g', value: 3 }
  },
  37: {
    y: { column: 'g', value: 5 },
    m: { column: 'g', value: 5 },
    n: { column: 'g', value: 3 }
  },
  47: {
    y: { column: 'g', value: 3 },
    m: { column: 'g', value: 4 },
    n: { column: 'g', value: 5 }
  },
  57: {
    y: { column: 'g', value: 6 },
    m: { column: 'g', value: 4 },
    n: { column: 'g', value: 4 }
  },
  67: {
    y: { column: 'g', value: 2 },
    m: { column: 'g', value: 5 },
    n: { column: 'g', value: 6 }
  },
  77: {
    y: { column: 'g', value: 2 },
    m: { column: 'g', value: 5 },
    n: { column: 'g', value: 6 }
  },
  87: {
    y: { column: 'g', value: 3 },
    m: { column: 'g', value: 4 },
    n: { column: 'g', value: 6 }
  },
  97: {
    y: { column: 'g', value: 2 },
    m: { column: 'g', value: 5 },
    n: { column: 'g', value: 6 }
  },
  107: {
    y: { column: 'g', value: 5 },
    m: { column: 'g', value: 4 },
    n: { column: 'g', value: 3 }
  },
  117: {
    y: { column: 'g', value: 3 },
    m: { column: 'g', value: 4 },
    n: { column: 'g', value: 4 }
  },
  127: {
    y: { column: 'g', value: 5 },
    m: { column: 'g', value: 4 },
    n: { column: 'g', value: 3 }
  },
  137: {
    y: { column: 'g', value: 6 },
    m: { column: 'g', value: 4 },
    n: { column: 'g', value: 4 }
  },
  147: {
    y: { column: 'g', value: 6 },
    m: { column: 'g', value: 4 },
    n: { column: 'g', value: 3 }
  },
  157: {
    y: { column: 'g', value: 2 },
    m: { column: 'g', value: 5 },
    n: { column: 'g', value: 6 }
  },
  167: {
    y: { column: 'g', value: 2 },
    m: { column: 'g', value: 5 },
    n: { column: 'g', value: 6 }
  },
  177: {
    y: { column: 'g', value: 3 },
    m: { column: 'g', value: 4 },
    n: { column: 'g', value: 6 }
  },
  187: {
    y: { column: 'g', value: 3 },
    m: { column: 'g', value: 4 },
    n: { column: 'g', value: 6 }
  },
  197: {
    y: { column: 'g', value: 3 },
    m: { column: 'g', value: 5 },
    n: { column: 'g', value: 6 }
  },
  8: {
    y: { column: 'h', value: 3 },
    m: { column: 'h', value: 5 },
    n: { column: 'h', value: 6 }
  },
  18: {
    y: { column: 'h', value: 3 },
    m: { column: 'h', value: 4 },
    n: { column: 'h', value: 6 }
  },
  28: {
    y: { column: 'h', value: 5 },
    m: { column: 'h', value: 5 },
    n: { column: 'h', value: 2 }
  },
  38: {
    y: { column: 'h', value: 3 },
    m: { column: 'h', value: 4 },
    n: { column: 'h', value: 6 }
  },
  48: {
    y: { column: 'h', value: 5 },
    m: { column: 'h', value: 4 },
    n: { column: 'h', value: 4 }
  },
  58: {
    y: { column: 'h', value: 4 },
    m: { column: 'h', value: 4 },
    n: { column: 'h', value: 5 }
  },
  68: {
    y: { column: 'h', value: 2 },
    m: { column: 'h', value: 4 },
    n: { column: 'h', value: 6 }
  },
  78: {
    y: { column: 'h', value: 6 },
    m: { column: 'h', value: 3 },
    n: { column: 'h', value: 3 }
  },
  88: {
    y: { column: 'h', value: 6 },
    m: { column: 'h', value: 4 },
    n: { column: 'h', value: 3 }
  },
  98: {
    y: { column: 'h', value: 5 },
    m: { column: 'h', value: 4 },
    n: { column: 'h', value: 3 }
  },
  108: {
    y: { column: 'h', value: 3 },
    m: { column: 'h', value: 4 },
    n: { column: 'h', value: 6 }
  },
  118: {
    y: { column: 'h', value: 3 },
    m: { column: 'h', value: 4 },
    n: { column: 'h', value: 5 }
  },
  128: {
    y: { column: 'h', value: 2 },
    m: { column: 'h', value: 4 },
    n: { column: 'h', value: 6 }
  },
  138: {
    y: { column: 'h', value: 6 },
    m: { column: 'h', value: 5 },
    n: { column: 'h', value: 2 }
  },
  148: {
    y: { column: 'h', value: 6 },
    m: { column: 'h', value: 5 },
    n: { column: 'h', value: 3 }
  },
  158: {
    y: { column: 'h', value: 2 },
    m: { column: 'h', value: 5 },
    n: { column: 'h', value: 7 }
  },
  168: {
    y: { column: 'h', value: 3 },
    m: { column: 'h', value: 4 },
    n: { column: 'h', value: 6 }
  },
  178: {
    y: { column: 'h', value: 3 },
    m: { column: 'h', value: 5 },
    n: { column: 'h', value: 5 }
  },
  188: {
    y: { column: 'h', value: 6 },
    m: { column: 'h', value: 5 },
    n: { column: 'h', value: 2 }
  },
  198: {
    y: { column: 'h', value: 2 },
    m: { column: 'h', value: 5 },
    n: { column: 'h', value: 6 }
  },
  9: {
    y: { column: 'i', value: 4 },
    m: { column: 'i', value: 4 },
    n: { column: 'i', value: 5 }
  },
  19: {
    y: { column: 'i', value: 3 },
    m: { column: 'i', value: 4 },
    n: { column: 'i', value: 4 }
  },
  29: {
    y: { column: 'i', value: 5 },
    m: { column: 'i', value: 4 },
    n: { column: 'i', value: 3 }
  },
  39: {
    y: { column: 'i', value: 5 },
    m: { column: 'i', value: 3 },
    n: { column: 'i', value: 3 }
  },
  49: {
    y: { column: 'i', value: 2 },
    m: { column: 'i', value: 3 },
    n: { column: 'i', value: 6 }
  },
  59: {
    y: { column: 'i', value: 4 },
    m: { column: 'i', value: 4 },
    n: { column: 'i', value: 3 }
  },
  69: {
    y: { column: 'i', value: 6 },
    m: { column: 'i', value: 3 },
    n: { column: 'i', value: 3 }
  },
  79: {
    y: { column: 'i', value: 3 },
    m: { column: 'i', value: 3 },
    n: { column: 'i', value: 5 }
  },
  89: {
    y: { column: 'i', value: 6 },
    m: { column: 'i', value: 2 },
    n: { column: 'i', value: 2 }
  },
  99: {
    y: { column: 'i', value: 5 },
    m: { column: 'i', value: 4 },
    n: { column: 'i', value: 3 }
  },
  109: {
    y: { column: 'i', value: 5 },
    m: { column: 'i', value: 4 },
    n: { column: 'i', value: 4 }
  },
  119: {
    y: { column: 'i', value: 4 },
    m: { column: 'i', value: 4 },
    n: { column: 'i', value: 5 }
  },
  129: {
    y: { column: 'i', value: 4 },
    m: { column: 'i', value: 4 },
    n: { column: 'i', value: 3 }
  },
  139: {
    y: { column: 'i', value: 2 },
    m: { column: 'i', value: 5 },
    n: { column: 'i', value: 6 }
  },
  149: {
    y: { column: 'i', value: 2 },
    m: { column: 'i', value: 4 },
    n: { column: 'i', value: 5 }
  },
  159: {
    y: { column: 'i', value: 5 },
    m: { column: 'i', value: 4 },
    n: { column: 'i', value: 4 }
  },
  169: {
    y: { column: 'i', value: 4 },
    m: { column: 'i', value: 4 },
    n: { column: 'i', value: 5 }
  },
  179: {
    y: { column: 'i', value: 3 },
    m: { column: 'i', value: 4 },
    n: { column: 'i', value: 5 }
  },
  189: {
    y: { column: 'i', value: 5 },
    m: { column: 'i', value: 4 },
    n: { column: 'i', value: 3 }
  },
  199: {
    y: { column: 'i', value: 5 },
    m: { column: 'i', value: 3 },
    n: { column: 'i', value: 3 }
  },
  10: {
    y: { column: 'j', value: 3 },
    m: { column: 'j', value: 4 },
    n: { column: 'j', value: 5 }
  },
  20: {
    y: { column: 'j', value: 6 },
    m: { column: 'j', value: 2 },
    n: { column: 'j', value: 2 }
  },
  30: {
    y: { column: 'j', value: 6 },
    m: { column: 'j', value: 3 },
    n: { column: 'j', value: 3 }
  },
  40: {
    y: { column: 'j', value: 3 },
    m: { column: 'j', value: 4 },
    n: { column: 'j', value: 5 }
  },
  50: {
    y: { column: 'j', value: 6 },
    m: { column: 'j', value: 2 },
    n: { column: 'j', value: 2 }
  },
  60: {
    y: { column: 'j', value: 6 },
    m: { column: 'j', value: 3 },
    n: { column: 'j', value: 3 }
  },
  70: {
    y: { column: 'j', value: 5 },
    m: { column: 'j', value: 3 },
    n: { column: 'j', value: 3 }
  },
  80: {
    y: { column: 'j', value: 6 },
    m: { column: 'j', value: 2 },
    n: { column: 'j', value: 2 }
  },
  90: {
    y: { column: 'j', value: 2 },
    m: { column: 'j', value: 3 },
    n: { column: 'j', value: 6 }
  },
  100: {
    y: { column: 'j', value: 5 },
    m: { column: 'j', value: 4 },
    n: { column: 'j', value: 4 }
  },
  110: {
    y: { column: 'j', value: 2 },
    m: { column: 'j', value: 2 },
    n: { column: 'j', value: 6 }
  },
  120: {
    y: { column: 'j', value: 7 },
    m: { column: 'j', value: 2 },
    n: { column: 'j', value: 2 }
  },
  130: {
    y: { column: 'j', value: 5 },
    m: { column: 'j', value: 4 },
    n: { column: 'j', value: 3 }
  },
  140: {
    y: { column: 'j', value: 3 },
    m: { column: 'j', value: 5 },
    n: { column: 'j', value: 5 }
  },
  150: {
    y: { column: 'j', value: 7 },
    m: { column: 'j', value: 1 },
    n: { column: 'j', value: 1 }
  },
  160: {
    y: { column: 'j', value: 2 },
    m: { column: 'j', value: 2 },
    n: { column: 'j', value: 6 }
  },
  170: {
    y: { column: 'j', value: 6 },
    m: { column: 'j', value: 4 },
    n: { column: 'j', value: 2 }
  },
  180: {
    y: { column: 'j', value: 6 },
    m: { column: 'j', value: 2 },
    n: { column: 'j', value: 2 }
  },
  190: {
    y: { column: 'j', value: 5 },
    m: { column: 'j', value: 4 },
    n: { column: 'j', value: 3 }
  },
  200: {
    y: { column: 'j', value: 5 },
    m: { column: 'j', value: 3 },
    n: { column: 'j', value: 3 }
  }
};

module.exports = values;
