---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

ReLU (Rectified Linear Unit) is a piecewise linear [[Activation Function|activation function]]:

$$\sigma_{\text{ReLU}}(x) = \max\{0, x\}$$

```functionplot
---
bounds: [-5, 5, -2, 5]
disableZoom: true
grid: true
---
f(x) = max(0, x)
```

**Properties**:
- Computational efficiency: $\mathcal{O}(1)$.
- Sparsity for negative values.
- Derivative (0 at x=0 by convention): $\frac{d\sigma}{dx} = \{0, x<0; 1, x>0\}$

```functionplot
---
bounds: [-5, 5, -0.5, 1.5]
disableZoom: true
grid: true
---
f(x) = x < 0 ? 0 : 1
```

- Resilient to vanishing gradients (derivative=1 vs sigmoid's 0.25).
- Dying neurons problem: negative pre-activation kills neuron.
