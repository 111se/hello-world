# hello-world

一个面向初学者的 GitHub 入门示例项目。从最小的静态欢迎页面出发，逐步加入样式、脚本、文档与协作规范，演示一个真实仓库应有的完整形态。

## 特性

- 响应式静态欢迎页面，支持浅色 / 深色模式自适应
- 结构与样式分离（`assets/style.css`、`assets/app.js`）
- 多语言 Hello World 命令行示例（Python 3 / Node.js）
- 完整的开源协作配套：`LICENSE`、`CONTRIBUTING.md`、`CHANGELOG.md`、`.gitignore`

## 目录结构

```
hello-world/
├── index.html          # 欢迎页面入口
├── assets/
│   ├── style.css       # 页面样式
│   └── app.js          # 页面交互
├── scripts/
│   ├── hello.py        # Python 版问候脚本
│   └── hello.js        # Node.js 版问候脚本
├── README.md
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
└── .gitignore
```

## 快速开始

### 1. 克隆仓库

```bash
git clone git@github.com:111se/hello-world.git
cd hello-world
```

### 2. 查看页面

直接用浏览器打开 `index.html`，或启动本地静态服务器：

```bash
python -m http.server 8000
# 然后访问 http://localhost:8000
```

### 3. 运行脚本

```bash
python scripts/hello.py --name 你的名字
python scripts/hello.py --name Alice --lang en
node scripts/hello.js 你的名字
```

示例输出：

```
$ python scripts/hello.py --name Marvis
你好，Marvis！欢迎来到 hello-world。

$ node scripts/hello.js Alice
Hello, Alice! Welcome to hello-world.
```

## 脚本参数

| 参数 | 说明 | 默认值 |
| --- | --- | --- |
| `--name` | 要问候的对象 | `World` |
| `--lang` | 语言，可选 `zh` / `en` / `ja` | `zh` |

## 技术栈

| 部分 | 技术 |
| --- | --- |
| 页面 | 原生 HTML5 + CSS3 + JavaScript（无构建依赖） |
| 脚本 | Python 3.8+ / Node.js 14+ |

## 参与贡献

欢迎提交 Issue 与 Pull Request，提交前请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 变更记录

见 [CHANGELOG.md](CHANGELOG.md)。

## 许可证

本项目基于 [MIT License](LICENSE) 开源，可自由使用、修改与分发。
