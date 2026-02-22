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


function NON_SECURE_RNG(): number  {
    console.warn("WARNING: Using non-secure random number generator. This random number generator is NOT cryptographically secure and is not recommended for production use.");
    return Number(Math.random().toString().replace("0.", ""));
}

function SECURE_RNG(): number | undefined{
    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0];
    } else {
        throw new Error("Secure random number generator is not available in this environment.");
    }
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
    "randomNumber": {
        "default": NON_SECURE_RNG,
        "secure": SECURE_RNG
    }
}


export default idtools;