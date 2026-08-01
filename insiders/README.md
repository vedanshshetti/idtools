# 🚀 @idtools/prod v1.2.1

A tiny, fast, modern production‑grade ID generator designed for every JavaScript runtime — Node, Bun, Deno, browsers, edge runtimes, and more. Zero dependencies, instant startup, and a clean API.

## Usage:
```js
import idtools from "jsr:@idtools/prod"; // import from "@idtools/prod" when installed with "npx jsr add @idtools/prod" OR "pnpm install jsr:@idtools/prod"

// NanoID
idtools.nanoid.production() // --> generates a secure nanoid
idtools.nanoid.nonSecure() // --> generates a non-secure* nanoid, not recommended for production

// UUID
idtools.uuid.v1() // --> generates a UUID V1
idtools.uuid.v3() // --> generates a UUID V3
idtools.uuid.v4() // --> generates a UUID V4
idtools.uuid.v5() // --> generates a UUID V5
idtools.uuid.NIL // --> exposes the NIL

// randomNumber
idtools.randomNumber.default() // --> generates a non-secure* random number, useful for when the JS Crypto library is unavailable
idtools.randomNumber.secure() // --> generates a cryptographically secure random number

// smart
idtools.smart("user_id" | "device_id" | "product_id" | "session_token") // --> returns an ID based on the specified use case
```

---

## 📦 Installation
See https://jsr.io/@idtools/prod for installation steps.


## Side Note:  
This is the Insiders Package, with the latest features which are possibly experimental, for stable, production environments, I'd highly recommend the production version instead:
https://jsr.io/@idtools/prod

> Thanks to github.com/ai and github.com/uuidjs for the respective `nanoid` and `uuid` libraries!