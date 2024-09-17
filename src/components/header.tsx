import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/20/solid"
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline"
import logoCommerce from "@/assets/img/logoCompany/logoCommerce.png"
import Image from 'next/image';
import Link from "next/link"

function Header() {
    return (
        <>
            <div className="flex justify-around my-3">
                <div>
                    <ul className="flex font-light text-xs text-gray-900 text-opacity-60">
                        <li className="flex">
                        <Link className="flex flex-row" rel="stylesheet" href="https://www.instagram.com/" >
                            USD  <ChevronDownIcon className=" h-5 w-5 mr-4 pb-1" />
                        </Link>
                        </li>
                        <li className="flex">
                        <Link className="flex flex-row" rel="stylesheet" href="https://www.instagram.com/" >
                        English <ChevronDownIcon className=" h-5 w-5 mr-4 pb-1" />
                        </Link>
                        </li>
                    </ul>
                </div>
                <div>
                <div className=" w-[120px] h-[40px]  flex justify-center items-center">
              <Image src={logoCommerce} alt="" width={150} height={100} />
              </div>
                </div>
                <div>
                    <ul className="flex">
                        <li><MagnifyingGlassIcon className=" h-5 w-5 mr-1"/></li>
                        <li><UserIcon className=" h-5 w-5 mr-1"/></li>
                        <li><HeartIcon className=" h-5 w-5 mr-1"/></li>
                        <li><ShoppingBagIcon className=" h-5 w-5 mr-1"/></li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}

export default Header

