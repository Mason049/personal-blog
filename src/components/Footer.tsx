export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border/50">
      <div className="max-w-[980px] mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary">
            &copy; {new Date().getFullYear()} 陈先楚. 保留所有权利.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Mason049"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-secondary hover:text-foreground transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="mailto:chenxianchu@njau.edu.cn"
              className="text-xs text-secondary hover:text-foreground transition-colors duration-200"
            >
              邮箱
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
