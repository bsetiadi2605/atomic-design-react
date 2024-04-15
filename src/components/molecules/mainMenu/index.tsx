export type MenuItem = {
    id: string,
    name: string,
    urlPath: string
} 

interface IMainMenu {
    listOfMenu: MenuItem[]
};

const MainMenu = (value : IMainMenu) => {

    const {
        listOfMenu
    } = value;
    return (
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {
                listOfMenu.map(item => (
                    <li key={item.id} className="cursor-pointer" onClick={ () => { location.href = item.urlPath }}>
                        <div className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">{item.name}</div>
                    </li>
                ))
            }
            </ul>
        </div>
    );
};

export default MainMenu;