interface ILabel {
    text? : string
}

const Label = (value : ILabel) => {
    const {
        text = "2024 Bagus Setiadi. All Rights Reserved."
    } = value;
    
    return (
        <span className="text-sm text-gray-500 sm:text-center">
            {text}
        </span>
    );
}

export default Label;