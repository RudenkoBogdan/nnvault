---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

Leaky ReLU is a piecewise continuous [[Activation Function|activation function]], a modification of [[ReLU]] with a small slope $a$ for negative values:

$$\sigma_{\text{LReLU}}(x) = \max\{x, ax\}$$

where $a \in (0,1)$ is a hyperparameter.

```functionplot
---
bounds: [-5, 5, -1, 5]
disableZoom: true
grid: true
---
f(x) = x < 0 ? 0.1 * x : x
```

**Properties**:
- Not differentiable at zero (like ReLU).
- Not sparse ($\mathbb{R} \to \mathbb{R}$).
- Solves dying neurons and vanishing gradients in negative regions (if $a$ not too small).
- Derivative: $\frac{d\sigma}{dx} = \{a, x<0; 1, x>0\}$

```functionplot
---
bounds: [-5, 5, -0.2, 1.2]
grid: true
disableZoom: true
---
f(x) = x < 0 ? 0.1 : 1
```

Transition from ReLU to Leaky ReLU doesn't change the representable function class (equivalent via weight/bias adjustment).
