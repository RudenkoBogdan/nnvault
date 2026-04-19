---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---
The logic of this [[Optimizer|method]] lies in accumulating "velocity", based on the gradients of previous steps, which allows the algorithm to maintain its direction of motion in areas with high curvature or noise.

$$v_{k}+1​=g_k​+βv_{k}​$$

where $\beta$ is momentum parameter. The update of the parameters θ is performed using the following formula:

$$
\theta_{k+1}​=\theta_{k}​−\eta v_{k+1}​
$$

In PyTorch, momentum is implemented in [[Stochastic gradient descend|SGD]] the `torch.optim.SGD` optimizer.