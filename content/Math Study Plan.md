---
tags:
  - type/pillar
project: "[[Neural Networks]]"
publish: true
---

**I. Linear Algebra and Tensor Computations** (core language for neural networks)

- [ ] **Vectors and Matrices**: Basic operations, matrix multiplication, transposition—used in every transformer layer.
- [ ] **Vector Spaces**: Embeddings as vectors in high-dimensional space.
- [ ] **Vector Geometry**: Cosine similarity, Euclidean distance for semantic closeness.
- [ ] **Tensors**: Multidimensional arrays for parallel sequence processing.
- [ ] **Matrix Decompositions**: SVD for model compression and interpretability.

**II. Multivariable Calculus and Optimization Theory** (model training mechanism)

- [x] **Differential Calculus**: Partial derivatives, gradients of multivariable functions.
- [x] **Chain Rule**: Basis for [[Backpropagation Algorithm|backpropagation]].
- [ ] **Stochastic Optimization**: Gradient descent methods (SGD, Adam, AdamW) for loss minimization.
- [ ] **Training Stability**: Numerical stability, learning rate management.

**III. Probability and Mathematical Statistics** (token prediction logic)

- [ ] **Probability Distributions**: Gaussian and others underlying model weights.
- [ ] **Joint/Conditional Probabilities**: Chain rule for sequence probability.
- [ ] **Maximum Likelihood Estimation (MLE)**: Parameter fitting foundation.
- [ ] **Bayesian Inference**: Priors/posteriors in inductive reasoning.

**IV. Information Theory** (quality metrics and knowledge compression)

- [ ] **Shannon Entropy**: Uncertainty/informativeness measure.
- [ ] **Cross-Entropy**: Primary pretraining loss for LLMs.
- [ ] **Perplexity**: Model text prediction quality.
- [ ] **KL Divergence**: Distribution difference, key for RLHF alignment.
- [ ] **Rate-Distortion Theory**: Compression-quality tradeoff.