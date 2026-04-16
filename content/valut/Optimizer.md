---
tags:
  - type/pillar
project: "[[Neural Networks]]"
publish: true
---
In general, [[Loss Function|loss function]] is a nonlinear function of many variables: $$\mathcal{L}=\mathcal{L}(x_{i}, \Theta)$$where $\Theta$ represents all trainable parameters of the network. The goal of training is to find parameters $\Theta^*$, that minimize the [[Empirical Risk Minimization|empirical risk]]:
$$\Theta^*=\arg\left(\min_{\Theta}(\mathcal{L}(\Theta))\right)$$
Solving this it analytically impossible for many reasons, and the only option is iterative gradient-based methods. These are exactly called "optimizers".

Examples of optimizers:
- [[Basic gradient descend]]
- [[Stochastic gradient descend]]
- [[Momentum optimizer]]
- [[AdaGrad]]
- [[RMSProp]]
- [[Adam]]
- [[AdamW]]