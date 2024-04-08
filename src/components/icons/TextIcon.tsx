interface IconProps {
  color?: string;
  size?: string;
}

const TextIcon = ({ color = "#CBCBCB", size = "24" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_123_1102)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 12C21.2652 12 21.5195 12.1054 21.7071 12.2929C21.8946 12.4804 22 12.7348 22 13V19C21.9999 19.2285 21.9215 19.4502 21.7779 19.6279C21.6343 19.8057 21.4341 19.929 21.2107 19.9771C20.9873 20.0253 20.7541 19.9955 20.55 19.8927C20.3459 19.7898 20.1832 19.6202 20.089 19.412C19.4826 19.783 18.7884 19.9857 18.0778 19.9993C17.3671 20.0129 16.6657 19.8368 16.0456 19.4893C15.4256 19.1418 14.9093 18.6353 14.55 18.022C14.1907 17.4087 14.0013 16.7108 14.0013 16C14.0013 15.2892 14.1907 14.5913 14.55 13.978C14.9093 13.3647 15.4256 12.8582 16.0456 12.5107C16.6657 12.1632 17.3671 11.9871 18.0778 12.0007C18.7884 12.0143 19.4826 12.217 20.089 12.588C20.1682 12.4128 20.2963 12.2641 20.4578 12.1598C20.6194 12.0555 20.8076 12 21 12ZM7.99995 4C8.73195 4 9.38095 4.473 9.60495 5.17L13.952 18.694C14.0307 18.9458 14.0068 19.2186 13.8854 19.4529C13.7639 19.6871 13.5548 19.8639 13.3036 19.9447C13.0524 20.0254 12.7794 20.0036 12.5442 19.884C12.309 19.7643 12.1306 19.5566 12.048 19.306L10.6639 15H5.33595L3.95195 19.306C3.86926 19.5566 3.69088 19.7643 3.45568 19.884C3.22048 20.0036 2.94753 20.0254 2.69631 19.9447C2.4451 19.8639 2.23598 19.6871 2.11453 19.4529C1.99308 19.2186 1.96915 18.9458 2.04795 18.694L6.39495 5.17C6.50419 4.8302 6.71845 4.53383 7.00688 4.32357C7.29531 4.11332 7.64302 4.00002 7.99995 4ZM18 14C17.4695 14 16.9608 14.2107 16.5857 14.5858C16.2107 14.9609 16 15.4696 16 16C16 16.5304 16.2107 17.0391 16.5857 17.4142C16.9608 17.7893 17.4695 18 18 18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7892 17.0391 20 16.5304 20 16C20 15.4696 19.7892 14.9609 19.4142 14.5858C19.0391 14.2107 18.5304 14 18 14ZM7.99995 6.712L5.97895 13H10.021L7.99995 6.712Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_123_1102">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TextIcon;
