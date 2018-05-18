"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
function default_1(digit) {
    const current_date = (new Date()).valueOf().toString();
    const random = Math.random().toString();
    let result = crypto.createHash('sha1').update(current_date + random).digest('hex');
    if (digit) {
        return result.substr(0, digit);
    }
    return result;
}
exports.default = default_1;
//# sourceMappingURL=hash.js.map