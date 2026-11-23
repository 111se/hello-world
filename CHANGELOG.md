# 变更记录

本项目的所有重要变更都会记录在此文件中。
格式参考 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [1.1.0] - 2026-11-23

### 新增

- 欢迎页面重构：卡片式布局、渐变背景、进出场动画、移动端适配
- 页面深色模式自适应（`prefers-color-scheme`）
- 问候语切换按钮与实时时钟
- 多语言 Hello World 脚本：`scripts/hello.py`、`scripts/hello.js`，支持 `--name` / `--lang`
- 开源配套文档：`CONTRIBUTING.md`、`CHANGELOG.md`、`LICENSE`（MIT）、`.gitignore`

### 变更

- 样式与脚本从页面中拆分到 `assets/` 目录
- README 重写为完整项目文档，补充目录结构、快速开始与参数说明

## [1.0.0] - 2025-01-01

### 新增

- 项目初始化，包含 README 与静态欢迎页面
