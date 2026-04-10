---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

[[Empirical Risk Minimization|Empirical risk minimization]] (ERM) is the task of minimizing the objective function $f(w)$, the average [[Loss Function|loss]] over a finite dataset (hence "empirical").

It proceeds by adjusting network weights to find:

$$
w^* = \arg\min_{w \in \mathbb{R}^n} \frac{1}{m} \sum_{i=1}^m \mathcal{L}\left( \Phi(x_i, w), y_i \right)
$$

where $w$ are all trainable parameters (weights and biases), $m$ is dataset size, $\mathcal{L}$ is the loss function, and $S = \{(x_i, y_i)\}_{i=1}^m$ is the training set.

ERM is a proxy for true [[Neural Network Training|training objective]] and part of the [[Total Training Error]].