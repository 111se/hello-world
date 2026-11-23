#!/usr/bin/env node
/**
 * 多语言 Hello World 问候脚本。
 *
 * 用法示例：
 *   node hello.js
 *   node hello.js Marvis
 *   node hello.js Alice --lang=en
 *   node hello.js --name Alice --lang en
 */

const TEMPLATES = {
  zh: "你好，{name}！欢迎来到 hello-world。",
  en: "Hello, {name}! Welcome to hello-world.",
  ja: "こんにちは、{name}さん！hello-world へようこそ。",
};

/**
 * 按语言返回问候语，未知语言回退到英文。
 * @param {string} name 要问候的对象
 * @param {string} lang 语言代码
 * @returns {string}
 */
function greet(name = "World", lang = "zh") {
  const template = TEMPLATES[lang] || TEMPLATES.en;
  return template.replace("{name}", name);
}

/**
 * 解析命令行参数，支持 --name/-n、--lang/-l 及 --key=value 形式。
 * @param {string[]} argv 去掉前两个元素后的参数列表
 */
function parseArgs(argv) {
  let name = "World";
  let lang = "zh";

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg.startsWith("--lang=")) {
      lang = arg.slice("--lang=".length);
    } else if (arg === "--lang" || arg === "-l") {
      if (argv[i + 1] && !argv[i + 1].startsWith("-")) {
        lang = argv[i + 1];
        i += 1;
      }
    } else if (arg.startsWith("--name=")) {
      name = arg.slice("--name=".length);
    } else if (arg === "--name" || arg === "-n") {
      if (argv[i + 1] && !argv[i + 1].startsWith("-")) {
        name = argv[i + 1];
        i += 1;
      }
    } else if (!arg.startsWith("-")) {
      name = arg;
    }
  }

  return { name, lang };
}

const { name, lang } = parseArgs(process.argv.slice(2));
console.log(greet(name, lang));
