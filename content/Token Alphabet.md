---
tags:
  - type/log
project: "[[Large Language Models (LLM)]]"
publish: true
---

Token Alphabet $\Omega$ - a finite discrete set of elementary symbols (tokens) that defines the boundaries of the language model's semantic operations.

It enters the [[Probabilistic Language Space|probabilistic language space]] as the space of elementary outcomes.


Main properties of the token alphabet:

- Finiteness and discreteness: tokens are atomic. The alphabet size $N$, implemented in the [[Token Dictionary|token dictionary]], is rigidly fixed during preprocessing ([[Tokenization|subword tokenization]]) and is a critical hyperparameter.

  
- In the probabilistic approach, $\Omega$ is formed statistically based on the training text corpus, and its composition remains unchanged after training. Any sequence of tokens in the text must be decomposed into elements of $\Omega$.
  
- Properties of $\Omega$ affect [[Perplexity|perplexity]] - the more effectively the alphabet reflects the language structure, the lower the entropy.


