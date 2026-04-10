---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

The [[optimization error]] measures the gap between the empirical risk achieved by the neural network's solution and the minimal possible risk within the class of functions the network can represent.

Even if a zero-risk function exists in the representable class, the optimization algorithm may fail to find it due to the non-convex loss landscape, featuring poor local minima, saddle points, and unstable numerical gradients.

This error decreases with unlimited network width: more neurons smooth the landscape, ensuring gradient descent converges to the global minimum.