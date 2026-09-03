export function Container({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
}) {
  return (
    <Tag className={`mx-auto w-full max-w-[1180px] px-5 sm:px-6 md:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
