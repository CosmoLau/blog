import{_ as o,c as s,o as t,a5 as r}from"./chunks/framework.CqnjdYks.js";const e="/docs/cocos/assets/physics-index.CsKC-vk9.png",i="/docs/cocos/assets/physics-collision.C58fz3-C.png",n="/docs/cocos/assets/physics-collision-demo.DF9riimP.png",a="/docs/cocos/assets/rigidbody-group.7M7MgEQg.jpg",y=JSON.parse('{"title":"物理配置","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/editor/project/physics-configs.md","filePath":"zh/manual/editor/project/physics-configs.md"}'),c={name:"zh/manual/editor/project/physics-configs.md"},l=r('<h1 id="物理配置" tabindex="-1">物理配置 <a class="header-anchor" href="#物理配置" aria-label="Permalink to &quot;物理配置&quot;">​</a></h1><p>物理配置用于配置各种常用属性，目前 <strong>2D</strong>/<strong>3D</strong> 共用一个配置。</p><h2 id="属性说明" tabindex="-1">属性说明 <a class="header-anchor" href="#属性说明" aria-label="Permalink to &quot;属性说明&quot;">​</a></h2><p><img src="'+e+'" alt="Physics"></p><ul><li><code>gravity</code> 重力矢量，默认值 <strong>{ x: 0, y: -10, z: 0 }</strong></li><li><code>allowSleep</code> 是否允许系统进入休眠状态，默认值 <strong>true</strong></li><li><code>sleepThreshold</code> 进入休眠的默认速度临界值，默认值 <strong>0.1</strong>，最小值 <strong>0</strong></li><li><code>autoSimulation</code> 是否开启自动模拟, 默认值 <strong>true</strong></li><li><code>fixedTimeStep</code> 每步模拟消耗的固定时间，默认值 <strong>1/60</strong>，最小值 <strong>0</strong></li><li><code>maxSubSteps</code> 每步模拟的最大子步数，默认值 <strong>1</strong>，最小值 <strong>0</strong></li><li><code>friction</code> 摩擦系数，默认值 <strong>0.5</strong></li><li><code>rollingFriction</code> 滚动摩擦系数，默认值 <strong>0.1</strong></li><li><code>spinningFriction</code> 自旋摩擦系数，默认值 <strong>0.1</strong></li><li><code>restitution</code> 弹性系数，默认值 <strong>0.1</strong></li><li><code>collisionMatrix</code> 碰撞矩阵，仅用于初始化</li></ul><h2 id="碰撞矩阵" tabindex="-1">碰撞矩阵 <a class="header-anchor" href="#碰撞矩阵" aria-label="Permalink to &quot;碰撞矩阵&quot;">​</a></h2><p>碰撞矩阵是<a href="./../../physics/physics-group-mask.html">物理分组掩码</a>功能的进一步封装，它用于初始化物理元素的分组和掩码。</p><p>默认情况下只有一个 <strong>DEFAULT</strong> 分组，新建分组默认不与其它组碰撞。</p><p><img src="'+i+'" alt="Physics-collision"></p><h3 id="分组的概念" tabindex="-1">分组的概念 <a class="header-anchor" href="#分组的概念" aria-label="Permalink to &quot;分组的概念&quot;">​</a></h3><p>在编辑器中，碰撞矩阵分组的存储格式为 <strong>{index, name}</strong>，<strong>index</strong> 是从 <strong>0</strong> 到 <strong>31</strong> 的位数，而 <strong>name</strong> 是该组的名称，新项目工程会有一个默认分组：<strong>{index: 0, name: &#39;DEFAULT&#39;}</strong>。</p><p>点击 <strong>+</strong> 按钮可以新增分组。</p><p><strong>注：新增分组的 index 和 name 均不能为空，且不能与现有项重复</strong>。</p><p><strong>注：分组不可以删除，但可以修改分组的名称</strong>。</p><h3 id="如何配置" tabindex="-1">如何配置 <a class="header-anchor" href="#如何配置" aria-label="Permalink to &quot;如何配置&quot;">​</a></h3><p>以新增一个 <strong>water</strong> 分组为例：</p><p><img src="'+n+'" alt="Physics-collision-demo"></p><p>这张表列出了所有的分组，你可以通过勾选来决定哪两组会进行碰撞检测。</p><p><strong>如上图所示，<code>DEFAULT</code>和<code>water</code>是否会进行碰撞检测将取决于是否选中了对应的复选框</strong>。</p><p>根据上面的规则，在这张表里产生的碰撞对有：</p><ul><li>DEFAULT - water</li><li>DEFAULT - DEFAULT</li></ul><p>而不进行碰撞检测的分组对有：</p><ul><li>water - water</li></ul><h3 id="配置物理组件的分组" tabindex="-1">配置物理组件的分组 <a class="header-anchor" href="#配置物理组件的分组" aria-label="Permalink to &quot;配置物理组件的分组&quot;">​</a></h3><p>通过刚体组件上的 <strong>Group</strong> 属性来配置对应的物理元素的分组：</p><p><img src="'+a+'" alt="rigidbody-group"></p>',26),g=[l];function d(p,h,m,u,_,f){return t(),s("div",null,g)}const b=o(c,[["render",d]]);export{y as __pageData,b as default};
