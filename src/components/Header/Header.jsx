import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-[100] w-full p-5 bg-yellow-300 flex items-center justify-between drop-shadow-header-shadow">
            {/* header left */}
            <div className="flex space-x-4 items-center">
                <IconButton sx={{ color: "red" }}>
                    <MenuIcon className="cursor-pointer" sx={{ color: "#c82196" }} />
                </IconButton>
                
                <h1>Deshan Dev</h1>
                <div className="flex items-center rounded-full bg-zinc-300 px-2 py-1">
                    <input
                        type="text"
                        placeholder="Search"
                        className="outline-none text-sm rounded-sm w-[200px] bg-inherit"
                    />
                    <IconButton>
                        <SearchIcon className="cursor-pointer" />
                    </IconButton>
                </div>
            </div>

            {/* header right */}
            <IconButton>
                <ShoppingCartIcon className="cursor-pointer" /> 
            </IconButton>
        </header>
    );
};

export default Header;
