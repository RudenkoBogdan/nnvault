---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

**Floating point**:
- `torch.float32`: Default 32-bit.
- `torch.float64`: 64-bit (rare, memory-heavy).
- `torch.float16`: 16-bit for AMP on GPU.

**Integers**:
- `torch.int64`/`long`: Indices/labels.
- `torch.int32`/`int`
- `torch.int8`: Images (0-255).

**Boolean**: `torch.bool` for masks.

Defaults: float32/float, int64/int. Type promotion to higher precision. Use `torch.from_numpy()` preserves NumPy dtype—cast to float32 first.