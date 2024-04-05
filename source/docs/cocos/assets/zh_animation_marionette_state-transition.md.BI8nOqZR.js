import{_ as s,a as t,b as o,c as r,d as n,e as a,f as i,g as p}from"./chunks/end.j2i5m6G_.js";import{_ as g,c as l,o as e,a4 as c}from"./chunks/framework.uQk9_EO2.js";const m="/docs/cocos/assets/transition.PnvHwrDq.png",d="/docs/cocos/assets/animation-transition.CEPGXtU9.png",_="/docs/cocos/assets/add-transition.DME9SZcg.gif",u="/docs/cocos/assets/add-more-transitions.xNXYWwEk.png",A="/docs/cocos/assets/add-transition-for-self.DBis9UHT.png",h="/docs/cocos/assets/condition-properties.AHG9xqRm.png",b="/docs/cocos/assets/change-duration.TtQ0COMK.gif",q="/docs/cocos/assets/non-loop.BSueM-tl.png",f="/docs/cocos/assets/loop.CGq0RoWx.png",v="/docs/cocos/assets/set-example.D0Ysup4v.png",x="/docs/cocos/assets/add-condition.iiQtCclm.png",C="/docs/cocos/assets/boolean-condition.Y442V2GN.png",k="/docs/cocos/assets/number-condition.4hk--Go7.png",P="/docs/cocos/assets/trigger-condition.DV4tVZD8.png",E="/docs/cocos/assets/preview-overview.B32rmzvj.png",T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAXCAIAAAAp/uBdAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAHjSURBVEiJ7ZUvqPJQGMaf+/FZTDIMMkGrOk4xLMqCuGRVF06xiGARDIbFJREsFvOCYjAKNtFmsAxlWdCysbaVlS8MDvv0buIt1+AT3z9nvz3v+fNVLBbxlvrz2wCR+pC9rvcl+xuTI4T0er1kMmnb9ng8vl6v4aymafl8HoDnedPp1DAMFgnE4j8ji/Qsm822223TNCmlrut2u91wVlEUAJRSSqllWc1mE4CqqkFkOBzatm2a5o+xEOMZx3GJROJ8PgM4nU6SJBFC2Jfm8zmrfMxWKhUAy+Xy7lcHg0E6nQZwPB4nk0k8WaRnPM8DuN1uABzHYZFHZTIZz/OCmoBAFMXD4XA3/Uaj4boupXQ0GuVyOUJIPNkTz+KbAciyXCgUVqsV4wgM2+12US2GYfT7/acrR3rmOI7v+0+xWq3WdrvdbDYsKAjC5XK5MwxAMD5d13VdD7ZpvCI9C+bI87xhGBzHsQiToii1Wm2xWISxCCGpVGq/33+7pqqqQU2n03EcJ9z4qCeelUolAIIgWJYVPmiyLEuSdIeF/3fnnTRNY0P0ff/bmrC+Yl70x/tMluV6vT6bzarVarlcZpXs6lIURRTFx8svvBqA9XodPt0vk/2u3vd1+pC9rg/Z6/qQva73JfsH9ajqRo1Na7gAAAAASUVORK5CYII=",V="/docs/cocos/assets/progress.CvaS3GEL.png",B="/docs/cocos/assets/duration.Cu_cenGo.png",M="/docs/cocos/assets/dest-start-time.4ZIWEHvA.png",D="/docs/cocos/assets/preview-view.BMQP9WLu.png",J=JSON.parse('{"title":"状态过渡","description":"","frontmatter":{},"headers":[],"relativePath":"zh/animation/marionette/state-transition.md","filePath":"zh/animation/marionette/state-transition.md","lastUpdated":1712305443000}'),I={name:"zh/animation/marionette/state-transition.md"},R=c('<h1 id="状态过渡" tabindex="-1">状态过渡 <a class="header-anchor" href="#状态过渡" aria-label="Permalink to &quot;状态过渡&quot;">​</a></h1><p><strong>过渡</strong> 代表着两个状态之间的转换，根据过渡发生源头的不同，我们可以将其分为：</p><ul><li><p><strong>普通过渡</strong>：过渡发生的源头为伪状态 <strong>入口</strong> 或者 <strong>子状态机</strong>。</p><p><img src="'+m+'" alt="transition"></p></li><li><p><strong>动画过渡</strong>：过渡发生的源头为 <strong>状态</strong> 或者伪状态 <strong>任意</strong>。与普通过渡相比，动画过渡还可以控制过渡周期使得动画进行平滑切换。</p><p><img src="'+d+'" alt="animation-transition"></p></li></ul><h2 id="创建过渡" tabindex="-1">创建过渡 <a class="header-anchor" href="#创建过渡" aria-label="Permalink to &quot;创建过渡&quot;">​</a></h2><p>在网格布局区域中右键选中作为过渡源头的状态，然后选择 <strong>添加过渡</strong>，当鼠标离开当前状态，会产生一条箭头，此时选中作为过渡目标的状态，即可在两者之间产生过渡：</p><p><img src="'+_+'" alt="add-transition"></p><p>两个状态之间允许存在多个同向/反向过渡，有几个同向/反向过渡便会在箭头上标相应的数字，配置项也都会展示在 <strong>属性查看器</strong> 中。<br> 当状态上存在多条同时满足的过渡时，将优先使用排在过渡列表上方的过渡。但 Creator 并不建议依赖这种优先级排序，最好尽可能地使用下文中介绍的 <strong>过渡条件</strong> 来过渡。</p><p><img src="'+u+'" alt="add-transition"></p><p>状态也允许过渡到自身：</p><p><img src="'+A+'" alt="add-transition"></p><h2 id="设置过渡" tabindex="-1">设置过渡 <a class="header-anchor" href="#设置过渡" aria-label="Permalink to &quot;设置过渡&quot;">​</a></h2><p>在网格布局区域选中过渡后，<strong>属性检查器</strong> 可设置过渡的相关触发条件，包括 <strong>周期</strong>、<strong>使用结束次数</strong>、<strong>结束次数</strong>、<strong>条件</strong>。</p><blockquote><p><strong>注意</strong>：<strong>普通过渡</strong> 仅能指定 <strong>条件</strong>，普通过渡更像是一个选择器。</p></blockquote><p><img src="'+h+'" alt="condition-properties"></p><ul><li><p><strong>周期</strong>：设置完成当前过渡的周期，使动画平滑切换。单位为 <strong>秒</strong> 或者 <strong>遍</strong>，默认为 0.3 秒，可点击输入框后面的单位进行切换。</p><p><img src="'+b+'" alt="change duration"></p><ul><li><p>当设置为 <strong>秒</strong>（默认）时：表示状态过渡在设定的秒数内完成</p></li><li><p>当设置为 <strong>遍</strong> 时：表示状态过渡的周期是基于过渡源头状态的播放次数。例如过渡源头状态的动画时长为 3 s，当 <strong>周期</strong> 设置为 0.9 遍时，表示过渡周期为 0.9 ✖️ 3s = 2.7s。</p></li></ul></li><li><p><strong>使用结束次数</strong>：表示是否将过渡源头状态结束播放作为过渡条件之一。若勾选，过渡的发生需要满足下方设置的 <strong>结束次数</strong> 条件。播放次数作为一种特殊的条件，当启用播放次数后，仅当播放次数条件和过渡条件都满足时，过渡才会发生。</p></li><li><p><strong>结束次数</strong>：设置过渡源头状态在开始过渡之前的动画播放总时长（总时长 = 结束次数 ✖️ 动画时长），默认为 1 次，仅在勾选 <strong>使用结束次数</strong> 时生效。需要注意的是动画若是不循环动画，会在第一次播放完成后停止，等待剩余次数播放完成后开始过渡。若需要根据次数自动循环播放动画，请事先在骨骼动画资源中设置好循环模式。例如：</p><ul><li><p>若过渡源头的动画是 <strong>不循环动画</strong>，播放时长为 3 s，<strong>结束次数</strong> 设置为 1.4，那么过渡源头的动画会在播放 3s 后，继续在最后一帧停留 1.2s（3s × 0.4），才开始过渡。</p><p><img src="'+q+'" alt="non-loop"></p></li><li><p>若过渡源头的动画是 <strong>循环动画</strong>，播放时长为 3 s，<strong>结束次数</strong> 设置为 1.4，那么过渡源头的动画会在播放 3s 后，继续循环播放动画到 1.2s（3s × 0.4），才开始过渡。</p><p><img src="'+f+'" alt="loop"></p></li></ul></li><li><p><strong>终点起始时间</strong>：指定当过渡发生时，终点状态的动画会从哪里开始播放。可以以秒为单位指定，也可以以相对单位指定。当使用相对单位时，该时间是相对于终点状态的周期的。例如，在过渡终点周期为 2 秒的情况下，若指定为 0.5，则表示终点状态的动画从 50% （即 1 秒处）开始播放。</p></li><li><p><strong>条件</strong>：设置状态之间发生过渡时需要满足的某些条件，具体内容请参考下文说明。</p></li></ul><p>在不使用其他过渡条件的情况下，若希望过渡源头状态的动画在快播放完一遍时便逐渐切换到其他状态，并且在切换完成时源头状态的动画刚好完成播放，那么我们可以通过设置 <strong>周期</strong> 和 <strong>结束次数</strong> 来实现，推荐将 <strong>周期</strong> 的单位设置为 <strong>遍</strong>，然后令 <strong>周期</strong> 和 <strong>结束次数</strong> 之和为 <strong>1</strong> 即可。</p><p>例如，过渡源头状态的动画时长为 3 秒，将 <strong>周期</strong> 设置为 0.3 遍，则 <strong>结束次数</strong> 设置为 0.7 即可；若 <strong>周期</strong> 设置为 0.3 秒相对比较麻烦，<strong>结束次数</strong> 需要将秒换算为遍：（3 - 0.3）/ 3 = 0.9 遍。</p><p><img src="'+v+'" alt="set example"></p><h3 id="过渡条件" tabindex="-1">过渡条件 <a class="header-anchor" href="#过渡条件" aria-label="Permalink to &quot;过渡条件&quot;">​</a></h3><p>有些状态之间的过渡需要满足某些条件时才能触发，这样的条件被称为 <strong>过渡条件</strong>，简称 <strong>条件</strong>。若过渡没有设置条件，则会直接触发。条件可在动画图面板的 <a href="./animation-graph-panel">变量</a> 分页进行创建。</p><p>在网格布局区域选中过渡后，即可点击 <strong>属性查看器</strong> 上 <strong>添加条件</strong> 栏后面的 <strong>+</strong> 号键，通过下拉菜单选择不同的过渡条件。</p><p><img src="'+x+'" alt="add-condition"></p><p>目前支持的过渡条件包括以下三种：</p><ul><li><p><strong>布尔条件</strong>：判断布尔类型的变量为真/假。点击右侧的齿轮图标按钮可删除当前条件。</p><p><img src="'+C+'" alt="布尔条件" title="布尔条件"></p></li><li><p><strong>数值条件</strong>：判断数值类型的变量与另一固定数值的逻辑关系，包括 <strong>等于</strong>、<strong>不等于</strong>、<strong>大于</strong>、<strong>小于</strong>、<strong>大于等于</strong>、<strong>小于等于</strong>。当等式（不等式）成立时条件满足。变量的类型与数值的类型是匹配的，若变量选择浮点型，则数值类型也是浮点型。</p><p><img src="'+k+'" alt="数值条件" title="数值条件"></p></li><li><p><strong>触发条件</strong>：当触发器变量触发时条件满足。</p><p><img src="'+P+'" alt="触发器条件" title="触发器条件"></p></li></ul><p><strong>过渡支持同时指定多个过渡条件，当且仅当所有条件都满足时过渡才会发生。</strong></p><h3 id="无条件过渡" tabindex="-1">无条件过渡 <a class="header-anchor" href="#无条件过渡" aria-label="Permalink to &quot;无条件过渡&quot;">​</a></h3><p>对于 <strong>普通过渡</strong> 来说，允许不指定任何过渡条件，例如，很多时候 <strong>入口</strong> 需要无条件地过渡到其它的状态。</p><p>但对于 <strong>动画过渡</strong> 来说，既未指定 <strong>条件</strong>，也未指定 <strong>结束次数</strong> 条件的过渡是没有意义的，Creator 将直接忽略该过渡。</p><h2 id="一种边缘情况" tabindex="-1">一种边缘情况 <a class="header-anchor" href="#一种边缘情况" aria-label="Permalink to &quot;一种边缘情况&quot;">​</a></h2><p>有些情况下会导致状态机停留在 <strong>入口</strong> 或者 <strong>出口</strong> 上，例如：</p><ul><li><p>过渡到了子状态机的 <strong>入口</strong>，但在子状态机中并没有能满足条件的过渡。</p></li><li><p>过渡到了子状态机的 <strong>出口</strong>，但在父状态机中，并没有能满足该子状态机的过渡。</p></li></ul><p>我们把这种情况称为 <strong>状态机悬停</strong>。</p><p>当发生状态机悬停时，会直接中断更新，直到后续能过渡至状态，此时的表现为动画被暂停。</p><blockquote><p><strong>注意</strong>：我们不建议依赖这种行为，并且后续可能会对这种行为做出调整。</p></blockquote><h2 id="预览" tabindex="-1">预览 <a class="header-anchor" href="#预览" aria-label="Permalink to &quot;预览&quot;">​</a></h2><p>选中任意转移后，在 <strong>属性检查器</strong> 内可以对当前转移进行预览。</p><p><img src="'+E+'" alt="preview"></p><p>预览时，用户可以通过下列按钮进行操作：</p><p><img src="'+s+'" alt="bar"></p><p>其属性与描述如下：</p><ul><li><img src="'+t+'" alt="start"> 跳转至第一帧</li><li><img src="'+o+'" alt="play"> 预览前一帧</li><li><img src="'+r+'" alt="play">/<img src="'+n+'" alt="pause"> 开始/暂停播放</li><li><img src="'+a+'" alt="stop"> 停止播放</li><li><img src="'+i+'" alt="end"> 跳转至后一帧</li><li><img src="'+p+'" alt="end"> 跳转至最后一帧</li><li><img src="'+T+'" alt="time"> 显示当前的时间</li></ul><p>也可以通过进度条进行快速预览和调整转移的时长：</p><p><img src="'+V+'" alt="progress"></p><ul><li><p>在 ① 号处点击或拖拽拉杆可快速预览转移</p></li><li><p>在 ② 号通过鼠标拖拽边缘可以调整 <strong>周期</strong></p><p><img src="'+B+'" alt="duration"></p></li><li><p>在 ③ 号处通过鼠标左键拖拽可以调整转移的 <strong>终点起始时间</strong></p><p><img src="'+M+'" alt="dst-start-time"></p></li></ul><p>点击播放后，既可在预览视图进行预览：</p><p><img src="'+D+'" alt="preview-view"></p><h2 id="多过渡" tabindex="-1">多过渡 <a class="header-anchor" href="#多过渡" aria-label="Permalink to &quot;多过渡&quot;">​</a></h2><p>自 3.8.0 开始，状态机开始支持多过渡。</p><blockquote><p>在此前版本中，相当于仅允许一支过渡的存在。</p></blockquote><blockquote><p><a href="https://docs.cocos.com/creator/3.7/manual/zh/animation/marionette/state-transition.html#%E8%BF%87%E6%B8%A1%E4%B8%AD%E6%96%AD" target="_blank" rel="noreferrer">过渡中断</a> 是在 3.6.0 加入的实验性功能。现已移除，其功能由多过渡机制代替。</p></blockquote><p><strong>多过渡</strong> 是指当状态机正在进行状态过渡时，由于条件满足，当前的目标状态又需要过渡至其它状态；此时，新的过渡加入，并与已有的过渡形成过渡队列。</p><p>在多过渡过程中，所有过渡将 <strong>同时</strong> 进行。当某支过渡完成后，该过渡将被移出队列，其前方的过渡也将因此被中断并移出队列。</p>',52),G=[R];function S(U,w,z,X,Z,F){return e(),l("div",null,G)}const O=g(I,[["render",S]]);export{J as __pageData,O as default};
