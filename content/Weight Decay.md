---
tags:
  - type/subproject
project: "[[Neural Networks]]"
publish: true
---

[[Weight Decay]] is a [[Regularization in Neural Networks|regularization]] technique preventing [[Overfitting]] and [[Weight Divergence]].

Replace objective with:

$$\mathcal{J}(w) = \mathcal{L}(w) + \frac{\lambda}{2} \|w\|_{L_2}^2$$

$\lambda \in 10^{-3} - 10^{-5}$ for SGD.

In [[Backpropagation Algorithm|backprop]]:

$$\tilde{w}_k = (1 - \eta \lambda) w_k - \eta \nabla_w \mathcal{L}(w_k)$$