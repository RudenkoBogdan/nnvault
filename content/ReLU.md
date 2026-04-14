---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

ReLU (Rectified Linear Unit) is a piecewise linear [[Activation Function|activation function]]:

$$\sigma_{\text{ReLU}}(x) = \max\{0, x\}$$

<div class="quartz-function-plot" data-fn="max(0, x)" data-xmin="-5" data-xmax="5" data-ymin="-2" data-ymax="5"></div>

**Properties**:
- Computational efficiency: $\mathcal{O}(1)$.
- Sparsity for negative values.
- Derivative (0 at x=0 by convention): $\frac{d\sigma}{dx} = \{0, x<0; 1, x>0\}$

<div class="quartz-function-plot" data-fn="x < 0 ? 0 : 1" data-xmin="-5" data-xmax="5" data-ymin="-0.5" data-ymax="1.5"></div>

- Resilient to vanishing gradients (derivative=1 vs sigmoid's 0.25).
- Dying neurons problem: negative pre-activation kills neuron.
