// This is a demonstration of how to use the idtools library. It generates a few different types of IDs and logs them to the console.
import idtools from "../src/index.js";

const nanoidProd= idtools.nanoid.production();
const nanoidNonSecure = idtools.nanoid.nonSecure();
const uuidV1 = idtools.uuid.v1();
const uuidV3 = idtools.uuid.v3("hello world", idtools.uuid.NIL);
const uuidV4 = idtools.uuid.v4();
const uuidV5 = idtools.uuid.v5("hello world", idtools.uuid.NIL);
const randomNumberDefault = idtools.randomNumber.default();
const randomNumberSecure = idtools.randomNumber.secure();

console.log("NanoID (production):", nanoidProd);
console.log("NanoID (non-secure):", nanoidNonSecure);
console.log("UUID v1:", uuidV1);
console.log("UUID v3:", uuidV3);
console.log("UUID v4:", uuidV4);
console.log("UUID v5:", uuidV5);
console.log("Random Number (default):", randomNumberDefault);
console.log("Random Number (secure):", randomNumberSecure);