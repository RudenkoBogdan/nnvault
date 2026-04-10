---
tags:
  - type/pillar
project: "[[Neural Networks]]"
publish: true
---

A [[Loss Function|loss function]] quantifies the discrepancy between the network's output $\hat{y}$ and target $y$.

It formalizes a "good" predictor and builds the [[Empirical Risk Minimization|empirical risk]].

If differentiable, its gradient enables parameter updates via [[Backpropagation Algorithm|backpropagation]].

**Regression**:
- [[MSE]]
- [[MAE]]
- [[Huber Loss]]

**Classification**:
- Log loss