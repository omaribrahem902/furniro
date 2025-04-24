interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
}

const CustomButton = ({ variant = "primary", size = "md", className, ...props }: ButtonProps) => {
  const base = "cursor-pointer font-semibold w-fit text-[16px] transition-all duration-200";
  const variants = {
    primary: "bg-[#B88E2F] text-white hover:bg-[#a27d23]",
    secondary: "bg-white text-[#B88E2F] border border-[#B88E2F] hover:bg-[#f3e9d0]",
    ghost: "bg-transparent text-[#B88E2F] hover:bg-[#f5f5f5]",
  };
  const sizes = {
    md: "px-[36px] py-[12px]",
    lg: "px-[78px] py-[12px]",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className ?? ""}`}
      {...props}
    />
  );
};

export default CustomButton;
