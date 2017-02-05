# Weex 富文本显示

#### 介绍

1. 利用`正则表达式`解析html字符串（`<p>` `<img>`等）
2. 利用`模板`进行列表渲染（`v-for` `v-if`）

#### 运行步骤

1. 编译项目文件

	安装依赖：

	```
	npm install
	```

2. 编译代码：

	```
	// 生成 Web 平台和 native 平台可用的 bundle 文件
	// 位置：
	// dist/index.web.js
	// dist/index.web.js
	npm run build

	// 监听模式的 npm run build
	npm run dev
	```

3. 拷贝 bundle 文件：

	```
	# 将生成的 bundle 文件拷贝到 Android 项目的资源目录
	npm run copy:android

	# 将生成的 bundle 文件拷贝到 iOS 项目的资源目录
	npm run copy:ios

	# run both copy:andriod and copy:ios
	npm run copy
	```

4. 启动 Web 服务

	```
	npm run serve
	```

	启动服务后会监听 1337 端口，访问 http://127.0.0.1:1337/index.html 即可在浏览器中预览页面。

	 > 注： 当前 index.html 的例子中使用的是 Weex 内置的 web 渲染器渲染页面，还未使用 Vue。

5. 启动 Android 项目

	首先应该安装 [Android Studio](https://developer.android.com/studio/index.html) 和必要的 Android SDK，配置好基本的开发环境。

	使用 Android Studio 打开 `android` 目录中的项目，等待自动安装完依赖以后，即可启动模拟器或者真机预览页面。