import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        性行为同意协议系统
      </h1>

      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg mb-4">
          欢迎使用性行为同意协议系统。本系统旨在帮助用户创建合法有效的性行为同意协议，确保各方权益得到保障。
        </p>
        <p className="text-md mb-8">
          通过本系统，您可以创建、查看和管理性行为同意协议，所有数据均存储在本地，保障您的隐私安全。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
        <Link href="/create" className="btn btn-primary btn-lg w-full">
          创建新协议
        </Link>
        <Link href="/agreements" className="btn btn-outline btn-lg w-full">
          查看我的协议
        </Link>
      </div>

      <div className="mt-12 p-6 bg-base-200 rounded-lg max-w-3xl w-full">
        <h2 className="text-xl font-semibold mb-4">关于性同意协议</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>性同意协议是双方或多方在进行性活动前达成的明确同意</li>
          <li>协议内容包括同意的范围、安全措施、隐私保护等</li>
          <li>任何一方均有权随时撤回同意</li>
          <li>协议遵循自愿、平等、真实的原则</li>
          <li>本系统生成的协议可打印出来供双方手签</li>
        </ul>
      </div>

      <div className="mt-8 text-center max-w-3xl w-full text-sm opacity-80">
        <div className="border-t pt-6 border-gray-200 dark:border-gray-700">
          <p className="mb-3">本项目开源于GitHub</p>
          <div className="flex justify-center items-center gap-3">
            <a
              href="https://github.com/123xiao/sex-agreement-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              仓库地址
            </a>
            <span>•</span>
            <a
              href="https://github.com/123xiao/sex-agreement-app/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              问题反馈
            </a>
            <span>•</span>
            <a
              href="https://github.com/123xiao/sex-agreement-app/stargazers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <img
                src="https://img.shields.io/github/stars/123xiao/sex-agreement-app?style=flat-square&color=gray"
                alt="GitHub Stars"
                height="20"
              />
            </a>
          </div>
          <div className="mt-3">
            <p className="text-xs text-gray-500 mb-2">访问统计</p>
            <img
              src="https://profile-counter.glitch.me/123xiao-sex-agreement-app/count.svg"
              alt="访问计数器"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
