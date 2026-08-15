// This is a demonstration of how to use the idtools library. It generates a few different types of IDs and logs them to the console.
import idtools from "../dist/index.js";
import assert from "node:assert";


const nanoidProd= idtools.nanoid.production();
console.log("NanoID (production-safe):", nanoidProd);
assert(typeof nanoidProd === "string" && nanoidProd.length == 21, "Test #1: NanoID (production-safe)");

const nanoidNonSecure = idtools.nanoid.nonSecure();
console.log("NanoID (non-secure):", nanoidNonSecure);
assert(typeof nanoidNonSecure === "string" && nanoidNonSecure.length === 21, "Test #2: NanoID (non-secure)");

const uuidNIL = idtools.uuid.NIL;
console.log("UUID NIL:", uuidNIL);
assert(uuidNIL === "00000000-0000-0000-0000-000000000000", "Test #3: UUID NIL");

const uuidV1 = idtools.uuid.v1();
console.log("UUID v1:", uuidV1);
assert(typeof uuidV1 === "string", "Test #4: UUID v1");

const uuidV3 = idtools.uuid.v3("hello world", idtools.uuid.NIL);
console.log("UUID v3:", uuidV3);
assert(typeof uuidV3 === "string", "Test #5: UUID v3");

const uuidV4 = idtools.uuid.v4();
console.log("UUID v4:", uuidV4);
assert(typeof uuidV4 === "string", "Test #6: UUID v4");

const uuidV5 = idtools.uuid.v5("hello world", idtools.uuid.NIL);
console.log("UUID v5:", uuidV5);
assert(typeof uuidV5 === "string", "Test #7: UUID v5");

const randomNumber = idtools.randomNumber();
console.log("Random Number:", randomNumber);
assert(typeof randomNumber === "number" || randomNumber === undefined, "Test #8: Random Number");

const isoTimestamp = idtools.isoTimestamp();
console.log("ISO Timestamp:", isoTimestamp);
assert(typeof isoTimestamp === "string" && isoTimestamp.length === 24, "Test #9: ISO Timestamp");

const hex128 = idtools.insiderFeatures.hex128();
assert(
  /^[A-Za-z0-9]{8}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12}$/.test(hex128),
  "Test #10: 128-bit Hexadecimal String"
);

const randomChars = idtools.insiderFeatures.randomString("abcdefghijklmnopqrstuvwxyz0123456789", 10);
assert(typeof randomChars === "string" && randomChars.length === 10, 'Test #11: randomString (charset "abcdefghijklmnopqrstuvwxyz01234566789")');

console.log(
`Insider Features:
    - 128-bit Hexadecimal String: ${hex128}
    - randomString (charset "abcdefghijklmnopqrstuvwxyz0123456789"): ${randomChars}
`);

const ulidValue = idtools.ulid();
console.log("ULID:", ulidValue);

// ULID must be a 26‑character Crockford Base32 string
assert(
  typeof ulidValue === "string" &&
  /^[0-9A-HJKMNP-TV-Z]{26}$/.test(ulidValue),
  "Test #12: ULID (lexicographically sortable Base32 identifier)"
);
