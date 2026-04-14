---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

Leaky ReLU is a piecewise continuous [[Activation Function|activation function]], a modification of [[ReLU]] with a small slope $a$ for negative values:

$$\sigma_{\text{LReLU}}(x) = \max\{x, ax\}$$

where $a \in (0,1)$ is a hyperparameter.

<div class="quartz-function-plot" data-fn="x < 0 ? 0.1 * x : x" data-xmin="-5" data-xmax="5" data-ymin="-1" data-ymax="5"></div>

**Properties**:
- Not differentiable at zero (like ReLU).
- Not sparse ($\mathbb{R} \to \mathbb{R}$).
- Solves dying neurons and vanishing gradients in negative regions (if $a$ not too small).
- Derivative: $\frac{d\sigma}{dx} = \{a, x<0; 1, x>0\}$

<div class="quartz-function-plot" data-fn="x < 0 ? 0.1 : 1" data-xmin="-5" data-xmax="5" data-ymin="-0.2" data-ymax="1.2"></div>

Transition from ReLU to Leaky ReLU doesn't change the representable function class (equivalent via weight/bias adjustment).
