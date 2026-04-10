---
tags:
  - type/pillar
project: "[[Neural Networks]]"
publish: true
---

[[Overfitting]] is a manifestation of [[Generalization Error]], where the model performs well on training data but poorly on unseen data, losing generalization ability.

This occurs because [[Empirical Risk Minimization]] ≠ true risk minimization: $R(\Phi) \gg R_S(\Phi)$, where $R$ is true risk and $R_S$ empirical.

Overfitting results from imbalance between model complexity and data informativeness ([[Bias-Variance Tradeoff]]).
