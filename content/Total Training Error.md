---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

The [[Total Training Error]] is the difference between the risk of the obtained model and the minimal possible (Bayes) risk.

It decomposes into three components: [[Approximation Error]], [[Optimization Error]], and [[Generalization Error]].

Network design balances these:

| Error          | Source             | Effect of Growth | Analysis Tool                  |
|----------------|--------------------|------------------|--------------------------------|
| Approximation  | Network architecture | Decreases     | [[Universal Approximation Theorem]] |
| Generalization | Data limitation    | Increases      | Covering numbers, VC-dimension |
| Optimization   | Training algorithm | Decreases      | Loss landscape, gradient flow  |