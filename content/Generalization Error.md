---
tags:
  - type/log
project: "[[Neural Networks]]"
publish: true
---

The [[Generalization Error]] quantifies the difference between a trained model's performance on training data and on new data, directly reflecting [[Overfitting]] level.

It measures how well [[Empirical Risk Minimization]] proxies the true risk.

Classically, it **increases** with model complexity and **decreases** with more training data.

Controlled via explicit/implicit [[Regularization in Neural Networks|regularization]].

In modern [[Large Language Models (LLM)|LLMs]], double descent is observed.