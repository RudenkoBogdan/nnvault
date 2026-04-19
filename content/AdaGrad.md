---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---
Adaptive Gradient Algorithm - is a specialized [[Optimizer|optimizer]]. The key advantage of Adagrad over [[Stochastic gradient descend|stochastic gradient descend]] lies in its use of a unique learning rate for each individual parameter. The algorithm automatically adjusts the learning rate based on the gradient history for each weight. 

The weight $\theta$ is updated at step $t$ as follows:
The sum of the squares of all previous gradients $g$ is accumulated for each parameter:
   
$$
G_{t}=G_{t-1}+g_{t}^2
$$

and then weights are updated using the accumulated statistics in the denominator:

$$
\theta_{t+1}=\theta_{t}-\frac{\eta}{\sqrt{G_{t}+\epsilon}}g_{t}
$$
where $G$ - a tensor that stores the sum of the squares of the gradients, $\eta$ - initial learning rate, $\epsilon$ - division-by-zero prevention factor.

In the PyTorch library, the optimizer is available in the module`torch.optim.Adagrad(params, lr)`.

The main technical drawback of Adagrad is that the denominator increases monotonically during training, causing the effective learning rate to converge to zero over time, which can lead to the process stopping prematurely before reaching the optimum. This problem was addressed in subsequent algorithms, such as [[Adam]].