# 核心组件深度示例

> Reference for `skill/SKILL.md`. 8 个最常用组件（Button / Card / Dialog / HealthBar / StaminaWheel / Modal / Divider / Loading）的深度样式示例。完整 84 个组件见 `components-full.md`。

### Button

双层边框结构，Roboto Medium Italic 文字，4 种变体。

尺寸表：

| 属性 | small | middle | large |
|------|-------|--------|-------|
| height | 50px | 75px | 90px |
| padding | 0 24px | 0 32px | 0 40px |
| font-size | 20px | 30px | 36px |
| border-radius (外层) | 4px | 4px | 4px |
| border-radius (内层) | 2px | 2px | 2px |

精确样式值：

```css
/* 基础（所有变体共享）*/
background: rgba(0, 0, 0, 0.6);
border: none;
border-radius: 4px;
font-family: 'Roboto', sans-serif;
font-weight: 500;
font-style: italic;
color: #E2DED3;
letter-spacing: 0.01em;
line-height: 1;
cursor: pointer;
transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

/* 内层边框 ::after */
inset: 3px;
border: 1px solid rgba(226, 222, 211, 0.3);
border-radius: 2px;

/* hover */
background: rgba(0, 0, 0, 0.75);
/* hover ::after */ border-color: rgba(226, 222, 211, 0.6);

/* active */
transform: scale(0.98);

/* focus-visible */
outline: 2px solid #3CD3FC;
outline-offset: 2px;

/* disabled */
opacity: 0.4;
cursor: not-allowed;
```

变体差异：

| 变体 | 背景 | 内层边框色 | hover 效果 |
|------|------|-----------|-----------|
| primary | rgba(0,0,0,0.6) | rgba(226,222,211,0.3) | 边框变亮 + tan glow |
| sheikah | rgba(10,20,40,0.8) | rgba(60,211,252,0.4) | box-shadow: 0 0 8px #4FC0FF |
| ghost | transparent | transparent | 显示背景+边框 |
| danger | rgba(0,0,0,0.6) | rgba(241,80,80,0.4) | box-shadow: 0 0 8px rgba(241,80,80,0.4) |

selected 态（Modal 中选中的按钮）：

```css
background: rgba(226, 222, 211, 0.12);
box-shadow: inset 0 0 7px 3px rgba(246, 231, 152, 0.5),
            0 0 12px 1px rgba(227, 227, 200, 0.8);
/* ::after */ border-color: #E2DED3;
```

### Card

双层边框容器，4 种变体。

```css
/* 基础 */
background: rgba(0, 0, 0, 0.6);
border-radius: 4px;
padding: 24px 32px;
color: #E9E1D1;
font-family: 'Roboto', sans-serif;
font-weight: 500;
font-style: italic;
transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

/* 内层边框 ::after */
inset: 3px;
border: 1px solid rgba(226, 222, 211, 0.2);
border-radius: 2px;

/* 标题 */
font-family: 'Hylia Serif', 'Cinzel', serif;
font-size: 18px;
font-weight: 400;
font-style: normal;
color: #E2DED3;
letter-spacing: 0.04em;
margin-bottom: 12px;

/* 正文 */
font-size: 14px;
line-height: 1.6;
color: rgba(233, 225, 209, 0.8);
```

sheikah 变体额外样式：

```css
background: rgba(10, 20, 40, 0.85);
/* ::after */ border-color: rgba(60, 211, 252, 0.3);
/* 顶部蓝色光线 ::before */
position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
background: linear-gradient(90deg, transparent, #3CD3FC, transparent);
opacity: 0.6;
/* hover */ box-shadow: 0 0 8px #4FC0FF;
```

golden 变体额外样式：

```css
background: rgba(30, 25, 15, 0.85);
/* ::after */ border-color: rgba(252, 196, 19, 0.3);
/* 顶部金色光线 ::before */
background: linear-gradient(90deg, transparent, #FCC413, transparent);
opacity: 0.5;
/* hover */ box-shadow: 0 0 12px rgba(252, 196, 19, 0.2);
```

### Dialog（对话框）

精确还原 Figma node 13:1561。胶囊形 SVG 背景。

```css
/* 容器 */
position: relative;
width: 100%;
max-width: 910px;
min-height: 185px;
padding: 40px 80px;
display: flex;
flex-direction: column;
justify-content: center;
```

背景 SVG path（精确值，viewBox="0 0 910 185"）：

```
M0 90C0 40.2944 40.2944 0 90 0H820C869.706 0 910 40.2944 910 90V95C910 144.706 869.706 185 820 185H90C40.2944 185 0 144.706 0 95V90Z
[含左右两侧菱形装饰的完整 clip-rule path — 见源码]
fill: black; fill-opacity: 0.5;
```

文字样式：

```css
/* 说话者名字 */
font-size: 28px; font-weight: 500; font-style: italic;
color: #E9E1D1;
text-shadow: 0 0 14px rgba(0, 0, 0, 0.8);
margin-top: -20px;

/* 对话正文 */
font-size: 36px; font-weight: 700; font-style: italic;
color: #E9E1D1; line-height: 1.2;

/* 关键词高亮 */
物品名 → color: #6BDECC (青绿)
地点名 → color: #F15050 (红色)
```

继续箭头：底部居中，三角形，animation: hyrule-blink 1.2s step-end infinite。

### HealthBar（心心容器）

精确还原 Figma node 191:19861。

```css
/* 容器 */
display: flex; flex-wrap: wrap; gap: 0;
/* 每行最多 15 个心 */

/* 每个心 */
width: 30px; height: 24px;
```

心形 SVG path（精确值，viewBox="0 0 24.18 21.75"）：

```
M21.7675 12.7969L12.1037 21.7487L2.05872 11.598C-0.686241 8.82416 -0.686239 4.35741 2.05872 1.58356C4.14815 -0.527857 7.55918 -0.527854 9.64861 1.58357L12.1037 4.06447L14.0676 2.0798C16.3794 -0.256337 20.1909 -0.129535 22.3423 2.35509C24.9973 5.42139 24.7431 10.0406 21.7675 12.7969Z
```

颜色值：

| 状态 | fill 色 | filter |
|------|---------|--------|
| 填充（红心） | #F1362F | drop-shadow(0 1px 3px rgba(180,30,30,0.4)) |
| 空心 | #363930 | 无 |
| 奖励心（黄心） | #FFE465 | drop-shadow(0 1px 3px rgba(200,180,50,0.4)) |

### StaminaWheel（精力轮）

精确还原 Figma node 3:353。90×90px 容器，内部 inset 16.25%。

环形 SVG path（viewBox="0 0 60.75 60.75"）：

```
M60.75 30.375C60.75 47.1506 47.1506 60.75 30.375 60.75C13.5994 60.75 0 47.1506 0 30.375C0 13.5994 13.5994 0 30.375 0C47.1506 0 60.75 13.5994 60.75 30.375ZM19.7438 30.375C19.7438 36.2465 24.5035 41.0062 30.375 41.0062C36.2465 41.0062 41.0062 36.2465 41.0062 30.375C41.0062 24.5035 36.2465 19.7438 30.375 19.7438C24.5035 19.7438 19.7438 24.5035 19.7438 30.375Z
```

| 层 | fill | 用途 |
|----|------|------|
| 轨道 | black, fill-opacity: 0.6 | 背景环 |
| 填充 | #13FF59 | 当前精力值 |
| 奖励 | #FFE465 | 奖励精力 |
| 低精力 | #F15050 | value ≤ 0.2 时 |

填充比例控制：使用 `conic-gradient` mask：
```css
mask-image: conic-gradient(from -90deg, black ${angle}deg, transparent ${angle}deg);
```

辉光效果：`filter: drop-shadow(0 0 4px rgba(19, 255, 89, 0.6));`

### Modal

双层边框 + 遮罩 + 缩放入场动画。

```css
/* 遮罩 */
background: rgba(0, 0, 0, 0.7);
backdrop-filter: blur(2px);
animation: hyrule-fade-in 0.2s ease;
z-index: 900;

/* 弹窗容器 */
background: rgba(20, 20, 18, 0.95);
border-radius: 12px;
max-width: calc(100vw - 32px);
max-height: calc(100vh - 64px);
animation: hyrule-scale-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
box-shadow: 0 0 11px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5);

/* 顶部光线 ::before */
height: 1px;
background: linear-gradient(90deg, transparent, #E2DED3, transparent);
opacity: 0.4;

/* 标题 */
font-family: 'Hylia Serif', serif;
font-size: 22px; color: #E2DED3; letter-spacing: 0.03em;

/* 确认按钮 */
border: 1px solid #FCC413;
background: rgba(252, 196, 19, 0.12);
color: #FCC413;
/* hover */ background: rgba(252, 196, 19, 0.2); box-shadow: 0 0 8px rgba(252, 196, 19, 0.3);

/* 取消按钮 */
border: 1px solid rgba(226, 222, 211, 0.3);
background: transparent;
color: #E9E1D1;
```

### Divider

4 种变体，纯装饰。

```css
/* subtle */
height: 1px;
background: linear-gradient(90deg, transparent, rgba(226,222,211,0.2), transparent);

/* sheikah */
height: 2px;
background: linear-gradient(90deg, transparent, #3CD3FC, transparent);
box-shadow: 0 0 6px rgba(60, 211, 252, 0.3);

/* golden */
height: 2px;
background: linear-gradient(90deg, transparent, #FCC413, transparent);
box-shadow: 0 0 6px rgba(252, 196, 19, 0.3);

/* ornament — 使用 Figma 导出的标题装饰 SVG */
display: flex; align-items: center; gap: 12px;
/* 左右各一个 50×25px 的装饰 SVG（viewBox 0 0 49.95 25.01，fill #E2DED3）*/
/* 中间线 */
flex: 1; height: 1px;
background: linear-gradient(90deg, rgba(226,222,211,0.5), rgba(226,222,211,0.15), rgba(226,222,211,0.5));
```

标题装饰 SVG path（精确值）：

```
M31.451 9.13059C30.8963 7.24598 29.2323 5.86136 27.2117 5.63059...
[完整 path 见 src/components/Divider/Divider.tsx]
fill: #E2DED3
```

### Loading

希卡之眼旋转 + 脉冲动画。

```css
/* 旋转环 */
border-radius: 50%;
border: 3px solid rgba(60, 211, 252, 0.2);
border-top-color: #3CD3FC;
animation: sheikah-spin 1s linear infinite;
filter: drop-shadow(0 0 4px rgba(60, 211, 252, 0.4));

/* 中心眼 */
width: 30%; height: 30%;
border-radius: 50%;
background: #3CD3FC;
box-shadow: 0 0 6px #3CD3FC, 0 0 12px rgba(60, 211, 252, 0.4);
animation: sheikah-pulse 1.5s ease-in-out infinite;

/* 尺寸 */
small: ring 24×24px
middle: ring 40×40px
large: ring 60×60px

@keyframes sheikah-spin { to { transform: rotate(360deg); } }
@keyframes sheikah-pulse {
  0%, 100% { opacity: 0.6; transform: scale(0.8); }
  50%      { opacity: 1; transform: scale(1); }
}
```

---

