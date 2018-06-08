import { createHash } from "crypto";

export default function(digit?: number): string {
    const date = new Date().valueOf().toString();
    const random = Math.random().toString();
    const result = createHash("sha1")
        .update(date + random)
        .digest("hex");

    if (digit) {
        return result.substr(0, digit);
    }

    return result;
}
