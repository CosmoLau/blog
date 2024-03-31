import{_ as a,v as e,b as l,R as r}from"./chunks/framework.5ffcbaff.js";const h="/docs/cocos/assets/effect-show.a46dbe34.jpg",g=JSON.parse('{"title":"着色器（Cocos Shader）","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/shader/index.md","filePath":"zh/manual/shader/index.md"}'),i={name:"zh/manual/shader/index.md"},t=r('<h1 id="着色器-cocos-shader" tabindex="-1">着色器（Cocos Shader） <a class="header-anchor" href="#着色器-cocos-shader" aria-label="Permalink to &quot;着色器（Cocos Shader）&quot;">​</a></h1><p><img src="'+h+'" alt="effect-show"></p><p>在现代显卡中，若要正确地绘制物体，需要书写基于顶点（Vertex）和片元（Fragment）的代码片段，这些代码片段称为 Shader。在基于 OpenGL 系列驱动的硬件设备上，Shader 支持一种名为 GLSL（OpenGL Shading Language）的着色器语言。</p><p>为了适配工业化制作流，提升着色器片段的易用性，Cocos Creator 基于 GLSL 封装了一套着色器 — <a href="./effect-syntax.html">Cocos Shader</a>。</p><p>本章主要介绍 Cocos Shader 的工作方式和使用方式。</p><h2 id="内容" tabindex="-1">内容 <a class="header-anchor" href="#内容" aria-label="Permalink to &quot;内容&quot;">​</a></h2><p>本章节主要包含以下内容：</p><ul><li><a href="./effect-inspector.html">创建与使用</a></li><li><a href="./effect-builtin.html">内置着色器</a><ul><li><a href="./effect-builtin-pbr.html">基于物理的光照模型 PBR</a></li><li><a href="./effect-builtin-toon.html">卡通渲染</a></li><li><a href="./effect-builtin-unlit.html">无光照</a></li></ul></li><li><a href="./effect-syntax.html">着色器语法</a><ul><li><a href="./pass-parameter-list.html">Pass 可选配置参数</a></li><li><a href="./yaml-101.html">YAML 101 语法简介</a></li><li><a href="./glsl.html">GLSL 语法简介</a></li><li><a href="./macros.html">预处理宏定义</a></li><li><a href="./effect-chunk-index.html">着色器片段（Chunk）</a></li></ul></li><li><a href="./uniform.html">内置全局 Uniform</a></li><li><a href="./common-functions.html">公共函数库</a></li><li><a href="./forward-and-deferred.html">前向渲染与延迟渲染 Shader 执行流程</a></li><li><a href="./surface-shader.html">表面着色器 - Surface Shader</a><ul><li><a href="./surface-shader/builtin-surface-shader.html">内置 Surface Shader 导读</a></li><li><a href="./surface-shader/surface-shader-structure.html">Surface Shader 基本结构</a></li><li><a href="./surface-shader/shader-code-flow.html">Surface Shader 执行流程</a></li><li><a href="./surface-shader/includes.html">include 机制</a></li><li><a href="./surface-shader/macro-remapping.html">宏定义与重映射</a></li><li><a href="./surface-shader/function-replace.html">使用宏定义实现函数替换</a></li><li><a href="./surface-shader/surface-function.html">可替换的内置函数</a></li><li><a href="./surface-shader/render-usage.html">渲染用途</a></li><li><a href="./surface-shader/lighting-mode.html">光照模型</a></li><li><a href="./surface-shader/surface-data-struct.html">表面材质数据结构</a></li><li><a href="./surface-shader/shader-stage.html">着色器类别</a></li><li><a href="./surface-shader/shader-assembly.html">组装器</a></li><li><a href="./surface-shader/vs-input.html">VS 输入</a></li><li><a href="./surface-shader/fs-input.html">FS 输入</a></li><li><a href="./surface-shader/customize-surface-shader.html">自定义 Surface Shader</a></li><li><a href="./surface-shader/rendering-debug-view.html">渲染调试功能</a></li></ul></li><li><a href="./legacy-shader/legacy-shader.html">传统着色器 - Legacy Shader</a><ul><li><a href="./legacy-shader/legacy-shader-builtins.html">内置 Legacy Shader 导读</a></li><li><a href="./legacy-shader/legacy-shader-func-struct.html">Legacy Shader 主要函数与结构体</a></li></ul></li><li><a href="./write-effect-overview.html">自定义着色器</a><ul><li><a href="./write-effect-2d-sprite-gradient.html">2D 精灵着色器：Gradient</a></li><li><a href="./write-effect-3d-rim-light.html">3D 着色器：RimLight</a></li></ul></li><li><a href="./instanced-attributes.html">自定义几何体实例化属性</a></li><li><a href="./ubo-layout.html">UBO 内存布局策略</a></li><li><a href="./webgl-100-fallback.html">WebGL 1.0 向下兼容支持</a></li><li><a href="./vscode-plugin.html">VSCode 着色器插件</a></li></ul>',8),s=[t];function f(c,d,u,n,m,o){return e(),l("div",null,s)}const S=a(i,[["render",f]]);export{g as __pageData,S as default};
