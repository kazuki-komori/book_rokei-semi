---
mathjax:
    presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---

# 4章 変数変換

## 変数変換のメリット

X: 確率変数 , f(x): 密度関数を使って, 変換後の g(X): 確率変数の分布や平均, 期待値を求めたい.

つまり, 確率変数 g(X) が複雑な場合に有効.

## 1変数の変数変換
Y = g(X) の密度関数 h(y) を求める.

:::tip 公式
$h(y) = f(x) \frac{dx}{dy}$
:::
$y = g(x)$ で表されることから, $x = g^{-1}(y)$

したがって, $h(y) = f(g^{-1}(y))\frac{dx}{dy}$ と表すこともできる.

::: details 例1 自由度1のカイ二乗分布 (標準正規分布に従う X に対する X^2 の分布) の確率密度関数を求めよ.
<解説>

$Y = X^2$ の密度関数 $h(y)$ を求める.

$y = x^2$ より, $x = \pm \sqrt{y}$

$X > 0$ のとき,

$\frac{dx}{dy} = \frac{1}{2} y^{-\frac{1}{2}}$

$h(y) = \frac{1}{\sqrt{2\pi}}exp(-x^2/2) \cdot \frac{1}{2} y^{-\frac{1}{2}}$

$h(y) = \frac{1}{2} \frac{1}{\sqrt{2\pi y}}exp(-y/2)$

同様に, $X < 0$ の場合も考慮すると, 求める密度関数は,

$h(y) = \frac{1}{\sqrt{2\pi y}}exp(-y/2)$

::: tip $\chi^2 分布との一致性$

$\chi^2$ 分布の公式は以下のようになる.

$f_n(x) = \frac{1}{2^{\frac{n}{2}}\Gamma(\frac{n}{2})}x^{\frac{n}{2}-1}e^{-\frac{x}{2}}$

そこで, `n = 1` を代入すると自由度1の $\chi^2$ 分布となる.

$$
f_1(x) = \frac{1}{2^{\frac{1}{2}}\Gamma(\frac{1}{2})}x^{-\frac{1}{2}}e^{-\frac{x}{2}}
= \frac{1}{\sqrt{2\pi x}}exp(-x/2)
$$

:::

## 2変数以上の場合
$(X, Y)$ : 確率変数, $f(x, y)$ : 同時密度関数は, $g_1, g_2$ を $(U, V) = (g_1(X, Y), g_2(X, Y))$ : 確率変数の分布を求める.

$(U, V)$ の同時密度関数 $h(u, v)$ は以下のように表される.

::: tip 公式
$h(u, v) = f(x, y)\mid J\mid$
:::

### Jacobi行列
$\int\int f(x, y)dxdy$ を考える.

2変数 $x, y$ を $u, v$ に変換して考える.

すると, $x = \phi_1(u, v)$, $y = \phi_2(u, v)$ 上で微分することができるから,

$dx = \frac{\partial x}{\partial u} du + \frac{\partial x}{\partial v} dv$

$dy = \frac{\partial y}{\partial u} du + \frac{\partial y}{\partial v} dv$

と表すことができる.

以上を行列で表すと, 以下のようになる. これを **Jacobi行列** という.

$$
J
\left( 
    \begin{array}{c} 
        \partial(x, y)\\ \partial(u, v)
    \end{array}
\right)
=
\left(
    \begin{array}{cc}
        \frac{\partial (x, y)}{\partial u} &\frac{\partial (x, y)}{\partial v}\\
        \frac{\partial (x, y)}{\partial u} &\frac{\partial (x, y)}{\partial v}
    \end{array}
\right)
=
\left(
    \begin{array}{cc}
        \frac{\partial g_1^{-1}}{\partial u} &\frac{\partial g_1^{-1}}{\partial v}\\
        \frac{\partial g_2^{-1}}{\partial u} &\frac{\partial g_2^{-1}}{\partial v}
    \end{array}
\right)
$$

## 線形結合の分布
$X, Y$ : 独立な確率変数 から, $Z = X + Y$ の分布を **たたみ込み** から求める.

以下のように変数変換を行う.

$$
\begin{cases}
    W = Y\\
    Z = aX + bY
\end{cases}
$$

ヤコビアンは以下のようになる.

$$
\frac{\partial(x, y)}{\partial(w, z)}
=
\left|
    \begin{array}{cc}
        0 &1\\
        a &b
    \end{array}
\right|
=\frac{1}{a}\\
$$

したがって, $(W, Z)$ の同時密度関数 $h(w, z)$ は以下のようになる.

$$
h(w, z) = f_X(z - bw)f_Y(w)\mid J \mid = f_X(z - bw)f_Y(w) \frac{1}{|a|}
$$

これを, $w$ で周辺化すると, $Z$ の分布を求めることができる.

$$
h(z) = f_X(z - bw)f_Y(w) \frac{1}{|a|} dw
$$

## データの変換

### 対数変換
連続型確率分布に対して, `誤差を小さくし, 正規分布に近似する` ために使用される.
また, 株価や人口など, `非負値を取るデータ` に対しても行われることがある.

::: warning
もとの, 分布が対数正規分布に従っていなければ, 対数変換を行うと歪度が増大して, さらに正規分布から離れてしまう.
:::

### ベキ乗変換

$x^a$ という変換を行い, 正規分布に近似する方法である.

`a` は任意の値を取るため, 選択が重要である.

### Box-Cox 変換

`対数変換` と `ベキ乗変換` をひとまとめにした変換である.

::: warning
Box-Cox を用いる際は, **非負値のデータのみにしか適用されない**.
:::

### ロジット変換
`0-1` をとるデータに対して, $-\infty \to \infty$ をとる値に変換したい時に行われる.

### ロジスティック変換
上記の `ロジット変換` を $x$ の回帰式 $ax + b$ で表したい時に行う変換である.

## 参考
- [統計検定直前対策講座 1級](http://nlp.dse.ibaraki.ac.jp/~shinnou/siryou/toukei-kentei/1-stat-var-trans.pdf)