"use strict";

const chalk = require("chalk");

// --- Bagian Watermark ---
// Menimpa console.log untuk menambahkan watermark "AKIL"
const originalConsoleLog = console.log;
const WATERMARK = chalk.blueBright("[AKIL]"); // Menggunakan chalk untuk watermark berwarna

console.log = function (message) {
    // Pastikan message bukan undefined sebelum diolah
    const output = message !== undefined ? message : "";
    
    // Memeriksa apakah pesan mengandung warna atau bukan, lalu menambahkan watermark
    if (typeof output === 'string' && output.includes('------------------------------')) {
        // Jika hanya pemisah, jangan beri watermark
        originalConsoleLog(output);
    } else {
        // Tambahkan watermark ke awal setiap log
        originalConsoleLog(WATERMARK, output);
    }
};

// --- Pesan Startup (Sekarang dengan Watermark) ---
console.log(chalk.whiteBright("Hi, Thank you for using baileys @Ikhsanproject ^-^"));
console.log(chalk.cyan("Telegram: ") + chalk.greenBright("@ikhsanproject"));
console.log(chalk.gray("------------------------------\n"));

// --- Kode Asli Baileys (Tanpa Perubahan) ---
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
