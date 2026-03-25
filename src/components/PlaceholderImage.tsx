import Image from "next/image";

interface PlaceholderImageProps {
  label: string;
  aspectRatio?: string;
  className?: string;
  src?: string;
  alt?: string;
}

export default function PlaceholderImage({
  label,
  aspectRatio = "16/9",
  className = "",
  src,
  alt,
}: PlaceholderImageProps) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-sm ${className}`}
        style={{ aspectRatio }}
      >
        <Image
          src={src}
          alt={alt || label}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`placeholder-image rounded-sm ${className}`}
      style={{ aspectRatio }}
    >
      <span className="text-center px-4">{label}</span>
    </div>
  );
}
