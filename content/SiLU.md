---
tags:
  - type/pillar
project: "[[Neural Networks]]"
publish: true
---

SiLU (Swish) is an [[Activation Function|activation function]] mimicking [[ReLU]], a modification of [[Sigmoid]]:

$$\sigma_{\text{SiLU}}(x) = x \sigma(x) = \frac{x}{1 + e^{-x}}$$

<div class="quartz-function-plot" data-fn="x / (1 + exp(-x))" data-xmin="-5" data-xmax="5" data-ymin="-1" data-ymax="5"></div>

**Properties**:
- Smooth ReLU approximation (infinitely differentiable).
- Better for deep architectures, gradient stability.
- Derivative: $$\frac{d\sigma_{\text{SiLU}}}{dx} = \sigma(1 + x(1 - \sigma))$$

<div class="quartz-function-plot" data-fn="(1 + exp(-x) + x * exp(-x)) / ((1 + exp(-x))^2)" data-xmin="-5" data-xmax="5" data-ymin="-0.5" data-ymax="1.2"></div>
