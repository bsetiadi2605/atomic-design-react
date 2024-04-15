import { cn } from "../../../utils/cn";

interface IBaseInput extends React.InputHTMLAttributes<HTMLInputElement>{
    block?: boolean;
}

const BaseInput = (value : IBaseInput) => {

    const { 
        block = false,
        className,
        ...proops
    } = value;

    return (
        <input type="search" id="default-search" 
            className={cn(
                "block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500",
                className
            )}
            {...proops}
            />
    );
}

export default BaseInput;