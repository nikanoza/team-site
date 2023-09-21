const Hamburger: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="17"
      onClick={onClick}
    >
      <g fill="#FFF" fillRule="evenodd">
        <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
      </g>
    </svg>
  );
};

export default Hamburger;
