import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft, faBraille } from "@fortawesome/free-solid-svg-icons";


interface CategoryProps {
    name: string;
    category: string;
  }
  
  export default function Category({ name, category }: CategoryProps) {
    return (
      <section className="flex my-4 justify-between">
        <div className="flex text-[14px]">
          <Link href="/" className="mr-4">
            Home <span className="ml-4"><FontAwesomeIcon icon={faChevronRight} /></span>
          </Link>
          <p className="mr-4">{category} <span className="ml-4"><FontAwesomeIcon icon={faChevronRight} /></span></p>
          <p className="mr-4">{name}</p>
        </div>
  
        <div>
          <span>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
  
          <span className="mx-2">
            <FontAwesomeIcon icon={faBraille} />
          </span>
  
          <span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </div>
      </section>
    );
  }