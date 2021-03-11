---
mathjax:
presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---

# 12章 一般の分布に関する検定手法

パラメトリックモデルに関しては一般的に **尤度比検定** などを用いることで汎用的な検定を行うことができる。

しかしながら、分布の特性や目的に応じた検定手法を用いることができればより効率的に検定を行うことができるようになる。

> 復習

[最尤推定量とは](https://www.ms.u-tokyo.ac.jp/~nakahiro/surijoho16/surijoho2.pdf)


## 母比率の検定

試行回数 $n$, 成功確率 $\theta$ の二項分布に従う確率変数 X を考える。

::: tip 母比率の検定

$$
P(X = x) = \left(
    \begin{array}{c}
        n\\
        x
        \end{array}
\right)
\theta^x(1-\theta)^{n-x}
$$

::::

対立仮説が、片側対立仮説 $\theta > \theta_0$ のとき、棄却限界値 c は以下のように求める

::: tip 二項分布の棄却限界値

$\frac{\sqrt{n(\hat{\theta}-\theta)}}{\sqrt{\theta_0(1-\theta_0)}} \geq z_{\alpha}$

:::

尚、 p 92 の通り尤度比検定を用いて検定を行うこともできる。

[参考 符号検定](https://statistics.co.jp/reference/Toukeigaku_Nyumon/nyumon8.pdf)

## 母比率の差の検定

::: tip 母比率の差の検定

$\frac{(\hat{\theta_1}- \hat{\theta_2}) - (\theta_1- \theta_2)}{\frac{\theta_1(1-\hat{\theta_1})}{n_1} + \frac{\theta_2(1-\hat{\theta_2})}{n_2}}$

:::

## ポアソン分布に関する検定

ポアソン分布 … n が十分に大きく、 $p = 0$ に近似できる際に用いる (事故の頻度など)

::: tip ポアソン分布の棄却域

$$
\frac{\hat{\lambda} - \lambda}{\sqrt{\lambda_0}}
$$

:::

## 適合度検定

カテゴリカルデータ (性別, 血液型 など) においては尤度比検定だけでなく、**適合度検定** がある。

カテゴリの度数が十分に大きくない場合、 **イェーツ補正** を用いて求めることがある。

> 例2 母比率の検定に関する適合度検定

## 尤度比検定
:::tip 尤度比検定の公式

$$
\lambda_n = \frac{\sup L(\theta; x_i)}{\sup L(\theta; x_j)}
$$

:::

### 尤度比検定の手順

1, パラメータ $\theta$ の ${MLE} \hat{\theta}$ (尤度) を求める

2, パラメータを帰無仮説空間に限って $\hat{\theta_0}$

3, $\lambda$ を計算する

> 入門・演習 数理統計 P267

