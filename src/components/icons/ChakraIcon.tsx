const ChakraIcon = ({
  size = 18, // or any default size of your choice
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    viewBox="0 0 582 582"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M291 0C451.715 0 582 130.285 582 291C582 451.715 451.715 582 291 582C130.285 582 0 451.715 0 291C0 130.285 130.285 0 291 0ZM355.881 106.426L157.521 303.421C154.653 306.27 156.67 311.164 160.713 311.164H295.706C299.404 311.164 301.543 315.357 299.373 318.351L193.536 464.356C190.317 468.796 196.284 474.067 200.293 470.326L423.872 261.661C426.877 258.857 424.892 253.821 420.782 253.821H293.196C289.758 253.821 287.573 250.141 289.22 247.123L363.049 111.809C365.55 107.225 359.587 102.746 355.881 106.426Z"
      fill="currentColor"
    />
  </svg>
);

export default ChakraIcon;
