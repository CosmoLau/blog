import{_ as a,c as e,o as i,a4 as o}from"./chunks/framework.uQk9_EO2.js";const u=JSON.parse('{"title":"v3.3 动画剪辑数据升级指南","description":"","frontmatter":{},"headers":[],"relativePath":"zh/animation/animation-clip-migration-3.3.x.md","filePath":"zh/animation/animation-clip-migration-3.3.x.md","lastUpdated":1712305443000}'),t={name:"zh/animation/animation-clip-migration-3.3.x.md"},l=o('<h1 id="v3-3-动画剪辑数据升级指南" tabindex="-1">v3.3 动画剪辑数据升级指南 <a class="header-anchor" href="#v3-3-动画剪辑数据升级指南" aria-label="Permalink to &quot;v3.3 动画剪辑数据升级指南&quot;">​</a></h1><p>在 v3.3 中，Creator 大幅度重构了动画剪辑类，摒弃了之前难以操纵、难以理解的接口，引入了轨道、通道等概念，使动画分量编辑变得更容易。更主要的是动画剪辑统一与其他引擎模块使用公共的曲线对象，而非自立门户定义自己的曲线类型。</p><h2 id="资源升级" tabindex="-1">资源升级 <a class="header-anchor" href="#资源升级" aria-label="Permalink to &quot;资源升级&quot;">​</a></h2><p>v3.3 之前的动画剪辑资源使用 v3.3 及后续版本打开后会自动升级至新的数据类型，动画效果不变。</p><p>但有以下几种边缘情况需要注意：</p><ul><li><p>渐变方式</p><p>旧版本的动画剪辑数据中若使用了非线性且非常量的渐变方式时，运行时仍会生效，但在 <strong>动画编辑器</strong> 中无法再编辑，需要手动在曲线编辑器中重新编辑。</p></li><li><p>动画曲线类型</p><p>旧版本的动画曲线都将被转换为相对应的动画属性轨道，包括以下几种曲线类型：</p><ul><li><code>number</code></li><li><code>Vec2</code>、<code>Vec3</code>、<code>Vec4</code></li><li><code>Quat</code></li><li><code>Color</code></li><li><code>Size</code></li></ul><p>其余类型的曲线将被转换为对象轨道。详情请参考 <a href="./use-animation-curve">动画属性轨道</a>。</p></li><li><p>通过模型文件导入的动画数据将不能再通过代码访问</p></li></ul><h2 id="api-更改" tabindex="-1">API 更改 <a class="header-anchor" href="#api-更改" aria-label="Permalink to &quot;API 更改&quot;">​</a></h2><p>旧版动画剪辑对象的以下字段被废弃：</p><ul><li><p><code>times</code></p></li><li><p><code>curves</code></p></li><li><p><code>commonTargets</code></p></li></ul><p>考虑到兼容旧版的使用，我们保留了这些 API 的效果。程序化地设置这些字段后，在 <strong>动画运行之前</strong> 都会被正确地转换为新格式。</p>',10),c=[l];function n(r,p,d,s,_,m){return i(),e("div",null,c)}const f=a(t,[["render",n]]);export{u as __pageData,f as default};
