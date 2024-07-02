import{_ as t,c as e,o as r,a4 as s}from"./chunks/framework.uQk9_EO2.js";const o="/docs/cocos/assets/shape-module.Bo81hOk1.png",n="/docs/cocos/assets/box_emitter_property.CMTOKo8H.png",l="/docs/cocos/assets/box_emitter.BawKRfjX.png",g="/docs/cocos/assets/box-gizmo.BlXmRmhQ.gif",a="/docs/cocos/assets/circle_emitter_property.CMp86irk.png",i="/docs/cocos/assets/circle_emitter.Dgy4rseZ.png",d="/docs/cocos/assets/circle-gizmo.DPyZ6ZRk.gif",p="/docs/cocos/assets/cone_emitter.C44fZv02.png",c="/docs/cocos/assets/cone_emitter_property.DfdCI3AG.png",h="/docs/cocos/assets/sphere-emitter-property.B4b-zag2.png",m="/docs/cocos/assets/sphere-emitter.DS_EEDyX.png",y="/docs/cocos/assets/hemisphere-emitter.DtPLY_2H.png",z=JSON.parse('{"title":"发射器模块（ShapeModule）","description":"","frontmatter":{},"headers":[],"relativePath":"zh/particle-system/emitter.md","filePath":"zh/particle-system/emitter.md","lastUpdated":1712305443000}'),f={name:"zh/particle-system/emitter.md"},x=s('<h1 id="发射器模块-shapemodule" tabindex="-1">发射器模块（ShapeModule） <a class="header-anchor" href="#发射器模块-shapemodule" aria-label="Permalink to &quot;发射器模块（ShapeModule）&quot;">​</a></h1><p>发射器模块主要用于设置粒子发射器形状、粒子发射方向和速度。</p><p><img src="'+o+'" alt="shape-module"></p><p><strong>ShapeType</strong> 属性用于选择粒子发射器形状，可选项包括 <strong>盒子</strong>（Box）、<strong>圆形</strong>（Circle）、<strong>锥体</strong>（Cone）、<strong>球</strong>（Sphere）、<strong>半球</strong>（Hemisphere）。当形状选择不同时，可发射粒子的区域不同，相对应的属性设置项也不一致，详情请参考下文对应形状发射器的说明。</p><h2 id="通用属性" tabindex="-1">通用属性 <a class="header-anchor" href="#通用属性" aria-label="Permalink to &quot;通用属性&quot;">​</a></h2><p>各类型发射器有一些属性是通用的，包括：</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>ShapeType</strong></td><td style="text-align:left;">发射器形状。目前支持 <strong>盒子</strong>（Box）、<strong>圆形</strong>（Circle）、<strong>锥体</strong>（Cone）、<strong>球</strong>（Sphere）、<strong>半球</strong>（Hemisphere）这几种类型。</td></tr><tr><td style="text-align:left;"><strong>Position</strong></td><td style="text-align:left;">发射器相对于所在节点的位置</td></tr><tr><td style="text-align:left;"><strong>Rotation</strong></td><td style="text-align:left;">发射器相对于所在节点的旋转，可用于调整粒子发射方向</td></tr><tr><td style="text-align:left;"><strong>Scale</strong></td><td style="text-align:left;">发射器相对于所在节点的缩放，可用于调整发射器形状的大小，即粒子发射范围</td></tr><tr><td style="text-align:left;"><strong>AlignToDirection</strong></td><td style="text-align:left;">根据粒子发射的初始方向决定粒子的移动方向，可用于模拟类似水从水桶中洒出的效果</td></tr><tr><td style="text-align:left;"><strong>RandomDirectionAmount</strong></td><td style="text-align:left;">粒子生成方向随机混合设定。<br>设置为 0 时，不生效；<br>设置为 1 时，方向随机</td></tr><tr><td style="text-align:left;"><strong>SphericalDirectionAmount</strong></td><td style="text-align:left;">表示当前发射方向与当前位置到节点中心连线方向的插值。<br>当该值设置为 1 时，粒子由中心向外部发射（与 <strong>ShapeType</strong> 设置为 <strong>Sphere</strong> 时的行为相同）</td></tr><tr><td style="text-align:left;"><strong>RandomPositionAmount</strong></td><td style="text-align:left;">粒子生成位置随机设定，当该值设置 <strong>不为 0</strong> 时，粒子生成位置会超出生成器的大小范围</td></tr></tbody></table><h2 id="盒子发射器" tabindex="-1">盒子发射器 <a class="header-anchor" href="#盒子发射器" aria-label="Permalink to &quot;盒子发射器&quot;">​</a></h2><p>当 <strong>ShapeType</strong> 属性设置为 <strong>Box</strong> 时，我们称之为盒子发射器：</p><p><img src="'+n+'" alt="box_emitter_property"></p><p>特有的属性项说明如下：</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>EmitFrom</strong></td><td style="text-align:left;">发射器从盒子的哪个部位发射粒子，包括：<br><strong>Volume</strong>：从盒子内部发射<br><strong>Shell</strong>：从盒子表面发射<br><strong>Edge</strong>：从盒子边框发射</td></tr><tr><td style="text-align:left;"><strong>BoxThickness</strong></td><td style="text-align:left;">盒子每个发射方向的厚度，仅当 <strong>EmitFrom</strong> 选择 <strong>Shell</strong> 模式时生效</td></tr></tbody></table><p>同时在 <strong>场景编辑器</strong> 中会有一个盒子 Gizmo，显示盒子发射器的形状大小：</p><p><img src="'+l+'" alt="box_emitter"></p><p>直接拖拽盒子 Gizmo 的方块控制点可以调整盒子发射器的 <strong>Scale</strong> 属性：</p><p><img src="'+g+'" alt="box_gizmo"></p><h2 id="圆发射器" tabindex="-1">圆发射器 <a class="header-anchor" href="#圆发射器" aria-label="Permalink to &quot;圆发射器&quot;">​</a></h2><p>当 <strong>ShapeType</strong> 属性设置为 <strong>Circle</strong> 时，我们称之为圆发射器：</p><p><img src="'+a+'" alt="circle_emitter_property"></p><p>特有的属性项说明如下：</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Radius</strong></td><td style="text-align:left;">设置圆发射器的半径</td></tr><tr><td style="text-align:left;"><strong>RadiusThickness</strong></td><td style="text-align:left;">圆发射器发射粒子的位置。<br>设置为 <strong>0</strong> 时，表示从圆周发射<br>设置为 <strong>1</strong> 时，表示从圆心发射<br>设置为 <strong>0~1</strong> 之间时，表示从圆心到圆周之间，在一定的比例范围内发射</td></tr><tr><td style="text-align:left;"><strong>Arc</strong></td><td style="text-align:left;">设置圆发射器发射粒子的扇形区域</td></tr><tr><td style="text-align:left;"><strong>ArcMode</strong></td><td style="text-align:left;">设置粒子在扇形区域的发射方式，包括：<br><strong>Random</strong>：随机发射<br><strong>Loop</strong>：沿某一方向循环发射，每次循环方向相同<br><strong>PingPong</strong>：循环发射，每次循环方向都与上一次相反</td></tr><tr><td style="text-align:left;"><strong>ArcSpread</strong></td><td style="text-align:left;">设置可能产生粒子的圆弧周围的离散间隔。例如：<br>设置为 0 时，可在圆弧任意位置生成粒子；<br>设置为 0.2 时，仅在圆弧周围以 20% 的间隔生成粒子。</td></tr><tr><td style="text-align:left;"><strong>ArcSpeed</strong></td><td style="text-align:left;">表示粒子沿圆弧发射的速度。点击右侧的向下图标按钮，即可选择打开曲线编辑器对该属性进行曲线编辑</td></tr></tbody></table><p>同时在 <strong>场景编辑器</strong> 中会有一个圆形 Gizmo，显示发射器的形状大小：</p><p><img src="'+i+'" alt="circle_emitter"></p><p>直接拖拽圆形 Gizmo 的方块控制点可以调整圆发射器的 <strong>Radius</strong> 属性：</p><p><img src="'+d+'" alt="circle_gizmo"></p><h2 id="圆锥发射器" tabindex="-1">圆锥发射器 <a class="header-anchor" href="#圆锥发射器" aria-label="Permalink to &quot;圆锥发射器&quot;">​</a></h2><p>当 <strong>ShapeType</strong> 属性设置为 <strong>Cone</strong> 时，我们称之为圆锥发射器。在 <strong>场景编辑器</strong> 中会有一个圆锥 Gizmo，显示发射器的形状大小：</p><p><img src="'+p+'" alt="cone_emitter"></p><blockquote><p>下文以上方图示为例，圆锥下方半径较小的横截面称为圆锥底部。</p></blockquote><p>圆锥发射器的属性在 <strong>属性检查器</strong> 中显示如下：</p><p><img src="'+c+'" alt="cone_emitter_property"></p><p>特有的属性项说明如下：</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>EmitFrom</strong></td><td style="text-align:left;">发射器从圆锥的哪个部位发射粒子，包括：<br><strong>Base</strong>：从圆锥底部发射<br><strong>Shell</strong>：从圆锥底部的圆周发射<br><strong>Volume</strong>：从圆锥内部发射</td></tr><tr><td style="text-align:left;"><strong>Radius</strong></td><td style="text-align:left;">设置圆锥底部横截面的半径</td></tr><tr><td style="text-align:left;"><strong>RadiusThickness</strong></td><td style="text-align:left;">圆锥发射器发射粒子的位置。<br>设置为 <strong>0</strong> 时，表示从圆锥表面发射<br>设置为 <strong>1</strong> 时，表示从圆锥中心发射<br>设置为 <strong>0~1</strong> 之间时，表示从圆锥的中心到表面之间，在一定的比例范围内发射</td></tr><tr><td style="text-align:left;"><strong>Angle</strong></td><td style="text-align:left;">圆锥的轴与母线的夹角，值越大夹角越大，圆锥发射器的开合程度越大</td></tr><tr><td style="text-align:left;"><strong>Arc</strong></td><td style="text-align:left;">设置圆锥发射器发射粒子的扇形区域</td></tr><tr><td style="text-align:left;"><strong>ArcMode</strong></td><td style="text-align:left;">表示粒子在扇形区域内的发射方式。<br><strong>Random</strong>：随机位置<br><strong>Loop</strong>：沿某一方向循环发射，每次循环方向相同<br><strong>PingPong</strong>：循环发射，每次循环方向相反<br><strong>spread</strong>：表示粒子在某个间断发射，比如，0 表示可以在任意位置发射；0.1 表示每隔圆周的十分之一位置发射</td></tr><tr><td style="text-align:left;"><strong>ArcSpeed</strong></td><td style="text-align:left;">表示粒子沿圆弧发射的速度</td></tr><tr><td style="text-align:left;"><strong>ArcSpread</strong></td><td style="text-align:left;">表示粒子沿圆弧发射的速度。点击右侧的向下图标按钮，即可选择打开曲线编辑器对该属性进行曲线编辑</td></tr><tr><td style="text-align:left;"><strong>Length</strong></td><td style="text-align:left;">圆锥顶部截面距离底部的轴长</td></tr></tbody></table><p>其中圆锥发射器的 <strong>Angle</strong>、<strong>Length</strong>、<strong>Radius</strong> 属性也可以通过直接拖拽场景中圆锥 Gizmo 的方块控制点进行设置。</p><h2 id="球体-半球体发射器" tabindex="-1">球体/半球体发射器 <a class="header-anchor" href="#球体-半球体发射器" aria-label="Permalink to &quot;球体/半球体发射器&quot;">​</a></h2><p>当 <strong>ShapeType</strong> 属性设置为 <strong>Sphere</strong>/<strong>Hemisphere</strong> 时，我们称之为球体/半球体发射器。</p><p>球体发射器和半球体发射器的属性是一样的，这里我们以球体发射器为例：</p><p><img src="'+h+'" alt="Sphere_emitter_property"></p><p>特有的属性项说明如下：</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>EmitFrom</strong></td><td style="text-align:left;">发射器从球体的哪个部位发射粒子，包括：<br><strong>Volume</strong>：从球体内部发射<br><strong>Shell</strong>：从球体表面发射（暂不生效，可通过 <strong>RadiusThickness</strong> 设置）</td></tr><tr><td style="text-align:left;"><strong>Radius</strong></td><td style="text-align:left;">球体半径。也可以直接拖拽 <strong>场景编辑器</strong> 中球体 Gizmo 的方块控制点进行设置</td></tr><tr><td style="text-align:left;"><strong>RadiusThickness</strong></td><td style="text-align:left;">球体发射器发射粒子的位置。<br>设置为 <strong>0</strong> 时，表示从球表面发射<br>设置为 <strong>1</strong> 时，表示从球体中心发射<br>设置为 <strong>0~1</strong> 之间时，表示从表面到球心之间，在一定的比例范围内发射</td></tr></tbody></table><p>球体发射器在 <strong>场景编辑器</strong> 中会有一个球 Gizmo，显示发射器的形状大小：</p><p><img src="'+m+'" alt="Sphere_emitter"></p><p>同样的，半球体发射器在 <strong>场景编辑器</strong> 中也有一个半球 Gizmo，显示发射器的形状大小：</p><p><img src="'+y+'" alt="Hemisphere_emitter"></p>',44),_=[x];function b(u,S,T,k,A,P){return r(),e("div",null,_)}const q=t(f,[["render",b]]);export{z as __pageData,q as default};