---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

[[Weight Divergence]] is unbounded growth of network parameters during [[Empirical Risk Minimization|empirical risk minimization]], part of [[Generalization Error]].

Occurs when target function lies outside the closure of representable functions.

The network compensates limited expressivity by exploding weights.

Mitigated by [[Weight Decay]].