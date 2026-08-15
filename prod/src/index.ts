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
import { ulid, type PRNG, type ULID } from "ulid";
import { v1, v3, v4, v5, NIL } from "uuid";


function SECURE_RNG(): number | undefined{
    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0];
    } else {
        throw new Error("Secure random number generator is not available in this environment.");
    }
}

function isoTs(): `${number}-${string}-${string}T${string}:${string}:${string}.${string}Z` {
  const d = new Date();

  const pad = (n: number, len = 2) => (String(n).padStart(len, "0"));

  return (`${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}T${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}.${pad(d.getUTCMilliseconds(), 3)}Z`);
}

interface IdToolsAPI {
    "nanoid": {
        production: typeof nanoid;
        nonSecure: typeof nanoidNs;
    },
    "uuid": {
        "v1": typeof v1;
        "v3": typeof v3;    
        "v4": ()=> string;
        "v5": typeof v5;
        "NIL": "00000000-0000-0000-0000-000000000000";
    },
    "randomNumber": ()=> number | undefined;
    "isoTimestamp": () => `${number}-${string}-${string}T${string}:${string}:${string}.${string}Z`;
    "ulid": (seedTime?: number | undefined, prng?: PRNG | undefined) => ULID;
};

const idtools: IdToolsAPI = {
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
    "isoTimestamp": isoTs,
    "ulid": ulid
}


export default idtools;