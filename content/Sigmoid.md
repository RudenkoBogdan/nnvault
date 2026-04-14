---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

The standard logistic [[Activation Function|sigmoid]] is:

$$\sigma(x) = \frac{1}{1 + e^{-x}} = \frac{e^x}{e^x + 1}$$

<div class="quartz-function-plot" data-fn="1 / (1 + exp(-x))" data-xmin="-6" data-xmax="6" data-ymin="-0.1" data-ymax="1.1"></div>

**Properties**:
- Range: $\sigma(x) \in (0,1)$ – interpretable as probability.
- Smooth: $C^\infty$.
- Symmetry: $\sigma(-x) = 1 - \sigma(x)$.
- Derivative: $\frac{d\sigma}{dx} = \sigma(1 - \sigma)$, max 0.25 at 0.

<div class="quartz-function-plot" data-fn="exp(-x) / (1 + exp(-x))^2" data-xmin="-6" data-xmax="6" data-ymin="-0.1" data-ymax="0.3"></div>

Rarely used in hidden layers due to [[Vanishing Gradients]].
