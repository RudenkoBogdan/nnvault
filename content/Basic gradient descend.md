---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---
The simplest [[Optimizer|optimizer]]:

$$
\theta_{t+1}=\theta_{t}-\eta \nabla_{\theta}\mathcal{L}(\theta_{t})
$$

where $\eta$ - learning rate, $\nabla_{\theta}\mathcal{L}(\theta_{t})$ - gradient of [[Loss function|loss]] with respect of all parameters (computed via [[Backpropagation|backpropagation]]).