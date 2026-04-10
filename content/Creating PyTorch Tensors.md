---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

In [[PyTorch]], two tensor initialization types: from data or zeros/random.

**From data**:
- `torch.tensor(data)`: Copies data, infers dtype.
- `torch.from_numpy(ndarray)`: Shares memory with NumPy.
- `torch.as_tensor(data)`: Avoids copy if possible.

**Zeros/filled**:
- `torch.zeros(*size)`
- `torch.ones(*size)`
- `torch.full(size, fill_value)`
- `torch.eye(n)`

**Random**:
- `torch.rand(*size)`: Uniform [0,1)
- `torch.randn(*size)`: Standard normal
- `torch.randperm(n)`

**Sequences**:
- `torch.arange(start, end, step)`
- `torch.linspace(start, end, steps)`

**Like existing**:
- `torch.zeros_like(input)`
- `tensor.new_ones(size)`