# kata-utils
> A things that help you develop your service


## Install

```bash
npm install --save kata-utils
```

## Usage

```typescript
import * as utils from "kata-utils";

export default function(arg: number) {
    return utils.hash(arg);
}
```
## Docs

### 1. hash()

Function for generating hash based on sha1 algorithm

```bash
hash()
8e70d3415397194aebf21d2e527d1900839e2dea

hash(7)
9c939d4
```

## License

MIT © [kata-ai](https://github.com/kata-ai)
