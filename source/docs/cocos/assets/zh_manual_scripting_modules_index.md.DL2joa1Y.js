import{_ as t,c as e,o as a,a5 as o}from"./chunks/framework.CqnjdYks.js";const g=JSON.parse('{"title":"模块规范与示例","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/scripting/modules/index.md","filePath":"zh/manual/scripting/modules/index.md"}'),r={name:"zh/manual/scripting/modules/index.md"},n=o('<h1 id="模块规范与示例" tabindex="-1">模块规范与示例 <a class="header-anchor" href="#模块规范与示例" aria-label="Permalink to &quot;模块规范与示例&quot;">​</a></h1><p>所有的代码文件可以大致分为 <a href="./../external-scripts.html">插件脚本</a> 和 <strong>模块</strong> 两种，该部分内容主要介绍模块相关。</p><p><strong>模块</strong> 是 TypeScript/JavaScript 代码的一种组织方式，按照模块组织的代码一般又被非正式地称为 <strong>脚本</strong>/<strong>项目脚本</strong>。在 Cocos Creator 中，除 <strong>插件脚本</strong> 外所有代码都以模块的形式组织，根据来源的不同，大致分为：</p><ul><li><p>项目中创建的代码，包括 <strong>组件脚本</strong> 和 <strong>项目类（非组件）脚本</strong>；</p></li><li><p>引擎提供的功能，详情请参考 <a href="./engine.html">引擎模块</a>；</p></li><li><p>第三方模块，例如 npm 模块。详情请参考 <a href="./example.html">外部模块使用案例</a>。</p></li></ul><p>Cocos Creator 原生支持并推荐使用 ECMAScript 模块格式（简称 ESM 模块格式）。为了支持对外部模块的使用，Cocos Creator 也在某种限度上支持了 CommonJS 模块格式。关于 Creator 中模块的格式及使用，详情请参考 <a href="./spec.html">模块规范</a>。</p><p>从 Cocos Creator 3.3 开始，支持导入映射（实验性），详情请参考 <a href="./import-map.html">导入映射</a>。</p><h2 id="模块加载顺序" tabindex="-1">模块加载顺序 <a class="header-anchor" href="#模块加载顺序" aria-label="Permalink to &quot;模块加载顺序&quot;">​</a></h2><p>模块加载顺序如下：</p><ol><li><p>首次导入 Cocos Creator 3.x 的 <a href="./engine.html">引擎模块</a> <code>&quot;cc&quot;</code>。</p></li><li><p>插件脚本：所有插件脚本将按照指定的插件脚本依赖关系顺序执行，不存在依赖关系的插件脚本之间是无序的。详情可参考 <a href="./../external-scripts.html">插件脚本</a>。</p></li><li><p>普通脚本：所有普通脚本将被并发导入。导入时将严格遵循由 <code>import</code> 确定的引用关系和执行顺序。</p></li></ol>',9),s=[n];function i(l,p,c,h,m,d){return a(),e("div",null,s)}const u=t(r,[["render",i]]);export{g as __pageData,u as default};
