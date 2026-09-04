import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <span className="logo-lockup inline-flex">
        <Image
          src="/brand/immunovus-mark.png"
          alt=""
          width={36}
          height={32}
          className="h-8 w-auto"
          priority
        />
      </span>
    );
  }

  return (
    <span className="logo-lockup inline-flex">
      <Image
        src="/brand/immunovus-logo.png"
          alt="Immunovus"
        width={170}
        height={36}
        className="h-[30px] w-auto sm:h-[34px]"
        priority
      />
    </span>
  );
}
