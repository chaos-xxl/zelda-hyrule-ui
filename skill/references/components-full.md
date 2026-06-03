# 全量组件精确样式规范（83 个组件）

> Reference for `skill/SKILL.md`. 所有 83 个组件的精确尺寸、色值、阴影、动画。Agent 生成代码时按此规范实现。

### HUD 组件（16 个）

#### WeatherIcon
```css
/* 容器 */ size: 29px; display: inline-flex; align-items: center; justify-content: center;
/* 图标 */ width: 70%; height: 80%;
/* glowing 态 */ filter: drop-shadow(0 0 4px #4FC0FF);
/* SVG fill */ #C9FAFF, fill-opacity: 0.8
/* 4 种天气 path 见源码 */
```

#### RupeeCounter
```css
/* 容器 */ display: inline-flex; align-items: center; gap: 13px; filter: drop-shadow(-2px 2px 5px rgba(0,0,0,0.15));
/* 卢比图标 */ 复用 <RupeeType size={40}>（Figma 精确宝石几何，避免维护第二套）
/* 数字 */ font: Roboto 32px/500 italic; color: #E9E1D1; letter-spacing: 0.96px;
```

#### DivineBeast
```css
/* 容器 */ size: 75px; filter: blur(0.5px);
/* 辉光 */ box-shadow: 0 0 4px var(--beast-color), 0 0 5px var(--beast-color), 0 0 15px var(--beast-color);
/* 颜色 */ ruta: #27CBFF, medoh: #7CFF4E, naboris: #FCC63D, rudania: #EB4713, recharging: #FF0000
/* 次数文字 */ font: Roboto 20px/500 italic white (×) + 24px (数字)
```

#### SheikahAbility
```css
/* 容器 */ size: 70px;
/* Plus 标记 */ position: absolute; top: 2px; right: 2px; font: Roboto 14px/700; color: #FFE460;
/* 充能覆盖 */ border: 2px solid #FF0000; border-right-color: transparent; animation: spin 1.5s linear infinite;
```

#### Temperature
```css
/* 容器 */ size: 50px; overflow: hidden; border-radius: 50%;
/* 背景 */ circle r=25, fill: black, fill-opacity: 0.8
/* 颜色 */ regular: #8FEFFF, cold: #4FC0FF, hot: #FF6B4A
```

#### SoundMeter
```css
/* 容器 */ size: 50px; overflow: hidden; border-radius: 50%;
/* 背景 */ 同 Temperature
/* 颜色 */ low: #8FEFFF, high: #FFE460
/* 声波条 */ 4 个 rect, width: 3px, rx: 1, 高度递增
```

#### Sensor
```css
/* 容器 */ size: 50px; overflow: hidden; border-radius: 50%;
/* 背景 */ 同上
/* 图标 */ width: 68%; height: 74%; fill: active ? #9DECFD : #658D95
/* active 态 */ box-shadow: 0 0 6px rgba(60, 211, 252, 0.3);
/* Plus 标记 */ font: Roboto 12px/700; color: #FFE460;
```

#### EffectDuration
```css
/* 容器 */ display: flex; align-items: center; gap: 10px; filter: drop-shadow(-2px 2px 10px rgba(0,0,0,0.15));
/* 图标 */ 40×40px
/* 名称 */ font: Roboto 26px/500 italic; color: #E2DED3; letter-spacing: 0.52px; text-shadow: -2px 2px 10px rgba(0,0,0,0.15);
/* 时间 */ font: Roboto 26px/500 italic; color: #E2DED3; letter-spacing: 1.3px;
```

#### BonusEffectIcon
```css
/* 容器 */ size: 50px; display: inline-flex; align-items: center; justify-content: center;
/* 图标 */ 76% SVG <img> (从 Figma node 6:305 精确导出，保留游戏原色)
/* 箭头 */ position: absolute; top: 4px; right: 4px; 10×8px 白色三角 (arrow=true 时显示)
/* 15 种效果 */ attackUp/criticalHit(白剑) defenseUp(白盾) speedUp(蓝) heatResist(红) coldResist(青)
   electricResist(品红) quietUp(紫) fireResist(红) durabilityUp(蓝盾) longThrow(白) climbSpeedUp(白)
   swimSpeedUp(青) bonusHeart(黄心) staminaUp(绿轮)
```

#### RupeeType
```css
/* 容器 */ 25×46px 比例; filter: drop-shadow(0 1px 3px rgba(0,0,0,0.3));
/* 宝石几何 */ 从 Figma node 3:213 精确重建——纵向六边形宝石 7 切面（尖顶/尖底 + 中央主面 + 上下左右切角），左上打光的 3D 切割感
/* 着色 */ light/dark 双色渐变（4 个 facet 渐变：l亮/c中央/m中/d暗）
/* 6 色 */ green: #4CAF50/#173515, blue: #42A5F5/#0D2B5C, red: #EF5350/#5C1414, purple: #AB47BC/#3A0C5C, silver: #BDBDBD/#424242, gold: #FFD54F/#5C4A14
```

#### LoadingIcon
```css
/* 容器 */ size: 40px; display: inline-flex; align-items: center; justify-content: center;
/* 图标 */ font-size: 24px;
/* 数量 */ position: absolute; bottom: -2px; right: -4px; font: Roboto 12px/700; color: #E9E1D1;
/* 5 种图标颜色 */ shrine: #3CD3FC, orb: #FCC413, rupee: #4CAF50, korok: #7CFF4E, stamina: #13FF59
```

#### LoadingHeart
```css
/* 容器 */ display: inline-flex; transition: opacity 0.3s;
/* SVG */ 24×20px, viewBox: 0 0 24.18 21.75
/* shown */ fill: #F1362F
/* hidden */ fill: #363930; opacity: 0.3;
```

#### HorseSpur
```css
/* 容器 */ size: 84px; border-radius: 50%;
/* 颜色 */ normal: #3CD3FC, ancient: #FCC413, endura: #7CFF4E
/* used 态 */ opacity: 0.3;
```

#### QuickSelector
```css
/* 容器 */ size: 200px; position: relative;
/* 环 */ stroke: rgba(226,222,211,0.3); stroke-width: 3; fill: none;
/* 槽位 */ 4 个 60×60px 按钮, 上下左右分布
/* 选中槽 */ border-color: #E2DED3; box-shadow: glow-hover;
```

### 菜单组件（8 个）

#### MenuSections
```css
/* 容器 */ display: flex; align-items: center; gap: 0;
/* 每项 */ 50×50px; padding: 8px; background: transparent; border: none; cursor: pointer;
/* active 态 */ ::after 底部 2px 线, background: #E2DED3;
/* 图标 fill */ active: #E2DED3, inactive: rgba(226,222,211,0.4)
/* 7 种图标 SVG path 从 Figma node 8:466~8:472 精确导出 (weapons/bows/shields/clothing/materials/food/special) */
```

#### ItemBG
```css
/* 容器 */ size: 130px; border-radius: 4px; cursor: pointer;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(255,255,255,0.2); border-radius: 2px;
/* 5 种状态 */
  empty: background rgba(255,255,255,0.1)
  filled: background rgba(0,0,0,0.6)
  selected: background rgba(0,0,0,0.9); box-shadow: 0 0 12px 1px rgba(227,227,200,0.8); 内层 border-color: #E2DED3; inset shadow
  equipped: background rgba(0,0,0,0.7); 右上角 8px 蓝色圆点
  sheikahSelect: background rgba(10,20,40,0.9); box-shadow: glow-blue; 内层 border-color: #3CD3FC
/* 角落装饰 */ 12×12px SVG 三角形, fill: #E2DED3, 4 个角旋转 0/90/180/270deg
```

#### Pagination
```css
/* 容器 */ display: flex; align-items: center; justify-content: center; gap: 4px;
/* 圆点 */ 5×5px; border-radius: 50%; background: #66645D;
/* active */ background: #E2DED3;
```

#### ModalButton
```css
/* 按钮 */ width: 100%; height: 75px; background: rgba(0,0,0,0.6); border-radius: 4px;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(226,222,211,0.3); border-radius: 2px;
/* 文字 */ font: Roboto 30px/500 italic; color: #E2DED3; text-align: center;
/* selected 态 */ background: rgba(226,222,211,0.12); box-shadow: glow-hover; 内层 border-color: #E2DED3;
```

#### Scrollbar
```css
/* 容器 */ height: 2px; position: relative;
/* 轨道 */ background: rgba(226,222,211,0.2); border-radius: 1px;
/* 滑块 */ background: #E2DED3; border-radius: 1px; transition: left 0.15s;
```

#### ModalTimer
```css
/* 容器 */ 300×60px; background: rgba(0,0,0,0.7); border-radius: 4px;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(226,222,211,0.3);
/* 时间 */ font: Roboto 32px/700; color: #E9E1D1; letter-spacing: 2px;
/* red 态 */ 内层 border-color: rgba(241,80,80,0.5); 时间 color: #F15050; animation: flash 0.8s infinite;
```

#### StatsStack
```css
/* 容器 */ display: inline-flex; align-items: center; gap: 8px;
/* 标签 */ font: Roboto 22px/500 italic; color: rgba(233,225,209,0.6);
/* 数值 */ font: Roboto 24px/700; color: #E9E1D1;
/* 差值 */ font: Roboto 20px/700 italic; positive: #6FD49C, negative: #F15050;
/* 特性 */ font: Roboto 18px/500 italic; color: #FFE460;
```

#### ModalTutorial
```css
/* 容器 */ background: rgba(0,0,0,0.8); border-radius: 8px; padding: 32px;
/* 内层边框 */ 双层边框结构
/* 标题 */ font: Hylia Serif 28px; color: #E2DED3;
/* 正文 */ font: Roboto 22px/500 italic; color: #E9E1D1; line-height: 1.5;
/* 继续按钮 */ animation: blink 1.2s step-end infinite;
```


### 标题组件（5 个）

#### TitleLocation
```css
/* 容器 */ display: flex; align-items: center; justify-content: center; gap: 20px;
/* 装饰 */ Timer Ornament SVG 24×10px, fill: #E2DED3 (左右各一个，右侧 scaleX(-1))
/* 文字 */ font: Roboto 30px/500; color: #E9E1D1; text-align: center; line-height: 1.12;
```

#### TitleQuest
```css
/* 容器 */ display: flex; flex-direction: column; align-items: center; gap: 5px;
/* 副标题 */ display: flex; gap: 12px; 图标 45px 圆形 + 文字 Roboto 27px/500 italic #E9E1D1
/* 任务名 */ font: Hylia Serif 80px/400; color: rgba(0,0,0,0.8); filter: drop-shadow(0 0 15px rgba(255,255,126,0.3));
/* 名称背景 */ ::before background: rgba(255,246,196,0.2); mix-blend-mode: screen;
/* 图标辉光 */ main: #FFEA2E, side/shrine: #54C0FD, memory: #FCC413
```

#### TitleShrine
```css
/* 容器 */ display: flex; flex-direction: column; align-items: center; gap: 4px;
/* 名称 */ font: Hylia Serif 45px/400; color: #E9E1D1; text-shadow: 0 0 20px rgba(0,0,0,0.5);
/* 副标题 */ font: Roboto 30px/500; color: #E9E1D1;
```

#### TitleLocationLarge
```css
/* 名称 */ font: Hylia Serif 72px/400; color: #E9E1D1; text-shadow: 0 0 30px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4); letter-spacing: 0.04em;
```

#### TitlePointOfInterest
```css
/* 容器 */ display: flex; flex-direction: column; align-items: center; gap: 8px;
/* 名称 */ font: Hylia Serif 48px/400; color: #E9E1D1; text-shadow: 0 0 20px rgba(0,0,0,0.5);
/* 血条（poiWithHealth）*/ width: 200px; height: 6px; background: rgba(226,222,211,0.2); border-radius: 3px; 填充 #F15050;
```

### 对话组件（3 个）

#### Dialog
```css
/* 容器 */ max-width: 910px; min-height: 185px; padding: 40px 80px;
/* 背景 SVG */ viewBox: 0 0 910 185; fill: black; fill-opacity: 0.5; (胶囊形 + 菱形装饰)
/* 说话者 */ font: Roboto 28px/500 italic; color: #E9E1D1; text-shadow: 0 0 14px rgba(0,0,0,0.8); margin-top: -20px;
/* 正文 */ font: Roboto 36px/700 italic; color: #E9E1D1; line-height: 1.2;
/* 关键词 */ 物品: #6BDECC, 地点: #F15050, 强调: #E2D146
/* 继续箭头 */ bottom: 8px; left: 50%; animation: blink 1.2s step-end infinite;
/* sheikah 变体 */ bg fill: rgba(10,20,40,0.7); border: 1px solid rgba(60,211,252,0.3); box-shadow: glow-blue;
```

#### DialogChoice
```css
/* 容器 */ width: 360px; display: flex; flex-direction: column; gap: 10px;
/* 选项 */ height: 70px; background: rgba(0,0,0,0.7); border-radius: 35px; padding: 15px 25px;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(226,222,211,0.2); border-radius: 32px;
/* selected 态 */ border: 2px solid #E2DED3; box-shadow: 0 0 10px 1px rgba(255,249,193,0.6);
/* 箭头 */ position: absolute; left: -17px; color: #E2DED3; font-size: 14px;
/* 文字 */ font: Roboto 32px/500 italic; color: #E9E1D1;
```

#### DialogFloating
```css
/* 容器 */ 310×70px; overflow: hidden;
/* 背景 SVG */ viewBox: 0 0 310 70; 气泡形 path; fill: black; fill-opacity: 0.5;
/* 文字 */ padding: 17px 32px; font: Roboto 32px/500 italic; color: #E9E1D1;
```

### 任务组件（4 个）

#### QuestListItem
```css
/* 容器 */ max-width: 640px; height: 90px; background: rgba(0,0,0,0.8); border-radius: 4px; padding: 0 20px 0 100px;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(255,255,255,0.2); border-radius: 2px;
/* 图标 */ 77×77px; border-radius: 50%; left: 18px; top: 6px;
  4 种类型 SVG 从 Figma node 191:18381/18382/18609/18775 精确导出 (main 三角力量 / side 对话气泡 / shrine 希卡之眼菱形 / memory 胶片格)
  main: box-shadow 0 0 23px rgba(255,234,46,0.5)
  side/shrine: box-shadow 0 0 23px rgba(84,192,253,0.5)
/* 标题 */ font: Roboto 38px/700 italic; color: #E2DED3;
/* 地点 */ font: Roboto 22px/700 italic; color: #E2D146;
/* completed 态 */ opacity: 0.6; title text-decoration: line-through;
```

#### QuestDescription
```css
/* 容器 */ max-width: 943px; min-height: 400px; background: rgba(0,0,0,0.3); border-radius: 3px 0 0 3px;
/* 内层边框 */ inset: 3px 0 3px 3px; border: 1px solid rgba(226,222,211,0.15);
/* 标题 */ font: Roboto 38px/700 italic; color: #E9E1D1;
/* 分割线 */ height: 1px; background: rgba(226,222,211,0.3);
/* NPC */ font: Roboto 26px/500 italic; color: #AAA79F;
/* 地点 */ font: Roboto 24px/700 italic; color: #E1C139;
/* 正文 */ font: Roboto 30px/500 italic; color: #E9E1D1; line-height: 1.2;
```

#### QuestTypeIcon
```css
/* 容器 */ size: 77px; border-radius: 50%;
/* 辉光 */ box-shadow: 0 0 23px [color], 0 0 18px black;
/* 颜色 */ main: #FFD700, side: #3CD3FC, shrine: #3CD3FC, memory: #FCC413
/* 图标 */ 与 QuestListItem 共用 questIcons（Figma node 191:18381/18382/18609/18775 精确导出）
```

#### QuestNotification
```css
/* 容器 */ display: inline-flex; align-items: center; gap: 4px;
/* 图标 */ 26×26px; circle fill: #FCC413 opacity 0.8; 感叹号 fill: black;
/* 标签 */ font: Roboto 26px/500 italic; color: #AAA79F;
```

### 控制器组件（2 个）

#### ControllerButton
```css
/* 按钮 */ border-radius: 50%; background: #000; border: 2px solid #E2DED3;
/* 字母 */ font: Roboto 18px/700; color: #E2DED3;
/* 标签 */ font: Roboto 22px/500 italic; color: #E9E1D1; gap: 8px;
```

#### ActionSet
```css
/* 容器 */ display: flex; align-items: center; justify-content: flex-end; gap: 55px;
/* 每项 */ display: flex; gap: 5px; align-items: center;
/* 标签 */ font: Roboto 26px/500 italic; color: #E9E1D1; text-align: right;
/* 按钮 */ 40×40px 圆形, 同 ControllerButton;
```

### 地图组件（7 个）

#### MapIcon
```css
/* 容器 */ size: 50px; filter: blur(0.25px); box-shadow: 0 1.25px 13.75px #0A8DD7, 0 0 12.5px #4FC0FF;
/* 图标 SVG */ width: 68%; height: 68%;
/* 颜色 */ shrine: #3CD3FC, resurrection: #ADEFFF, lab: #FCC413, tower: #FFE460
```

#### MapBeacon
```css
/* 容器 */ width: 30px; height: flare ? 90px : 30px;
/* 信标 SVG */ path 菱形, fill: [color]; circle cx=15 cy=12 r=4 fill white opacity 0.6;
/* 光柱 */ width: 4px; background: linear-gradient(to top, [color], transparent); opacity: 0.7;
/* 5 色 */ red: #FF4444, blue: #44AAFF, yellow: #FFDD44, green: #44DD88, pink: #FF88CC
```

#### MapQuestMarker
```css
/* 容器 */ size: 75px;
/* 图标 */ hexagon stroke: #FCC413 strokeWidth: 2.5; center circle r=5 fill: #FCC413;
/* pulse 态 */ animation: scale 1→1.15→1, opacity 1→0.7→1, 2s infinite;
```

#### MapLocationName
```css
/* 容器 */ padding: 4px 12px; background: rgba(0,0,0,0.5); border-radius: 2px;
/* 文字 */ font: Roboto 500; color: #E9E1D1; white-space: nowrap;
/* 尺寸 */ small: 18px, medium: 24px, large: 32px;
```

#### MapCursor
```css
/* 容器 */ display: inline-flex; align-items: center; gap: 12px;
/* 十字线 */ 40×40px SVG; circle r=8 stroke #E2DED3; 4 条线 stroke #E2DED3;
/* 信息面板 */ background: rgba(0,0,0,0.6); padding: 8px 12px; border-radius: 3px;
/* 地名 */ font: Roboto 20px/500 italic; color: #E9E1D1;
/* 操作 */ font: Roboto 16px/500 italic; color: rgba(233,225,209,0.6);
```

#### MapHeroLocation
```css
/* 容器 */ 18×25px;
/* 箭头 SVG */ path "M9 0L0 25L9 20L18 25L9 0Z" fill: #3CD3FC; filter: drop-shadow(0 0 4px rgba(60,211,252,0.6));
/* 视野锥 */ border-left/right: 20px solid transparent; border-bottom: 40px solid rgba(60,211,252,0.1);
```

#### MapGrid
```css
/* 容器 */ position: absolute; inset: 0;
/* 网格线 */ repeating-linear-gradient, stroke: rgba(226,222,211,0.1);
/* small */ gap: 20px; large: gap: 80px;
```


### 希卡之石组件（8 个）

#### SheikahSymbol
```css
/* 容器 */ size: 380px; display: inline-flex; align-items: center; justify-content: center;
/* SVG */ width: 100%; height: 92%; object-fit: contain; fill: white;
/* outline 态 */ opacity: 0.3;
```

#### SheikahBackground
```css
/* 容器 */ width: 100%; height: 100%; overflow: hidden; border-radius: 8px;
/* 纹理 */ background-size: cover; background-position: top left; opacity: 0.8;
/* darkBlue */ background-color: #0a1628;
/* blueGrey */ background-color: #1a2a3a; 纹理 opacity: 0.6;
```

#### SheikahScanlines
```css
/* 容器 */ position: absolute; inset: 0; pointer-events: none; mix-blend-mode: overlay;
/* 纹理 */ background: repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(60,211,252,0.03) 1px, rgba(60,211,252,0.03) 2px);
/* filter */ blur(0.5px);
/* animated 态 */ animation: scan-move 8s linear infinite; (background-position 0→200px)
```

#### SheikahRune
```css
/* 容器 */ display: flex; gap: 8px; align-items: center;
/* 每个符文 */ 70×70px; border-radius: 8px; border: 2px solid rgba(60,211,252,0.3); background: rgba(10,20,40,0.6);
/* hover */ border-color: rgba(60,211,252,0.6); box-shadow: 0 0 6px rgba(60,211,252,0.3);
/* active */ border-color: #3CD3FC; box-shadow: glow-sheikah; background: rgba(60,211,252,0.1);
/* 图标 */ 40×40px SVG (从 Figma node 139:4 精确导出，保留游戏原色); filter: drop-shadow(0 0 4px rgba(79,192,255,0.5));
/* 6 种符文 */ roundBomb / cubeBomb / magnesis / stasis / cryonis / camera
```

#### SheikahCompendiumEntry
```css
/* 容器 */ 178×178px; background: rgba(10,20,40,0.8); border-radius: 4px; cursor: pointer;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(60,211,252,0.2); border-radius: 2px;
/* hovered 态 */ 内层 border-color: #3CD3FC; box-shadow: 0 0 8px #4FC0FF;
/* 未发现 */ "?" font-size: 48px; color: rgba(60,211,252,0.3); font-weight: 700;
/* 编号 */ position: absolute; bottom: 6px; right: 8px; font: Roboto 12px/500; color: rgba(60,211,252,0.5);
```

#### SheikahTextTitle
```css
/* 容器 */ display: flex; flex-direction: column; align-items: center; gap: 8px;
/* 标题行 */ display: flex; gap: 12px; align-items: center;
/* 装饰 */ 22×20px SVG (从 Figma node 239:25636 Text Ornament Divider 精确导出); 右侧 transform: scaleX(-1) 镜像; opacity: 0.85;
/* 标题 */ font: Roboto 22px/500 italic; color: #3CD3FC; letter-spacing: 0.05em;
/* 描述 */ font: Roboto 16px/500 italic; color: rgba(60,211,252,0.6); max-width: 584px; line-height: 1.4;
```

#### SheikahCompendiumFilters
```css
/* 容器 */ display: flex; gap: 16px; align-items: center; justify-content: center;
/* 每个过滤器 */ 50×50px; border-radius: 50%; border: 2px solid rgba(60,211,252,0.2); background: rgba(10,20,40,0.6);
/* active */ border-color: #3CD3FC; box-shadow: 0 0 8px rgba(60,211,252,0.4); background: rgba(60,211,252,0.1);
/* 图标 */ 30×30px SVG (从 Figma node 260:27029 精确导出，自带希卡蓝辉光滤镜); opacity 0.55→0.8(hover)→1(active);
/* 5 个分类 */ creatures / enemies / materials / weapons / treasure
```

#### SheikahAlbumButton
```css
/* 按钮 */ 420×60px; background: rgba(10,20,40,0.7); border-radius: 4px;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(60,211,252,0.2); border-radius: 2px;
/* selected 态 */ 内层 border-color: #3CD3FC; box-shadow: 0 0 8px rgba(60,211,252,0.3);
/* 文字 */ font: Roboto 24px/500 italic; color: #3CD3FC;
```

### 反馈组件（1 个）

#### Toast
```css
/* 容器 */ 610×115px; background: rgba(0,0,0,0.6); border-radius: 0 3px 3px 0;
/* 内层边框 */ inset: 3px 3px 3px 0; border: 1px solid rgba(226,222,211,0.2); border-radius: 0 2px 2px 0;
/* 文字 */ padding: 32px 31px 33px 120px; font: Roboto 29px/500 italic; color: #E9E1D1;
/* 动画 */ animation: slide-in 0.3s (translateX -100%→0, opacity 0→1);
```

### 装饰组件（5 个）

#### TitleOrnament
```css
/* SVG */ 50×25px; viewBox: 0 0 49.95 25.01; fill: #E2DED3; opacity: 0.7;
/* right 态 */ transform: scaleX(-1);
```

#### DirectionalArrow
```css
/* 容器 */ display: inline-flex; size: 18px;
/* 方向 */ transform: rotate(0/90/180/270deg) for up/right/down/left;
/* 4 种变体 */ outline: stroke #E2DED3; solid: fill #E2DED3; triangle: 全填充; large: 大三角;
```

#### Starburst
```css
/* 容器 */ size: 200px; animation: starburst-rotate 6s linear infinite;
/* SVG */ 12 条射线 stroke: #FCC413 strokeWidth: 2; 交替 opacity 0.4/0.7;
/* 中心 */ circle r=30 fill: #FCC413 opacity: 0.3; circle r=15 fill: #FCC413 opacity: 0.6;
```

#### TextOrnamentCorner
```css
/* SVG */ 12×12px; path "M12 0V12H0L12 0Z" fill: #E2DED3;
/* 4 个位置 */ rotation: 0(BR), 90(BL), 180(TL), -90(TR);
/* triforce 态 */ 额外三角力量装饰;
```

#### TimerOrnament
```css
/* SVG */ 24×10px; viewBox: 0 0 24 10; fill: #E2DED3;
/* left 态 */ transform: scaleX(-1);
```

#### Illustration
```css
/* 容器 */ position: relative; width: 100%; height: 100%; overflow: hidden;
/* 图片 */ position: absolute; inset: -10%; width: 120%; height: 120%; object-fit: contain;
         mix-blend-mode: screen; pointer-events: none; opacity: 0.6 (默认);
/* 4 种变体 */
  sword    — 大师之剑 + 海利亚鸟翼（166KB SVG）
  rupee    — 卢比宝石图案（31KB SVG）
  slate    — 希卡之石古代纹路（134KB SVG）
  memories — 回忆花/沉默公主（43KB SVG）
/* 用法：作为页面/区块背景装饰 */
  <div style={{ position: 'relative', height: '100vh', background: '#66645D' }}>
    <Illustration illustration="sword" opacity={0.4} />
    <div style={{ position: 'relative', zIndex: 1 }}>{内容}</div>
  </div>
```

### 设置组件（1 个）

#### SettingsToggle
```css
/* 容器 */ width: 100%; height: 54px; background: rgba(0,0,0,0.6); border-radius: 4px; padding: 0 20px;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(226,222,211,0.2); border-radius: 2px;
/* selected 态 */ 内层 border-color: #E2DED3; box-shadow: inset 0 0 7px 3px rgba(246,231,152,0.3);
/* 标签 */ font: Roboto 24px/500 italic; color: #E9E1D1; flex: 1;
/* 选项按钮 */ padding: 4px 16px; font: Roboto 20px/500 italic; color: rgba(233,225,209,0.5);
/* active 选项 */ color: #E9E1D1; background: rgba(226,222,211,0.15);
```

### 战斗组件（4 个）

#### ItemEnchantment
```css
/* 容器 */ display: inline-flex; gap: 4px;
/* 菱形 */ 10×10px; transform: rotate(45deg); border: 1.5px solid rgba(226,222,211,0.4);
/* filled */ background: #FCC413; border-color: #FCC413; box-shadow: 0 0 4px rgba(252,196,19,0.5);
```

#### StatusHealing
```css
/* 容器 */ display: inline-flex; align-items: center; gap: 2px;
/* 心 SVG */ 24×20px; fill: #F1362F (普通) / #FFE465 (奖励);
/* 精力 SVG */ 30×30px; fill: #13FF59;
/* fullRecovery */ 额外 "+" 符号 font-size: 20px; color: #F1362F;
```

#### AimingReticle
```css
/* 容器 */ size: 100px; position: relative;
/* bow */ 十字线 + 圆环; stroke: #E2DED3; strokeWidth: 1.5;
/* sheikahAbility */ 方形 + 对角线; stroke: #3CD3FC;
```

#### AttackDefenseValues
```css
/* 容器 */ display: inline-flex; align-items: center; gap: 8px;
/* 数值 */ font: Roboto 24px/700; color: #E9E1D1;
/* 对比箭头 */ positive: ▲ #6FD49C; negative: ▼ #F15050;
```

### 商店组件（3 个）

#### ShopListItem
```css
/* 容器 */ max-width: 660px; height: 80px; background: rgba(0,0,0,0.6); border-radius: 4px; padding: 0 24px;
/* 内层边框 */ inset: 3px; border: 1px solid rgba(226,222,211,0.2); border-radius: 2px;
/* hovered 态 */ 内层 border-color: rgba(226,222,211,0.5); box-shadow: inset 0 0 7px 3px rgba(246,231,152,0.3);
/* 名称 */ font: Roboto 28px/500 italic; color: #E9E1D1; flex: 1;
/* 价格 */ font: Roboto 26px/700 italic; color: #E2D146;
```

#### ShopPriceQuantity
```css
/* 容器 */ display: flex; flex-direction: column; gap: 8px;
/* 标签 */ font: Roboto 22px/500 italic; color: rgba(233,225,209,0.6);
/* 数值 */ font: Roboto 26px/700 italic; color: #E9E1D1;
```

#### NumberInput
```css
/* 容器 */ display: inline-flex; align-items: center; gap: 8px;
/* 按钮 */ 24×24px; border-radius: 3px; background: rgba(226,222,211,0.15); color: #E2DED3; font-size: 12px;
/* hover */ background: rgba(226,222,211,0.3);
/* 数值 */ font: Roboto 28px/700; color: #E9E1D1; min-width: 40px; text-align: center;
```

### 品牌组件（1 个）

#### Logo
```css
/* full 变体 */ 三角力量 SVG + "ZELDA" 文字 font: Hylia Serif 48px; color: #E2DED3;
/* mark 变体 */ 仅三角力量 SVG; fill: #E2DED3;
/* 三角力量 path */ 三个三角形组合; filter: drop-shadow(0 0 8px rgba(226,222,211,0.3));
```

### 页面级组件（9 个）

#### MenuScreen
```css
/* 容器 */ width: 100%; aspect-ratio: 16/9; background: #1a1a18; overflow: hidden;
/* 布局 */ 顶部 MenuSections + 中间 ItemBG 网格 + 右侧 ItemDescription;
```

#### QuestScreen
```css
/* 容器 */ 同上;
/* 布局 */ 左侧 QuestListItem 列表 + 右侧 QuestDescription;
```

#### LoadingScreen
```css
/* 容器 */ 同上; background: #000;
/* 布局 */ 居中 tip 文字 + 底部 LoadingHeart 行 + 角落 DivineBeast 图标;
```

#### TitleScreen
```css
/* 容器 */ 同上;
/* 布局 */ 居中 Logo + 底部菜单选项列表;
```

#### GameOverScreen
```css
/* 容器 */ 同上; background: #0a0000;
/* 文字 */ "GAME OVER" font: Hylia Serif 80px; color: #F15050; text-shadow: 0 0 30px rgba(241,80,80,0.5);
/* 动画 */ fade-in 2s;
```

#### SystemScreen
```css
/* 容器 */ 同上;
/* 布局 */ 居中 SettingsToggle 列表 + 底部 ActionSet;
```

#### ShopScreen
```css
/* 容器 */ 同上;
/* 布局 */ 左侧 ShopListItem 列表 + 右侧物品详情 + 底部 ShopPriceQuantity;
```

#### SheikahMapScreen
```css
/* 容器 */ 同上; background: #0a1628;
/* 布局 */ 全屏 MapGrid + MapIcon 标记 + MapCursor + 边框 SheikahFrame;
/* 叠加 */ SheikahScanlines animated;
```

#### QuickSelectorScreen
```css
/* 容器 */ position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px);
/* 布局 */ 居中 QuickSelector 轮盘;
```


---

