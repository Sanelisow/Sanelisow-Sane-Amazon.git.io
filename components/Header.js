import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";

import Image from "next/image";
import HeaderItem from "./HeaderItem";

 function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title = "HOME" Icon = {HomeIcon}/>
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}/>
                <HeaderItem title="SEARCH" Icon={SearchIcon}/>
                <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
              
            </div>
            {/* <Image
            className="object-contain"
            src="https://links.papareact.com/au6"
            width={200}
            height={100}
            /> */}
            <p className="object-contain font-black"
             >
                BUKELE
            </p>
        </header>
    );
}
export default Header;
// Lazy Loading - loads the first images that appear on your screen, other images load as you scroll.