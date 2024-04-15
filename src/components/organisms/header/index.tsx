import BaseButton from "../../atoms/button";
import MainLogo from "../../molecules/mainLogo";
import MainMenu, { MenuItem } from "../../molecules/mainMenu";


const Header = () => {

    const menuItems : MenuItem[] = [
        {
            id: "menu1",
            name: "Atom",
            urlPath: "/atom"
        },
        {
            id: "menu2",
            name: "Molecule",
            urlPath: "/molecule"
        },
        {
            id: "menu3",
            name: "Organism",
            urlPath: "/organism"
        },
        {
            id: "menu4",
            name: "Template",
            urlPath: "/template"
        },
        {
            id: "menu5",
            name: "Page",
            urlPath: "/page"
        },
    ]

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <MainLogo title="Bagus Setiadi" />
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Cari data ..." required />
                    <BaseButton variant="primary">Cari</BaseButton>
                </div>
                <MainMenu listOfMenu={menuItems}></MainMenu>
            </div>
        </nav>
    );
}

export default Header;