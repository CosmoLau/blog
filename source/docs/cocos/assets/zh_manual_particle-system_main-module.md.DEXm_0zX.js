import{_ as t}from"./chunks/menu-button.CjNMAp13.js";import{_ as e,c as l,o as a,a5 as r}from"./chunks/framework.CqnjdYks.js";const s="/docs/cocos/assets/main-module.BjS0G3DV.png",n="/docs/cocos/assets/set-pro.BrVY61PQ.png",d="/docs/cocos/assets/render-culling.FgVHl0ff.png",_=JSON.parse('{"title":"主模块（ParticleSystem）","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/particle-system/main-module.md","filePath":"zh/manual/particle-system/main-module.md"}'),o={name:"zh/manual/particle-system/main-module.md"},i=r('<h1 id="主模块-particlesystem" tabindex="-1">主模块（ParticleSystem） <a class="header-anchor" href="#主模块-particlesystem" aria-label="Permalink to &quot;主模块（ParticleSystem）&quot;">​</a></h1><p>粒子系统主模块用于存储在 <strong>属性检查器</strong> 中显示的所有数据，管理粒子生成、播放、更新，以及销毁。</p><p><img src="'+s+'" alt="main-module"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;">Duration</td><td style="text-align:left;">粒子系统运行总时间</td></tr><tr><td style="text-align:left;">Capacity</td><td style="text-align:left;">粒子系统能生成的最大粒子数量</td></tr><tr><td style="text-align:left;">Loop</td><td style="text-align:left;">粒子系统是否循环播放</td></tr><tr><td style="text-align:left;">PlayOnAwake</td><td style="text-align:left;">粒子系统加载后是否自动开始播放</td></tr><tr><td style="text-align:left;">Prewarm</td><td style="text-align:left;">选中之后，粒子系统会以已播放完一轮之后的状态开始播放（仅当循环播放启用时有效）</td></tr><tr><td style="text-align:left;">SimulationSpace</td><td style="text-align:left;">控制粒子坐标计算所在的坐标系</td></tr><tr><td style="text-align:left;">SimulationSpeed</td><td style="text-align:left;">控制整个粒子系统的更新速度</td></tr><tr><td style="text-align:left;">StartDelay</td><td style="text-align:left;">粒子系统开始运行后，粒子延迟发射的时间</td></tr><tr><td style="text-align:left;">StartLifetime</td><td style="text-align:left;">粒子生命周期</td></tr><tr><td style="text-align:left;">StartColor</td><td style="text-align:left;">粒子初始颜色</td></tr><tr><td style="text-align:left;">ScaleSpace</td><td style="text-align:left;">粒子缩放时所在的坐标系<br><strong>Local</strong>：基于本地坐标系的缩放<br><strong>World</strong>：基于世界坐标系的缩放<br><strong>Custom</strong>：自定义缩放，不受节点的 <strong>scale</strong> 属性影响</td></tr><tr><td style="text-align:left;">StartSize3D</td><td style="text-align:left;">分别设置粒子 X、Y、Z 轴的初始大小</td></tr><tr><td style="text-align:left;">StartSize</td><td style="text-align:left;">X 轴的初始大小，与 <code>StartSize3D</code> 属性二者只能选其一</td></tr><tr><td style="text-align:left;">StartSpeed</td><td style="text-align:left;">粒子初始速度</td></tr><tr><td style="text-align:left;">StartRotation3D</td><td style="text-align:left;">分别设置粒子 X、Y、Z 轴的初始旋转角度</td></tr><tr><td style="text-align:left;">StartRotation</td><td style="text-align:left;">Z 轴初始旋转角度，与 <code>StartRotation3D</code> 属性二者只能选其一</td></tr><tr><td style="text-align:left;">GravityModifier</td><td style="text-align:left;">粒子受重力影响的重力系数（只支持 CPU 粒子）</td></tr><tr><td style="text-align:left;">RateOverTime</td><td style="text-align:left;">每秒发射的粒子数</td></tr><tr><td style="text-align:left;">RateOverDistance</td><td style="text-align:left;">每个移动单位距离发射的粒子数</td></tr><tr><td style="text-align:left;">Bursts</td><td style="text-align:left;">设定在指定时间发射指定数量粒子的 Burst 数量。可通过以下几个属性调整：<br><strong>Time</strong>：粒子播放多长时候后开始发射 Burst<br><strong>RepeatCount</strong>：Burst 触发次数<br><strong>RepeatInterval</strong>：每次触发的时间间隔<br><strong>Count</strong>：发射的粒子数量</td></tr><tr><td style="text-align:left;">DataCulling</td><td style="text-align:left;">粒子系统资源剔除，详情请参考下文说明</td></tr><tr><td style="text-align:left;">RenderCulling</td><td style="text-align:left;">粒子剔除，详情请参考下文说明</td></tr></tbody></table><p>点击上述部分属性输入框右侧的 <img src="'+t+'" alt="menu button"> 按钮，即可开启粒子曲线/渐变色编辑器，对粒子属性进行编辑，详情请参考 <a href="./editor/">粒子属性编辑</a>。</p><p><img src="'+n+'" alt="set-pro"></p><p>粒子系统组件接口请参考 <a href="./__APIDOC__/zh/class/ParticleSystem.html">ParticleSystem API</a>。</p><h2 id="粒子系统资源剔除" tabindex="-1">粒子系统资源剔除 <a class="header-anchor" href="#粒子系统资源剔除" aria-label="Permalink to &quot;粒子系统资源剔除&quot;">​</a></h2><p><strong>DataCulling</strong> 选项用于剔除粒子系统中无用模块的资源数据。</p><p>粒子系统中各个模块都是作为独立对象存在，每个模块都会存储一些模块相关的数据，因此对于未勾选使用的模块，其记录的数据都是无用数据。当开发者不需要在运行时动态开启这些未使用的模块，可以勾选 <strong>DataCulling</strong> 选项，对这些无用数据进行剔除，从而减小资源占用。</p><blockquote><p><strong>注意</strong>：v3.4 之前该项是 <strong>EnableCulling</strong>，在 v3.4 为了与下方的 <strong>RenderCulling</strong> 区分，我们将其改名为 <strong>DataCulling</strong>。本次调整做了兼容性处理，对用户没有丝毫影响，无须担心。</p></blockquote><h2 id="粒子剔除" tabindex="-1">粒子剔除 <a class="header-anchor" href="#粒子剔除" aria-label="Permalink to &quot;粒子剔除&quot;">​</a></h2><p>粒子系统从 v3.4 开始新增了 <strong>RenderCulling</strong> 选项，用于开启粒子剔除功能。</p><p>开启该项粒子发射器将会自动计算出一个包围盒，运行时便会根据包围盒是否在摄像机的可见范围内来剔除粒子发射器，若不在则剔除。剔除运算每一帧都会进行，适合一些耗时的特效，如果粒子个数少不建议开启该项。</p><p>包围盒的大小可以通过下图中的 <strong>AabbHalf</strong> 进行调整，调整完成后，点击 <strong>Regenerate bounding box</strong> 按钮即可重新计算包围盒。</p><p><img src="'+d+'" alt="render culling"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;">CullingMode</td><td style="text-align:left;">粒子发射器被剔除之后的行为，可设置的选项包括 <strong>Pause</strong>、<strong>Pause and Catchup</strong>、<strong>Always Simulate</strong>。<br><strong>Pause</strong>：若粒子发射器包围盒不在摄像机的可见范围内，粒子暂停模拟。若恢复可见，则粒子会接着上次暂停的时间继续模拟；<br><strong>Pause and Catchup</strong>：若粒子发射器包围盒不在摄像机的可见范围内，粒子暂停模拟。若恢复可见，则粒子会以当前的时间开始模拟；<br><strong>Always Simulate</strong>：无论粒子发射器包围盒是否在摄像机的可见范围内，粒子都会一直模拟，只是不在摄像机的可见范围内时不进行渲染。</td></tr><tr><td style="text-align:left;">AabbHalfX</td><td style="text-align:left;">设置粒子发射器包围盒半宽</td></tr><tr><td style="text-align:left;">AabbHalfY</td><td style="text-align:left;">设置粒子发射器包围盒半高</td></tr><tr><td style="text-align:left;">AabbHalfZ</td><td style="text-align:left;">设置粒子发射器包围盒半长</td></tr><tr><td style="text-align:left;">Show Bounds</td><td style="text-align:left;">在 <strong>场景编辑器</strong> 中显示粒子发射器包围盒</td></tr><tr><td style="text-align:left;">Regenerate bounding box</td><td style="text-align:left;">包围盒大小调整完成后，点击该按钮重新计算包围盒</td></tr></tbody></table>',17),g=[i];function f(y,c,x,p,m,u){return a(),l("div",null,g)}const S=e(o,[["render",f]]);export{_ as __pageData,S as default};
