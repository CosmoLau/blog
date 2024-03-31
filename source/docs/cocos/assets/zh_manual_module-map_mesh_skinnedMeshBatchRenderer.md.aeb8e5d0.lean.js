import{_ as t,v as e,b as n,R as s}from"./chunks/framework.5ffcbaff.js";const l="/docs/cocos/assets/batched-skinning-model-component.35ce564b.png",y=JSON.parse('{"title":"批量蒙皮网格渲染器组件（SkinnedMeshBatchRenderer）","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/module-map/mesh/skinnedMeshBatchRenderer.md","filePath":"zh/manual/module-map/mesh/skinnedMeshBatchRenderer.md"}'),r={name:"zh/manual/module-map/mesh/skinnedMeshBatchRenderer.md"},a=s('<h1 id="批量蒙皮网格渲染器组件-skinnedmeshbatchrenderer" tabindex="-1">批量蒙皮网格渲染器组件（SkinnedMeshBatchRenderer） <a class="header-anchor" href="#批量蒙皮网格渲染器组件-skinnedmeshbatchrenderer" aria-label="Permalink to &quot;批量蒙皮网格渲染器组件（SkinnedMeshBatchRenderer）&quot;">​</a></h1><p>批量蒙皮网格渲染器组件（SkinnedMeshBatchRenderer）用于将同一个骨骼动画组件控制的所有子蒙皮模型网格合并渲染。</p><p><img src="'+l+'" alt="mesh batch"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Operation</strong></td><td style="text-align:left;">对属性的任何修改不会立即生效，需要点 <strong>Cook</strong> 按钮重新计算才能应用。</td></tr><tr><td style="text-align:left;"><strong>Materials</strong></td><td style="text-align:left;">合批后使用的“母材质”需要使用自己定制的合批版 effect。</td></tr><tr><td style="text-align:left;"><strong>LightmapSettings</strong></td><td style="text-align:left;">用于烘焙 Lightmap，详情请参考 <a href="./../../concepts/scene/light/lightmap.html">光照贴图</a>。</td></tr><tr><td style="text-align:left;"><strong>ShadowCastingMode</strong></td><td style="text-align:left;">指定当前模型是否会投射阴影，需要先在场景中 <a href="./../../concepts/scene/light/shadow.html#开启阴影">开启阴影</a>。</td></tr><tr><td style="text-align:left;"><strong>ReceiveShadow</strong></td><td style="text-align:left;">指定当前模型是否会接收并显示其它物体产生的阴影效果，需要先在场景中 <a href="./../../concepts/scene/light/shadow.html#开启阴影">开启阴影</a>。该属性仅在阴影类型为 <strong>ShadowMap</strong> 时生效。</td></tr><tr><td style="text-align:left;"><strong>SkinningRoot</strong></td><td style="text-align:left;">骨骼蒙皮的根节点，一般为 SkeletalAnimation 组件所在节点。</td></tr><tr><td style="text-align:left;"><strong>AtlasSize</strong></td><td style="text-align:left;">合图生成的最终图集的边长。</td></tr><tr><td style="text-align:left;"><strong>BatchableTextureNames</strong></td><td style="text-align:left;">材质中真正参与合图的贴图属性，不参与的属性统一使用第一个 unit 的贴图。</td></tr><tr><td style="text-align:left;"><strong>Units</strong></td><td style="text-align:left;">合批前的子蒙皮模型数据，是主要的数据来源。</td></tr><tr><td style="text-align:left;"><strong>Mesh</strong></td><td style="text-align:left;">当前子模型的模型数据，一般直接来自 glTF 或 FBX 模型文件。</td></tr><tr><td style="text-align:left;"><strong>Skeleton</strong></td><td style="text-align:left;">当前模型的骨骼数据，一般直接来自 glTF 或 FBX 模型文件。</td></tr><tr><td style="text-align:left;"><strong>Materials</strong></td><td style="text-align:left;">当前子模型使用的“子材质”，使用的是非合批版的普通 effect，不同子模型使用的 effect 应保持一致。</td></tr><tr><td style="text-align:left;"><strong>Offset</strong></td><td style="text-align:left;">当前子模型合图时的偏移，以图集左上角为原点，范围为 <code>[0, 1]</code>。比如图中数据代表子贴图与图集的左上角是重合的。</td></tr><tr><td style="text-align:left;"><strong>Size</strong></td><td style="text-align:left;">当前子模型合图时所占的尺寸，范围为 <code>[0, 1]</code>。比如图中数据代表子贴图占整个图集的 1/2。</td></tr><tr><td style="text-align:left;"><strong>CopyFrom</strong></td><td style="text-align:left;">可以通过拖入 <strong>SkinningModelComponent</strong> 自动复制目标属性（除了 <code>offset</code> 和 <code>size</code>），方便操作。</td></tr></tbody></table><p>更多合批相关的内容，详情请参考文档 <a href="./../../animation/skeletal-animation.html">骨骼动画 — BatchedSkinnedMeshRenderer 组件</a>。</p><p>批量蒙皮网格渲染器组件的相关接口，请参考 <a href="./__APIDOC__/zh/class/SkinnedMeshBatchRenderer.html">SkinnedMeshBatchRenderer API</a>。</p>',6),d=[a];function o(i,g,h,c,f,m){return e(),n("div",null,d)}const p=t(r,[["render",o]]);export{y as __pageData,p as default};
