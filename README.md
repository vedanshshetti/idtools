# 🚀 @idtools/prod v1.2.0

A tiny, fast, modern production‑grade ID generator designed for every JavaScript runtime — Node, Bun, Deno, browsers, edge runtimes, and more. Zero dependencies, instant startup, and a clean API.

## Usage:
### nanoid
`idtools.nanoid.production()` --> generates a secure nanoid
`idtools.nanoid.nonSecure()` --> generates a non-secure* nanoid, not recommended for production

### uuid
`idtools.uuid.v1()` --> generates a UUID V1
`idtools.uuid.v3()` --> generates a UUID V3
`idtools.uuid.v4()` --> generates a UUID V4
`idtools.uuid.v5()` --> generates a UUID V5
`idtools.uuid.NIL` --> exposes the NIL

### randomNumber
`idtools.randomNumber.default()` --> generates a non-secure* random number, useful for when the JS Crypto library is unavailable
`idtools.randomNumber.secure()` --> generates a cryptographically secure random number

### smart
`idtools.smart("user_id" | "device_id" | "product_id" | "session_token")` --> returns an ID based on the specified use case


---

## 📦 Installation

### Deno
`deno add jsr:@idtools/prod`

### Yarn
`yarn add jsr:@idtools/prod`

### Vlt
`vlt install jsr:@idtools/prod`

### pnpm
`pnpm install jsr:@idtools/prod`

### npm/npx
`npx jsr add @idtools/prod`

### bun
`bunx jsr add @idtools/prod`

> Thanks to @ai and @uuid for the respective nanoid and uuid libraries