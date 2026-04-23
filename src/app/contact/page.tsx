"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, Code, MessageCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以接入实际的表单提交服务，如 Formspree、Resend 等
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div>
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            联系方式
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            有学术交流、项目合作或只是想说声你好？我随时欢迎。
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-[680px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-tertiary/50 text-center">
              <Mail className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm font-medium mb-0.5">邮箱</p>
                <a
                  href="mailto:chenxianchu@njau.edu.cn"
                  className="text-sm text-secondary hover:text-accent transition-colors"
                >
                  chenxianchu@njau.edu.cn
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-tertiary/50 text-center">
              <MapPin className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm font-medium mb-0.5">位置</p>
                <p className="text-sm text-secondary">中国，南京</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-tertiary/50 text-center">
              <Code className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm font-medium mb-0.5">GitHub</p>
                <a
                  href="https://github.com/Mason049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary hover:text-accent transition-colors"
                >
                  @Mason049
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  姓名
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-tertiary border border-border/50 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="您的姓名"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  邮箱
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-tertiary border border-border/50 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                留言
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-tertiary border border-border/50 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="想对我说些什么..."
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-200 disabled:opacity-70"
            >
              {submitted ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  发送成功
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  发送消息
                </>
              )}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-secondary text-center mb-4">
              或者通过社交媒体联系我
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/Mason049"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors"
              >
                <Code className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
