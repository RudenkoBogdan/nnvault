---
tags:
  - type/pillar
project: "[[Neural Networks]]"
publish: true
---

[[Neural Network Training|Neural network training]] is mathematically the minimization of the risk functional. The mathematical risk measures the average [[Data Losses|losses]] of the algorithm over the entire population.

The risk (expected losses) for function $h$ w.r.t. distribution $\mathcal{D}$ is:

$$R(h) = \mathbb{E}_{(x,y) \sim \mathcal{D}} \left[ \mathcal{L}(h(x), y) \right]$$

where $\mathcal{L}$ is the [[Loss Function|loss function]].

In practice, $\mathcal{D}$ is unknown, so $R(h)$ is intractable; instead, we use [[Empirical Risk Minimization]].
