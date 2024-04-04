import{_ as a,c as r,o as e,a5 as c}from"./chunks/framework.CqnjdYks.js";const t="/docs/cocos/assets/ar-camera-node.C4qLjBYY.png",o="/docs/cocos/assets/ar-camera-comp.CdWBjI9u.png",R=JSON.parse('{"title":"AR 相机","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/xr/architecture/ar-camera.md","filePath":"zh/manual/xr/architecture/ar-camera.md"}'),s={name:"zh/manual/xr/architecture/ar-camera.md"},m=c('<h1 id="ar-相机" tabindex="-1">AR 相机 <a class="header-anchor" href="#ar-相机" aria-label="Permalink to &quot;AR 相机&quot;">​</a></h1><p>和头戴显示器一样，场景中为了能够抽象表式移动端设备带有 AR 能力的摄像机，XR 插件使用 AR Camera 组件封装一系列属性来映射物理设备的摄像头 AR 功能。</p><p><img src="'+t+'" alt="ar-camera-node"></p><p>AR Camera 对象包含三种必要的组件：cc.Camera、cc.PoseTracker和cc.ARCameraMgr。</p><img src="'+o+'" alt="ar-camera-comp" style="zoom:50%;"><p>cc.Camera 是 Cocos Creator 引擎提供的传统的摄像机组件，为了保证良好的体验，推荐将缓冲清除标志位（Clear Flags）设置为 SOLID_COLOR，近裁剪面（Near Plane）设置为0.01。更多相机参数介绍请查阅 <a href="./../../editor/components/camera-component.html#相机组件">相机组件</a> 介绍。</p><p>cc.PoseTracker 用于将物理设备的位姿信息同步至 AR Camera，保证摄像机能够正确渲染虚拟内容并和视频流叠加，与 XR HMD 不同，适配移动端的手持设备时 Tracking Type 要选择 VIEW_POSE_ACTIVE_HANDHELD。</p><p>cc.ARCameraMgr 是用于管理AR摄像机功能的组件，详细属性介绍请参考 <strong>设备映射组件 -&gt; ARCameraMgr</strong>。</p>',8),n=[m];function _(p,i,l,d,h,C){return e(),r("div",null,n)}const u=a(s,[["render",_]]);export{R as __pageData,u as default};
