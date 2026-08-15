# 🚀 @idtools/insiders

A tiny, fast, modern production‑grade ID generator designed for every JavaScript runtime — Node, Bun, Deno, browsers, edge runtimes, and more. Zero dependencies, instant startup, and a clean API.

## Usage:

```js
import idtools from "jsr:@idtools/insiders"; // import from "@idtools/insiders" when installed with "npx jsr add @idtools/insiders" OR "pnpm install jsr:@idtools/insiders"

// NanoID
idtools.nanoid.production(); // --> generates a secure nanoid
idtools.nanoid.nonSecure(); // --> generates a non-secure* nanoid, not recommended for production

// UUID
idtools.uuid.v1(); // --> generates a UUID V1
idtools.uuid.v3(); // --> generates a UUID V3
idtools.uuid.v4(); // --> generates a UUID V4
idtools.uuid.v5(); // --> generates a UUID V5
idtools.uuid.NIL; // --> exposes the NIL

// randomNumber
idtools.randomNumber(); // --> generates a cryptographically secure random number

// iso-timestamp
idtools.isoTimestamp();

// Insider Features (experimental)
idtools.insiderFeatures.hex128(); // --> generates a 128-bit styled alphanumeric ID with segmented groups (8-4-4-4-12)
idtools.insiderFeatures.randomString(charSet, length); // --> creates a random string from a provided character set and length
```

---

## 📦 Installation

See https://jsr.io/@idtools/insiders for installation steps.

## Side Note:

This is the Insiders Package, with the latest features which are possibly experimental. For stable, production environments with a real userbase, I'd highly recommend the production version instead:
https://jsr.io/@idtools/prod


**Insider Features**

- **hex128**: Generates a 128-bit styled alphanumeric ID with segmented groups (8-4-4-4-12). Use: `idtools.insiderFeatures.hex128()`.
- **randomString**: Creates a random string from a provided character set and length. Use: `idtools.insiderFeatures.randomString(charSet, length)`.


> Note: These features are experimental and may change between Insiders releases. Prefer the stable production package for production workloads.



> Thanks to github.com/ai and github.com/uuidjs for the respective `nanoid` and `uuid` libraries!