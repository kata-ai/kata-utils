import * as crypto from "crypto";

export default function(digit: number) {
    const current_date = (new Date()).valueOf().toString();
    const random = Math.random().toString();
    let result = crypto.createHash('sha1').update(current_date + random).digest('hex');
    if (digit) {
        return result.substr(0, digit);
    }

    return result;
}