---
tags:
  - type/log
project: "[[Large Language Models (LLM)]]"
publish: true
---

Within the probabilistic approach, text generation is a stochastic process.

The probabilistic language space is the triple ($\Omega, F, P$), where:
- $\Omega$ - the [[Token Alphabet|set of elementary outcomes]]

- $\omega$ - a [[Token|token]] from the dictionary, i.e., elementary outcome

- $F ⊆ 2^\Omega$ - the [[Sigma Algebra|sigma-algebra]] over $\Omega$, i.e., the collection of all subsets on which probability can be defined for any token sequence.

- $P$ - the probability measure defined on the measurable space $(\Omega, F)$.

