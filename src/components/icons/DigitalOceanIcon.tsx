const DigitalOceanIcon = ({
  size = 18, // or any default size of your choice
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    viewBox="0 0 512 512"
  >
    {/* <rect width="512" height="512" rx="15%" fill="#ffffff" /> */}
    <path
      fill="#0080ff"
      d="M78 373v-47h47v104h57V300h74v147A191 191 0 1065 256h74a117 117 0 11117 117"
    />
  </svg>
);

export default DigitalOceanIcon;
