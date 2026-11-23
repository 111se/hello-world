#!/usr/bin/env python3
"""多语言 Hello World 问候脚本。

用法示例：
    python hello.py
    python hello.py --name Marvis
    python hello.py --name Alice --lang en
"""

import argparse

TEMPLATES = {
    "zh": "你好，{name}！欢迎来到 hello-world。",
    "en": "Hello, {name}! Welcome to hello-world.",
    "ja": "こんにちは、{name}さん！hello-world へようこそ。",
}


def greet(name: str = "World", lang: str = "zh") -> str:
    """按语言返回问候语，未知语言回退到英文。"""
    template = TEMPLATES.get(lang, TEMPLATES["en"])
    return template.format(name=name)


def main() -> None:
    parser = argparse.ArgumentParser(description="打印一条多语言问候语")
    parser.add_argument("--name", default="World", help="要问候的对象，默认 World")
    parser.add_argument(
        "--lang",
        default="zh",
        choices=sorted(TEMPLATES.keys()),
        help="问候语言，默认 zh",
    )
    args = parser.parse_args()
    print(greet(args.name, args.lang))


if __name__ == "__main__":
    main()
