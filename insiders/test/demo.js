// This is a demonstration of how to use the idtools library. It generates a few different types of IDs and logs them to the console.
import idtools from "../dist/index.js";

const nanoidProd= idtools.nanoid.production();
const nanoidNonSecure = idtools.nanoid.nonSecure();
const uuidNIL = idtools.uuid.NIL;
const uuidV1 = idtools.uuid.v1();
const uuidV3 = idtools.uuid.v3("hello world", idtools.uuid.NIL);
const uuidV4 = idtools.uuid.v4();
const uuidV5 = idtools.uuid.v5("hello world", idtools.uuid.NIL);
const randomNumber = idtools.randomNumber();
const isoTimestamp = idtools.isoTimestamp();
const hex128 = idtools.insiderFeatures.hex128();
const randomChars = idtools.insiderFeatures.randomString("abcdefghijklmnopqrstuvwxyz0123456789", 10);


console.log("NanoID (production):", nanoidProd);
console.log("NanoID (non-secure):", nanoidNonSecure);
console.log("UUID NIL:", uuidNIL);
console.log("UUID v1:", uuidV1);
console.log("UUID v3:", uuidV3);
console.log("UUID v4:", uuidV4);
console.log("UUID v5:", uuidV5);
console.log("Random Number:", randomNumber);
console.log("ISO Timestamp:", isoTimestamp);

console.log(
`Insider Features:
    - 128-bit Hexadecimal String: ${hex128}
    - randomString (charset "abcdefghijklmnopqrstuvwxyz0123456789"): ${randomChars}
`);