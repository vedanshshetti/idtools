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