---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

```python
np.array(object, dtype=None, copy=True, order='K', subok=False, ndmin=0)
```

**Args**:
- `object`: Data source.
- `dtype`: Data type.
- `copy`: Copy or view.

**Attributes**:
- `.shape`, `.ndim`, `.size`, `.dtype`
- `.T` (transpose), `.mT` (matrix T)
- `.itemsize`, `.nbytes`, `.flat`

Unlike Python lists (pointers), NumPy stores data contiguously like C.