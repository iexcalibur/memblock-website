type LineIconProps = { path: string }

export default function LineIcon({ path }: LineIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="line-icon"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  )
}
