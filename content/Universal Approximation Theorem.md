---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

**Definition**: A function class $\mathcal{H}: \mathbb{R}^d \to \mathbb{R}$ is a universal approximator for $C(K)$ if for any $f \in C(K)$ and $\varepsilon > 0$, there exists $g \in \mathcal{H}$ s.t.

$$\sup_{x \in K} |f(x) - g(x)| < \varepsilon$$

**Theorem**: Let $\sigma$ be locally bounded, piecewise continuous [[Activation Function|activation]]. A single-layer network $(\sigma, d, n, 1)$ universally approximates $C(K)$ iff $\sigma$ is not a polynomial.
