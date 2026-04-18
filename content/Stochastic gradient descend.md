---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---
Unlike the [[Basic gradient descend|basic gradient descend]], which computes the gradient across the all dataset, stochastic gradient descend calculate it on a random subset, called a "minibatch". Working will small batches makes it possible to train neural networks on large datasets without memory constraints.

Evaluating the gradient on a mini-batch incapsulate random noise into the [[Optimizer|optimization process]]. This helps the algorithm escape local minima, guiding the search toward broader and more stable minima.

For SGD to be effective, it is important to shuffle the data in each epoch so that the minibatch sequence is representative of the entire dataset.

Realisation:

```python
torch.optim.SGD(model.parameters(), lr, momentum, weight_decay)
```