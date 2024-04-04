import{_ as t,c as e,o as a,a5 as r}from"./chunks/framework.CqnjdYks.js";const f=JSON.parse('{"title":"UICoordinateTracker 组件参考","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/ui-system/components/editor/ui-coordinate-tracker.md","filePath":"zh/manual/ui-system/components/editor/ui-coordinate-tracker.md"}'),o={name:"zh/manual/ui-system/components/editor/ui-coordinate-tracker.md"},i=r('<h1 id="uicoordinatetracker-组件参考" tabindex="-1">UICoordinateTracker 组件参考 <a class="header-anchor" href="#uicoordinatetracker-组件参考" aria-label="Permalink to &quot;UICoordinateTracker 组件参考&quot;">​</a></h1><p>UI 坐标跟踪映射组件是在 UI 上执行坐标转换以及模拟透视相机下 3D 物体近大远小效果。通过事件的方式将转换后的坐标以及物体在视口下的占比返回。适用于 3D 人物血条以及姓名条之类功能。</p><h2 id="uicoordinatetracker-属性" tabindex="-1">UICoordinateTracker 属性 <a class="header-anchor" href="#uicoordinatetracker-属性" aria-label="Permalink to &quot;UICoordinateTracker 属性&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;">Target</td><td style="text-align:left;">目标对象。需要转换到哪一个 UI 节点下。</td></tr><tr><td style="text-align:left;">Camera</td><td style="text-align:left;">照射相机。</td></tr><tr><td style="text-align:left;">UseScale</td><td style="text-align:left;">是否启用缩放。在透视相机下，根据 3D 节点坐标与相机的距离，调整映射后物体的缩放比例，实现近大远小效果。需要结合 distance 使用。</td></tr><tr><td style="text-align:left;">Distance</td><td style="text-align:left;">距相机多少距离为正常显示计算大小。根据模型在相机下的照射效果调整最佳位置，以该位置为分界线计算在视口占比。</td></tr><tr><td style="text-align:left;">SyncEvents</td><td style="text-align:left;">映射数据事件。回调的第一个参数是映射后的本地坐标，第二个是距相机距离比。</td></tr></tbody></table><p>具体的使用方法可参考范例 <strong>UI 展示 Demo</strong>（<a href="https://github.com/cocos/cocos-example-ui/" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://gitee.com/mirrors_cocos-creator/demo-ui/" target="_blank" rel="noreferrer">Gitee</a>）中的 rocker 场景。</p>',5),n=[i];function l(d,c,s,h,_,m){return a(),e("div",null,n)}const p=t(o,[["render",l]]);export{f as __pageData,p as default};
