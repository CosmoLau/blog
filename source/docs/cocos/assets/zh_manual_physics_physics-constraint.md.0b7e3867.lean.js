import{_ as t,v as s,b as e,R as n}from"./chunks/framework.5ffcbaff.js";const a="/docs/cocos/assets/hinge-constraint.be2e3b57.jpg",o="/docs/cocos/assets/physics-hinge.7681a2fd.gif",i="/docs/cocos/assets/pointtopoint-constraint.53c93b61.jpg",l="/docs/cocos/assets/physics-p2p.9247981b.gif",r="/docs/cocos/assets/fixed-constraint.99ebfa1a.png",d="/docs/cocos/assets/fixed-constraint.aa682bf7.gif",C=JSON.parse('{"title":"约束","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/physics/physics-constraint.md","filePath":"zh/manual/physics/physics-constraint.md"}'),g={name:"zh/manual/physics/physics-constraint.md"},c=n('<h1 id="约束" tabindex="-1">约束 <a class="header-anchor" href="#约束" aria-label="Permalink to &quot;约束&quot;">​</a></h1><p>在物理引擎中，<strong>约束</strong> 用于模拟物体间的连接情况，如连杆、绳子、弹簧或者布娃娃等。</p><p>约束依赖 <a href="./physics-rigidbody.html">刚体组件</a>，若节点无刚体组件，则添加约束时，引擎会自动添加刚体组件。</p><blockquote><p><strong>注意</strong>：目前的约束仅在物理引擎选择为 Bullet、PhysX 或 Cannon.js 的情况下生效。</p></blockquote><h2 id="铰链约束-hingeconstraint" tabindex="-1">铰链约束 HingeConstraint <a class="header-anchor" href="#铰链约束-hingeconstraint" aria-label="Permalink to &quot;铰链约束 HingeConstraint&quot;">​</a></h2><p>通过铰链约束，将连接物体的运动约束在某一个轴上，这种约束在模拟门的合页或电机转动等情形下非常有用。</p><p><img src="'+a+'" alt="铰链约束"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>AttachedBody</strong></td><td style="text-align:left;">当前关节所在节点下的刚体组件</td></tr><tr><td style="text-align:left;"><strong>ConnectedBody</strong></td><td style="text-align:left;">获取或设置关节连接的另一个刚体，为空值时表示链接到位于世界原点的静态刚体</td></tr><tr><td style="text-align:left;"><strong>EnableCollision</strong></td><td style="text-align:left;">获取或设置关节连接的两刚体之间是否开启碰撞</td></tr><tr><td style="text-align:left;"><strong>PivotA</strong></td><td style="text-align:left;">在自身刚体的本地空间中，约束关节的相对位置</td></tr><tr><td style="text-align:left;"><strong>PivotB</strong></td><td style="text-align:left;">在连接刚体的本地空间中，约束关节的相对位置</td></tr><tr><td style="text-align:left;"><strong>Axis</strong></td><td style="text-align:left;">在本地空间中约束关节的旋转轴</td></tr></tbody></table><p><img src="'+o+'" alt="physics-hinge"></p><p>铰链约束接口请参考 <a href="__APIDOC__/zh/class/physics.HingeConstraint">HingeConstraint API</a>。</p><h2 id="点对点约束-pointtopointconstraint" tabindex="-1">点对点约束 PointToPointConstraint <a class="header-anchor" href="#点对点约束-pointtopointconstraint" aria-label="Permalink to &quot;点对点约束 PointToPointConstraint&quot;">​</a></h2><p>点对点约束是一种简单的复合约束，可以将两个对象，或者一个对象与坐标系中一点连接。连接的对象可以在共用一个连接点的情况下，相对对方自由旋转。</p><p><img src="'+i+'" alt="点对点约束"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>AttachedBody</strong></td><td style="text-align:left;">当前关节所在节点下的刚体组件</td></tr><tr><td style="text-align:left;"><strong>ConnectedBody</strong></td><td style="text-align:left;">获取或设置关节连接的刚体，为空值时表示链接到位于世界原点的静态刚体</td></tr><tr><td style="text-align:left;"><strong>EnableCollision</strong></td><td style="text-align:left;">获取或设置关节连接的两刚体之间是否开启碰撞</td></tr><tr><td style="text-align:left;"><strong>PivotA</strong></td><td style="text-align:left;">在自身刚体的本地空间中，约束关节的相对位置</td></tr><tr><td style="text-align:left;"><strong>PivotB</strong></td><td style="text-align:left;">在连接刚体的本地空间中，约束关节的相对位置</td></tr></tbody></table><p><img src="'+l+'" alt="physics-p2p"></p><p>点对点约束接口请参考 <a href="__APIDOC__/zh/class/physics.PointToPointConstraint">PointToPointConstraint API</a>。</p><h2 id="固定约束-fixedconstraint" tabindex="-1">固定约束 FixedConstraint <a class="header-anchor" href="#固定约束-fixedconstraint" aria-label="Permalink to &quot;固定约束 FixedConstraint&quot;">​</a></h2><p>固定约束是一种最简单的约束，它锁定了两个刚体之间的相对位置和旋转。连接的对象不允许相对于彼此移动。</p><p><img src="'+r+'" alt="固定约束"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>AttachedBody</strong></td><td style="text-align:left;">当前关节所在节点下的刚体组件</td></tr><tr><td style="text-align:left;"><strong>ConnectedBody</strong></td><td style="text-align:left;">获取或设置关节连接的刚体，为空值时表示链接到位于世界原点的静态刚体</td></tr><tr><td style="text-align:left;"><strong>EnableCollision</strong></td><td style="text-align:left;">获取或设置关节连接的两刚体之间是否开启碰撞</td></tr><tr><td style="text-align:left;"><strong>BreakForce</strong></td><td style="text-align:left;">获取或设置约束在断开之前可以施加的最大力</td></tr><tr><td style="text-align:left;"><strong>BreakTorque</strong></td><td style="text-align:left;">获取或设置约束在断开之前可以施加的最大扭矩</td></tr></tbody></table><p><img src="'+d+'" alt="physics-fixed"></p><p>固定约束接口请参考 <a href="__APIDOC__/zh/class/physics.FixedConstraint">FixedConstraint API</a>。</p>',22),h=[c];function p(y,f,x,_,b,m){return s(),e("div",null,h)}const u=t(g,[["render",p]]);export{C as __pageData,u as default};
