const NodeIcon = ({
  size = 18, // or any default size of your choice
  className = "",
}) => (
  <svg
    viewBox="0 0 32 32"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <path d="M15.245 0.203l-12.49 7.24c-0.469 0.271-0.755 0.771-0.75 1.313v14.484c0 0.542 0.286 1.042 0.75 1.307l12.495 7.25c0.464 0.271 1.036 0.271 1.505 0l12.49-7.245c0.464-0.271 0.75-0.771 0.75-1.307v-14.49c0-0.542-0.286-1.042-0.755-1.313l-12.484-7.24c-0.464-0.271-1.042-0.271-1.505 0z" />
  </svg>
);

export default NodeIcon;
