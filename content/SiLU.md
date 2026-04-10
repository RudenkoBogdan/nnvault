---
tags:
  - type/pillar
project: "[[Neural Networks]]"
publish: true
---

SiLU (Swish) is an [[Activation Function|activation function]] mimicking [[ReLU]], a modification of [[Sigmoid]]:

$$\sigma_{\text{SiLU}}(x) = x \sigma(x) = \frac{x}{1 + e^{-x}}$$

```functionplot
---
bounds: [-5, 5, -1, 5]
grid: true
disableZoom: true
---
f(x) = x / (1 + exp(-x))
```

**Properties**:
- Smooth ReLU approximation (infinitely differentiable).
- Better for deep architectures, gradient stability.
- Derivative: $$\frac{d\sigma_{\text{SiLU}}}{dx} = \sigma(1 + x(1 - \sigma))$$

```functionplot
---
bounds: [-5, 5, -0.5, 1.2]
grid: true
disableZoom: true
---
f(x) = (1 + exp(-x) + x * exp(-x)) / ((1 + exp(-x))^2)