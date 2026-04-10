---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

The standard logistic [[Activation Function|sigmoid]] is:

$$\sigma(x) = \frac{1}{1 + e^{-x}} = \frac{e^x}{e^x + 1}$$

```functionplot
--- 
bounds: [-6, 6, -0.1, 1.1] 
disableZoom: true
grid: true 
--- 
f(x) = 1 / (1 + exp(-x))
```

**Properties**:
- Range: $\sigma(x) \in (0,1)$ – interpretable as probability.
- Smooth: $C^\infty$.
- Symmetry: $\sigma(-x) = 1 - \sigma(x)$.
- Derivative: $\frac{d\sigma}{dx} = \sigma(1 - \sigma)$, max 0.25 at 0.

```functionplot
--- 
bounds: [-6, 6, -0.1, 0.3] 
disableZoom: true
grid: true 
--- 
f(x) = exp(-x) / (1 + exp(-x))^2
```

Rarely used in hidden layers due to [[Vanishing Gradients]].
