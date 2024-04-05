import{_ as t,c as e,o as l,a4 as r}from"./chunks/framework.uQk9_EO2.js";const s="/docs/cocos/assets/2d-particle.D0VDOCMY.png",p=JSON.parse('{"title":"ParticleSystem2D 组件参考","description":"","frontmatter":{},"headers":[],"relativePath":"zh/particle-system/2d-particle/2d-particle.md","filePath":"zh/particle-system/2d-particle/2d-particle.md","lastUpdated":1712305443000}'),a={name:"zh/particle-system/2d-particle/2d-particle.md"},d=r('<h1 id="particlesystem2d-组件参考" tabindex="-1">ParticleSystem2D 组件参考 <a class="header-anchor" href="#particlesystem2d-组件参考" aria-label="Permalink to &quot;ParticleSystem2D 组件参考&quot;">​</a></h1><p>2D 粒子组件（ParticleSystem2D）用于读取粒子资源数据，并对其进行一系列例如播放、暂停、销毁等操作。粒子资源支持 <code>plist</code> 文件和图片，这两个资源建议放在同一个文件夹下。</p><p><img src="'+s+'" alt="ParticleSystem2D"></p><p>点击 <strong>属性检查器</strong> 下方的 <strong>添加组件</strong> 按钮，然后从 <strong>Effects</strong> 中选择 <strong>ParticleSystem2D</strong>，即可添加 ParticleSystem2D 组件到节点上。</p><p>ParticleSystem2D 的脚本接口请参考 <a href="./__APIDOC__/zh/class/ParticleSystem2D">ParticleSystem API</a>。</p><h2 id="particlesystem2d-属性" tabindex="-1">ParticleSystem2D 属性 <a class="header-anchor" href="#particlesystem2d-属性" aria-label="Permalink to &quot;ParticleSystem2D 属性&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;">CustomMaterial</td><td style="text-align:left;">自定义材质，使用方法可参考 <a href="./../../ui-system/components/engine/ui-material">自定义材质</a></td></tr><tr><td style="text-align:left;">Color</td><td style="text-align:left;">粒子颜色</td></tr><tr><td style="text-align:left;">Preview</td><td style="text-align:left;">在编辑器模式下预览粒子，启用后选中粒子时，粒子将在 <strong>场景编辑器</strong> 中自动播放</td></tr><tr><td style="text-align:left;">PlayOnLoad</td><td style="text-align:left;">若勾选该项，则运行时会自动发射粒子</td></tr><tr><td style="text-align:left;">AutoRemoveOnFinish</td><td style="text-align:left;">粒子播放完毕后自动销毁所在的节点</td></tr><tr><td style="text-align:left;">File</td><td style="text-align:left;">Plist 格式的粒子配置文件</td></tr><tr><td style="text-align:left;">Custom</td><td style="text-align:left;">自定义粒子属性。开启该属性后可自定义以下部分的粒子属性</td></tr><tr><td style="text-align:left;">SpriteFrame</td><td style="text-align:left;">自定义的粒子贴图</td></tr><tr><td style="text-align:left;">Duration</td><td style="text-align:left;">粒子系统运行时间，单位为 <strong>秒</strong>，-1 表示持续发射</td></tr><tr><td style="text-align:left;">EmissionRate</td><td style="text-align:left;">每秒发射的粒子数目</td></tr><tr><td style="text-align:left;">Life</td><td style="text-align:left;">粒子的运行时间以及变化范围</td></tr><tr><td style="text-align:left;">TotalParticle</td><td style="text-align:left;">粒子最大数量</td></tr><tr><td style="text-align:left;">StartColor</td><td style="text-align:left;">粒子初始颜色</td></tr><tr><td style="text-align:left;">EndColor</td><td style="text-align:left;">粒子结束颜色</td></tr><tr><td style="text-align:left;">Angle</td><td style="text-align:left;">粒子角度及变化范围</td></tr><tr><td style="text-align:left;">StartSize</td><td style="text-align:left;">粒子的初始大小及变化范围</td></tr><tr><td style="text-align:left;">EndSize</td><td style="text-align:left;">粒子结束时的大小及变化范围</td></tr><tr><td style="text-align:left;">StartSpin</td><td style="text-align:left;">粒子开始自旋角度及变化范围</td></tr><tr><td style="text-align:left;">EndSpin</td><td style="text-align:left;">粒子结束自旋角度及变化范围</td></tr><tr><td style="text-align:left;">PosVar</td><td style="text-align:left;">发射器位置的变化范围（横向和纵向）</td></tr><tr><td style="text-align:left;">PositionType</td><td style="text-align:left;">粒子位置类型，包括 <strong>FREE</strong>、<strong>RELATIVE</strong>、<strong>GROUPED</strong> 三种。详情可参考 <a href="./__APIDOC__/zh/class/ParticleSystem2D?id=PositionType">PositionType API</a></td></tr><tr><td style="text-align:left;">EmitterMode</td><td style="text-align:left;">发射器类型，包括 <strong>GRAVITY</strong>、<strong>RADIUS</strong> 两种。详情可参考 <a href="./__APIDOC__/zh/class/ParticleSystem2D?id=EmitterMode">EmitterMode API</a></td></tr><tr><td style="text-align:left;">Gravity</td><td style="text-align:left;">重力。仅在 Emitter Mode 设为 <strong>GRAVITY</strong> 时生效</td></tr><tr><td style="text-align:left;">Speed</td><td style="text-align:left;">速度及变化范围。仅在 Emitter Mode 设为 <strong>GRAVITY</strong> 时生效</td></tr><tr><td style="text-align:left;">TangentialAccel</td><td style="text-align:left;">每个粒子的切向加速度及变化范围，即垂直于重力方向的加速度。仅在 Emitter Mode 设为 <strong>GRAVITY</strong> 时生效</td></tr><tr><td style="text-align:left;">RadialAccel</td><td style="text-align:left;">粒子径向加速度及变化范围，即平行于重力方向的加速度。仅在 Emitter Mode 设为 <strong>GRAVITY</strong> 时生效</td></tr><tr><td style="text-align:left;">RotationIsDir</td><td style="text-align:left;">每个粒子的旋转是否等于其方向。仅在 Emitter Mode 设为 <strong>GRAVITY</strong> 时生效</td></tr><tr><td style="text-align:left;">StartRadius</td><td style="text-align:left;">初始半径及变化范围，表示粒子发射时相对发射器的距离。仅在 Emitter Mode 设为 <strong>RADIUS</strong> 时生效</td></tr><tr><td style="text-align:left;">EndRadius</td><td style="text-align:left;">结束半径及变化范围。仅在 Emitter Mode 设为 <strong>RADIUS</strong> 时生效</td></tr><tr><td style="text-align:left;">RotatePerS</td><td style="text-align:left;">粒子每秒围绕起始点的旋转角度及变化范围。仅在 Emitter Mode 设为 <strong>RADIUS</strong> 时生效</td></tr></tbody></table><p>更多具体的使用方式可参考官方范例 <strong>ui/25.particle</strong>（<a href="https://github.com/cocos/cocos-test-projects/tree/v3.8/assets/cases/ui/25.particle" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://gitee.com/mirrors_cocos-creator/test-cases-3d/tree/v3.8/assets/cases/ui/25.particle" target="_blank" rel="noreferrer">Gitee</a>）。</p>',8),i=[d];function n(o,g,y,c,f,x){return l(),e("div",null,i)}const _=t(a,[["render",n]]);export{p as __pageData,_ as default};
