export default function IconRightArrow({className, size}) {
  return (
    <svg
      className={className}
      width={size ? size : "16"}
      height={size ? size : "16"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M6 3.33333L10.6667 8L6 12.6667" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}