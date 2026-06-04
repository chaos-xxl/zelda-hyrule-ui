# Attribution / 素材致谢

## Original Figma UI Kit

This project's visual design, UI structure, icons, and SVG assets are all derived from the **Zelda BOTW UI Kit** created by **Hunter Paramore** and shared on the Figma Community.

本项目的视觉设计、UI 结构、图标和 SVG 素材全部源自 **Hunter Paramore** 在 Figma 社区分享的 **Zelda BOTW UI Kit**。

| Item | Detail |
|------|--------|
| **Original Author** | Hunter Paramore |
| **Author Website** | https://hunterparamore.com |
| **Author Figma Profile** | https://www.figma.com/@hparamore |
| **Original Figma File** | https://www.figma.com/community/file/965825767811358609 |
| **License** | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) (Creative Commons Attribution 4.0 International) |

## License Compliance / 许可证合规

The original Zelda BOTW UI Kit is licensed under **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**. This license permits commercial use, modification, and redistribution — including releasing derivative works under a different license (such as this project's MIT) — provided that **proper attribution** is given.

This project satisfies the CC BY 4.0 attribution requirements by providing:

- **Title / Creator**: Hunter Paramore (named above and in `README.md`)
- **Source**: link to the original Figma file (above)
- **License**: CC BY 4.0 with link (this section)
- **Modifications**: stated below — the original Figma vectors were exported and re-implemented as React + TypeScript components; no original visual design was altered in substance, only translated to code

原始 Zelda BOTW UI Kit 采用 **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**（知识共享署名 4.0 国际）许可。该许可允许商用、修改与再分发——包括以不同许可证（如本项目的 MIT）发布衍生作品——前提是**给出恰当的署名**。

本项目通过以下方式满足 CC BY 4.0 的署名要求：

- **作者**：Hunter Paramore（上方及 `README.md` 中均已注明）
- **来源**：原始 Figma 文件链接（见上方表格）
- **许可证**：CC BY 4.0 及其链接（本节）
- **修改说明**：见下方——原始 Figma 矢量被导出并重新实现为 React + TypeScript 组件；未对原始视觉设计做实质性改动，仅将其翻译为代码

> 本项目（代码层）以 MIT 许可发布；原始设计素材的 CC BY 4.0 许可继续适用于其视觉设计部分。两者并行不冲突。

### ⚠️ 两层权利的重要区分 / Two Distinct Layers of Rights

CC BY 4.0 **只覆盖 Hunter Paramore 本人创作的设计表达**。它**不能、也没有**授权任天堂的底层知识产权——三角力量、希卡之眼、Zelda 标题字形等标志性元素的源头是任天堂，不在任何第三方 CC 许可的授权范围内。因此：

- ✅ **著作权层**：通过对 Hunter 的 CC BY 4.0 署名已合规
- ⚠️ **商标 + 游戏 IP 层**：《塞尔达传说》《旷野之息》及相关名称、标志、角色仍是任天堂的商标与 IP，CC BY 4.0 对此无能为力——本项目以"非官方、非商用粉丝创作"的定位来处理这一层（见下方 Trademark Notice）

CC BY 4.0 **only covers the design expression authored by Hunter Paramore**. It does **not** (and cannot) grant any rights to Nintendo's underlying intellectual property. Iconic elements such as the Triforce, the Sheikah eye, and the Zelda title lettering originate from Nintendo and fall outside what any third party can license under Creative Commons. Therefore:

- ✅ **Copyright layer**: satisfied via CC BY 4.0 attribution to Hunter Paramore
- ⚠️ **Trademark + game-IP layer**: *The Legend of Zelda*, *Breath of the Wild*, and related names/logos/characters remain Nintendo trademarks and IP, which CC BY 4.0 cannot grant — this project addresses that layer purely through its **unofficial, non-commercial fan-project** posture (see Trademark Notice below)

## What This Project Does

`zelda-hyrule-ui` packages the visual language defined in Hunter Paramore's Figma file as production-ready React components. Every SVG path, color value, and structural pattern was exported directly from the original work. This project adds:

- React + TypeScript component implementation
- Vite-based build system (ESM + CJS dual output)
- AI-consumable design specs (`SKILL.md`)
- Live demo and component documentation site
- npm package distribution

The **design itself**, however, is entirely the work of Hunter Paramore.

`zelda-hyrule-ui` 把 Hunter Paramore 的 Figma 文件中定义的视觉语言封装成了可用于生产环境的 React 组件。所有 SVG path、色值和结构模式都直接从原始作品导出。本项目额外添加了：

- React + TypeScript 组件实现
- 基于 Vite 的构建系统（双格式输出）
- 可被 AI 消费的设计规范（`SKILL.md`）
- 在线 Demo 和文档站
- npm 包发布

但**视觉设计本身**完全是 Hunter Paramore 的成果。

## How to Credit When Using This Library

When you build something with `zelda-hyrule-ui`, please consider adding the following attribution somewhere visible (footer, about page, README, etc.):

使用本库构建项目时，请在适当位置（页脚、关于页、README 等）注明致谢：

```markdown
UI design based on the [Zelda BOTW UI Kit](https://www.figma.com/community/file/965825767811358609)
by [Hunter Paramore](https://hunterparamore.com).
Implementation via [zelda-hyrule-ui](https://github.com/chaos-xxl/zelda-hyrule-ui).
```

## Trademark Notice

*The Legend of Zelda*, *Breath of the Wild*, the Sheikah Slate iconography, the Triforce, and all related characters, names, and visual elements are trademarks of **Nintendo**. This project is a fan creation for learning and demonstration purposes, and is not affiliated with, endorsed by, or sponsored by Nintendo. Although the underlying design assets are CC BY 4.0 licensed, the Zelda/Nintendo trademarks and game IP remain the property of Nintendo — do not use this project in a way that implies official association or infringes Nintendo's rights.

> **Downstream commercial-use disclaimer.** The MIT license applies to this project's **code only**; it cannot and does not grant any rights to Nintendo's trademarks or IP. The author distributes this project solely as a non-commercial fan work. Anyone who reuses it — especially for commercial purposes — does so at their own risk and bears sole responsibility for any resulting IP or trademark infringement. Such liability does not rest with the author.

《塞尔达传说》、《旷野之息》、希卡之石图标、三角力量等所有相关角色、名称及视觉元素均为**任天堂**的商标。本项目为粉丝创作，仅供学习与演示用途，与任天堂无任何隶属、背书或赞助关系。尽管底层设计素材采用 CC BY 4.0 许可，塞尔达/任天堂的商标与游戏 IP 仍归任天堂所有——请勿以暗示官方关联或侵犯任天堂权利的方式使用本项目。

> **下游商用免责说明。** MIT 许可仅适用于本项目的**代码部分**，它不能也没有授予任何任天堂商标或 IP 的权利。作者仅以"非商用粉丝创作"的身份分发本项目。任何人复用本项目——尤其是用于商业用途——均属风险自负，由此产生的 IP 或商标侵权责任由使用者自行承担，与作者无关。

## Other Acknowledgments

- **Architecture inspiration**: [`animal-island-ui`](https://github.com/guokaigdg/animal-island-ui) by guokaigdg — the project structure (component library + AI skill + design prompt) follows the pattern established here.
- **Hylia Serif font**: Custom Zelda-inspired typeface, included in `src/assets/fonts/HyliaSerif.ttf` (community-created Zelda font).
- **Cinzel font**: via Google Fonts (Open Font License).
- **Roboto font**: via Google Fonts (Apache License 2.0).

- **架构灵感**：参考了 guokaigdg 的 [`animal-island-ui`](https://github.com/guokaigdg/animal-island-ui) 项目结构（组件库 + AI skill + 设计提示词）。
- **Hylia Serif 字体**：塞尔达粉丝社区创作的字体，存放于 `src/assets/fonts/`。
- **Cinzel 字体**：Google Fonts（Open Font License）。
- **Roboto 字体**：Google Fonts（Apache License 2.0）。
