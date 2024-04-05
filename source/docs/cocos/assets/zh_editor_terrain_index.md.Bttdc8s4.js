import{_ as t,c as e,o as l,a4 as r}from"./chunks/framework.uQk9_EO2.js";const a="/docs/cocos/assets/terrain.DISBJfQv.png",s="/docs/cocos/assets/create-terrain.DUmqYfxL.png",n="/docs/cocos/assets/create-terrain-asset.DL5X3k5A.png",o="/docs/cocos/assets/terrain-inspector.D55Ad738.png",d="/docs/cocos/assets/terrain-panel.DvaPkhCT.png",i="/docs/cocos/assets/terrain-manage.DFbDXRHb.png",g="/docs/cocos/assets/terrain-sculpt.Cao7fakD.png",h="/docs/cocos/assets/terrain-paint.C3REO9Nh.png",c="/docs/cocos/assets/terrain-layer.BFJlWbdY.png",y="/docs/cocos/assets/terrain-select.CI3QQNoI.png",q=JSON.parse('{"title":"地形系统","description":"","frontmatter":{},"headers":[],"relativePath":"zh/editor/terrain/index.md","filePath":"zh/editor/terrain/index.md","lastUpdated":1712305443000}'),f={name:"zh/editor/terrain/index.md"},x=r('<h1 id="地形系统" tabindex="-1">地形系统 <a class="header-anchor" href="#地形系统" aria-label="Permalink to &quot;地形系统&quot;">​</a></h1><p>地形系统以一种高效的方式来展示大自然的山川地貌。开发者可以很方便的使用画刷来雕刻出盆地、山脉、峡谷、平原等地貌。</p><p><img src="'+a+'" alt="terrain"></p><h2 id="创建地形" tabindex="-1">创建地形 <a class="header-anchor" href="#创建地形" aria-label="Permalink to &quot;创建地形&quot;">​</a></h2><p>创建地形需要以下步骤：</p><ol><li><p>在 <strong>层级管理器</strong> 右击菜单中点击 <strong>创建 -&gt; 地形</strong> 来创建地形节点（地形节点可移动，但不支持旋转与缩放）。</p><p><img src="'+s+'" alt="create terrain"></p></li><li><p>在 <strong>资源管理器</strong> 右击菜单中点击 <strong>创建 -&gt; 地形</strong> 来创建地形资源。</p><p><img src="'+n+'" alt="create terrain asset"></p></li></ol><h2 id="使用地形资源" tabindex="-1">使用地形资源 <a class="header-anchor" href="#使用地形资源" aria-label="Permalink to &quot;使用地形资源&quot;">​</a></h2><p><strong>层级管理器</strong> 里点击选中地形节点， <strong>属性检查器</strong> 会显示 <code>cc.Terrain</code> 地形组件，将已经创建好的地形资源拖拽到地形组件中的 <code>Asset</code> 属性框。</p><p><img src="'+o+'" alt="terrain inspector"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">Asset</td><td style="text-align:left;">地形资源</td></tr><tr><td style="text-align:left;">Effect Asset</td><td style="text-align:left;">地形特效资源</td></tr><tr><td style="text-align:left;">Receive Shadow</td><td style="text-align:left;">是否接受阴影</td></tr><tr><td style="text-align:left;">Use Normal Map</td><td style="text-align:left;">是否使用法线贴图</td></tr><tr><td style="text-align:left;">Use PBR</td><td style="text-align:left;">是否使用物理材质</td></tr><tr><td style="text-align:left;">Lod Enable</td><td style="text-align:left;">是否启用地形 Lod。若启用可减少渲染面数，提升渲染性能</td></tr><tr><td style="text-align:left;">Lod Bias</td><td style="text-align:left;">设置 Lod 起始距离</td></tr></tbody></table><h2 id="编辑场景地形" tabindex="-1">编辑场景地形 <a class="header-anchor" href="#编辑场景地形" aria-label="Permalink to &quot;编辑场景地形&quot;">​</a></h2><p><strong>层级管理器</strong> 里点击选中地形节点， <strong>场景编辑器</strong> 会显示 地形节点的可编辑面板。 编辑面板菜单有： <strong>管理</strong>（Manage）、<strong>雕塑</strong>（Sculpt）、<strong>涂料</strong>（Paint）和 <strong>选择</strong>（Select）几部分。可通过点击各 Tab 标签来切换面板内容。</p><p><img src="'+d+'" alt="terrain panel"></p><p>除了编辑面板，也可以通过 <strong>场景编辑器</strong> 左上角的图标来快捷切换地形画刷等功能。按顺序为：</p><ul><li><strong>管理</strong> 功能</li><li><strong>雕塑</strong> 功能中的 <strong>Bulge</strong>（隆起）画刷类型</li><li><strong>雕塑</strong> 功能中的 <strong>Sunken</strong>（凹陷）画刷类型</li><li><strong>雕塑</strong> 功能中的 <strong>Smooth</strong>（平滑）画刷类型</li><li><strong>涂料</strong> 功能</li><li><strong>选择</strong> 功能</li></ul><h3 id="管理-manage" tabindex="-1">管理（Manage） <a class="header-anchor" href="#管理-manage" aria-label="Permalink to &quot;管理（Manage）&quot;">​</a></h3><p>用于调整地形的各种参数。Tile 是地形的最小单位，Tile 组成地形块（Block），目前一个 Block 由 <strong>32x32</strong> 个 Tile 组成，一个地形至少由 1 个 Block 组成。</p><p><img src="'+i+'" alt="terrain manage"></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">Tile Size</td><td style="text-align:left;">地形 Tile 的大小，目前一个地形块由 32 x 32 个 Tile 组成，所以一个地形块的边长是 <strong>32 x Tile Size</strong></td></tr><tr><td style="text-align:left;">Weight Map Size</td><td style="text-align:left;">权重图大小</td></tr><tr><td style="text-align:left;">Light Map Size</td><td style="text-align:left;">光照贴图大小</td></tr><tr><td style="text-align:left;">Block Count</td><td style="text-align:left;">地形块在两个维度上的数量（<strong>注意</strong>：若该值设置过大会造成顶点数过多，导致卡顿）</td></tr></tbody></table><h3 id="雕塑-sculpt" tabindex="-1">雕塑（Sculpt） <a class="header-anchor" href="#雕塑-sculpt" aria-label="Permalink to &quot;雕塑（Sculpt）&quot;">​</a></h3><p>用于改变地形的形状。</p><p><img src="'+g+'" alt="terrain sculpt"></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">Brush Size</td><td style="text-align:left;">画刷的大小</td></tr><tr><td style="text-align:left;">Brush Strength</td><td style="text-align:left;">画刷的力度</td></tr><tr><td style="text-align:left;">Brush Mode</td><td style="text-align:left;">画刷类型，包括 <strong>Bulge</strong>、<strong>Sunken</strong>、<strong>Smooth</strong>、<strong>Flatten</strong>、<strong>Set Height</strong></td></tr><tr><td style="text-align:left;">Brush Height</td><td style="text-align:left;">画刷高度，只有画刷模式为<strong>Set Height</strong>时生效</td></tr><tr><td style="text-align:left;">Brush</td><td style="text-align:left;">自定义画刷样式，通过选取样式图片生成自定义画刷，使用R通道来作为画刷蒙版</td></tr><tr><td style="text-align:left;">Brush Rotation</td><td style="text-align:left;">画刷的旋转值</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">画刷模式</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">Bulge</td><td style="text-align:left;">隆起地形</td></tr><tr><td style="text-align:left;">Sunken</td><td style="text-align:left;">下凹地形</td></tr><tr><td style="text-align:left;">Smooth</td><td style="text-align:left;">平滑地形</td></tr><tr><td style="text-align:left;">Flatten</td><td style="text-align:left;">整平地形</td></tr><tr><td style="text-align:left;">Set Height</td><td style="text-align:left;">使用<strong>画刷高度</strong>设置地形高度</td></tr></tbody></table><p>通过 <strong>鼠标左键</strong> 来雕刻地形，当使用<strong>Bulge</strong>模式时，还可以通过 <strong>Shift + 鼠标左键</strong> 下凹地形</p><h3 id="涂料-paint" tabindex="-1">涂料（Paint） <a class="header-anchor" href="#涂料-paint" aria-label="Permalink to &quot;涂料（Paint）&quot;">​</a></h3><p>用于描绘地形的纹理</p><p><img src="'+h+'" alt="terrain paint"></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">Terrain Layer</td><td style="text-align:left;">设置地形的 Layer。详情可参考下方的 <strong>Layer 编辑</strong></td></tr><tr><td style="text-align:left;">Brush Size</td><td style="text-align:left;">画刷的大小</td></tr><tr><td style="text-align:left;">Brush Strength</td><td style="text-align:left;">画刷的力度</td></tr><tr><td style="text-align:left;">Brush Falloff</td><td style="text-align:left;">画刷衰减度，决定了画刷边缘的锐利程度。<br><strong>0.0</strong> 表示画刷在整个范围内都有完全效果（全部被当前层纹理覆盖），具有尖锐的边缘。<br><strong>1.0</strong> 表示画刷仅在它中心具有完全效果，在到达边缘的过程中效果逐渐衰减</td></tr><tr><td style="text-align:left;">Brush</td><td style="text-align:left;">自定义画刷样式，通过选取样式图片生成自定义画刷</td></tr></tbody></table><h4 id="layer-编辑" tabindex="-1">Layer 编辑 <a class="header-anchor" href="#layer-编辑" aria-label="Permalink to &quot;Layer 编辑&quot;">​</a></h4><p><img src="'+c+'" alt="terrain layer"></p><p>点击右上方的 <strong>+/-</strong> 按钮可以添加/删除 Layer（最多支持 4 层 layer）。选中某个 Layer 后就可以对 Layer 及其纹理进行编辑。</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">Terrain Layer</td><td style="text-align:left;">设置当前 Layer 的纹理</td></tr><tr><td style="text-align:left;">Normal Map</td><td style="text-align:left;">设置当前 Layer 的法线贴图，需要勾选地形组件的 <strong>Use Normal Map</strong> 属性</td></tr><tr><td style="text-align:left;">Metallic</td><td style="text-align:left;">设置当前 Layer 的金属特性 (主要指光滑程度)</td></tr><tr><td style="text-align:left;">Roughness</td><td style="text-align:left;">设置当前 Layer 的粗糙程度</td></tr><tr><td style="text-align:left;">Tile Size</td><td style="text-align:left;">纹理的平铺大小，值越小会在同样大小的区域内进行更多次的平铺</td></tr></tbody></table><h3 id="选择-select" tabindex="-1">选择（Select） <a class="header-anchor" href="#选择-select" aria-label="Permalink to &quot;选择（Select）&quot;">​</a></h3><p>切换到 <strong>选择</strong> 分页后，在 <strong>场景编辑器</strong> 中选中地形块，便会显示当前地形块的相关信息。</p><p><img src="'+y+'" alt="terrain select"></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">Index</td><td style="text-align:left;">当前选中地形块的索引</td></tr><tr><td style="text-align:left;">Layers</td><td style="text-align:left;">当前选中地形块的纹理列表</td></tr><tr><td style="text-align:left;">Wight</td><td style="text-align:left;">当前选中地形块的权重图</td></tr></tbody></table>',37),p=[x];function b(u,m,_,S,B,k){return l(),e("div",null,p)}const T=t(f,[["render",b]]);export{q as __pageData,T as default};
