---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

A [[Fully Connected Feedforward Network|fully connected feedforward network]] is a class of neural networks where information flows strictly from the input layer to the output layer without cycles. "Fully connected" means every neuron in a layer connects to all neurons in the next layer.

Let $d_0, \dots, d_{L+1}$ be the number of neurons per layer, with $L$ hidden layers (network depth).

This network implements the function $\Phi: \mathbb{R}^{d_0} \to \mathbb{R}^{d_{L+1}}$:

- **Input layer**: $x^{(0)} \in \mathbb{R}^{d_0}$
- **Hidden layers**: $x^{(l)} = \sigma\left(W^{(l-1)} x^{(l-1)} + b^{(l-1)}\right)$ for $l = 1, \dots, L$ [[Activation Function|($\sigma$ is the activation function)]]
- **Output layer**: $x^{(L+1)} = W^{(L)} x^{(L)} + b^{(L)}$

**Parameters** (optimized during training): weights $W$, biases $b$.

**Hyperparameters**: depth $L$, width $\max\{d_0, \dots, d_{L+1}\}$.
