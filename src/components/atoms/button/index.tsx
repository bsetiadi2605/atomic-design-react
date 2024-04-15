import { cn } from "../../../utils/cn";

interface IBaseButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant? : 'primary' | 'secondary';
    isLoading? : boolean;
    block?: boolean;
}

const BaseButton = (value : IBaseButton) => {

    const { 
        variant = "primary", 
        isLoading = false,
        block = false,
        children,
        disabled = false,
        className,
        ...proops
    } = value;

    return (
        <button
            className={cn(
                "h-11 px-5 py-2 rounded-lg border-2 border-red-700 text-sm",
                block && "w-full",
                variant === 'primary' && "bg-red-600 text-white",
                variant === 'secondary' && "bg-white text-red-700",
                (disabled || isLoading) && "border-zinc-300 bg-zinc-200 text-gray-600",
                className
            )}
            disabled={isLoading || disabled}
            {...proops}
        >
            {isLoading ? <div className="flex">
                <div
                className="inline-block h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status" />
                Loading ...
            </div> : children}
        </button>
    );
}

export default BaseButton;