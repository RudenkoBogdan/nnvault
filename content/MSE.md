---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

$$L = \|\hat{y} - y\|_{L_2}^2 = (\hat{y} - y)^2$$

**Properties**:
- Smooth, differentiable – suitable for backprop.
- Convex in arguments, non-convex in network parameters.
- Sensitive to outliers.
- Minimizing MSE equivalent to maximum likelihood under Gaussian noise.