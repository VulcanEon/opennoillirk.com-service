var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e3) {
    throw mod = 0, e3;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/qrcode/lib/can-promise.js
var require_can_promise = __commonJS({
  "node_modules/qrcode/lib/can-promise.js"(exports, module) {
    module.exports = function() {
      return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
    };
  }
});

// node_modules/qrcode/lib/core/utils.js
var require_utils = __commonJS({
  "node_modules/qrcode/lib/core/utils.js"(exports) {
    var toSJISFunction;
    var CODEWORDS_COUNT = [
      0,
      // Not used
      26,
      44,
      70,
      100,
      134,
      172,
      196,
      242,
      292,
      346,
      404,
      466,
      532,
      581,
      655,
      733,
      815,
      901,
      991,
      1085,
      1156,
      1258,
      1364,
      1474,
      1588,
      1706,
      1828,
      1921,
      2051,
      2185,
      2323,
      2465,
      2611,
      2761,
      2876,
      3034,
      3196,
      3362,
      3532,
      3706
    ];
    exports.getSymbolSize = function getSymbolSize(version) {
      if (!version) throw new Error('"version" cannot be null or undefined');
      if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
      return version * 4 + 17;
    };
    exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
      return CODEWORDS_COUNT[version];
    };
    exports.getBCHDigit = function(data) {
      let digit = 0;
      while (data !== 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    };
    exports.setToSJISFunction = function setToSJISFunction(f2) {
      if (typeof f2 !== "function") {
        throw new Error('"toSJISFunc" is not a valid function.');
      }
      toSJISFunction = f2;
    };
    exports.isKanjiModeEnabled = function() {
      return typeof toSJISFunction !== "undefined";
    };
    exports.toSJIS = function toSJIS(kanji) {
      return toSJISFunction(kanji);
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-level.js
var require_error_correction_level = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
    exports.L = { bit: 1 };
    exports.M = { bit: 0 };
    exports.Q = { bit: 3 };
    exports.H = { bit: 2 };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports.L;
        case "m":
        case "medium":
          return exports.M;
        case "q":
        case "quartile":
          return exports.Q;
        case "h":
        case "high":
          return exports.H;
        default:
          throw new Error("Unknown EC Level: " + string);
      }
    }
    exports.isValid = function isValid(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    };
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e3) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/bit-buffer.js
var require_bit_buffer = __commonJS({
  "node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
    function BitBuffer() {
      this.buffer = [];
      this.length = 0;
    }
    BitBuffer.prototype = {
      get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
      },
      put: function(num, length) {
        for (let i3 = 0; i3 < length; i3++) {
          this.putBit((num >>> length - i3 - 1 & 1) === 1);
        }
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }
        if (bit) {
          this.buffer[bufIndex] |= 128 >>> this.length % 8;
        }
        this.length++;
      }
    };
    module.exports = BitBuffer;
  }
});

// node_modules/qrcode/lib/core/bit-matrix.js
var require_bit_matrix = __commonJS({
  "node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
    function BitMatrix(size) {
      if (!size || size < 1) {
        throw new Error("BitMatrix size must be defined and greater than 0");
      }
      this.size = size;
      this.data = new Uint8Array(size * size);
      this.reservedBit = new Uint8Array(size * size);
    }
    BitMatrix.prototype.set = function(row, col, value, reserved) {
      const index = row * this.size + col;
      this.data[index] = value;
      if (reserved) this.reservedBit[index] = true;
    };
    BitMatrix.prototype.get = function(row, col) {
      return this.data[row * this.size + col];
    };
    BitMatrix.prototype.xor = function(row, col, value) {
      this.data[row * this.size + col] ^= value;
    };
    BitMatrix.prototype.isReserved = function(row, col) {
      return this.reservedBit[row * this.size + col];
    };
    module.exports = BitMatrix;
  }
});

// node_modules/qrcode/lib/core/alignment-pattern.js
var require_alignment_pattern = __commonJS({
  "node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
    var getSymbolSize = require_utils().getSymbolSize;
    exports.getRowColCoords = function getRowColCoords(version) {
      if (version === 1) return [];
      const posCount = Math.floor(version / 7) + 2;
      const size = getSymbolSize(version);
      const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
      const positions = [size - 7];
      for (let i3 = 1; i3 < posCount - 1; i3++) {
        positions[i3] = positions[i3 - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    };
    exports.getPositions = function getPositions(version) {
      const coords = [];
      const pos = exports.getRowColCoords(version);
      const posLength = pos.length;
      for (let i3 = 0; i3 < posLength; i3++) {
        for (let j2 = 0; j2 < posLength; j2++) {
          if (i3 === 0 && j2 === 0 || // top-left
          i3 === 0 && j2 === posLength - 1 || // bottom-left
          i3 === posLength - 1 && j2 === 0) {
            continue;
          }
          coords.push([pos[i3], pos[j2]]);
        }
      }
      return coords;
    };
  }
});

// node_modules/qrcode/lib/core/finder-pattern.js
var require_finder_pattern = __commonJS({
  "node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
    var getSymbolSize = require_utils().getSymbolSize;
    var FINDER_PATTERN_SIZE = 7;
    exports.getPositions = function getPositions(version) {
      const size = getSymbolSize(version);
      return [
        // top-left
        [0, 0],
        // top-right
        [size - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size - FINDER_PATTERN_SIZE]
      ];
    };
  }
});

// node_modules/qrcode/lib/core/mask-pattern.js
var require_mask_pattern = __commonJS({
  "node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
    exports.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports.isValid = function isValid(mask) {
      return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    exports.from = function from(value) {
      return exports.isValid(value) ? parseInt(value, 10) : void 0;
    };
    exports.getPenaltyN1 = function getPenaltyN1(data) {
      const size = data.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size; col++) {
          let module2 = data.get(row, col);
          if (module2 === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module2;
            sameCountCol = 1;
          }
          module2 = data.get(col, row);
          if (module2 === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module2;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    };
    exports.getPenaltyN2 = function getPenaltyN2(data) {
      const size = data.size;
      let points = 0;
      for (let row = 0; row < size - 1; row++) {
        for (let col = 0; col < size - 1; col++) {
          const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0) points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports.getPenaltyN3 = function getPenaltyN3(data) {
      const size = data.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
          bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports.getPenaltyN4 = function getPenaltyN4(data) {
      let darkCount = 0;
      const modulesCount = data.data.length;
      for (let i3 = 0; i3 < modulesCount; i3++) darkCount += data.data[i3];
      const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k * PenaltyScores.N4;
    };
    function getMaskAt(maskPattern, i3, j2) {
      switch (maskPattern) {
        case exports.Patterns.PATTERN000:
          return (i3 + j2) % 2 === 0;
        case exports.Patterns.PATTERN001:
          return i3 % 2 === 0;
        case exports.Patterns.PATTERN010:
          return j2 % 3 === 0;
        case exports.Patterns.PATTERN011:
          return (i3 + j2) % 3 === 0;
        case exports.Patterns.PATTERN100:
          return (Math.floor(i3 / 2) + Math.floor(j2 / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
          return i3 * j2 % 2 + i3 * j2 % 3 === 0;
        case exports.Patterns.PATTERN110:
          return (i3 * j2 % 2 + i3 * j2 % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
          return (i3 * j2 % 3 + (i3 + j2) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    }
    exports.applyMask = function applyMask(pattern, data) {
      const size = data.size;
      for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
          if (data.isReserved(row, col)) continue;
          data.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    };
    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
      const numPatterns = Object.keys(exports.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p3 = 0; p3 < numPatterns; p3++) {
        setupFormatFunc(p3);
        exports.applyMask(p3, data);
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        exports.applyMask(p3, data);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p3;
        }
      }
      return bestPattern;
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-code.js
var require_error_correction_code = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
    var ECLevel = require_error_correction_level();
    var EC_BLOCKS_TABLE = [
      // L  M  Q  H
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      1,
      2,
      2,
      4,
      1,
      2,
      4,
      4,
      2,
      4,
      4,
      4,
      2,
      4,
      6,
      5,
      2,
      4,
      6,
      6,
      2,
      5,
      8,
      8,
      4,
      5,
      8,
      8,
      4,
      5,
      8,
      11,
      4,
      8,
      10,
      11,
      4,
      9,
      12,
      16,
      4,
      9,
      16,
      16,
      6,
      10,
      12,
      18,
      6,
      10,
      17,
      16,
      6,
      11,
      16,
      19,
      6,
      13,
      18,
      21,
      7,
      14,
      21,
      25,
      8,
      16,
      20,
      25,
      8,
      17,
      23,
      25,
      9,
      17,
      23,
      34,
      9,
      18,
      25,
      30,
      10,
      20,
      27,
      32,
      12,
      21,
      29,
      35,
      12,
      23,
      34,
      37,
      12,
      25,
      34,
      40,
      13,
      26,
      35,
      42,
      14,
      28,
      38,
      45,
      15,
      29,
      40,
      48,
      16,
      31,
      43,
      51,
      17,
      33,
      45,
      54,
      18,
      35,
      48,
      57,
      19,
      37,
      51,
      60,
      19,
      38,
      53,
      63,
      20,
      40,
      56,
      66,
      21,
      43,
      59,
      70,
      22,
      45,
      62,
      74,
      24,
      47,
      65,
      77,
      25,
      49,
      68,
      81
    ];
    var EC_CODEWORDS_TABLE = [
      // L  M  Q  H
      7,
      10,
      13,
      17,
      10,
      16,
      22,
      28,
      15,
      26,
      36,
      44,
      20,
      36,
      52,
      64,
      26,
      48,
      72,
      88,
      36,
      64,
      96,
      112,
      40,
      72,
      108,
      130,
      48,
      88,
      132,
      156,
      60,
      110,
      160,
      192,
      72,
      130,
      192,
      224,
      80,
      150,
      224,
      264,
      96,
      176,
      260,
      308,
      104,
      198,
      288,
      352,
      120,
      216,
      320,
      384,
      132,
      240,
      360,
      432,
      144,
      280,
      408,
      480,
      168,
      308,
      448,
      532,
      180,
      338,
      504,
      588,
      196,
      364,
      546,
      650,
      224,
      416,
      600,
      700,
      224,
      442,
      644,
      750,
      252,
      476,
      690,
      816,
      270,
      504,
      750,
      900,
      300,
      560,
      810,
      960,
      312,
      588,
      870,
      1050,
      336,
      644,
      952,
      1110,
      360,
      700,
      1020,
      1200,
      390,
      728,
      1050,
      1260,
      420,
      784,
      1140,
      1350,
      450,
      812,
      1200,
      1440,
      480,
      868,
      1290,
      1530,
      510,
      924,
      1350,
      1620,
      540,
      980,
      1440,
      1710,
      570,
      1036,
      1530,
      1800,
      570,
      1064,
      1590,
      1890,
      600,
      1120,
      1680,
      1980,
      630,
      1204,
      1770,
      2100,
      660,
      1260,
      1860,
      2220,
      720,
      1316,
      1950,
      2310,
      750,
      1372,
      2040,
      2430
    ];
    exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
  }
});

// node_modules/qrcode/lib/core/galois-field.js
var require_galois_field = __commonJS({
  "node_modules/qrcode/lib/core/galois-field.js"(exports) {
    var EXP_TABLE = new Uint8Array(512);
    var LOG_TABLE = new Uint8Array(256);
    (function initTables() {
      let x2 = 1;
      for (let i3 = 0; i3 < 255; i3++) {
        EXP_TABLE[i3] = x2;
        LOG_TABLE[x2] = i3;
        x2 <<= 1;
        if (x2 & 256) {
          x2 ^= 285;
        }
      }
      for (let i3 = 255; i3 < 512; i3++) {
        EXP_TABLE[i3] = EXP_TABLE[i3 - 255];
      }
    })();
    exports.log = function log(n2) {
      if (n2 < 1) throw new Error("log(" + n2 + ")");
      return LOG_TABLE[n2];
    };
    exports.exp = function exp(n2) {
      return EXP_TABLE[n2];
    };
    exports.mul = function mul(x2, y2) {
      if (x2 === 0 || y2 === 0) return 0;
      return EXP_TABLE[LOG_TABLE[x2] + LOG_TABLE[y2]];
    };
  }
});

// node_modules/qrcode/lib/core/polynomial.js
var require_polynomial = __commonJS({
  "node_modules/qrcode/lib/core/polynomial.js"(exports) {
    var GF = require_galois_field();
    exports.mul = function mul(p1, p22) {
      const coeff = new Uint8Array(p1.length + p22.length - 1);
      for (let i3 = 0; i3 < p1.length; i3++) {
        for (let j2 = 0; j2 < p22.length; j2++) {
          coeff[i3 + j2] ^= GF.mul(p1[i3], p22[j2]);
        }
      }
      return coeff;
    };
    exports.mod = function mod(divident, divisor) {
      let result = new Uint8Array(divident);
      while (result.length - divisor.length >= 0) {
        const coeff = result[0];
        for (let i3 = 0; i3 < divisor.length; i3++) {
          result[i3] ^= GF.mul(divisor[i3], coeff);
        }
        let offset = 0;
        while (offset < result.length && result[offset] === 0) offset++;
        result = result.slice(offset);
      }
      return result;
    };
    exports.generateECPolynomial = function generateECPolynomial(degree) {
      let poly = new Uint8Array([1]);
      for (let i3 = 0; i3 < degree; i3++) {
        poly = exports.mul(poly, new Uint8Array([1, GF.exp(i3)]));
      }
      return poly;
    };
  }
});

// node_modules/qrcode/lib/core/reed-solomon-encoder.js
var require_reed_solomon_encoder = __commonJS({
  "node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
    var Polynomial = require_polynomial();
    function ReedSolomonEncoder(degree) {
      this.genPoly = void 0;
      this.degree = degree;
      if (this.degree) this.initialize(this.degree);
    }
    ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
      this.degree = degree;
      this.genPoly = Polynomial.generateECPolynomial(this.degree);
    };
    ReedSolomonEncoder.prototype.encode = function encode(data) {
      if (!this.genPoly) {
        throw new Error("Encoder not initialized");
      }
      const paddedData = new Uint8Array(data.length + this.degree);
      paddedData.set(data);
      const remainder = Polynomial.mod(paddedData, this.genPoly);
      const start2 = this.degree - remainder.length;
      if (start2 > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start2);
        return buff;
      }
      return remainder;
    };
    module.exports = ReedSolomonEncoder;
  }
});

// node_modules/qrcode/lib/core/version-check.js
var require_version_check = __commonJS({
  "node_modules/qrcode/lib/core/version-check.js"(exports) {
    exports.isValid = function isValid(version) {
      return !isNaN(version) && version >= 1 && version <= 40;
    };
  }
});

// node_modules/qrcode/lib/core/regex.js
var require_regex = __commonJS({
  "node_modules/qrcode/lib/core/regex.js"(exports) {
    var numeric = "[0-9]+";
    var alphanumeric = "[A-Z $%*+\\-./:]+";
    var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    kanji = kanji.replace(/u/g, "\\u");
    var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
    exports.KANJI = new RegExp(kanji, "g");
    exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    exports.BYTE = new RegExp(byte, "g");
    exports.NUMERIC = new RegExp(numeric, "g");
    exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
    var TEST_KANJI = new RegExp("^" + kanji + "$");
    var TEST_NUMERIC = new RegExp("^" + numeric + "$");
    var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    exports.testKanji = function testKanji(str) {
      return TEST_KANJI.test(str);
    };
    exports.testNumeric = function testNumeric(str) {
      return TEST_NUMERIC.test(str);
    };
    exports.testAlphanumeric = function testAlphanumeric(str) {
      return TEST_ALPHANUMERIC.test(str);
    };
  }
});

// node_modules/qrcode/lib/core/mode.js
var require_mode = __commonJS({
  "node_modules/qrcode/lib/core/mode.js"(exports) {
    var VersionCheck = require_version_check();
    var Regex = require_regex();
    exports.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports.MIXED = {
      bit: -1
    };
    exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
      if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid version: " + version);
      }
      if (version >= 1 && version < 10) return mode.ccBits[0];
      else if (version < 27) return mode.ccBits[1];
      return mode.ccBits[2];
    };
    exports.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr)) return exports.KANJI;
      else return exports.BYTE;
    };
    exports.toString = function toString(mode) {
      if (mode && mode.id) return mode.id;
      throw new Error("Invalid mode");
    };
    exports.isValid = function isValid(mode) {
      return mode && mode.bit && mode.ccBits;
    };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports.NUMERIC;
        case "alphanumeric":
          return exports.ALPHANUMERIC;
        case "kanji":
          return exports.KANJI;
        case "byte":
          return exports.BYTE;
        default:
          throw new Error("Unknown mode: " + string);
      }
    }
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e3) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/version.js
var require_version = __commonJS({
  "node_modules/qrcode/lib/core/version.js"(exports) {
    var Utils = require_utils();
    var ECCode = require_error_correction_code();
    var ECLevel = require_error_correction_level();
    var Mode = require_mode();
    var VersionCheck = require_version_check();
    var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    var G18_BCH = Utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    function getReservedBitsCount(mode, version) {
      return Mode.getCharCountIndicator(mode, version) + 4;
    }
    function getTotalBitsFromDataArray(segments, version) {
      let totalBits = 0;
      segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
      });
      return totalBits;
    }
    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    exports.from = function from(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    };
    exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode === "undefined") mode = Mode.BYTE;
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode === Mode.MIXED) return dataTotalCodewordsBits;
      const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
      switch (mode) {
        case Mode.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
          return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
      let seg;
      const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
      if (Array.isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
          return 1;
        }
        seg = data[0];
      } else {
        seg = data;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    exports.getEncodedBits = function getEncodedBits(version) {
      if (!VersionCheck.isValid(version) || version < 7) {
        throw new Error("Invalid QR Code version");
      }
      let d3 = version << 12;
      while (Utils.getBCHDigit(d3) - G18_BCH >= 0) {
        d3 ^= G18 << Utils.getBCHDigit(d3) - G18_BCH;
      }
      return version << 12 | d3;
    };
  }
});

// node_modules/qrcode/lib/core/format-info.js
var require_format_info = __commonJS({
  "node_modules/qrcode/lib/core/format-info.js"(exports) {
    var Utils = require_utils();
    var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    var G15_BCH = Utils.getBCHDigit(G15);
    exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
      const data = errorCorrectionLevel.bit << 3 | mask;
      let d3 = data << 10;
      while (Utils.getBCHDigit(d3) - G15_BCH >= 0) {
        d3 ^= G15 << Utils.getBCHDigit(d3) - G15_BCH;
      }
      return (data << 10 | d3) ^ G15_MASK;
    };
  }
});

// node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = __commonJS({
  "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
    var Mode = require_mode();
    function NumericData(data) {
      this.mode = Mode.NUMERIC;
      this.data = data.toString();
    }
    NumericData.getBitsLength = function getBitsLength(length) {
      return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
    };
    NumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    NumericData.prototype.getBitsLength = function getBitsLength() {
      return NumericData.getBitsLength(this.data.length);
    };
    NumericData.prototype.write = function write(bitBuffer) {
      let i3, group, value;
      for (i3 = 0; i3 + 3 <= this.data.length; i3 += 3) {
        group = this.data.substr(i3, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
      }
      const remainingNum = this.data.length - i3;
      if (remainingNum > 0) {
        group = this.data.substr(i3);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
      }
    };
    module.exports = NumericData;
  }
});

// node_modules/qrcode/lib/core/alphanumeric-data.js
var require_alphanumeric_data = __commonJS({
  "node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
    var Mode = require_mode();
    var ALPHA_NUM_CHARS = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "$",
      "%",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":"
    ];
    function AlphanumericData(data) {
      this.mode = Mode.ALPHANUMERIC;
      this.data = data;
    }
    AlphanumericData.getBitsLength = function getBitsLength(length) {
      return 11 * Math.floor(length / 2) + 6 * (length % 2);
    };
    AlphanumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    AlphanumericData.prototype.getBitsLength = function getBitsLength() {
      return AlphanumericData.getBitsLength(this.data.length);
    };
    AlphanumericData.prototype.write = function write(bitBuffer) {
      let i3;
      for (i3 = 0; i3 + 2 <= this.data.length; i3 += 2) {
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i3]) * 45;
        value += ALPHA_NUM_CHARS.indexOf(this.data[i3 + 1]);
        bitBuffer.put(value, 11);
      }
      if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i3]), 6);
      }
    };
    module.exports = AlphanumericData;
  }
});

// node_modules/qrcode/lib/core/byte-data.js
var require_byte_data = __commonJS({
  "node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
    var Mode = require_mode();
    function ByteData(data) {
      this.mode = Mode.BYTE;
      if (typeof data === "string") {
        this.data = new TextEncoder().encode(data);
      } else {
        this.data = new Uint8Array(data);
      }
    }
    ByteData.getBitsLength = function getBitsLength(length) {
      return length * 8;
    };
    ByteData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    ByteData.prototype.getBitsLength = function getBitsLength() {
      return ByteData.getBitsLength(this.data.length);
    };
    ByteData.prototype.write = function(bitBuffer) {
      for (let i3 = 0, l3 = this.data.length; i3 < l3; i3++) {
        bitBuffer.put(this.data[i3], 8);
      }
    };
    module.exports = ByteData;
  }
});

// node_modules/qrcode/lib/core/kanji-data.js
var require_kanji_data = __commonJS({
  "node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
    var Mode = require_mode();
    var Utils = require_utils();
    function KanjiData(data) {
      this.mode = Mode.KANJI;
      this.data = data;
    }
    KanjiData.getBitsLength = function getBitsLength(length) {
      return length * 13;
    };
    KanjiData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    KanjiData.prototype.getBitsLength = function getBitsLength() {
      return KanjiData.getBitsLength(this.data.length);
    };
    KanjiData.prototype.write = function(bitBuffer) {
      let i3;
      for (i3 = 0; i3 < this.data.length; i3++) {
        let value = Utils.toSJIS(this.data[i3]);
        if (value >= 33088 && value <= 40956) {
          value -= 33088;
        } else if (value >= 57408 && value <= 60351) {
          value -= 49472;
        } else {
          throw new Error(
            "Invalid SJIS character: " + this.data[i3] + "\nMake sure your charset is UTF-8"
          );
        }
        value = (value >>> 8 & 255) * 192 + (value & 255);
        bitBuffer.put(value, 13);
      }
    };
    module.exports = KanjiData;
  }
});

// node_modules/dijkstrajs/dijkstra.js
var require_dijkstra = __commonJS({
  "node_modules/dijkstrajs/dijkstra.js"(exports, module) {
    "use strict";
    var dijkstra = {
      single_source_shortest_paths: function(graph, s3, d3) {
        var predecessors = {};
        var costs = {};
        costs[s3] = 0;
        var open = dijkstra.PriorityQueue.make();
        open.push(s3, 0);
        var closest, u3, v2, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while (!open.empty()) {
          closest = open.pop();
          u3 = closest.value;
          cost_of_s_to_u = closest.cost;
          adjacent_nodes = graph[u3] || {};
          for (v2 in adjacent_nodes) {
            if (adjacent_nodes.hasOwnProperty(v2)) {
              cost_of_e = adjacent_nodes[v2];
              cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
              cost_of_s_to_v = costs[v2];
              first_visit = typeof costs[v2] === "undefined";
              if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                costs[v2] = cost_of_s_to_u_plus_cost_of_e;
                open.push(v2, cost_of_s_to_u_plus_cost_of_e);
                predecessors[v2] = u3;
              }
            }
          }
        }
        if (typeof d3 !== "undefined" && typeof costs[d3] === "undefined") {
          var msg = ["Could not find a path from ", s3, " to ", d3, "."].join("");
          throw new Error(msg);
        }
        return predecessors;
      },
      extract_shortest_path_from_predecessor_list: function(predecessors, d3) {
        var nodes = [];
        var u3 = d3;
        var predecessor;
        while (u3) {
          nodes.push(u3);
          predecessor = predecessors[u3];
          u3 = predecessors[u3];
        }
        nodes.reverse();
        return nodes;
      },
      find_path: function(graph, s3, d3) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s3, d3);
        return dijkstra.extract_shortest_path_from_predecessor_list(
          predecessors,
          d3
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(opts) {
          var T2 = dijkstra.PriorityQueue, t3 = {}, key;
          opts = opts || {};
          for (key in T2) {
            if (T2.hasOwnProperty(key)) {
              t3[key] = T2[key];
            }
          }
          t3.queue = [];
          t3.sorter = opts.sorter || T2.default_sorter;
          return t3;
        },
        default_sorter: function(a3, b2) {
          return a3.cost - b2.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(value, cost) {
          var item = { value, cost };
          this.queue.push(item);
          this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    if (typeof module !== "undefined") {
      module.exports = dijkstra;
    }
  }
});

// node_modules/qrcode/lib/core/segments.js
var require_segments = __commonJS({
  "node_modules/qrcode/lib/core/segments.js"(exports) {
    var Mode = require_mode();
    var NumericData = require_numeric_data();
    var AlphanumericData = require_alphanumeric_data();
    var ByteData = require_byte_data();
    var KanjiData = require_kanji_data();
    var Regex = require_regex();
    var Utils = require_utils();
    var dijkstra = require_dijkstra();
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    function getSegments(regex, mode, str) {
      const segments = [];
      let result;
      while ((result = regex.exec(str)) !== null) {
        segments.push({
          data: result[0],
          index: result.index,
          mode,
          length: result[0].length
        });
      }
      return segments;
    }
    function getSegmentsFromString(dataStr) {
      const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
      const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
      let byteSegs;
      let kanjiSegs;
      if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
      }
      const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s22) {
        return s1.index - s22.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    function getSegmentBitsLength(length, mode) {
      switch (mode) {
        case Mode.NUMERIC:
          return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
          return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
          return KanjiData.getBitsLength(length);
        case Mode.BYTE:
          return ByteData.getBitsLength(length);
      }
    }
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    function buildNodes(segs) {
      const nodes = [];
      for (let i3 = 0; i3 < segs.length; i3++) {
        const seg = segs[i3];
        switch (seg.mode) {
          case Mode.NUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.ALPHANUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.KANJI:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
            break;
          case Mode.BYTE:
            nodes.push([
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
        }
      }
      return nodes;
    }
    function buildGraph(nodes, version) {
      const table = {};
      const graph = { start: {} };
      let prevNodeIds = ["start"];
      for (let i3 = 0; i3 < nodes.length; i3++) {
        const nodeGroup = nodes[i3];
        const currentNodeIds = [];
        for (let j2 = 0; j2 < nodeGroup.length; j2++) {
          const node = nodeGroup[j2];
          const key = "" + i3 + j2;
          currentNodeIds.push(key);
          table[key] = { node, lastCount: 0 };
          graph[key] = {};
          for (let n2 = 0; n2 < prevNodeIds.length; n2++) {
            const prevNodeId = prevNodeIds[n2];
            if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
              table[prevNodeId].lastCount += node.length;
            } else {
              if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (let n2 = 0; n2 < prevNodeIds.length; n2++) {
        graph[prevNodeIds[n2]].end = 0;
      }
      return { map: graph, table };
    }
    function buildSingleSegment(data, modesHint) {
      let mode;
      const bestMode = Mode.getBestModeForData(data);
      mode = Mode.from(modesHint, bestMode);
      if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
      }
      if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
      }
      switch (mode) {
        case Mode.NUMERIC:
          return new NumericData(data);
        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data);
        case Mode.KANJI:
          return new KanjiData(data);
        case Mode.BYTE:
          return new ByteData(data);
      }
    }
    exports.fromArray = function fromArray(array) {
      return array.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    };
    exports.fromString = function fromString(data, version) {
      const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version);
      const path = dijkstra.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i3 = 1; i3 < path.length - 1; i3++) {
        optimizedSegs.push(graph.table[path[i3]].node);
      }
      return exports.fromArray(mergeSegments(optimizedSegs));
    };
    exports.rawSplit = function rawSplit(data) {
      return exports.fromArray(
        getSegmentsFromString(data, Utils.isKanjiModeEnabled())
      );
    };
  }
});

// node_modules/qrcode/lib/core/qrcode.js
var require_qrcode = __commonJS({
  "node_modules/qrcode/lib/core/qrcode.js"(exports) {
    var Utils = require_utils();
    var ECLevel = require_error_correction_level();
    var BitBuffer = require_bit_buffer();
    var BitMatrix = require_bit_matrix();
    var AlignmentPattern = require_alignment_pattern();
    var FinderPattern = require_finder_pattern();
    var MaskPattern = require_mask_pattern();
    var ECCode = require_error_correction_code();
    var ReedSolomonEncoder = require_reed_solomon_encoder();
    var Version = require_version();
    var FormatInfo = require_format_info();
    var Mode = require_mode();
    var Segments = require_segments();
    function setupFinderPattern(matrix, version) {
      const size = matrix.size;
      const pos = FinderPattern.getPositions(version);
      for (let i3 = 0; i3 < pos.length; i3++) {
        const row = pos[i3][0];
        const col = pos[i3][1];
        for (let r3 = -1; r3 <= 7; r3++) {
          if (row + r3 <= -1 || size <= row + r3) continue;
          for (let c3 = -1; c3 <= 7; c3++) {
            if (col + c3 <= -1 || size <= col + c3) continue;
            if (r3 >= 0 && r3 <= 6 && (c3 === 0 || c3 === 6) || c3 >= 0 && c3 <= 6 && (r3 === 0 || r3 === 6) || r3 >= 2 && r3 <= 4 && c3 >= 2 && c3 <= 4) {
              matrix.set(row + r3, col + c3, true, true);
            } else {
              matrix.set(row + r3, col + c3, false, true);
            }
          }
        }
      }
    }
    function setupTimingPattern(matrix) {
      const size = matrix.size;
      for (let r3 = 8; r3 < size - 8; r3++) {
        const value = r3 % 2 === 0;
        matrix.set(r3, 6, value, true);
        matrix.set(6, r3, value, true);
      }
    }
    function setupAlignmentPattern(matrix, version) {
      const pos = AlignmentPattern.getPositions(version);
      for (let i3 = 0; i3 < pos.length; i3++) {
        const row = pos[i3][0];
        const col = pos[i3][1];
        for (let r3 = -2; r3 <= 2; r3++) {
          for (let c3 = -2; c3 <= 2; c3++) {
            if (r3 === -2 || r3 === 2 || c3 === -2 || c3 === 2 || r3 === 0 && c3 === 0) {
              matrix.set(row + r3, col + c3, true, true);
            } else {
              matrix.set(row + r3, col + c3, false, true);
            }
          }
        }
      }
    }
    function setupVersionInfo(matrix, version) {
      const size = matrix.size;
      const bits = Version.getEncodedBits(version);
      let row, col, mod;
      for (let i3 = 0; i3 < 18; i3++) {
        row = Math.floor(i3 / 3);
        col = i3 % 3 + size - 8 - 3;
        mod = (bits >> i3 & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
      }
    }
    function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
      const size = matrix.size;
      const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
      let i3, mod;
      for (i3 = 0; i3 < 15; i3++) {
        mod = (bits >> i3 & 1) === 1;
        if (i3 < 6) {
          matrix.set(i3, 8, mod, true);
        } else if (i3 < 8) {
          matrix.set(i3 + 1, 8, mod, true);
        } else {
          matrix.set(size - 15 + i3, 8, mod, true);
        }
        if (i3 < 8) {
          matrix.set(8, size - i3 - 1, mod, true);
        } else if (i3 < 9) {
          matrix.set(8, 15 - i3 - 1 + 1, mod, true);
        } else {
          matrix.set(8, 15 - i3 - 1, mod, true);
        }
      }
      matrix.set(size - 8, 8, 1, true);
    }
    function setupData(matrix, data) {
      const size = matrix.size;
      let inc = -1;
      let row = size - 1;
      let bitIndex = 7;
      let byteIndex = 0;
      for (let col = size - 1; col > 0; col -= 2) {
        if (col === 6) col--;
        while (true) {
          for (let c3 = 0; c3 < 2; c3++) {
            if (!matrix.isReserved(row, col - c3)) {
              let dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) === 1;
              }
              matrix.set(row, col - c3, dark);
              bitIndex--;
              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || size <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
    function createData(version, errorCorrectionLevel, segments) {
      const buffer = new BitBuffer();
      segments.forEach(function(data) {
        buffer.put(data.mode.bit, 4);
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        data.write(buffer);
      });
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
      }
      const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
      for (let i3 = 0; i3 < remainingByte; i3++) {
        buffer.put(i3 % 2 ? 17 : 236, 8);
      }
      return createCodewords(buffer, version, errorCorrectionLevel);
    }
    function createCodewords(bitBuffer, version, errorCorrectionLevel) {
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewords = totalCodewords - ecTotalCodewords;
      const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
      const blocksInGroup2 = totalCodewords % ecTotalBlocks;
      const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
      const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
      const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
      const rs = new ReedSolomonEncoder(ecCount);
      let offset = 0;
      const dcData = new Array(ecTotalBlocks);
      const ecData = new Array(ecTotalBlocks);
      let maxDataSize = 0;
      const buffer = new Uint8Array(bitBuffer.buffer);
      for (let b2 = 0; b2 < ecTotalBlocks; b2++) {
        const dataSize = b2 < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        dcData[b2] = buffer.slice(offset, offset + dataSize);
        ecData[b2] = rs.encode(dcData[b2]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
      }
      const data = new Uint8Array(totalCodewords);
      let index = 0;
      let i3, r3;
      for (i3 = 0; i3 < maxDataSize; i3++) {
        for (r3 = 0; r3 < ecTotalBlocks; r3++) {
          if (i3 < dcData[r3].length) {
            data[index++] = dcData[r3][i3];
          }
        }
      }
      for (i3 = 0; i3 < ecCount; i3++) {
        for (r3 = 0; r3 < ecTotalBlocks; r3++) {
          data[index++] = ecData[r3][i3];
        }
      }
      return data;
    }
    function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
      let segments;
      if (Array.isArray(data)) {
        segments = Segments.fromArray(data);
      } else if (typeof data === "string") {
        let estimatedVersion = version;
        if (!estimatedVersion) {
          const rawSegments = Segments.rawSplit(data);
          estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        segments = Segments.fromString(data, estimatedVersion || 40);
      } else {
        throw new Error("Invalid data");
      }
      const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
      if (!bestVersion) {
        throw new Error("The amount of data is too big to be stored in a QR Code");
      }
      if (!version) {
        version = bestVersion;
      } else if (version < bestVersion) {
        throw new Error(
          "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
        );
      }
      const dataBits = createData(version, errorCorrectionLevel, segments);
      const moduleCount = Utils.getSymbolSize(version);
      const modules = new BitMatrix(moduleCount);
      setupFinderPattern(modules, version);
      setupTimingPattern(modules);
      setupAlignmentPattern(modules, version);
      setupFormatInfo(modules, errorCorrectionLevel, 0);
      if (version >= 7) {
        setupVersionInfo(modules, version);
      }
      setupData(modules, dataBits);
      if (isNaN(maskPattern)) {
        maskPattern = MaskPattern.getBestMask(
          modules,
          setupFormatInfo.bind(null, modules, errorCorrectionLevel)
        );
      }
      MaskPattern.applyMask(maskPattern, modules);
      setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
      return {
        modules,
        version,
        errorCorrectionLevel,
        maskPattern,
        segments
      };
    }
    exports.create = function create(data, options) {
      if (typeof data === "undefined" || data === "") {
        throw new Error("No input text");
      }
      let errorCorrectionLevel = ECLevel.M;
      let version;
      let mask;
      if (typeof options !== "undefined") {
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
          Utils.setToSJISFunction(options.toSJISFunc);
        }
      }
      return createSymbol(data, version, errorCorrectionLevel, mask);
    };
  }
});

// node_modules/qrcode/lib/renderer/utils.js
var require_utils2 = __commonJS({
  "node_modules/qrcode/lib/renderer/utils.js"(exports) {
    function hex2rgba(hex) {
      if (typeof hex === "number") {
        hex = hex.toString();
      }
      if (typeof hex !== "string") {
        throw new Error("Color should be defined as hex string");
      }
      let hexCode = hex.slice().replace("#", "").split("");
      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error("Invalid hex color: " + hex);
      }
      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c3) {
          return [c3, c3];
        }));
      }
      if (hexCode.length === 6) hexCode.push("F", "F");
      const hexValue = parseInt(hexCode.join(""), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
      };
    }
    exports.getOptions = function getOptions(options) {
      if (!options) options = {};
      if (!options.color) options.color = {};
      const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
      const width = options.width && options.width >= 21 ? options.width : void 0;
      const scale = options.scale || 4;
      return {
        width,
        scale: width ? 4 : scale,
        margin,
        color: {
          dark: hex2rgba(options.color.dark || "#000000ff"),
          light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    };
    exports.getScale = function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    };
    exports.getImageWidth = function getImageWidth(qrSize, opts) {
      const scale = exports.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
      const size = qr.modules.size;
      const data = qr.modules.data;
      const scale = exports.getScale(size, opts);
      const symbolSize = Math.floor((size + opts.margin * 2) * scale);
      const scaledMargin = opts.margin * scale;
      const palette = [opts.color.light, opts.color.dark];
      for (let i3 = 0; i3 < symbolSize; i3++) {
        for (let j2 = 0; j2 < symbolSize; j2++) {
          let posDst = (i3 * symbolSize + j2) * 4;
          let pxColor = opts.color.light;
          if (i3 >= scaledMargin && j2 >= scaledMargin && i3 < symbolSize - scaledMargin && j2 < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i3 - scaledMargin) / scale);
            const jSrc = Math.floor((j2 - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
          }
          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    };
  }
});

// node_modules/qrcode/lib/renderer/canvas.js
var require_canvas = __commonJS({
  "node_modules/qrcode/lib/renderer/canvas.js"(exports) {
    var Utils = require_utils2();
    function clearCanvas(ctx, canvas, size) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!canvas.style) canvas.style = {};
      canvas.height = size;
      canvas.width = size;
      canvas.style.height = size + "px";
      canvas.style.width = size + "px";
    }
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e3) {
        throw new Error("You need to specify a canvas element");
      }
    }
    exports.render = function render(qrData, canvas, options) {
      let opts = options;
      let canvasEl = canvas;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!canvas) {
        canvasEl = getCanvasElement();
      }
      opts = Utils.getOptions(opts);
      const size = Utils.getImageWidth(qrData.modules.size, opts);
      const ctx = canvasEl.getContext("2d");
      const image = ctx.createImageData(size, size);
      Utils.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    };
    exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
      let opts = options;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!opts) opts = {};
      const canvasEl = exports.render(qrData, canvas, opts);
      const type = opts.type || "image/png";
      const rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type, rendererOpts.quality);
    };
  }
});

// node_modules/qrcode/lib/renderer/svg-tag.js
var require_svg_tag = __commonJS({
  "node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
    var Utils = require_utils2();
    function getColorAttrib(color, attrib) {
      const alpha = color.a / 255;
      const str = attrib + '="' + color.hex + '"';
      return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
    }
    function svgCmd(cmd, x2, y2) {
      let str = cmd + x2;
      if (typeof y2 !== "undefined") str += " " + y2;
      return str;
    }
    function qrToPath(data, size, margin) {
      let path = "";
      let moveBy = 0;
      let newRow = false;
      let lineLength = 0;
      for (let i3 = 0; i3 < data.length; i3++) {
        const col = Math.floor(i3 % size);
        const row = Math.floor(i3 / size);
        if (!col && !newRow) newRow = true;
        if (data[i3]) {
          lineLength++;
          if (!(i3 > 0 && col > 0 && data[i3 - 1])) {
            path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
            moveBy = 0;
            newRow = false;
          }
          if (!(col + 1 < size && data[i3 + 1])) {
            path += svgCmd("h", lineLength);
            lineLength = 0;
          }
        } else {
          moveBy++;
        }
      }
      return path;
    }
    exports.render = function render(qrData, options, cb) {
      const opts = Utils.getOptions(options);
      const size = qrData.modules.size;
      const data = qrData.modules.data;
      const qrcodesize = size + opts.margin * 2;
      const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
      const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
      const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
      const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
      const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
      if (typeof cb === "function") {
        cb(null, svgTag);
      }
      return svgTag;
    };
  }
});

// node_modules/qrcode/lib/browser.js
var require_browser = __commonJS({
  "node_modules/qrcode/lib/browser.js"(exports) {
    var canPromise = require_can_promise();
    var QRCode2 = require_qrcode();
    var CanvasRenderer = require_canvas();
    var SvgRenderer = require_svg_tag();
    function renderCanvas(renderFunc, canvas, text, opts, cb) {
      const args = [].slice.call(arguments, 1);
      const argsNum = args.length;
      const isLastArgCb = typeof args[argsNum - 1] === "function";
      if (!isLastArgCb && !canPromise()) {
        throw new Error("Callback required as last argument");
      }
      if (isLastArgCb) {
        if (argsNum < 2) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 2) {
          cb = text;
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 3) {
          if (canvas.getContext && typeof cb === "undefined") {
            cb = opts;
            opts = void 0;
          } else {
            cb = opts;
            opts = text;
            text = canvas;
            canvas = void 0;
          }
        }
      } else {
        if (argsNum < 1) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 1) {
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 2 && !canvas.getContext) {
          opts = text;
          text = canvas;
          canvas = void 0;
        }
        return new Promise(function(resolve, reject) {
          try {
            const data = QRCode2.create(text, opts);
            resolve(renderFunc(data, canvas, opts));
          } catch (e3) {
            reject(e3);
          }
        });
      }
      try {
        const data = QRCode2.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
      } catch (e3) {
        cb(e3);
      }
    }
    exports.create = QRCode2.create;
    exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
    exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
    exports.toString = renderCanvas.bind(null, function(data, _2, opts) {
      return SvgRenderer.render(data, opts);
    });
  }
});

// src/app.mjs
import { createClimbStage } from "/engine.mjs";

// public/assets/rules-DxwvjuIt.js
var e = [10, 25, 50, 75, 100];
var t = [{ id: 0, name: `Off the Board`, points: 10, line: `Right, but few people said it.`, circle: `\u26AA`, color: `#7D86A8` }, { id: 1, name: `Top 10`, points: 25, line: `Made the top ten.`, circle: `\u{1F535}`, color: `#3FB6E0` }, { id: 2, name: `Top 5`, points: 50, line: `In the board's top five.`, circle: `\u{1F7E3}`, color: `#9C7BFF` }, { id: 3, name: `Runner-up`, points: 75, line: `Second or third on the board.`, circle: `\u{1F7E0}`, color: `#FF7A59` }, { id: 4, name: `#1 Answer`, points: 100, line: `The answer most people give.`, circle: `\u{1F7E1}`, color: `#FFC83D` }];
var r = 864e5;
var i = (e3) => String(e3).padStart(2, `0`);
var a = (e3 = /* @__PURE__ */ new Date()) => `${e3.getFullYear()}-${i(e3.getMonth() + 1)}-${i(e3.getDate())}`;
function o(e3 = /* @__PURE__ */ new Date()) {
  let t3 = new Date(e3);
  return t3.setHours(24, 0, 0, 0), t3.getTime() - e3.getTime();
}
var s = (e3) => {
  let [t3, n2, r3] = e3.split(`-`).map(Number);
  return Date.UTC(t3, n2 - 1, r3);
};
var c = (e3, t3) => Math.round((s(t3) - s(e3)) / r);
var l = (e3, t3) => new Date(s(e3) + t3 * r).toISOString().slice(0, 10);
var u = (e3) => {
  let t3 = 2166136261;
  for (let n2 of e3) t3 ^= n2.charCodeAt(0), t3 = Math.imul(t3, 16777619);
  return t3 >>> 0;
};
var d = (e3) => {
  let t3 = e3 | 0;
  return () => {
    t3 = t3 + 1831565813 | 0;
    let e4 = Math.imul(t3 ^ t3 >>> 15, 1 | t3);
    return e4 = e4 + Math.imul(e4 ^ e4 >>> 7, 61 | e4) ^ e4, ((e4 ^ e4 >>> 14) >>> 0) / 4294967296;
  };
};
var ee = [`Swift`, `Brave`, `Bright`, `Calm`, `Clever`, `Daring`, `Eager`, `Gentle`, `Happy`, `Jolly`, `Keen`, `Lucky`, `Merry`, `Mellow`, `Nimble`, `Plucky`, `Quick`, `Quiet`, `Sunny`, `Witty`, `Zesty`, `Breezy`, `Cosmic`, `Cheery`];
var te = [`Otter`, `Fox`, `Panda`, `Heron`, `Lynx`, `Badger`, `Falcon`, `Koala`, `Moose`, `Owl`, `Raven`, `Tiger`, `Yak`, `Zebra`, `Bison`, `Crane`, `Gecko`, `Lemur`, `Robin`, `Hare`, `Wolf`, `Hawk`, `Finch`, `Wombat`];
var ne = /\s+/g;
var re = /^[\p{L}\p{M}\p{Nd} ._-]+$/u;
var ie = /[\p{L}\p{Nd}]/u;
var ae = /\p{M}+/gu;
var oe = /[ ._-]+/;
var se = /\d/g;
var ce = { 0: `o`, 1: `i`, 3: `e`, 4: `a`, 5: `s`, 7: `t`, 8: `b` };
var le = [`fuck`, `cunt`, `nigger`, `nigga`, `faggot`, `whore`, `bitch`, `dildo`, `jizz`, `retard`, `molest`, `asshole`, `pedophile`, `paedophile`, `wanker`, `shithead`, `bullshit`];
var p = new Set(`anal.anus.arse.arsehole.ass.bastard.boob.chink.cock.coon.cum.dick.dyke.fag.gook.hitler.hoe.homo.kike.kkk.kys.nazi.negro.paki.pedo.penis.piss.porn.porno.prick.pussy.rape.rapist.sex.shit.shitty.skank.slag.slut.spic.tits.titty.tranny.twat.vagina.wank`.split(`.`));
var m = (e3) => p.has(e3) || e3.length > 3 && e3.endsWith(`s`) && p.has(e3.slice(0, -1)) || e3.length > 4 && e3.endsWith(`es`) && p.has(e3.slice(0, -2));
var h = (e3) => e3.normalize(`NFC`).replace(ne, ` `).trim();
function ue(e3) {
  let t3 = h(e3), n2 = Array.from(t3).length;
  return n2 >= 1 && n2 <= 16 && re.test(t3) && ie.test(t3);
}
function de(e3) {
  let t3 = e3.normalize(`NFD`).replace(ae, ``).toLowerCase().replace(se, (e4) => ce[e4] ?? e4).split(oe).filter((e4) => e4.length > 0), n2 = t3.join(``);
  return le.some((e4) => n2.includes(e4)) ? true : m(n2) || t3.some(m);
}
var g = (e3, t3) => e3[Math.min(e3.length - 1, Math.floor(t3() * e3.length))];
var _ = (e3 = Math.random) => `${g(ee, e3)} ${g(te, e3)}`;
function v(e3, t3 = d(u(e3))) {
  let n2 = h(e3);
  return ue(n2) && !de(n2) ? n2 : _(t3);
}
var fe = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4];
var me = [10, 20, 1 / 0];
var y = (e3) => fe[(e3 % 10 + 10) % 10];
var b = (t3, n2) => e[t3] * n2;
var x = (e3) => Math.floor(e3 / 25);
function C(e3, t3) {
  return Number.isFinite(t3) && e3 + 1 >= t3;
}
var w = `2026-01-01`;
var _e = 255;
var T = 65535;
var ve = 4294967295;
var E = (e3) => e3.mode === `daily` ? 10 : e3.length;
var D = new TextEncoder();
var ye = new TextDecoder();
var be = /^[\w-]*$/;
var xe = /\+/g;
var Se = /\//g;
var Ce = /=+$/;
var we = /-/g;
var Te = /_/g;
function Ee(e3) {
  let t3 = ``;
  for (let n2 of e3) t3 += String.fromCharCode(n2);
  return btoa(t3).replace(xe, `-`).replace(Se, `_`).replace(Ce, ``);
}
function De(e3) {
  if (!be.test(e3) || e3.length % 4 == 1) return null;
  let t3 = `${e3.replace(we, `+`).replace(Te, `/`)}${`=`.repeat((4 - e3.length % 4) % 4)}`, n2 = atob(t3), r3 = new Uint8Array(n2.length);
  for (let e4 = 0; e4 < n2.length; e4 += 1) r3[e4] = n2.charCodeAt(e4);
  return r3;
}
var O = (e3, t3) => Number.isInteger(e3) && e3 >= 0 && e3 <= t3;
function Oe(e3) {
  let t3 = D.encode(e3);
  if (t3.length <= 48) return t3;
  let n2 = 0;
  for (let t4 of e3) {
    let e4 = n2 + D.encode(t4).length;
    if (e4 > 48) break;
    n2 = e4;
  }
  return t3.slice(0, n2);
}
function ke(e3) {
  let t3 = ye.decode(e3), n2 = D.encode(t3);
  if (n2.length !== e3.length) return null;
  for (let t4 = 0; t4 < n2.length; t4 += 1) if (n2[t4] !== e3[t4]) return null;
  return t3;
}
function Ae(e3) {
  let t3 = E(e3);
  if (e3.players.length < 1 || e3.players.length > 5) throw RangeError(`A challenge carries 1 to 5 players`);
  let n2 = e3.players.map((e4) => Oe(e4.name)), r3 = e3.mode === `daily` ? 5 : 8;
  for (let e4 of n2) r3 += 1 + e4.length + 2 * t3;
  let i3 = new Uint8Array(r3), a3 = new DataView(i3.buffer);
  a3.setUint8(0, 1);
  let o3 = 2;
  if (e3.mode === `daily`) {
    let t4 = c(w, e3.date);
    if (!O(t4, T)) throw RangeError(`No challenge code for the date ${e3.date}`);
    a3.setUint8(1, 0), a3.setUint16(o3, t4), o3 += 2;
  } else {
    if (!O(e3.seed, ve)) throw RangeError(`The seed must be a uint32`);
    if (!O(e3.bank, _e)) throw RangeError(`The bank version must fit in a byte`);
    a3.setUint8(1, e3.length === 10 ? 1 : 2), a3.setUint32(o3, e3.seed), a3.setUint8(o3 + 4, e3.bank), o3 += 5;
  }
  a3.setUint8(o3, e3.players.length), o3 += 1;
  for (let [r4, s3] of e3.players.entries()) {
    if (s3.aids.length !== t3) throw RangeError(`Each player needs ${t3} answers, not ${s3.aids.length}`);
    let e4 = n2[r4];
    a3.setUint8(o3, e4.length), i3.set(e4, o3 + 1), o3 += 1 + e4.length;
    for (let e5 of s3.aids) {
      if (e5 !== null && !O(e5, T - 1)) throw RangeError(`Bad answer id ${e5}`);
      a3.setUint16(o3, e5 === null ? 0 : e5 + 1), o3 += 2;
    }
  }
  return Ee(i3);
}
function je(e3, t3) {
  if (e3.byteLength < 2) return { error: `truncated` };
  if (e3.getUint8(0) !== 1) return { error: `version` };
  let n2 = e3.getUint8(1);
  if (n2 === 0) {
    if (e3.byteLength < 4) return { error: `truncated` };
    let n3 = l(w, e3.getUint16(2));
    return n3 > t3 ? { error: `future` } : { head: { mode: `daily`, date: n3 }, at: 4 };
  }
  return n2 !== 1 && n2 !== 2 ? { error: `mode` } : e3.byteLength < 7 ? { error: `truncated` } : { head: { mode: `unlimited`, length: n2 === 1 ? 10 : 20, seed: e3.getUint32(2), bank: e3.getUint8(6) }, at: 7 };
}
function Me(e3, t3, n2, r3) {
  if (n2 >= e3.length) return { error: `truncated` };
  let i3 = t3.getUint8(n2);
  if (i3 < 1 || i3 > 5) return { error: `players` };
  let a3 = [], o3 = n2 + 1;
  for (; a3.length < i3; ) {
    if (o3 >= e3.length) return { error: `truncated` };
    let n3 = t3.getUint8(o3);
    if (n3 > 48) return { error: `name` };
    if (o3 += 1, o3 + n3 + 2 * r3 > e3.length) return { error: `truncated` };
    let i4 = ke(e3.subarray(o3, o3 + n3));
    if (i4 === null) return { error: `name` };
    o3 += n3;
    let s3 = [];
    for (let e4 = 0; e4 < r3; e4 += 1) {
      let e5 = t3.getUint16(o3);
      s3.push(e5 === 0 ? null : e5 - 1), o3 += 2;
    }
    a3.push({ name: v(i4), aids: s3 });
  }
  return o3 === e3.length ? a3 : { error: `entries` };
}
function Ne(e3, t3 = a()) {
  let n2 = De(e3);
  if (!n2) return { error: `malformed` };
  let r3 = new DataView(n2.buffer, n2.byteOffset, n2.byteLength), i3 = je(r3, t3);
  if (`error` in i3) return i3;
  let o3 = Me(n2, r3, i3.at, E(i3.head));
  return `error` in o3 ? o3 : { ...i3.head, players: o3 };
}
function Ie(e3) {
  return e3 instanceof Uint8Array || ArrayBuffer.isView(e3) && e3.constructor.name === `Uint8Array`;
}
function A(e3, ...t3) {
  if (!Ie(e3)) throw Error(`Uint8Array expected`);
  if (t3.length > 0 && !t3.includes(e3.length)) throw Error(`Uint8Array expected of length ` + t3 + `, got length=` + e3.length);
}
function j(e3, t3 = true) {
  if (e3.destroyed) throw Error(`Hash instance has been destroyed`);
  if (t3 && e3.finished) throw Error(`Hash#digest() has already been called`);
}
function Le(e3, t3) {
  A(e3);
  let n2 = t3.outputLen;
  if (e3.length < n2) throw Error(`digestInto() expects output buffer of length at least ` + n2);
}
function M(...e3) {
  for (let t3 = 0; t3 < e3.length; t3++) e3[t3].fill(0);
}
function N(e3) {
  return new DataView(e3.buffer, e3.byteOffset, e3.byteLength);
}
function P(e3, t3) {
  return e3 << 32 - t3 | e3 >>> t3;
}
new Uint8Array(new Uint32Array([287454020]).buffer)[0], typeof Uint8Array.from([]).toHex == `function` && Uint8Array.fromHex;
function Re(e3) {
  if (typeof e3 != `string`) throw Error(`string expected`);
  return new Uint8Array(new TextEncoder().encode(e3));
}
function F(e3) {
  return typeof e3 == `string` && (e3 = Re(e3)), A(e3), e3;
}
var ze = class {
};
function Be(e3) {
  let t3 = (t4) => e3().update(F(t4)).digest(), n2 = e3();
  return t3.outputLen = n2.outputLen, t3.blockLen = n2.blockLen, t3.create = () => e3(), t3;
}
function Ve(e3, t3, n2, r3) {
  if (typeof e3.setBigUint64 == `function`) return e3.setBigUint64(t3, n2, r3);
  let i3 = BigInt(32), a3 = BigInt(4294967295), o3 = Number(n2 >> i3 & a3), s3 = Number(n2 & a3), c3 = r3 ? 4 : 0, l3 = r3 ? 0 : 4;
  e3.setUint32(t3 + c3, o3, r3), e3.setUint32(t3 + l3, s3, r3);
}
function He(e3, t3, n2) {
  return e3 & t3 ^ ~e3 & n2;
}
function Ue(e3, t3, n2) {
  return e3 & t3 ^ e3 & n2 ^ t3 & n2;
}
var We = class extends ze {
  constructor(e3, t3, n2, r3) {
    super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = e3, this.outputLen = t3, this.padOffset = n2, this.isLE = r3, this.buffer = new Uint8Array(e3), this.view = N(this.buffer);
  }
  update(e3) {
    j(this), e3 = F(e3), A(e3);
    let { view: t3, buffer: n2, blockLen: r3 } = this, i3 = e3.length;
    for (let a3 = 0; a3 < i3; ) {
      let o3 = Math.min(r3 - this.pos, i3 - a3);
      if (o3 === r3) {
        let t4 = N(e3);
        for (; r3 <= i3 - a3; a3 += r3) this.process(t4, a3);
        continue;
      }
      n2.set(e3.subarray(a3, a3 + o3), this.pos), this.pos += o3, a3 += o3, this.pos === r3 && (this.process(t3, 0), this.pos = 0);
    }
    return this.length += e3.length, this.roundClean(), this;
  }
  digestInto(e3) {
    j(this), Le(e3, this), this.finished = true;
    let { buffer: t3, view: n2, blockLen: r3, isLE: i3 } = this, { pos: a3 } = this;
    t3[a3++] = 128, M(this.buffer.subarray(a3)), this.padOffset > r3 - a3 && (this.process(n2, 0), a3 = 0);
    for (let e4 = a3; e4 < r3; e4++) t3[e4] = 0;
    Ve(n2, r3 - 8, BigInt(this.length * 8), i3), this.process(n2, 0);
    let o3 = N(e3), s3 = this.outputLen;
    if (s3 % 4) throw Error(`_sha2: outputLen should be aligned to 32bit`);
    let c3 = s3 / 4, l3 = this.get();
    if (c3 > l3.length) throw Error(`_sha2: outputLen bigger than state`);
    for (let e4 = 0; e4 < c3; e4++) o3.setUint32(4 * e4, l3[e4], i3);
  }
  digest() {
    let { buffer: e3, outputLen: t3 } = this;
    this.digestInto(e3);
    let n2 = e3.slice(0, t3);
    return this.destroy(), n2;
  }
  _cloneInto(e3) {
    e3 ||= new this.constructor(), e3.set(...this.get());
    let { blockLen: t3, buffer: n2, length: r3, finished: i3, destroyed: a3, pos: o3 } = this;
    return e3.destroyed = a3, e3.finished = i3, e3.length = r3, e3.pos = o3, r3 % t3 && e3.buffer.set(n2), e3;
  }
  clone() {
    return this._cloneInto();
  }
};
var I = Uint32Array.from([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]);
var L = BigInt(2 ** 32 - 1);
var R = BigInt(32);
function Ge(e3, t3 = false) {
  return t3 ? { h: Number(e3 & L), l: Number(e3 >> R & L) } : { h: Number(e3 >> R & L) | 0, l: Number(e3 & L) | 0 };
}
function Ke(e3, t3 = false) {
  let n2 = e3.length, r3 = new Uint32Array(n2), i3 = new Uint32Array(n2);
  for (let a3 = 0; a3 < n2; a3++) {
    let { h: n3, l: o3 } = Ge(e3[a3], t3);
    [r3[a3], i3[a3]] = [n3, o3];
  }
  return [r3, i3];
}
var qe = Uint32Array.from([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
var z = new Uint32Array(64);
var Je = class extends We {
  constructor(e3 = 32) {
    super(64, e3, 8, false), this.A = I[0] | 0, this.B = I[1] | 0, this.C = I[2] | 0, this.D = I[3] | 0, this.E = I[4] | 0, this.F = I[5] | 0, this.G = I[6] | 0, this.H = I[7] | 0;
  }
  get() {
    let { A: e3, B: t3, C: n2, D: r3, E: i3, F: a3, G: o3, H: s3 } = this;
    return [e3, t3, n2, r3, i3, a3, o3, s3];
  }
  set(e3, t3, n2, r3, i3, a3, o3, s3) {
    this.A = e3 | 0, this.B = t3 | 0, this.C = n2 | 0, this.D = r3 | 0, this.E = i3 | 0, this.F = a3 | 0, this.G = o3 | 0, this.H = s3 | 0;
  }
  process(e3, t3) {
    for (let n3 = 0; n3 < 16; n3++, t3 += 4) z[n3] = e3.getUint32(t3, false);
    for (let e4 = 16; e4 < 64; e4++) {
      let t4 = z[e4 - 15], n3 = z[e4 - 2], r4 = P(t4, 7) ^ P(t4, 18) ^ t4 >>> 3;
      z[e4] = (P(n3, 17) ^ P(n3, 19) ^ n3 >>> 10) + z[e4 - 7] + r4 + z[e4 - 16] | 0;
    }
    let { A: n2, B: r3, C: i3, D: a3, E: o3, F: s3, G: c3, H: l3 } = this;
    for (let e4 = 0; e4 < 64; e4++) {
      let t4 = P(o3, 6) ^ P(o3, 11) ^ P(o3, 25), u3 = l3 + t4 + He(o3, s3, c3) + qe[e4] + z[e4] | 0, d3 = (P(n2, 2) ^ P(n2, 13) ^ P(n2, 22)) + Ue(n2, r3, i3) | 0;
      l3 = c3, c3 = s3, s3 = o3, o3 = a3 + u3 | 0, a3 = i3, i3 = r3, r3 = n2, n2 = u3 + d3 | 0;
    }
    n2 = n2 + this.A | 0, r3 = r3 + this.B | 0, i3 = i3 + this.C | 0, a3 = a3 + this.D | 0, o3 = o3 + this.E | 0, s3 = s3 + this.F | 0, c3 = c3 + this.G | 0, l3 = l3 + this.H | 0, this.set(n2, r3, i3, a3, o3, s3, c3, l3);
  }
  roundClean() {
    M(z);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), M(this.buffer);
  }
};
var B = Ke(`0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`.split(`.`).map((e3) => BigInt(e3)));
B[0], B[1];
var V = Be(() => new Je());
var H = new TextEncoder();
var Ye = new TextDecoder();
function Xe(e3) {
  let t3 = ``;
  for (let n2 of e3) t3 += n2.toString(16).padStart(2, `0`);
  return t3;
}
function Ze(e3, t3) {
  return Xe(V(H.encode(`${e3}\0${t3}`))).slice(0, 16);
}
function Qe(e3, t3, n2) {
  let r3 = new Uint8Array(n2), i3 = 0, a3 = 0;
  for (; a3 < n2; ) {
    let o3 = V(H.encode(`r\0${e3}\0${t3}\0${i3}`)), s3 = Math.min(o3.length, n2 - a3);
    r3.set(o3.subarray(0, s3), a3), a3 += s3, i3 += 1;
  }
  return r3;
}
function $e(e3) {
  let t3 = atob(e3), n2 = new Uint8Array(t3.length);
  for (let e4 = 0; e4 < t3.length; e4++) n2[e4] = t3.charCodeAt(e4);
  return n2;
}
function et(e3, t3, n2) {
  let r3 = $e(e3), i3 = Qe(t3, n2, r3.length), a3 = new Uint8Array(r3.length);
  for (let e4 = 0; e4 < r3.length; e4++) a3[e4] = r3[e4] ^ i3[e4];
  return Ye.decode(a3);
}
var tt = /^(the|a|an) /;
var nt = /['’`.,!?:;()"“”]/g;
var rt = /&/g;
var it = /[-–—_/]/g;
var at = /\s+/g;
var ot = /(x|ch|sh|s)es$/;
var st = `abcdefghijklmnopqrstuvwxyz `;
function ct(e3) {
  return e3.toLowerCase().normalize(`NFD`).replace(/\p{M}+/gu, ``).replace(rt, ` and `).replace(nt, ``).replace(it, ` `).replace(at, ` `).trim().replace(tt, ``);
}
function lt(e3) {
  return e3.endsWith(`ies`) && e3.length > 4 ? `${e3.slice(0, -3)}y` : e3.endsWith(`ss`) ? e3 : e3.endsWith(`es`) && ot.test(e3) ? e3.slice(0, -2) : e3.endsWith(`s`) && e3.length > 3 ? e3.slice(0, -1) : e3;
}
function ut(e3, t3) {
  let n2 = [e3, lt(e3)], r3 = new Set(n2);
  for (let e4 of n2) for (let n3 of t3) e4.endsWith(` ${n3}`) && r3.add(e4.slice(0, -n3.length - 1)), e4.startsWith(`${n3} `) && r3.add(e4.slice(n3.length + 1));
  return [...r3].filter((e4) => e4.length > 0);
}
function dt(e3) {
  let t3 = /* @__PURE__ */ new Set(), n2 = e3.length;
  for (let r3 = 0; r3 <= n2; r3++) {
    let i3 = e3.slice(0, r3), a3 = e3.slice(r3);
    r3 < n2 && t3.add(i3 + a3.slice(1)), r3 < n2 - 1 && t3.add(`${i3}${a3[1]}${a3[0]}${a3.slice(2)}`);
    for (let e4 of st) r3 < n2 && a3[0] !== e4 && t3.add(`${i3}${e4}${a3.slice(1)}`), t3.add(`${i3}${e4}${a3}`);
  }
  return t3.delete(e3), t3;
}
var ft = `roster`;
function U(e3) {
  return JSON.parse(et(e3.roster, e3.salt, ft));
}
var W = /* @__PURE__ */ new WeakMap();
function pt(e3) {
  let t3 = W.get(e3);
  return t3 || (t3 = U(e3), W.set(e3, t3)), t3;
}
function G(e3, t3) {
  let n2 = e3.table[Ze(e3.salt, t3)];
  if (!n2) return null;
  let r3 = pt(e3)[n2.a];
  return { aid: n2.a, band: n2.b, canonical: r3 ? r3[0] : t3, corrected: false, key: t3 };
}
function mt(e3, t3) {
  let n2 = ct(t3);
  if (!n2) return null;
  let r3 = ut(n2, e3.strip);
  for (let t4 of r3) {
    let n3 = G(e3, t4);
    if (n3) return n3;
  }
  for (let t4 of r3) if (!(t4.length < 5)) for (let n3 of dt(t4)) {
    let t5 = G(e3, n3);
    if (t5) return { ...t5, corrected: true };
  }
  return null;
}
function _t(e3) {
  return { phase: `idle`, prompts: [...e3.prompts], length: e3.length, limitMs: e3.limitMs ?? 3e4, index: 0, results: [], typed: ``, promptStart: null, pausedAt: null, lastHit: null, refused: null, next: e3.next };
}
function vt(e3, t3) {
  return e3.phase === `idle` ? { ...e3, phase: `playing`, promptStart: t3, pausedAt: null, refused: null, typed: `` } : e3;
}
function K(e3, t3) {
  if (e3.phase !== `playing` || e3.promptStart === null) return e3.limitMs;
  let n2 = (e3.pausedAt ?? t3) - e3.promptStart;
  return Math.max(0, e3.limitMs - n2);
}
function q(e3) {
  return e3.prompts[e3.index];
}
function J(t3, n2, r3, i3) {
  let a3 = q(t3), o3 = y(t3.index), s3;
  if (n2) {
    let t4 = b(n2.band, o3);
    s3 = { promptId: a3.id, aid: n2.aid, band: n2.band, canonical: n2.canonical, typed: r3, base: e[n2.band], weight: o3, points: t4, people: x(t4), corrected: n2.corrected, key: n2.key };
  } else s3 = { promptId: a3.id, aid: null, band: null, canonical: null, typed: r3, base: 0, weight: o3, points: 0, people: 0, reason: i3, corrected: false, key: null };
  return { ...t3, phase: `reveal`, results: [...t3.results, s3], lastHit: n2, refused: null, typed: r3, promptStart: null, pausedAt: null };
}
function yt(e3, t3, n2) {
  if (e3.phase !== `playing` || e3.pausedAt !== null) return e3;
  let r3 = t3.trim();
  if (!r3) return Y(e3, n2);
  if (K(e3, n2) <= 0) return J(e3, null, r3, `timeout`);
  let i3 = mt(q(e3), r3);
  return i3 ? J(e3, i3, r3) : { ...e3, refused: r3, typed: r3 };
}
function Y(e3, t3) {
  if (e3.phase !== `playing`) return e3;
  let n2 = K(e3, t3) <= 0 ? `timeout` : `passed`;
  return J(e3, null, e3.typed, n2);
}
function bt(e3, t3) {
  return e3.phase !== `playing` || e3.pausedAt !== null ? e3 : K(e3, t3) <= 0 ? J(e3, null, e3.typed, `timeout`) : e3;
}
function xt(e3, t3) {
  if (e3.phase !== `reveal`) return e3;
  let n2 = e3.index + 1;
  if (C(e3.index, e3.length)) return { ...e3, phase: `done`, index: n2, promptStart: null };
  let r3 = e3.prompts;
  if (n2 >= r3.length) {
    if (!e3.next) return { ...e3, phase: `done`, index: n2, promptStart: null };
    r3 = [...r3, e3.next(n2)];
  }
  return { ...e3, phase: `playing`, index: n2, prompts: r3, promptStart: t3, pausedAt: null, refused: null, typed: ``, lastHit: null };
}
function Ct(e3, t3) {
  return e3.phase !== `playing` || e3.pausedAt !== null ? e3 : { ...e3, pausedAt: t3 };
}
function wt(e3, t3) {
  return e3.phase !== `playing` || e3.pausedAt === null || e3.promptStart === null ? e3 : { ...e3, promptStart: e3.promptStart + (t3 - e3.pausedAt), pausedAt: null };
}
function Tt(e3) {
  let t3 = 0;
  for (let n2 of e3.results) t3 += n2.points;
  return t3;
}
function Et(e3) {
  let t3 = 0;
  for (let n2 of e3.results) t3 += n2.people;
  return t3;
}
var X = { outlier: { id: `outlier`, title: `Mind Reader`, line: `You knew the #1 answer, again and again.` }, wildcard: { id: `wildcard`, title: `Hit or Miss`, line: `Bullseyes and blind spots.` }, "free-thinker": { id: `free-thinker`, title: `Crowd Whisperer`, line: `You think like most people do.` }, "side-stepper": { id: `side-stepper`, title: `Close Call`, line: `Near the top, most of the time.` }, "trend-spotter": { id: `trend-spotter`, title: `Own Lane`, line: `Your answers rarely made the board.` }, "crowd-pleaser": { id: `crowd-pleaser`, title: `Free Thinker`, line: `Nobody thinks like you. That's a skill too.` } };
function Z(e3) {
  let t3 = 0, n2 = 0, r3 = 0;
  for (let i4 of e3) i4.band === 4 && (t3 += 1), i4.band === 0 && (n2 += 1), r3 += i4.band ?? 0;
  let i3 = e3.length > 0 ? r3 / e3.length : 0;
  return t3 >= 3 ? X.outlier : t3 >= 2 && n2 >= 3 ? X.wildcard : i3 >= 1.8 ? X[`free-thinker`] : i3 >= 1.2 ? X[`side-stepper`] : i3 >= 0.6 ? X[`trend-spotter`] : X[`crowd-pleaser`];
}
var Dt = /\B(?=(\d{3})+(?!\d))/g;
var $ = (e3) => String(Math.round(e3)).replace(Dt, `,`);

// public/assets/map-BaINi0Kr.js
var e2 = [{ id: `forest-floor`, name: `The Pond Path`, blurb: `Moss, ferns and a still pond. The balloons are ready.`, markers: [], from: 0, to: 40, alt: [0, 3], screens: 2.5, sky: [`#1d5c4a`, `#8fd6b0`] }, { id: `the-trunks`, name: `Among the Trunks`, blurb: `Trunks like pillars, and sunbeams slanting in between.`, markers: [{ alt: 30, text: `A ten-storey building \xB7 30 m` }], from: 40, to: 100, alt: [3, 30], screens: 2.5, sky: [`#22675a`, `#94d8c0`] }, { id: `the-canopy`, name: `The Treetops`, blurb: `The tallest trees give out here. Above them, only sky.`, markers: [{ alt: 93, text: `Statue of Liberty, torch \xB7 93 m` }], from: 100, to: 250, alt: [30, 120], screens: 2.5, sky: [`#3f9fd2`, `#b6e6ee`] }, { id: `over-the-valley`, name: `Over the Valley`, blurb: `Fields, a river and a village, all shrinking fast.`, markers: [{ alt: 330, text: `Eiffel Tower \xB7 330 m` }], from: 250, to: 550, alt: [120, 800], screens: 3, sky: [`#2a6fc9`, `#9fd0f5`] }, { id: `low-clouds`, name: `Into the Overcast`, blurb: `Grey cotton on both sides. The ground is gone.`, markers: [{ alt: 1085, text: `Table Mountain \xB7 1,085 m` }], from: 550, to: 850, alt: [800, 2e3], screens: 3, sky: [`#3a76c4`, `#c3dcf2`] }, { id: `snowline`, name: `The Snowline`, blurb: `Snowfields and sharp ridges. The air turns thin and cold.`, markers: [{ alt: 3776, text: `Mount Fuji \xB7 3,776 m` }], from: 850, to: 1250, alt: [2e3, 5e3], screens: 3, sky: [`#3d6fb5`, `#b9d2ea`] }, { id: `inside-the-storm`, name: `Inside the Storm`, blurb: `Black cloud all round, rain blown sideways, then a flash.`, markers: [{ alt: 5895, text: `Kilimanjaro \xB7 5,895 m` }], from: 1250, to: 1650, alt: [5e3, 8e3], screens: 3, sky: [`#1c2244`, `#474f78`] }, { id: `everest-height`, name: `Everest Height`, blurb: `Level with the highest summit on Earth, snow streaming off it.`, markers: [{ alt: 8849, text: `Mount Everest \xB7 8,849 m` }], from: 1650, to: 1900, alt: [8e3, 9500], screens: 2.5, sky: [`#2c4a86`, `#e6b494`] }, { id: `cruising-altitude`, name: `Cruising Altitude`, blurb: `Airliners draw white lines across the sky. The sun starts to sink.`, markers: [{ alt: 10700, text: `Airliners cruise \xB7 10.7 km` }, { alt: 11300, text: `Highest bird on record \xB7 11.3 km` }], from: 1900, to: 2200, alt: [9500, 12e3], screens: 2.5, sky: [`#3a3478`, `#f2a070`] }, { id: `jet-stream`, name: `The Jet Stream`, blurb: `Wind faster than a train, and the sun going down in red.`, markers: [{ alt: 13100, text: `A passenger jet's ceiling \xB7 13.1 km` }, { alt: 14e3, text: `A perfect daily \xB7 14 km` }], from: 2200, to: 2800, alt: [12e3, 16e3], screens: 3, sky: [`#1a1c46`, `#6b4a8a`] }, { id: `ozone-layer`, name: `The Ozone Layer`, blurb: `Airliners are far below now. The last of the sunset clings to the curve of the world.`, markers: [{ alt: 18300, text: `Concorde flew this high \xB7 18 km` }, { alt: 25929, text: `SR-71 height record \xB7 25.9 km` }], from: 2800, to: 3600, alt: [16e3, 3e4], screens: 3, sky: [`#0d1230`, `#23305e`] }, { id: `high-stratosphere`, name: `The High Stratosphere`, blurb: `The sky overhead has gone black. Only balloons the size of stadiums get this high.`, markers: [{ alt: 41419, text: `Alan Eustace's jump, 2014 \xB7 41 km` }], from: 3600, to: 4400, alt: [3e4, 5e4], screens: 3, sky: [`#090c26`, `#172452`] }, { id: `mesosphere`, name: `The Mesosphere`, blurb: `Too thin to breathe, but thick enough to set grit from space alight.`, markers: [{ alt: 53e3, text: `Highest balloon ever \xB7 53 km` }, { alt: 7e4, text: `Shooting stars flare here \xB7 70 km` }], from: 4400, to: 5300, alt: [5e4, 8e4], screens: 3, sky: [`#060920`, `#111a40`] }, { id: `noctilucent`, name: `Noctilucent Clouds`, blurb: `Electric-blue ripples of ice, glowing over the night side of the world.`, markers: [{ alt: 83e3, text: `Night-shining clouds \xB7 83 km` }], from: 5300, to: 6500, alt: [8e4, 1e5], screens: 3, sky: [`#05081c`, `#0f1d3a`] }, { id: `karman-line`, name: `The Karman Line`, blurb: `From here up, wings are no use at all. Only a rocket keeps climbing.`, markers: [{ alt: 1e5, text: `Karman line \xB7 100 km` }, { alt: 107960, text: `X-15's highest flight \xB7 108 km` }], from: 6500, to: 7100, alt: [1e5, 18e4], screens: 3, sky: [`#03050f`, `#070b1e`] }, { id: `aurora`, name: `The Aurora`, blurb: `Green curtains of light ripple over the poles, far beneath your feet.`, markers: [{ alt: 215e3, text: `Sputnik 1's low point \xB7 215 km` }, { alt: 3e5, text: `Red aurora's upper reach \xB7 300 km` }], from: 7100, to: 7700, alt: [18e4, 35e4], screens: 3, sky: [`#02050d`, `#0a1a1c`] }, { id: `station-orbit`, name: `Station Orbit`, blurb: `A station laps the planet every hour and a half. Here comes the sunrise.`, markers: [{ alt: 39e4, text: `Tiangong station \xB7 390 km` }, { alt: 42e4, text: `The ISS \xB7 420 km` }], from: 7700, to: 8300, alt: [35e4, 45e4], screens: 3, sky: [`#02040e`, `#0b1638`] }, { id: `low-earth-orbit`, name: `Low Earth Orbit`, blurb: `Day on one side, night on the other, and satellites everywhere you look.`, markers: [{ alt: 48e4, text: `Hubble telescope \xB7 480 km` }, { alt: 1e6, text: `Radiation belts begin \xB7 1,000 km` }], from: 8300, to: 9e3, alt: [45e4, 2e6], screens: 3, sky: [`#01030a`, `#081030`] }];
var t2 = 9e3;
var n = 4;
var r2 = 1e3;
var i2 = 2e6;
var a2 = e2.length - 1;
var o2 = e2[a2];
var s2 = [];
var c2 = 0;
for (let t3 of e2) s2.push(c2), c2 += t3.screens;
var l2 = o2.screens / (o2.to - o2.from);
var u2 = c2;
var d2 = (t3) => t3 > 0 ? t3 >= 9e3 ? a2 : e2.findIndex((e3) => t3 < e3.to) : 0;
var f = (a3) => {
  if (a3 <= 0) return 0;
  if (a3 >= 9e3) return i2 * 10 ** ((a3 - t2) / r2);
  let o3 = e2[d2(a3)], s3 = (a3 - o3.from) / (o3.to - o3.from), [c3, l3] = o3.alt;
  return c3 > 0 && l3 / c3 >= n ? c3 * (l3 / c3) ** s3 : c3 + (l3 - c3) * s3;
};
var p2 = (n2) => {
  if (n2 <= 0) return 0;
  if (n2 >= 9e3) return u2 + (n2 - t2) * l2;
  let r3 = d2(n2), i3 = e2[r3];
  return (s2[r3] ?? 0) + (n2 - i3.from) / (i3.to - i3.from) * i3.screens;
};
var m2 = (n2) => {
  if (n2 <= 0) return 0;
  if (n2 >= u2) return t2 + (n2 - u2) / l2;
  let r3 = s2.findIndex((e3) => e3 > n2), i3 = r3 < 0 ? a2 : r3 - 1, o3 = e2[i3];
  return o3.from + (n2 - (s2[i3] ?? 0)) / o3.screens * (o3.to - o3.from);
};

// src/rules.mjs
var bands = t;
var weights = fe;
var roster = U;
var nickname = _;
var normalizeName = v;
var titleFor = Z;
var encodeChallenge = Ae;
var decodeChallenge = Ne;
var midnightRemaining = o;
var formatNumber = $;
var createRun = _t;
var startRun = vt;
var submitAnswer = yt;
var passAnswer = Y;
var tickRun = bt;
var nextRound = xt;
var pauseRun = Ct;
var resumeRun = wt;
var timeRemaining = K;
var totalPoints = Tt;
var totalPeople = Et;
function board(prompt, all = false) {
  const rows = roster(prompt);
  const ranked = all ? rows.map((row, aid) => ({ aid, canonical: row[0], band: row[1] })).filter((x2) => x2.band > 0).sort((a3, b2) => b2.band - a3.band) : prompt.crowd.map(([aid, share]) => ({ aid, canonical: rows[aid][0], band: rows[aid][1], share }));
  return ranked;
}

// src/icons.mjs
var logo = `<svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="11" y="10" width="10" height="19" rx="1.5" fill="var(--tomato)"/><rect x="1.5" y="17" width="9" height="12" rx="1.5" fill="var(--cobalt)"/><rect x="21.5" y="21" width="9" height="8" rx="1.5" fill="var(--marigold)"/><circle cx="16" cy="5.5" r="3.2" fill="var(--ink)"/></svg>`;
var pixelPaths = { sound: "M2 9h4V7h2V5h2v14H8v-2H6v-2H2zm12-2h2v2h-2zm2 2h2v6h-2zm-2 6h2v2h-2z", music: "M9 3h12v14h-2V7h-8v12H9v2H3v-2H1v-4h2v-2h6zm6 12h4v4h-4v2h-2v-4h2z", exit: "M13 2h7v20h-7v-2h5V4h-5zM3 10h8V6h2v4h3v4h-3v4h-2v-4H3z", crown: "M2 16h3v-6h3v3h3V5h3v8h3v-3h3v6h2v4H2z", arrow: "M3 10h12V6h3v3h3v3h-3v3h-3v3h-3v-5H3z", close: "M4 4h4v4h8V4h4v4h-4v8h4v4h-4v-4H8v4H4v-4h4V8H4z" };
var icon = (name2, cls = "climb-icon") => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="${pixelPaths[name2] || pixelPaths.crown}"/></svg>`;
var brand = () => `<a href="/" class="home-brand" aria-label="OpenNoillirk home"><span class="rarely-wordmark">${logo}OpenNoillirk</span></a>`;
var esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c3) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c3]);

// public/audio.mjs
var gains = { start: 0.4, question: 0.35, submit: 0.42, rise: 0.45, "result-0": 0.3, "result-1": 0.35, "result-2": 0.45, "result-3": 0.55, "result-4": 0.7, timeout: 0.3, skip: 0.42, refused: 0.4, tick: 0.26, zone: 0.3, gear: 0.4, record: 0.45, end: 0.45, click: 0.25, copy: 0.3, "amb-forest": 0.2, "amb-wind": 0.17, "amb-stratosphere": 0.13, "amb-space": 0.1 };
var paths = {
  "amb-forest": "climb-amb-forest-BwewCqmh.mp3",
  "amb-space": "climb-amb-space-BvoiZiES.mp3",
  "amb-stratosphere": "climb-amb-stratosphere-CEU78Hp4.mp3",
  "amb-wind": "climb-amb-wind-DECZXMUA.mp3",
  click: "climb-click-C6LNcS4t.mp3",
  copy: "climb-copy-DX1B1hkv.mp3",
  end: "climb-end-Dnf4wnZE.mp3",
  gear: "climb-gear-B40q8FVZ.mp3",
  question: "climb-question-W84qw9VD.mp3",
  record: "climb-record-Ii3-KPtN.mp3",
  refused: "climb-refused-Day8Co36.mp3",
  "result-0": "climb-result-0-BcLKXiE5.mp3",
  "result-1": "climb-result-1-W_jtQEfD.mp3",
  "result-2": "climb-result-2-DWjwG3bs.mp3",
  "result-3": "climb-result-3-Cy39elRp.mp3",
  "result-4": "climb-result-4-Cju20NV3.mp3",
  rise: "climb-rise-Dg43uyZT.mp3",
  skip: "climb-skip-BnMdgd4j.mp3",
  start: "climb-start-maqXQucP.mp3",
  submit: "climb-submit-DXT0iN1F.mp3",
  tick: "climb-tick-H0_xCBrW.mp3",
  timeout: "climb-timeout-BVAH5H8R.mp3",
  zone: "climb-zone-JVMFYdkp.mp3"
};
var ClimbAudio = class {
  constructor() {
    this.muted = localStorage.getItem("opennoillirk:muted") === "true";
    this.music = localStorage.getItem("opennoillirk:music") !== "false";
    this.ctx = null;
    this.buffers = /* @__PURE__ */ new Map();
    this.loads = /* @__PURE__ */ new Map();
    this.beds = /* @__PURE__ */ new Map();
    this.active = false;
    this.played = [];
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) this.ctx?.suspend().catch(() => {
      });
      else if (this.active) this.ctx?.resume().catch(() => {
      });
    });
  }
  async unlock() {
    if (!this.ctx) {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) return;
      this.ctx = new Audio();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.muted ? 0 : 1;
      this.master.connect(this.ctx.destination);
      this.bedBus = this.ctx.createGain();
      this.bedBus.gain.value = 0;
      this.bedBus.connect(this.master);
      for (const name2 of ["start", "question", "submit", "rise", "amb-forest"]) this.load(name2);
      setTimeout(() => {
        for (const name2 of Object.keys(paths)) this.load(name2);
      }, 500);
    }
    await this.ctx.resume().catch(() => {
    });
  }
  load(name2) {
    if (!this.ctx || !paths[name2]) return Promise.resolve(null);
    if (this.loads.has(name2)) return this.loads.get(name2);
    const p3 = fetch("/assets/" + paths[name2]).then((r3) => {
      if (!r3.ok) throw Error(name2);
      return r3.arrayBuffer();
    }).then((b2) => this.ctx.decodeAudioData(b2)).then((buffer) => {
      this.buffers.set(name2, buffer);
      if (name2.startsWith("amb-")) this.startBed(name2, buffer);
      return buffer;
    }).catch(() => null);
    this.loads.set(name2, p3);
    return p3;
  }
  startBed(name2, buffer) {
    if (this.beds.has(name2)) return;
    const source = this.ctx.createBufferSource(), gain = this.ctx.createGain();
    source.buffer = buffer;
    source.loop = true;
    source.loopStart = 0.05;
    source.loopEnd = Math.min(10.05, buffer.duration);
    gain.gain.value = 0;
    source.connect(gain);
    gain.connect(this.bedBus);
    source.start(0, 0.05);
    this.beds.set(name2, { source, gain });
    this.mix(this.altitude || 0);
  }
  play(name2, { gain = 1, endIn, rate = 1 } = {}) {
    if (!this.ctx || this.muted || document.hidden) return null;
    const asked = performance.now();
    let node = null, cancelled = false;
    const fade = (seconds) => {
      if (node) {
        const t3 = this.ctx.currentTime;
        node.gain.gain.setTargetAtTime(0, t3, seconds / 5);
        try {
          node.source.stop(t3 + seconds);
        } catch {
        }
      } else cancelled = true;
    };
    const play = (buffer) => {
      if (!buffer || cancelled || this.muted || document.hidden || performance.now() - asked > 500) return;
      const source = this.ctx.createBufferSource(), bus = this.ctx.createGain();
      source.buffer = buffer;
      source.playbackRate.value = rate * (["rise", "tick"].includes(name2) || name2.startsWith("amb-") ? 1 : 1 + (Math.random() - 0.5) * 0.06);
      bus.gain.value = (gains[name2] || 0.4) * gain;
      source.connect(bus);
      bus.connect(this.master);
      const offset = endIn === void 0 ? 0 : Math.max(0, buffer.duration - endIn), delay = endIn === void 0 ? 0 : Math.max(0, endIn - buffer.duration);
      source.start(this.ctx.currentTime + delay, offset);
      node = { source, gain: bus };
      source.onended = () => {
        source.disconnect();
        bus.disconnect();
      };
      this.played.push({ name: name2, at: performance.now() });
      this.played = this.played.slice(-40);
    };
    if (this.buffers.has(name2)) play(this.buffers.get(name2));
    else this.load(name2).then(play);
    return { fade };
  }
  setActive(active) {
    this.active = active;
    if (this.ctx) {
      this.bedBus.gain.setTargetAtTime(active && this.music ? 1 : 0, this.ctx.currentTime, 0.3);
    }
  }
  mix(altitude) {
    this.altitude = altitude;
    if (!this.ctx) return;
    const t3 = Math.log10(Math.max(altitude, 1));
    const cross = [1e3, 16e3, 1e5].map((h2) => {
      const n2 = Math.min(1, Math.max(0, (t3 - (Math.log10(h2) - 0.2)) / 0.4));
      return { fall: Math.cos(n2 * Math.PI / 2), rise: Math.sin(n2 * Math.PI / 2) };
    });
    const mix = { "amb-forest": cross[0].fall, "amb-wind": cross[0].rise * cross[1].fall, "amb-stratosphere": cross[1].rise * cross[2].fall, "amb-space": cross[2].rise };
    for (const [name2, bed] of this.beds) bed.gain.gain.setTargetAtTime(gains[name2] * mix[name2], this.ctx.currentTime, 0.6);
  }
  toggleSound() {
    this.muted = !this.muted;
    localStorage.setItem("opennoillirk:muted", String(this.muted));
    if (this.ctx) this.master.gain.value = this.muted ? 0 : 1;
    if (!this.muted) this.unlock();
    return !this.muted;
  }
  toggleMusic() {
    this.music = !this.music;
    localStorage.setItem("opennoillirk:music", String(this.music));
    this.setActive(this.active);
    return this.music;
  }
  debug() {
    return { state: this.ctx?.state || "locked", muted: this.muted, music: this.music, buffers: this.buffers.size, beds: this.beds.size, played: this.played };
  }
};

// src/app.mjs
var import_qrcode = __toESM(require_browser(), 1);
var $2 = (s3, root = document) => root.querySelector(s3);
var config = window.OPENNOILLIRK || {};
var game = $2("#game");
var audio = new ClimbAudio();
var save = (k, v2) => {
  try {
    localStorage.setItem("opennoillirk:" + k, JSON.stringify(v2));
  } catch {
  }
};
var read = (k, f2 = null) => {
  try {
    return JSON.parse(localStorage.getItem("opennoillirk:" + k)) ?? f2;
  } catch {
    return f2;
  }
};
var fmt = formatNumber;
var height = (n2) => {
  const m3 = f(n2);
  return m3 < 1e3 ? `${Math.round(m3)}m` : m3 < 1e5 ? `${(m3 / 1e3).toFixed(1)} km` : `${fmt(m3 / 1e3)} km`;
};
var uid = (n2 = 8) => {
  let s3 = "";
  const a3 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (const v2 of crypto.getRandomValues(new Uint8Array(n2))) s3 += a3[v2 % a3.length];
  return s3;
};
var device = read("device");
if (!device) {
  device = uid(16);
  save("device", device);
}
var name = read("nickname") || nickname();
save("nickname", name);
var stage = null;
var state = null;
var setup = null;
var screen = "intro";
var view = null;
var refused = null;
var cardShown = false;
var startedAt = 0;
var clockOffset = 0;
var lastSecond = null;
var challenge = null;
var runRecord = null;
var sharePromise = null;
var shareCards = [];
var activeCard = 0;
var modalReturn = null;
var zoneSeen = 0;
var zoneSoundAt = 0;
var recorded = false;
var storageKey = "classic:v1";
var best = read("best", 0);
var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
var announced = $2("#game-announcement");
var announce = (t3) => {
  announced.textContent = t3;
};
var event = (name2, props = {}) => {
  if (config.analyticsEnabled) {
    window.plausible?.(name2, { props });
    window.gtag?.("event", name2, props);
  }
};
var toast = (t3) => {
  let el = $2("#toast");
  el.textContent = t3;
  el.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.hidden = true, 3e3);
};
function setScreen(value) {
  screen = value;
  game.dataset.screen = value;
  document.body.classList.toggle("in-game", value === "run");
  $2(".home-reading")?.toggleAttribute("hidden", value === "run");
  $2("footer")?.toggleAttribute("hidden", value === "run");
  if (value === "run") window.scrollTo({ top: 0, behavior: "instant" });
}
function stageSwitch() {
  return `<div class="og-stage-toggle" role="group" aria-label="Game style"><button type="button" aria-pressed="true" data-action="climb">Sky climb</button><button type="button" aria-pressed="false" data-action="table">Tabletop</button></div>`;
}
function intro() {
  setScreen("intro");
  cardShown = false;
  game.removeAttribute("data-card");
  $2("#hud").innerHTML = "";
  $2("#lower").innerHTML = "";
  $2("#ruler").innerHTML = "";
  $2("#banner").innerHTML = "";
  stage?.setMode("home", []);
  stage?.setScores({ you: 0 });
  audio.setActive(false);
  const saved = read(storageKey), resumable = saved && !saved.done && saved.results.length;
  const isChallenge = !!challenge;
  $2("#screen").innerHTML = `<p class="climb-title" aria-hidden="true">OpenNoillirk</p><div class="og-intro-top"><header class="home-header home-game-header">${brand()}<nav aria-label="Main navigation"></nav></header></div><div class="og-hero">${isChallenge ? `<p class="og-kicker">A challenge from ${esc(challenge.name)}</p><h1><span class="og-h1-brand">Can you climb higher?</span><span class="og-h1-tag">${esc(challenge.name)} reached ${height(challenge.points)}.</span></h1><p class="og-line">Same 10 questions. See what ${esc(challenge.name)} said after each answer.</p>` : `<p class="og-kicker">Classic \xB7 10 questions \xB7 Free</p><h1><span class="og-h1-brand">OpenNoillirk</span><span class="visually-hidden">: </span><span class="og-h1-tag">The Noillirk game \u2014 guess the answer most people give</span></h1><p class="og-line"><b>Think like everyone.</b> Name what most people would say and pull the crowd your way.</p>`}<div class="og-actions"><button id="start-btn" class="og-play" data-action="start">${isChallenge ? `Take ${esc(challenge.name)}'s challenge` : resumable ? `Resume at question ${saved.results.length + 1}` : "Play today's 10"}</button><a class="og-link" href="/unlimited">Unlimited \xB7 free</a></div>${stageSwitch()}<p class="og-small">New questions at midnight \xB7 <span data-countdown></span></p><nav class="og-guide" aria-label="About the game"><a href="/how-to-play">How to play</a><a href="/scoring">Scoring</a></nav>${resumable ? '<button class="start-over-link" data-action="restart">Start a fresh climb</button>' : ""}</div>`;
  updateCountdown();
}
function hud() {
  $2("#hud").innerHTML = `<div class="climb-score"><div class="climb-altitude" id="height">${height(totalPoints(state))}</div><div class="climb-points" id="points">${fmt(totalPoints(state))} pts</div>${best ? `<div class="climb-best">Best ${height(best)}</div>` : ""}</div><div class="climb-progress"><ol class="climb-squares" aria-label="Question progress">${setup.prompts.map((p3, i3) => {
    const r3 = state.results[i3];
    return `<li class="climb-square" ${i3 === state.index ? 'aria-current="step"' : ""} aria-label="Question ${i3 + 1}${r3 ? ": " + (r3.band === null ? r3.reason : bands[r3.band].name) : ""}" style="${r3 ? "background:" + (r3.band === null ? "#9aa3b1" : bands[r3.band].color) : ""}"></li>`;
  }).join("")}</ol><div class="climb-round">Q ${Math.min(state.index + 1, 10)} / 10${weights[state.index] > 1 ? " \xB7 \xD7" + weights[state.index] : ""}</div></div><div class="climb-switches"><button class="climb-switch" data-action="sound" aria-label="Sound" aria-pressed="${!audio.muted}">${icon("sound")}</button><button class="climb-switch" data-action="music" aria-label="Music" aria-pressed="${audio.music}">${icon("music")}</button><button class="climb-switch" data-action="leave" aria-label="Leave and resume later">${icon("exit")}</button></div>`;
}
function answerForm() {
  return `<div class="climb-answer-bar"><div class="climb-refused" role="status" ${refused ? "" : "hidden"}>Not on our list \u2014 try another.</div><form class="og-dock" aria-label="Your answer"><div class="climb-clock"><svg class="climb-clock-ring" viewBox="0 0 48 48" aria-hidden="true"><circle class="climb-clock-track" cx="24" cy="24" r="20" fill="none"/><circle class="climb-clock-arc" cx="24" cy="24" r="20" fill="none" stroke-dasharray="125.664" stroke-dashoffset="0" transform="rotate(-90 24 24)"/></svg><span class="climb-clock-seconds">30</span></div><label class="og-field"><span class="visually-hidden">Your answer</span><input name="answer" data-clarity-mask="true" type="text" aria-label="Your answer" aria-describedby="prompt-text" placeholder="What would most people say?" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="go" maxlength="60"></label><button class="og-pass" type="button" data-action="pass">Pass</button><button class="og-go" type="submit" aria-label="Submit answer">\u2192</button></form></div>`;
}
async function start(fresh = false) {
  if (!setup) return;
  await audio.unlock();
  sharePromise = null;
  runRecord = null;
  shareCards = [];
  cardShown = false;
  refused = null;
  recorded = false;
  zoneSeen = 0;
  const saved = !fresh && !challenge ? read(storageKey) : null;
  state = startRun(createRun({ prompts: setup.prompts, length: 10 }), now());
  if (saved && !saved.done && saved.results.length < 10) {
    state = { ...state, index: saved.results.length, results: saved.results };
  }
  setScreen("run");
  $2("#screen").innerHTML = "";
  stage.setMode("home", []);
  stage.setMode("run", challenge ? [{ key: "f1", name: challenge.name, team: "f1" }] : []);
  const friendPoints = challenge ? challenge.rounds.slice(0, state.index).reduce((sum, r3, i3) => sum + (r3.b === null ? 0 : bands[r3.b].points * weights[i3]), 0) : 0;
  stage.setScores({ you: totalPoints(state), ...challenge ? { f1: friendPoints } : {} });
  audio.setActive(true);
  audio.play("start");
  renderQuestion();
  event("run_start", { mode: "classic", resumed: state.index > 0, challenge: !!challenge });
}
function renderQuestion() {
  cardShown = false;
  refused = null;
  lastSecond = null;
  startedAt = now();
  hud();
  game.removeAttribute("data-card");
  const p3 = state.prompts[state.index];
  $2("#lower").innerHTML = `<section class="climb-card"><p class="climb-card-category">${esc(p3.category)}</p><h2 class="climb-card-text" id="prompt-text">${esc(p3.text)}</h2><p class="climb-card-hint">The more people say it, the higher you go.</p></section>${answerForm()}`;
  $2("form", game).addEventListener("submit", (e3) => {
    e3.preventDefault();
    submit();
  });
  $2("input", game).focus({ preventScroll: true });
  audio.play("question");
  announce(`Question ${state.index + 1} of 10. ${p3.text}`);
}
function now() {
  return performance.now() + clockOffset;
}
function submit() {
  if (screen !== "run" || state.phase !== "playing") return;
  const input = $2("input", game), typed = input.value;
  const next2 = submitAnswer({ ...state, typed }, typed, now());
  if (next2.phase === "playing") {
    state = next2;
    refused = typed;
    $2(".climb-refused").hidden = false;
    audio.play("refused");
    stage.refused();
    input.select();
    event("answer_refused", { round: state.index + 1 });
    announce("Not on our list \u2014 try another.");
    return;
  }
  state = next2;
  reveal();
}
function pass(reason) {
  if (screen !== "run" || state.phase !== "playing") return;
  state = reason === "timeout" ? tickRun({ ...state, typed: $2("input", game)?.value || "" }, now() + 30001) : passAnswer({ ...state, typed: $2("input", game)?.value || "" }, now());
  reveal();
}
function persist() {
  if (!challenge) save(storageKey, { results: state.results, done: state.phase === "done", index: state.index });
}
function reveal() {
  const r3 = state.results.at(-1);
  persist();
  cardShown = false;
  game.dataset.card = "pending";
  $2(".climb-answer-bar")?.classList.add("is-dim");
  for (const b2 of game.querySelectorAll("form button")) b2.disabled = true;
  hud();
  const f2 = challenge?.rounds[state.index];
  stage.reveal({ round: state.index, weight: r3.weight, you: { band: r3.band, aid: r3.aid, reason: r3.reason }, friends: f2 ? [{ key: "f1", band: f2.b, aid: f2.a }] : [] });
  event("answer", { round: state.index + 1, band: r3.band ?? -1, points: r3.points });
}
function showResult() {
  if (screen !== "run" || state.phase !== "reveal" || cardShown) return;
  cardShown = true;
  game.dataset.card = "shown";
  const r3 = state.results.at(-1), p3 = state.prompts[state.index], ranked = board(p3);
  const band = r3.band === null ? { name: r3.reason === "timeout" ? "Out of time" : "Passed", color: "#9aa3b1" } : bands[r3.band];
  const f2 = challenge?.rounds[state.index], fr = f2 && f2.a !== null ? roster(p3)[f2.a] : null;
  const form = $2(".climb-answer-bar");
  $2(".climb-card")?.remove();
  const result = document.createElement("section");
  result.className = "climb-result";
  result.setAttribute("aria-label", "Result");
  result.innerHTML = `<h2 class="climb-result-band" style="color:${band.color}">${r3.band === 4 ? icon("crown") : ""}${esc(band.name)}</h2><ol class="climb-bandbar" aria-hidden="true">${bands.map((b2) => `<li class="${r3.band === b2.id ? "is-on" : ""}" style="background:${b2.color}"></li>`).join("")}</ol><p class="climb-result-points">+${fmt(r3.points)}</p><p class="climb-result-answer">${esc(r3.canonical || r3.typed || "\u2014")}</p><p class="climb-result-altitude">Now at ${height(totalPoints(state))}</p>${r3.corrected ? `<p class="climb-corrected">We read \u201C${esc(r3.typed)}\u201D as ${esc(r3.canonical)}.</p>` : ""}<ol class="climb-result-top">${ranked.map((x2) => `<li class="${x2.aid === r3.aid ? "is-you" : ""}">${x2.aid === r3.aid ? icon("crown") : ""}${esc(x2.canonical)}</li>`).join("")}</ol>${challenge ? `<ul class="climb-result-friends"><li><span class="climb-friend-dot" style="background:var(--team-f1)"></span><span class="climb-friend-name">${esc(challenge.name)}</span><span class="climb-friend-answer">${esc(fr?.[0] || "Passed")}</span></li></ul>` : ""}<div class="climb-result-actions">${r3.band === null && refused ? '<button class="climb-report" data-action="report">Should this count? Tell us</button>' : ""}<button class="climb-next" data-action="next">${state.index === 9 ? "See results" : "Next"}</button></div>`;
  $2("#lower").insertBefore(result, form);
  if ($2("input", game)) $2("input", game).value = "";
  announce(`${r3.canonical || band.name} \u2014 ${band.name}, plus ${r3.points} points. Now at ${height(totalPoints(state))}.`);
  stage.captureReady("moment").catch(() => {
  });
  if (r3.band !== null && r3.band >= 3) {
    const burst = document.createElement("span");
    burst.className = "climb-burst";
    burst.dataset.band = r3.band;
    burst.style.color = band.color;
    $2(".climb-result-band").append(burst);
  }
}
function next() {
  if (!cardShown || state.phase !== "reveal") return;
  stage.next();
  state = nextRound(state, now());
  if (state.phase === "done") {
    finish();
  } else renderQuestion();
}
function finish() {
  setScreen("end");
  audio.setActive(false);
  audio.play("end");
  game.removeAttribute("data-card");
  $2("#lower").innerHTML = "";
  $2("#hud").innerHTML = "";
  $2("#banner").innerHTML = "";
  $2("#ruler").innerHTML = "";
  persist();
  const points = totalPoints(state), zone = e2[d2(points)], title = titleFor(state.results), tops = state.results.filter((r3) => r3.band === 4).length, isBest = points > best;
  if (isBest) {
    best = points;
    save("best", best);
  }
  stage.captureReady("home").catch(() => {
  });
  $2("#screen").innerHTML = `<section class="climb-end" aria-label="Your climb"><div class="climb-end-col"><div class="climb-end-head"><p class="climb-end-kicker">Classic \xB7 Run complete</p><h2 class="climb-end-altitude" tabindex="-1">${height(points)}</h2><p class="climb-end-zone">${zone.name}</p><p class="climb-end-points">${fmt(points)} points \xB7 ${tops} #1 ${tops === 1 ? "answer" : "answers"}</p><p class="climb-end-best" ${isBest ? "data-new" : ""}>${isBest ? "New best! " : "Best "}${height(best)}</p><p class="climb-end-title">\u2726 ${title.title}</p></div>${challenge ? `<div class="climb-compare"><p class="climb-compare-title">${points > challenge.points ? "You climbed higher!" : points === challenge.points ? "Level with " + esc(challenge.name) : esc(challenge.name) + " climbed higher"}</p><div class="climb-compare-list"><div>You \xB7 ${height(points)}</div><div>${esc(challenge.name)} \xB7 ${height(challenge.points)}</div></div></div>` : ""}<div class="climb-end-actions"><button class="og-play climb-end-share" data-action="share">Share &amp; challenge</button>${stageSwitch()}<p class="climb-end-about"><a href="/sky-climb">How Sky Climb works, and all 18 zones</a></p></div><div class="og-stub"><div class="og-stub-info"><p class="og-stub-kicker">Another climb?</p><p class="og-stub-big">Think like the crowd.</p><p class="og-stub-note">Ten questions. One sky.</p></div><button class="og-stub-go" data-action="restart"><span class="t">Play again</span><span class="s">Free \xB7 10 questions</span><span class="i">\u2192</span></button></div>${recap()}</div></section>`;
  $2(".climb-end-altitude").focus({ preventScroll: true });
  announce(`Run complete. ${height(points)}, ${zone.name}. ${fmt(points)} points.`);
  event("run_complete", { mode: "classic", points, people: totalPeople(state), title: title.title });
  ensureShare();
  setTimeout(() => {
    if (screen === "end" && !$2("#share-dialog")) openShare();
  }, 1e3);
}
function recap() {
  return `<section class="climb-recap" aria-labelledby="recap-title"><h3 class="climb-recap-title" id="recap-title">Question by question</h3>${state.results.map((r3, i3) => {
    const p3 = setup.prompts[i3], b2 = r3.band === null ? { name: r3.reason === "timeout" ? "Out of time" : "Passed", color: "#9aa3b1" } : bands[r3.band], board2 = board(p3, true);
    return `<details class="climb-recap-q"><summary><span class="climb-recap-row"><span class="climb-recap-num">Q${i3 + 1}${r3.weight > 1 ? " \xD7" + r3.weight : ""}</span><span class="climb-recap-square" role="img" aria-label="${b2.name}" style="background:${b2.color}"></span><span class="climb-recap-text">${esc(p3.text)}</span><span class="climb-recap-mine ${r3.band === null ? "is-miss" : ""}">${esc(r3.canonical || b2.name)}</span><span class="climb-recap-points">+${fmt(r3.points)}</span></span></summary><div class="climb-recap-body"><p class="climb-recap-board">Our board (est.)</p>${[4, 3, 2, 1].map((b3) => `<div class="climb-recap-group"><p class="climb-recap-band" style="color:${bands[b3].color}">${bands[b3].name}</p><ul>${board2.filter((x2) => x2.band === b3).map((x2) => `<li ${x2.aid === r3.aid ? 'class="is-you" aria-current="true"' : ""}>${esc(x2.canonical)}${x2.aid === r3.aid ? '<span class="climb-recap-you">You</span>' : ""}</li>`).join("")}</ul></div>`).join("")}${r3.band === 0 ? `<p class="climb-recap-off">Your answer: ${esc(r3.canonical)} \xB7 Off the Board</p>` : ""}</div></details>`;
  }).join("")}</section>`;
}
function ruler(v2) {
  if (screen !== "run") return;
  const h2 = game.clientHeight, stepPoints = m2(v2.y + 0.03) - m2(v2.y - 0.03), stepAlt = Math.abs(f(stepPoints + v2.points) - v2.altitude) || 1;
  const target = stepAlt, unit = 10 ** Math.floor(Math.log10(Math.max(target, 1))), step = [1, 2, 2.5, 5, 10].map((n2) => n2 * unit).find((n2) => n2 >= target) || unit * 10;
  const marks = [];
  const low = Math.max(0, m2(v2.y - 0.54)), high = m2(v2.y + 0.48);
  const lo = f(low), hi = f(high);
  const pointForAltitude = (a3) => {
    let l3 = 0, r3 = 1e4;
    for (let i3 = 0; i3 < 35; i3++) {
      const m3 = (l3 + r3) / 2;
      if (f(m3) < a3) l3 = m3;
      else r3 = m3;
    }
    return (l3 + r3) / 2;
  };
  for (let a3 = Math.ceil(lo / step) * step; a3 <= hi && marks.length < 40; a3 += step) {
    const y2 = 0.46 + v2.y - p2(pointForAltitude(a3));
    if (Math.abs(y2 - 0.46) > 0.014) marks.push(`<div class="climb-tick" style="top:${y2 * 100}%"><span class="climb-tick-label">${a3 < 1e3 ? fmt(a3) + "m" : (a3 / 1e3).toFixed(1) + " km"}</span></div>`);
  }
  for (const z2 of e2) for (const m3 of z2.markers) {
    if (m3.alt < lo || m3.alt > hi) continue;
    const y2 = 0.46 + v2.y - p2(pointForAltitude(m3.alt)), [n2, a3] = m3.text.split(" \xB7 ");
    marks.push(`<div class="climb-tick is-landmark" style="top:${y2 * 100}%"><span class="climb-tick-label"><span class="climb-landmark-name">${esc(n2)}</span><span class="climb-landmark-alt">${esc(a3 || "")}</span></span></div>`);
  }
  marks.push(`<div class="climb-pointer" style="top:46%"><span class="climb-pointer-label">${height(v2.points)}</span></div>`);
  for (const f2 of v2.friends) {
    const y2 = 0.46 + v2.y - f2.y;
    if (y2 < 0 || y2 > 1) marks.push(`<div class="climb-friend-arrow ${y2 < 0 ? "is-up" : "is-down"}" style="top:${y2 < 0 ? 85 : h2 - 20}px;--friend-colour:var(--team-f1)"><span class="climb-friend-arrow-name">${esc(f2.name)}</span><span class="climb-friend-arrow-alt">${height(f2.points)}</span></div>`);
  }
  $2("#ruler").innerHTML = marks.join("");
}
function onView(v2) {
  view = v2;
  if (screen !== "run") return;
  if ($2("#height")) $2("#height").textContent = height(v2.points);
  if ($2("#points")) $2("#points").textContent = fmt(v2.points) + " pts";
  if (!onView.rulerAt || performance.now() - onView.rulerAt > 90) {
    ruler(v2);
    onView.rulerAt = performance.now();
  }
  if (v2.phase === "rising" && v2.zone !== zoneSeen) {
    zoneSeen = v2.zone;
    const z2 = e2[v2.zone];
    $2("#banner").innerHTML = `<div class="climb-banner is-animated"><p class="climb-banner-name">${z2.name}</p><p class="climb-banner-blurb">${z2.blurb}</p></div>`;
    setTimeout(() => {
      if (zoneSeen === v2.zone) $2("#banner").innerHTML = "";
    }, 4500);
    if (performance.now() - zoneSoundAt > 1200) {
      audio.play("zone");
      zoneSoundAt = performance.now();
    }
  }
  if (best > 0 && !recorded && v2.points > best) {
    recorded = true;
    audio.play("record");
  }
  audio.mix(v2.altitude);
}
var riseAudio;
function onCue(c3) {
  if (c3.cue === "rise") {
    audio.play("submit");
    riseAudio = audio.play("rise", { gain: [0.5, 0.65, 0.78, 0.9, 1][c3.band], endIn: c3.ms / 1e3 });
  } else if (c3.cue === "miss") audio.play(c3.reason === "timeout" ? "timeout" : "skip");
  else if (c3.cue === "land") {
    riseAudio?.fade(0.25);
    if (c3.band !== null) audio.play("result-" + c3.band);
  }
}
function tick() {
  if (screen === "run" && state?.phase === "playing") {
    const remaining = timeRemaining(state, now()), s3 = Math.ceil(remaining / 1e3);
    if (s3 !== lastSecond) {
      lastSecond = s3;
      const el = $2(".climb-clock-seconds");
      if (el) el.textContent = s3;
      if (s3 > 0 && s3 <= 5) {
        audio.play("tick");
        announce(s3 + " seconds left");
      }
    }
    const clock = $2(".climb-clock");
    clock?.classList.toggle("is-warn", s3 <= 10);
    $2(".climb-clock-arc")?.setAttribute("stroke-dashoffset", String(125.664 * (1 - remaining / 3e4)));
    if (remaining <= 0) pass("timeout");
  }
  requestAnimationFrame(tick);
}
function updateCountdown() {
  const n2 = midnightRemaining(), seconds = Math.floor(n2 / 1e3), t3 = [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60].map((n3) => String(n3).padStart(2, "0")).join(":");
  for (const el of document.querySelectorAll("[data-countdown]")) el.textContent = t3;
}
async function ensureShare() {
  if (sharePromise) return sharePromise;
  sharePromise = (async () => {
    const rounds = state.results.map((r3) => ({ p: r3.promptId, a: r3.aid, b: r3.band }));
    const fallback = encodeChallenge({ mode: "daily", date: setup.date, players: [{ name, aids: state.results.map((r3) => r3.aid) }] });
    let link = location.origin + "/c/" + fallback;
    try {
      const response = await fetch("/api/runs", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ id: uid(), device, name, mode: "classic", date: setup.date, length: 10, rounds, via: challenge?.root || null }) });
      if (response.ok) {
        runRecord = await response.json();
        link = location.origin + "/c/" + runRecord.id;
      }
    } catch {
    }
    const share = { link, points: totalPoints(state), name, title: titleFor(state.results).title, zone: e2[d2(totalPoints(state))].name };
    share.text = `OpenNoillirk \xB7 ${height(share.points)}
${share.zone}
${state.results.map((r3) => r3.band === null ? "\u26AB" : bands[r3.band].circle).join("")}
${share.title}
${link}`;
    return share;
  })();
  return sharePromise;
}
async function drawCards(share) {
  await document.fonts.ready;
  await stage.captureReady("home");
  await stage.captureReady("moment");
  const moment = stage.moment();
  const variants = [{ kind: "home", label: "Your climb" }, ...moment ? [{ kind: "moment", label: "Best moment" }] : []];
  const qr = await import_qrcode.default.toDataURL(share.link, { width: 205, margin: 1, errorCorrectionLevel: "M", color: { dark: "#0e1330", light: "#f5f7ff" } });
  const qrImage = new Image();
  qrImage.src = qr;
  await qrImage.decode();
  const result = [];
  for (const v2 of variants) {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1350;
    const c3 = canvas.getContext("2d");
    c3.imageSmoothingEnabled = false;
    c3.fillStyle = "#0e1330";
    c3.fillRect(0, 0, 1080, 1350);
    const scene = stage.captureCanvas(v2.kind);
    if (scene) c3.drawImage(scene, 0, 0, 1080, 1350);
    c3.fillStyle = "rgba(14,19,48,.94)";
    c3.fillRect(40, 40, 1e3, 285);
    c3.fillRect(40, 895, 1e3, 415);
    const text = (s3, size, x2, y2, color = "#f5f7ff", weight = 600) => {
      c3.fillStyle = color;
      c3.font = `${weight} ${size}px "Pixelify Sans"`;
      c3.fillText(s3, x2, y2);
    };
    text("OPENNOILLIRK \xB7 CLASSIC CLIMB", 30, 64, 90, "#ffc83d");
    text(height(share.points), 104, 64, 210, "#ffc83d", 700);
    text(share.zone, 38, 64, 275);
    if (v2.kind === "moment" && moment) {
      const r3 = state.results[moment.round];
      c3.fillStyle = "#0e1330ee";
      c3.fillRect(64, 725, 952, 110);
      text(`${bands[r3.band].name} \xB7 +${r3.points}`, 38, 88, 770, bands[r3.band].color);
      let size = 32;
      c3.font = `600 ${size}px "Pixelify Sans"`;
      while (c3.measureText(r3.canonical).width > 880 && size > 20) {
        size -= 2;
        c3.font = `600 ${size}px "Pixelify Sans"`;
      }
      text(r3.canonical, size, 88, 810);
    }
    text("\u2726 " + share.title, 44, 64, 960, "#ffc83d");
    text(`${fmt(share.points)} points \xB7 ${state.results.filter((r3) => r3.band === 4).length} #1 answers`, 30, 64, 1010, "#cdd2ee");
    state.results.forEach((r3, i3) => {
      c3.fillStyle = r3.band === null ? "#9aa3b1" : bands[r3.band].color;
      c3.fillRect(64 + i3 * 44, 1040, 30, 30);
    });
    text("Can you climb higher?", 38, 64, 1148);
    text("opennoillirk.com", 32, 64, 1210, "#ffc83d");
    text("Scan to play the same ten.", 25, 64, 1265, "#cdd2ee");
    c3.drawImage(qrImage, 811, 1080, 205, 205);
    const blob = await new Promise((r3) => canvas.toBlob(r3, "image/png"));
    result.push({ ...v2, canvas, blob, url: URL.createObjectURL(blob) });
  }
  return { cards: result, qr };
}
async function openShare() {
  if (screen !== "end") return;
  modalReturn = document.activeElement;
  const share = await ensureShare();
  if (!shareCards.length) {
    const drawn = await drawCards(share);
    shareCards = drawn.cards;
    openShare.qr = drawn.qr;
  }
  activeCard = 0;
  renderShare(share);
  audio.play("click");
  event("share_open", { mode: "classic" });
}
function renderShare(share) {
  $2("#share-overlay")?.remove();
  const overlay = document.createElement("div");
  overlay.id = "share-overlay";
  overlay.className = "og-pop";
  overlay.dataset.layout = innerWidth >= 900 && innerHeight >= 620 ? "dialog" : "sheet";
  overlay.innerHTML = `<section class="og-pop-panel" id="share-dialog" role="dialog" aria-modal="true" aria-labelledby="share-title"><button class="og-pop-x" data-action="close-share" aria-label="Close">${icon("close")}</button><div class="og-pop-cards"><span class="og-hero-card"><span class="og-cimg"><img src="${shareCards[activeCard].url}" alt="${shareCards[activeCard].label} card" width="1080" height="1350"></span></span><fieldset class="og-thumbs"><legend class="visually-hidden">Choose a card</legend>${shareCards.map((v2, i3) => `<button data-card-index="${i3}" aria-label="${v2.label}" aria-pressed="${i3 === activeCard}"><img src="${v2.url}" width="54" height="68" alt=""></button>`).join("")}</fieldset></div><div class="og-pop-body"><p class="og-pop-kick">Classic \xB7 Run complete</p><h2 class="og-pop-title" id="share-title" tabindex="-1">You reached <span class="you">${height(share.points)}</span></h2><div class="og-pop-meta"><span class="og-pop-badge">\u2726 ${share.title}</span></div><div class="og-linkfield"><span class="og-linkfield-url" title="${esc(share.link)}">${esc(share.link.replace(/^https?:\/\//, ""))}</span><button class="og-copy" data-action="copy-link">Copy link</button></div><p class="og-name"><span class="og-av" aria-hidden="true">${esc(name[0])}</span><span>Sending as ${esc(name)} \xB7</span><button class="og-name-edit" data-action="edit-name">Edit</button></p><div class="og-targets"><button class="og-target" data-action="native-share">Share</button><a class="og-target" href="https://wa.me/?text=${encodeURIComponent(share.text)}" target="_blank" rel="noopener">WhatsApp</a><a class="og-target" href="https://twitter.com/intent/tweet?text=${encodeURIComponent(share.text)}" target="_blank" rel="noopener">Post</a><a class="og-target" href="https://www.reddit.com/submit?url=${encodeURIComponent(share.link)}&title=${encodeURIComponent("OpenNoillirk \xB7 " + height(share.points))}" target="_blank" rel="noopener">Reddit</a><button class="og-target" data-action="save-card">Save</button><button class="og-target" data-action="copy-text">Copy result</button></div><div class="og-qrblock"><span class="og-qr"><img src="${openShare.qr}" alt="QR code for this challenge" width="148" height="148"></span><div><b>Friends in the room?</b><p>Scan to open this challenge on a phone, then send it from any app.</p></div></div></div></section>`;
  $2(".og-ui", game).append(overlay);
  document.body.classList.add("modal-open");
  $2("#share-title").focus({ preventScroll: true });
  overlay.addEventListener("click", (e3) => {
    if (e3.target === overlay) closeShare();
  });
}
function closeShare() {
  $2("#share-overlay")?.remove();
  document.body.classList.remove("modal-open");
  modalReturn?.focus({ preventScroll: true });
}
async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast("Copied");
    audio.play("copy");
  } catch {
    const input = document.createElement("textarea");
    input.value = text;
    document.body.append(input);
    input.select();
    document.execCommand("copy");
    input.remove();
    toast("Copied");
  }
}
async function changeName() {
  const share = await ensureShare();
  const holder = $2(".og-name");
  holder.innerHTML = `<form class="name-form"><label>Sending as <input name="nickname" data-clarity-mask="true" aria-label="Nickname" value="${esc(name)}" maxlength="16"></label><button type="submit">Save</button><button type="button" data-action="cancel-name">Cancel</button></form>`;
  const form = $2(".name-form");
  $2("input", form).focus();
  $2("input", form).select();
  form.addEventListener("submit", async (e3) => {
    e3.preventDefault();
    name = normalizeName($2("input", form).value);
    save("nickname", name);
    if (runRecord) await fetch("/api/runs/" + runRecord.id, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ device, name }) });
    sharePromise = null;
    if (runRecord) {
      sharePromise = Promise.resolve({ ...share, name });
    }
    for (const c3 of shareCards) URL.revokeObjectURL(c3.url);
    shareCards = [];
    closeShare();
    openShare();
  });
}
async function action(a3, target) {
  switch (a3) {
    case "start":
      return start();
    case "restart":
      closeShare();
      save(storageKey, null);
      return start(true);
    case "next":
      audio.play("click");
      return next();
    case "pass":
      return pass("passed");
    case "sound":
      target.setAttribute("aria-pressed", audio.toggleSound());
      return;
    case "music":
      target.setAttribute("aria-pressed", audio.toggleMusic());
      return;
    case "leave":
      persist();
      stage.next();
      return intro();
    case "share":
      return openShare();
    case "close-share":
      return closeShare();
    case "copy-link":
      return copy((await ensureShare()).link);
    case "copy-text":
      return copy((await ensureShare()).text);
    case "save-card": {
      const a4 = document.createElement("a");
      a4.href = shareCards[activeCard].url;
      a4.download = `opennoillirk-${shareCards[activeCard].kind}.png`;
      a4.click();
      event("share_action", { method: "save" });
      return;
    }
    case "native-share": {
      const share = await ensureShare(), file = new File([shareCards[activeCard].blob], "opennoillirk.png", { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({ text: share.text, files: [file] });
        } catch (e3) {
          if (e3.name !== "AbortError") copy(share.text);
        }
      } else if (navigator.share) {
        try {
          await navigator.share({ text: share.text, url: share.link });
        } catch (e3) {
          if (e3.name !== "AbortError") copy(share.text);
        }
      } else copy(share.text);
      return;
    }
    case "edit-name":
      return changeName();
    case "cancel-name":
      return renderShare(await ensureShare());
    case "report":
      await fetch("/api/refused", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ p: state.prompts[state.index].id, t: refused, r: true }) });
      toast("Thanks \u2014 answer reported");
      target.disabled = true;
      return;
    case "table":
      toast("Tabletop is coming next. Sky Climb is ready to play.");
      return;
    case "climb":
      return;
  }
}
document.addEventListener("click", (e3) => {
  const t3 = e3.target.closest("[data-action]");
  if (t3) {
    e3.preventDefault();
    Promise.resolve(action(t3.dataset.action, t3)).catch((error) => {
      console.error(error);
      toast("Something went wrong. Please try again.");
    });
  }
  const c3 = e3.target.closest("[data-card-index]");
  if (c3) {
    activeCard = Number(c3.dataset.cardIndex);
    ensureShare().then(renderShare);
  }
});
document.addEventListener("keydown", (e3) => {
  if ($2("#share-dialog")) {
    if (e3.key === "Escape") {
      e3.preventDefault();
      closeShare();
    }
    if (e3.key === "Tab") {
      const items = [...$2("#share-dialog").querySelectorAll("button,a,input")].filter((x2) => !x2.disabled), first = items[0], last = items.at(-1);
      if (e3.shiftKey && document.activeElement === first) {
        e3.preventDefault();
        last.focus();
      } else if (!e3.shiftKey && document.activeElement === last) {
        e3.preventDefault();
        first.focus();
      }
    }
    return;
  }
  if (screen === "run" && cardShown && e3.key === "Enter" && !e3.repeat) {
    e3.preventDefault();
    next();
  }
  if (e3.key === "f" && !e3.ctrlKey && !e3.metaKey && !e3.target.matches("input,textarea")) {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else game.requestFullscreen?.();
  }
});
game.addEventListener("pointerdown", (e3) => {
  if (e3.target.closest("button,input,a,label,summary")) return;
  if (screen === "run" && state.phase === "reveal" && !cardShown) stage.fastForward();
  else if (screen === "run" && state.phase === "playing") $2("input", game)?.focus({ preventScroll: true });
});
document.addEventListener("visibilitychange", () => {
  if (!state) return;
  if (document.hidden) {
    state = pauseRun(state, now());
    stage?.pause();
  } else {
    state = resumeRun(state, now());
    stage?.resume();
  }
});
function resize() {
  const v2 = window.visualViewport, h2 = v2?.height || innerHeight;
  game.style.setProperty("--vvh", `${h2}px`);
  game.toggleAttribute("data-compact", h2 <= 600);
  const box = game.getBoundingClientRect();
  stage?.resize(Math.max(1, box.width), Math.max(1, box.height), devicePixelRatio || 1);
}
window.visualViewport?.addEventListener("resize", resize);
window.addEventListener("resize", resize);
window.render_game_to_text = () => JSON.stringify({ screen, phase: state?.phase || "idle", coordinateSystem: "origin top-left; x right, y down; camera y measured in screens; krill anchor 46% of viewport", round: state ? Math.min(10, state.index + 1) : 0, prompt: state?.prompts[state.index]?.text, remainingMs: state?.phase === "playing" ? timeRemaining(state, now()) : null, points: state ? totalPoints(state) : 0, altitude: view?.altitude || 0, zone: e2[view?.zone || 0].name, krill: { x: game.clientWidth / 2, y: game.clientHeight * 0.46 }, cardShown, result: state?.results.at(-1) || null, results: state?.results.map((r3) => ({ band: r3.band, points: r3.points })), shareOpen: !!$2("#share-dialog"), challenge: challenge?.name || null, sound: audio.debug() });
window.advanceTime = async (ms) => {
  if (screen === "run" && state?.phase === "playing") {
    clockOffset += ms;
    if (timeRemaining(state, now()) <= 0) pass("timeout");
  }
  if (ms >= 6e3 && state?.phase === "reveal" && !cardShown) stage?.fastForward();
  await new Promise((r3) => requestAnimationFrame(r3));
};
async function init() {
  setup = await fetch("/game/classic.json").then((r3) => {
    if (!r3.ok) throw Error("Question bank unavailable");
    return r3.json();
  });
  if (location.pathname.startsWith("/c/")) {
    const code = decodeURIComponent(location.pathname.slice(3));
    if (/^[\w]{8}$/.test(code)) {
      const r3 = await fetch("/api/challenges/" + code);
      if (r3.ok) challenge = await r3.json();
    } else {
      const decoded = decodeChallenge(code, "2099-12-31");
      if (!decoded.error && decoded.players?.length) {
        const p3 = decoded.players.at(-1);
        const rounds = p3.aids.map((aid, i3) => ({ p: setup.prompts[i3].id, a: aid, b: aid === null ? null : roster(setup.prompts[i3])[aid]?.[1] ?? null }));
        challenge = { name: p3.name, rounds, points: rounds.reduce((s3, r3, i3) => s3 + (r3.b === null ? 0 : bands[r3.b].points * weights[i3]), 0) };
      }
    }
    if (!challenge) toast("This challenge could not be found. You can still play a fresh climb.");
  }
  resize();
  const box = game.getBoundingClientRect();
  stage = createClimbStage({ canvas: $2(".climb-scene"), krill: $2(".climb-krill"), width: box.width, height: box.height, pixelRatio: devicePixelRatio || 1, reducedMotion: reduced, coarse: matchMedia("(pointer:coarse)").matches, onFail: () => toast("The scene could not load. Reload to try again.") });
  stage.onView(onView);
  stage.on("card", showResult);
  stage.on("cue", onCue);
  await stage.ready;
  $2(".climb-board").dataset.ready = "true";
  intro();
  requestAnimationFrame(tick);
  setInterval(updateCountdown, 1e3);
  if (!challenge && read(storageKey)?.done) {
    state = startRun(createRun({ prompts: setup.prompts, length: 10 }), now());
    state = { ...state, phase: "done", index: 10, results: read(storageKey).results };
    stage.setMode("run", []);
    stage.setScores({ you: totalPoints(state) });
    finish();
  }
  const picks = [...document.querySelectorAll(".hr-pick")];
  function demo(index) {
    const b2 = bands[index], pts = b2.points * 2, people = Math.floor(pts / 25), result = $2(".hr-result");
    picks.forEach((x2, i3) => x2.setAttribute("aria-pressed", String(i3 === index)));
    result.style.setProperty("--c", `var(--band-${index})`);
    $2(".hr-band", result).textContent = b2.name.toUpperCase();
    $2(".hr-result-answer", result).textContent = $2("b", picks[index]).textContent;
    $2(".hr-result-points", result).textContent = "+" + pts;
    $2(".hr-result-why", result).textContent = ["Right, but few people say it.", "A popular answer on this board.", "One of the five most common answers.", "The second most common answer.", "The answer most people give."][index];
    $2(".hr-result-math", result).textContent = b2.points + " points \xD7 2 for question 4";
    $2(".hr-result-follow", result).innerHTML = `<span class="hr-dots">${Array.from({ length: people }, (_2, i3) => `<i style="animation-delay:${i3 * 40}ms"></i>`).join("")}</span><span>${people ? people + " " + (people === 1 ? "person joins" : "people join") + " you" : "Nobody joins you"}</span>`;
  }
  picks.forEach((b2, i3) => b2.addEventListener("click", () => demo(i3)));
  document.querySelectorAll(".hr-say").forEach((b2) => b2.addEventListener("click", () => demo(b2.textContent === "Paris" ? 4 : 0)));
  if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("/service-worker.js").catch(() => {
  });
}
init().catch((error) => {
  console.error(error);
  $2("#screen").innerHTML = `<div class="og-hero"><h1>OpenNoillirk</h1><p>We couldn't load the game.</p><button class="og-play" onclick="location.reload()">Try again</button></div>`;
});
