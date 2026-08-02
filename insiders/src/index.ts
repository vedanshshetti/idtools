/*
Copyright 2026 Vedansh Shetti <vedansh.shetti@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


import { nanoid } from "nanoid";
import { nanoid as nanoidNs } from "nanoid/non-secure";
import { v1, v3, v4, v5, NIL } from "uuid";


function smartID(use_case: "user_id" | "device_id" | "product_id" | "session_token"): string {
    switch (use_case) {
        case "user_id":
            return v4();
        case "device_id":
            return v1();
        case "product_id":
            return nanoid();
        case "session_token":
            return SECURE_RNG()!.toString();
        default:
            throw new Error("Invalid use case. Valid options are: 'user_id', 'device_id', 'product_id', 'session_token'.");
    }
}

function SECURE_RNG(): number | undefined{
    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0];
    } else {
        throw new Error("The crypto library, powering the secure random number generator, is not available in this environment. We urge you to fix this issue, as the absence of the crypto library can often indicate that the environment is not secure.");
    }
}

function randomChars(charSet: string, length: number): string {
    console.warn("WARING: You are currently using an experimental feature from the @idtools/insiders package. Stability is NOT guaranteed.");
    let out = "";
    for (let i = 0; i < length; i++) {
        const rand = Math.floor(Math.random() * charSet.length);
        out += charSet[rand];
    }
    return out;
}

function Hex128Bit(): string {  
    console.warn("WARING: You are currently using an experimental feature from the @idtools/insiders package. Stability is NOT guaranteed.");
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return `${randomChars(charset, 8)}-${randomChars(charset, 4)}-${randomChars(charset, 4)}-${randomChars(charset, 4)}-${randomChars(charset, 12)}`;
}


const idtools = {
    "nanoid": {
        production: nanoid,
        nonSecure: nanoidNs
    },
    "uuid": {
        "v1": v1,
        "v3": v3,
        "v4": v4,
        "v5": v5,
        "NIL": NIL
    },
    "randomNumber": SECURE_RNG,
    "smart": smartID,
    "insiderFeatures": {
        "hex128": Hex128Bit,
        "randomString": randomChars
    }
}


export default idtools;