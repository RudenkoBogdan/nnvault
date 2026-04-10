---
tags:
  - type/pillar
project: "[[Neural Networks]]"
publish: true
---

## 1. Data Preparation

- Implement `Dataset` class inheriting `torch.utils.data.Dataset` with `__len__` and `__getitem__(index)` returning `(sample, label)` tensors.
- Use `DataLoader` to batch and shuffle.