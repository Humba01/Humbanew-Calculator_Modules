"use strict";
// modelo => valor1 = valor2
//           valor3 = x
exports.__esModule = true;
var process_1 = require("process");
var numeroVariaveis = 2;
var numerosNormais = [];
numerosNormais.push(1, 2, 3, 4, 5, 6);
console.log(numerosNormais);
var vars = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    n: 0,
    m: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
    a1: 0,
    b1: 0,
    c1: 0,
    d1: 0,
    e1: 0,
    f1: 0,
    g1: 0,
    h1: 0,
    i1: 0,
    j1: 0,
    k1: 0,
    l1: 0,
    n1: 0,
    m1: 0,
    o1: 0,
    p1: 0,
    q1: 0,
    r1: 0,
    s1: 0,
    t1: 0,
    u1: 0,
    v1: 0,
    w1: 0,
    x1: 0,
    y1: 0,
    z1: 0,
    a2: 0,
    b2: 0,
    c2: 0,
    d2: 0,
    e2: 0,
    f2: 0,
    g2: 0,
    h2: 0,
    i2: 0,
    j2: 0,
    k2: 0,
    l2: 0,
    n2: 0,
    m2: 0,
    o2: 0,
    p2: 0,
    q2: 0,
    r2: 0,
    s2: 0,
    t2: 0,
    u2: 0,
    v2: 0,
    w2: 0,
    x2: 0,
    y2: 0,
    z2: 0,
    a3: 0,
    b3: 0,
    c3: 0,
    d3: 0,
    e3: 0,
    f3: 0,
    g3: 0,
    h3: 0,
    i3: 0,
    j3: 0,
    k3: 0,
    l3: 0,
    n3: 0,
    m3: 0,
    o3: 0,
    p3: 0,
    q3: 0,
    r3: 0,
    s3: 0,
    t3: 0,
    u3: 0
};
for (var i = 0; i < numeroVariaveis; i++) {
    switch (i) {
        // Padrão de Sincronia 1
        case 0:
            if (numerosNormais.length < 3) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.a = numerosNormais[i] * numerosNormais[i + 1] / numerosNormais[i + 2];
            console.log(vars.a);
            break;
        // Padrão de Sincronia 2
        case 1:
            if (numerosNormais.length < 6) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.b = numerosNormais[i + 2] * numerosNormais[i + 3] / numerosNormais[i + 4];
            console.log(vars.b);
            break;
        case 2:
            if (numerosNormais.length < 9) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.c = numerosNormais[i + 4] * numerosNormais[i + 5] / numerosNormais[i + 6];
            console.log(vars.c);
            break;
        case 3:
            if (numerosNormais.length < 12) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.d = numerosNormais[i + 6] * numerosNormais[i + 7] / numerosNormais[i + 8];
            console.log(vars.d);
            break;
        case 4:
            if (numerosNormais.length < 15) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.e = numerosNormais[i + 8] * numerosNormais[i + 9] / numerosNormais[i + 10];
            console.log(vars.e);
            break;
        case 5:
            if (numerosNormais.length < 18) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.f = numerosNormais[i + 10] * numerosNormais[i + 11] / numerosNormais[i + 12];
            console.log(vars.f);
            break;
        case 6:
            if (numerosNormais.length < 21) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.g = numerosNormais[i + 12] * numerosNormais[i + 13] / numerosNormais[i + 14];
            console.log(vars.g);
            break;
        case 7:
            if (numerosNormais.length < 24) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.h = numerosNormais[i + 14] * numerosNormais[i + 15] / numerosNormais[i + 16];
            console.log(vars.h);
            break;
        case 8:
            if (numerosNormais.length < 27) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.i = numerosNormais[i + 16] * numerosNormais[i + 17] / numerosNormais[i + 18];
            console.log(vars.i);
            break;
        case 9:
            if (numerosNormais.length < 30) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.j = numerosNormais[i + 18] * numerosNormais[i + 19] / numerosNormais[i + 20];
            console.log(vars.j);
            break;
        case 10:
            if (numerosNormais.length < 33) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.k = numerosNormais[i + 20] * numerosNormais[i + 21] / numerosNormais[i + 22];
            console.log(vars.k);
            break;
        case 11:
            if (numerosNormais.length < 36) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.l = numerosNormais[i + 22] * numerosNormais[i + 23] / numerosNormais[i + 24];
            console.log(vars.l);
            break;
        case 12:
            if (numerosNormais.length < 39) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.m = numerosNormais[i + 24] * numerosNormais[i + 25] / numerosNormais[i + 26];
            console.log(vars.m);
            break;
        case 13:
            if (numerosNormais.length < 42) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.n = numerosNormais[i + 26] * numerosNormais[i + 27] / numerosNormais[i + 28];
            console.log(vars.n);
            break;
        case 14:
            if (numerosNormais.length < 45) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.o = numerosNormais[i + 28] * numerosNormais[i + 29] / numerosNormais[i + 30];
            console.log(vars.o);
            break;
        case 15:
            if (numerosNormais.length < 48) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.p = numerosNormais[i + 30] * numerosNormais[i + 31] / numerosNormais[i + 32];
            console.log(vars.p);
            break;
        case 16:
            if (numerosNormais.length < 51) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.q = numerosNormais[i + 32] * numerosNormais[i + 33] / numerosNormais[i + 34];
            console.log(vars.q);
            break;
        case 17:
            if (numerosNormais.length < 54) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.r = numerosNormais[i + 34] * numerosNormais[i + 35] / numerosNormais[i + 36];
            console.log(vars.r);
            break;
        case 18:
            if (numerosNormais.length < 57) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.s = numerosNormais[i + 36] * numerosNormais[i + 37] / numerosNormais[i + 38];
            console.log(vars.s);
            break;
        case 19:
            if (numerosNormais.length < 60) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.t = numerosNormais[i + 38] * numerosNormais[i + 39] / numerosNormais[i + 40];
            console.log(vars.t);
            break;
        case 20:
            if (numerosNormais.length < 63) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.u = numerosNormais[i + 40] * numerosNormais[i + 41] / numerosNormais[i + 42];
            console.log(vars.u);
            break;
        case 21:
            if (numerosNormais.length < 66) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.v = numerosNormais[i + 42] * numerosNormais[i + 43] / numerosNormais[i + 44];
            console.log(vars.v);
            break;
        case 22:
            if (numerosNormais.length < 69) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.w = numerosNormais[i + 44] * numerosNormais[i + 45] / numerosNormais[i + 46];
            console.log(vars.w);
            break;
        case 23:
            if (numerosNormais.length < 72) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.x = numerosNormais[i + 46] * numerosNormais[i + 47] / numerosNormais[i + 48];
            console.log(vars.x);
            break;
        case 24:
            if (numerosNormais.length < 75) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.y = numerosNormais[i + 48] * numerosNormais[i + 49] / numerosNormais[i + 50];
            console.log(vars.y);
            break;
        case 25:
            if (numerosNormais.length < 78) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.z = numerosNormais[i + 50] * numerosNormais[i + 51] / numerosNormais[i + 52];
            console.log(vars.z);
            break;
        case 26:
            if (numerosNormais.length < 81) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.a1 = numerosNormais[i + 52] * numerosNormais[i + 53] / numerosNormais[i + 54];
            console.log(vars.a1);
            break;
        case 27:
            if (numerosNormais.length < 84) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.b1 = numerosNormais[i + 54] * numerosNormais[i + 55] / numerosNormais[i + 56];
            console.log(vars.b1);
            break;
        case 28:
            if (numerosNormais.length < 87) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.c1 = numerosNormais[i + 56] * numerosNormais[i + 57] / numerosNormais[i + 58];
            console.log(vars.c1);
            break;
        case 29:
            if (numerosNormais.length < 90) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.d1 = numerosNormais[i + 58] * numerosNormais[i + 59] / numerosNormais[i + 60];
            console.log(vars.d1);
            break;
        case 30:
            if (numerosNormais.length < 93) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.e1 = numerosNormais[i + 60] * numerosNormais[i + 61] / numerosNormais[i + 62];
            console.log(vars.e1);
            break;
        case 31:
            if (numerosNormais.length < 96) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.f1 = numerosNormais[i + 62] * numerosNormais[i + 63] / numerosNormais[i + 64];
            console.log(vars.f1);
            break;
        case 32:
            if (numerosNormais.length < 99) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.g1 = numerosNormais[i + 64] * numerosNormais[i + 65] / numerosNormais[i + 66];
            console.log(vars.g1);
            break;
        case 33:
            if (numerosNormais.length < 102) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.h1 = numerosNormais[i + 66] * numerosNormais[i + 67] / numerosNormais[i + 68];
            console.log(vars.h1);
            break;
        case 34:
            if (numerosNormais.length < 105) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.i1 = numerosNormais[i + 68] * numerosNormais[i + 69] / numerosNormais[i + 70];
            console.log(vars.i1);
            break;
        case 35:
            if (numerosNormais.length < 108) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.j1 = numerosNormais[i + 70] * numerosNormais[i + 71] / numerosNormais[i + 72];
            console.log(vars.j1);
            break;
        case 36:
            if (numerosNormais.length < 111) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.k1 = numerosNormais[i + 72] * numerosNormais[i + 73] / numerosNormais[i + 74];
            console.log(vars.k1);
            break;
        case 37:
            if (numerosNormais.length < 114) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.l1 = numerosNormais[i + 74] * numerosNormais[i + 75] / numerosNormais[i + 76];
            console.log(vars.l1);
            break;
        case 38:
            if (numerosNormais.length < 117) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.m1 = numerosNormais[i + 76] * numerosNormais[i + 77] / numerosNormais[i + 78];
            console.log(vars.m1);
            break;
        case 39:
            if (numerosNormais.length < 120) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.n1 = numerosNormais[i + 78] * numerosNormais[i + 79] / numerosNormais[i + 80];
            console.log(vars.n1);
            break;
        case 40:
            if (numerosNormais.length < 123) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.o1 = numerosNormais[i + 80] * numerosNormais[i + 81] / numerosNormais[i + 82];
            console.log(vars.o1);
            break;
        case 41:
            if (numerosNormais.length < 126) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.p1 = numerosNormais[i + 82] * numerosNormais[i + 83] / numerosNormais[i + 84];
            console.log(vars.p1);
            break;
        case 42:
            if (numerosNormais.length < 129) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.q1 = numerosNormais[i + 84] * numerosNormais[i + 85] / numerosNormais[i + 86];
            console.log(vars.q1);
            break;
        case 43:
            if (numerosNormais.length < 132) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.r1 = numerosNormais[i + 86] * numerosNormais[i + 87] / numerosNormais[i + 88];
            console.log(vars.r1);
            break;
        case 44:
            if (numerosNormais.length < 135) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.s1 = numerosNormais[i + 88] * numerosNormais[i + 89] / numerosNormais[i + 90];
            console.log(vars.s1);
            break;
        case 45:
            if (numerosNormais.length < 138) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.t1 = numerosNormais[i + 90] * numerosNormais[i + 91] / numerosNormais[i + 92];
            console.log(vars.t1);
            break;
        case 46:
            if (numerosNormais.length < 141) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.u1 = numerosNormais[i + 92] * numerosNormais[i + 93] / numerosNormais[i + 94];
            console.log(vars.u1);
            break;
        case 47:
            if (numerosNormais.length < 144) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.v1 = numerosNormais[i + 94] * numerosNormais[i + 95] / numerosNormais[i + 96];
            console.log(vars.v1);
            break;
        case 48:
            if (numerosNormais.length < 147) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.w1 = numerosNormais[i + 96] * numerosNormais[i + 97] / numerosNormais[i + 98];
            console.log(vars.w1);
            break;
        case 49:
            if (numerosNormais.length < 150) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.x1 = numerosNormais[i + 98] * numerosNormais[i + 99] / numerosNormais[i + 100];
            console.log(vars.x1);
            break;
        case 50:
            if (numerosNormais.length < 153) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.y1 = numerosNormais[i + 100] * numerosNormais[i + 101] / numerosNormais[i + 102];
            console.log(vars.y1);
            break;
        case 51:
            if (numerosNormais.length < 156) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.z1 = numerosNormais[i + 102] * numerosNormais[i + 103] / numerosNormais[i + 104];
            console.log(vars.z1);
            break;
        case 52:
            if (numerosNormais.length < 159) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.a2 = numerosNormais[i + 104] * numerosNormais[i + 105] / numerosNormais[i + 106];
            console.log(vars.a2);
            break;
        // Padrão de Sincronia 3
        case 53:
            if (numerosNormais.length < 161) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.b2 = numerosNormais[i + 105] * numerosNormais[i + 106] / numerosNormais[i + 107];
            console.log(vars.b2);
            break;
        case 54:
            if (numerosNormais.length < 164) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.c2 = numerosNormais[i + 107] * numerosNormais[i + 108] / numerosNormais[i + 109];
            console.log(vars.c2);
            break;
        case 55:
            if (numerosNormais.length < 167) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.d2 = numerosNormais[i + 109] * numerosNormais[i + 110] / numerosNormais[i + 111];
            console.log(vars.d2);
            break;
        case 56:
            if (numerosNormais.length < 170) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.e2 = numerosNormais[i + 111] * numerosNormais[i + 112] / numerosNormais[i + 113];
            console.log(vars.e2);
            break;
        case 57:
            if (numerosNormais.length < 173) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.f2 = numerosNormais[i + 113] * numerosNormais[i + 114] / numerosNormais[i + 115];
            console.log(vars.f2);
            break;
        case 58:
            if (numerosNormais.length < 176) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.g2 = numerosNormais[i + 115] * numerosNormais[i + 116] / numerosNormais[i + 117];
            console.log(vars.g2);
            break;
        case 59:
            if (numerosNormais.length < 179) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.h2 = numerosNormais[i + 117] * numerosNormais[i + 118] / numerosNormais[i + 119];
            console.log(vars.h2);
            break;
        case 60:
            if (numerosNormais.length < 181) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.i2 = numerosNormais[i + 118] * numerosNormais[i + 119] / numerosNormais[i + 120];
            console.log(vars.i2);
            break;
        case 61:
            if (numerosNormais.length < 185) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.j2 = numerosNormais[i + 121] * numerosNormais[i + 122] / numerosNormais[i + 123];
            console.log(vars.j2);
            break;
        case 62:
            if (numerosNormais.length < 188) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.k2 = numerosNormais[i + 123] * numerosNormais[i + 124] / numerosNormais[i + 125];
            console.log(vars.k2);
            break;
        case 63:
            if (numerosNormais.length < 191) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.l2 = numerosNormais[i + 125] * numerosNormais[i + 126] / numerosNormais[i + 127];
            console.log(vars.l2);
            break;
        case 64:
            if (numerosNormais.length < 194) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.m2 = numerosNormais[i + 127] * numerosNormais[i + 128] / numerosNormais[i + 129];
            console.log(vars.m2);
            break;
        case 65:
            if (numerosNormais.length < 197) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.n2 = numerosNormais[i + 129] * numerosNormais[i + 130] / numerosNormais[i + 131];
            console.log(vars.n2);
            break;
        case 66:
            if (numerosNormais.length < 200) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.o2 = numerosNormais[i + 131] * numerosNormais[i + 132] / numerosNormais[i + 133];
            console.log(vars.o2);
            break;
        case 67:
            if (numerosNormais.length < 203) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.p2 = numerosNormais[i + 133] * numerosNormais[i + 134] / numerosNormais[i + 135];
            console.log(vars.p2);
            break;
        case 68:
            if (numerosNormais.length < 206) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.q2 = numerosNormais[i + 135] * numerosNormais[i + 136] / numerosNormais[i + 137];
            console.log(vars.q2);
            break;
        case 69:
            if (numerosNormais.length < 209) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.r2 = numerosNormais[i + 137] * numerosNormais[i + 138] / numerosNormais[i + 139];
            console.log(vars.r2);
            break;
        case 70:
            if (numerosNormais.length < 212) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.s2 = numerosNormais[i + 139] * numerosNormais[i + 140] / numerosNormais[i + 141];
            console.log(vars.s2);
            break;
        case 71:
            if (numerosNormais.length < 215) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.t2 = numerosNormais[i + 141] * numerosNormais[i + 142] / numerosNormais[i + 143];
            console.log(vars.t2);
            break;
        case 72:
            if (numerosNormais.length < 218) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.u2 = numerosNormais[i + 143] * numerosNormais[i + 144] / numerosNormais[i + 145];
            console.log(vars.u2);
            break;
        case 73:
            if (numerosNormais.length < 221) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.v2 = numerosNormais[i + 145] * numerosNormais[i + 146] / numerosNormais[i + 147];
            console.log(vars.v2);
            break;
        case 74:
            if (numerosNormais.length < 224) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.w2 = numerosNormais[i + 147] * numerosNormais[i + 148] / numerosNormais[i + 149];
            console.log(vars.w2);
            break;
        case 75:
            if (numerosNormais.length < 227) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.x2 = numerosNormais[i + 149] * numerosNormais[i + 150] / numerosNormais[i + 151];
            console.log(vars.x2);
            break;
        case 76:
            if (numerosNormais.length < 230) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.y2 = numerosNormais[i + 151] * numerosNormais[i + 152] / numerosNormais[i + 153];
            console.log(vars.y2);
            break;
        case 77:
            if (numerosNormais.length < 233) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.z2 = numerosNormais[i + 153] * numerosNormais[i + 154] / numerosNormais[i + 155];
            console.log(vars.z2);
            break;
        case 78:
            if (numerosNormais.length < 236) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.a3 = numerosNormais[i + 155] * numerosNormais[i + 156] / numerosNormais[i + 157];
            console.log(vars.a3);
            break;
        case 79:
            if (numerosNormais.length < 239) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.b3 = numerosNormais[i + 157] * numerosNormais[i + 158] / numerosNormais[i + 159];
            console.log(vars.b3);
            break;
        case 80:
            if (numerosNormais.length < 241) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.c3 = numerosNormais[i + 158] * numerosNormais[i + 159] / numerosNormais[i + 160];
            console.log(vars.c3);
            break;
        case 81:
            if (numerosNormais.length < 244) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.d3 = numerosNormais[i + 160] * numerosNormais[i + 161] / numerosNormais[i + 162];
            console.log(vars.d3);
            break;
        case 82:
            if (numerosNormais.length < 247) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.e3 = numerosNormais[i + 162] * numerosNormais[i + 163] / numerosNormais[i + 164];
            console.log(vars.e3);
            break;
        case 83:
            if (numerosNormais.length < 250) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.f3 = numerosNormais[i + 164] * numerosNormais[i + 165] / numerosNormais[i + 166];
            console.log(vars.f3);
            break;
        case 84:
            if (numerosNormais.length < 253) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.g3 = numerosNormais[i + 166] * numerosNormais[i + 167] / numerosNormais[i + 169];
            console.log(vars.g3);
            break;
        case 85:
            if (numerosNormais.length < 256) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.h3 = numerosNormais[i + 168] * numerosNormais[i + 169] / numerosNormais[i + 170];
            console.log(vars.h3);
            break;
        case 86:
            if (numerosNormais.length < 259) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.i3 = numerosNormais[i + 170] * numerosNormais[i + 171] / numerosNormais[i + 172];
            console.log(vars.i3);
            break;
        case 87:
            if (numerosNormais.length < 261) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.j3 = numerosNormais[i + 171] * numerosNormais[i + 172] / numerosNormais[i + 173];
            console.log(vars.j3);
            break;
        case 88:
            if (numerosNormais.length < 264) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.k3 = numerosNormais[i + 173] * numerosNormais[i + 174] / numerosNormais[i + 175];
            console.log(vars.k3);
            break;
        case 89:
            if (numerosNormais.length < 267) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.l3 = numerosNormais[i + 175] * numerosNormais[i + 176] / numerosNormais[i + 177];
            console.log(vars.l3);
            break;
        case 90:
            if (numerosNormais.length < 270) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.m3 = numerosNormais[i + 177] * numerosNormais[i + 178] / numerosNormais[i + 179];
            console.log(vars.m3);
            break;
        case 91:
            if (numerosNormais.length < 273) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.n3 = numerosNormais[i + 179] * numerosNormais[i + 180] / numerosNormais[i + 181];
            console.log(vars.n3);
            break;
        case 92:
            if (numerosNormais.length < 276) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.o3 = numerosNormais[i + 181] * numerosNormais[i + 182] / numerosNormais[i + 183];
            console.log(vars.o3);
            break;
        case 93:
            if (numerosNormais.length < 279) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.p3 = numerosNormais[i + 183] * numerosNormais[i + 184] / numerosNormais[i + 185];
            console.log(vars.p3);
            break;
        case 94:
            if (numerosNormais.length < 281) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.q3 = numerosNormais[i + 184] * numerosNormais[i + 185] / numerosNormais[i + 186];
            console.log(vars.q3);
            break;
        case 95:
            if (numerosNormais.length < 284) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.r3 = numerosNormais[i + 186] * numerosNormais[i + 187] / numerosNormais[i + 188];
            console.log(vars.r3);
            break;
        case 96:
            if (numerosNormais.length < 287) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.s3 = numerosNormais[i + 188] * numerosNormais[i + 189] / numerosNormais[i + 190];
            console.log(vars.s3);
            break;
        case 97:
            if (numerosNormais.length < 290) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.t3 = numerosNormais[i + 190] * numerosNormais[i + 191] / numerosNormais[i + 192];
            console.log(vars.t3);
            break;
        case 98:
            if (numerosNormais.length < 293) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.u3 = numerosNormais[i + 192] * numerosNormais[i + 193] / numerosNormais[i + 194];
            console.log(vars.u3);
            break;
        case 99:
            if (numerosNormais.length < 296) {
                console.error("Número Normais insuficientes!");
                process_1.exit(1);
            }
            vars.u3 = numerosNormais[i + 194] * numerosNormais[i + 195] / numerosNormais[i + 196];
            console.log(vars.u3);
            break;
        default:
            console.error("Houve um ou mais erros ao realizar o calculo!");
            break;
    }
}
