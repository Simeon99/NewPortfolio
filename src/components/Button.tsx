import React from 'react'

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    className?: string;
    disabled?: boolean;
}


const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    size = "medium",
    className = "",
    disabled = false,
    ...props
}) => {
    const baseStyles =
        "inline-flex w-full h-full items-center justify-center font-medium focus:outline-none focus:ring transition";

    const variants: Record<string, string> = {
        primary: "bg-green text-black hover:bg-green-hover focus:ring-blue-300",
        secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300"
    };

    // Size styles
    const sizes: Record<string, string> = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-[25px]",
    };

    // Disabled styles
    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

    const combinedClasses = [
        baseStyles,
        variants[variant] || "",
        sizes[size] || "",
        disabledStyles,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (


        <button
            type={type}
            className={combinedClasses}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button