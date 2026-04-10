---
tags:
  - type/pillar
project: "[[Neural Networks]]"
publish: true
---

An [[Artificial Neuron|artificial neuron]] is a mathematical function mapping input vector $\mathbf{x} = \{x_1, \dots, x_d\}$ to scalar output:

$$\nu(x) = \sigma\left( \sum_{j=1}^d \omega_j x_j + b \right) = \sigma(w^\top x + b)$$

where $\omega$ are weights, $b$ bias, $\sigma$ the [[Activation Function]].

It computes weighted input sum, adds bias, applies nonlinearity.

Primarily used in [[Fully Connected Feedforward Network|fully connected feedforward networks]].