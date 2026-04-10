---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

The [[Backpropagation Algorithm|backpropagation algorithm]] (backprop) follows these steps:

1. **Forward pass**: Propagate data through the network to compute the output. For each of $L$ layers, compute weighted sum and apply activation.

2. **Compute layer errors** $\delta^{(l)} = \frac{\partial \mathcal{L}}{\partial z^{(l)}}$, where $z^{(l)} = w^{(l)} a^{(l-1)} + b^{(l)}$, $a^{(l-1)} = \sigma(z^{(l-1)})$. This shows how the total loss changes with a neuron's input.

3. **Backward pass** (chain rule): Propagate errors from output to input.
   - Output layer: $\delta^{(L)} = \frac{\partial \mathcal{L}}{\partial \sigma} \odot \frac{d\sigma}{dz^{(L)}}$
   - Hidden layers: $\delta^{(l)} = \left( (w^{(l+1)})^\top \delta^{(l+1)} \right) \odot \frac{d\sigma}{dz^{(l)}}$

4. **Gradients**:
   - Weights: $\frac{\partial \mathcal{L}}{\partial w^{(l)}} = \delta^{(l)} (a^{(l-1)})^\top$
   - Biases: $\frac{\partial \mathcal{L}}{\partial b^{(l)}} = \delta^{(l)}$

Complexity: $\mathcal{O}(N)$, with $N = d$ neurons per layer.
