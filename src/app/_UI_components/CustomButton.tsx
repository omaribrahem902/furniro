interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  rounded?: "rounded-md" | "rounded-lg" | "rounded-xl";
}

const CustomButton = ({ variant = "primary", size = "md", rounded = "rounded-md" ,className, ...props }: ButtonProps) => {
  const base = "cursor-pointer font-semibold w-fit text-[16px] transition-all duration-200 h-fit";
  const variants = {
    primary: "bg-[#B88E2F] text-white hover:bg-[#a27d23]",
    secondary: "bg-white text-[#B88E2F] border border-[#B88E2F] hover:bg-[#f3e9d0]",
    ghost: "bg-transparent text-[#B88E2F] hover:bg-[#f5f5f5]",
  };
  const sizes = {
    sm: "px-[24px] py-[8px]",
    md: "px-[36px] py-[12px]",
    lg: "px-[78px] py-[12px]",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${rounded} ${className ?? ""}`}
      {...props}
    />
  );
};

export default CustomButton;
