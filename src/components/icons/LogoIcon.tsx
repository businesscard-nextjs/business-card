interface IconProps {
  color?: string;
  size?: string;
}

const LogoIcon = ({ color = "#CBCBCB", size = "24" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.75 3H19.25C20.216 3 21 3.784 21 4.75V19.25C21 19.7141 20.8156 20.1592 20.4874 20.4874C20.1592 20.8156 19.7141 21 19.25 21H4.75C4.28587 21 3.84075 20.8156 3.51256 20.4874C3.18437 20.1592 3 19.7141 3 19.25V4.75C3 3.784 3.784 3 4.75 3ZM19.25 4.5H4.75C4.6837 4.5 4.62011 4.52634 4.57322 4.57322C4.52634 4.62011 4.5 4.6837 4.5 4.75V19.25C4.5 19.388 4.612 19.5 4.75 19.5H4.94L14.763 9.677C14.9255 9.51448 15.1184 9.38556 15.3308 9.2976C15.5431 9.20964 15.7707 9.16437 16.0005 9.16437C16.2303 9.16437 16.4579 9.20964 16.6702 9.2976C16.8826 9.38556 17.0755 9.51448 17.238 9.677L19.5 11.939V4.75C19.5 4.6837 19.4737 4.62011 19.4268 4.57322C19.3799 4.52634 19.3163 4.5 19.25 4.5ZM19.5 14.06L16.177 10.737C16.1538 10.7137 16.1262 10.6952 16.0958 10.6826C16.0654 10.67 16.0329 10.6636 16 10.6636C15.9671 10.6636 15.9346 10.67 15.9042 10.6826C15.8738 10.6952 15.8462 10.7137 15.823 10.737L7.061 19.5H19.25C19.3163 19.5 19.3799 19.4737 19.4268 19.4268C19.4737 19.3799 19.5 19.3163 19.5 19.25V14.06ZM8.5 11C7.83696 11 7.20107 10.7366 6.73223 10.2678C6.26339 9.79893 6 9.16304 6 8.5C6 7.83696 6.26339 7.20107 6.73223 6.73223C7.20107 6.26339 7.83696 6 8.5 6C9.16304 6 9.79893 6.26339 10.2678 6.73223C10.7366 7.20107 11 7.83696 11 8.5C11 9.16304 10.7366 9.79893 10.2678 10.2678C9.79893 10.7366 9.16304 11 8.5 11ZM8.5 9.5C8.76522 9.5 9.01957 9.39464 9.20711 9.20711C9.39464 9.01957 9.5 8.76522 9.5 8.5C9.5 8.23478 9.39464 7.98043 9.20711 7.79289C9.01957 7.60536 8.76522 7.5 8.5 7.5C8.23478 7.5 7.98043 7.60536 7.79289 7.79289C7.60536 7.98043 7.5 8.23478 7.5 8.5C7.5 8.76522 7.60536 9.01957 7.79289 9.20711C7.98043 9.39464 8.23478 9.5 8.5 9.5Z"
        fill={color}
      />
    </svg>
  );
};

export default LogoIcon;
