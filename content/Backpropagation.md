---
tags:
  - type/pillar
project: "[[Neural Networks]]"
publish: true
---

Backpropagation is the primary method for [[Neural Network Training|training neural networks]]. It works by propagating the error backwards, "informing" each [[Artificial Neuron|neuron]] in the network of its contribution to the incorrect final result.

Formulas for backprop:

$$\tilde{x}_{i}^{(l)}=x_{i}^{(l)}-\eta \nabla_{i}^{(l)}[x](\mathcal{L})$$

$$\nabla^{(l)}_{i}[w](\mathcal{L})=\delta^{(l)}a^{(l-1)}_{i}$$

$$\nabla^{(l)}_{i}[b](\mathcal{L})=\delta^{(l)}$$

$$\delta^{(l)}=\delta^{(l+1)}(w^{(l+1)})^{\top}\odot \frac{d\sigma}{dz}$$

Mathematically, this procedure equates to computing the gradient of the loss function with respect to each weight. The key advantage of backpropagation is that it requires only a single forward-backward pass through the network, leveraging the [[Chain Rule of Differentiation|chain rule]] for efficient derivative computation. Without the chain rule, weight updates would necessitate a separate pass for each weight.

For a detailed description of the algorithm, see the note on [[Backpropagation Algorithm|backpropagation algorithm]].