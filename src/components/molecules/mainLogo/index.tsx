interface IMainLogo {
    title? : string,
    imagePath? : string,
    onClick? : void;
}

const MainLogo = (value : IMainLogo) => {

    const {
        title = "Flowbite",
        imagePath = "https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-b-letter-logo-design-free-vector-png-png-image_4918122.png",
        onClick = () => {
            location.href = "/"
        }
    } = value;
    return (
        <div onClick={onClick} className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
            <img src={imagePath} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{title}</span>
        </div>
    );
}

export default MainLogo;