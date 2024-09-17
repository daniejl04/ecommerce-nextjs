import Link from "next/link";
//import '@/assets/styles/Home/seasonCollections.scss';
import Image from "next/image";
import womanCollection from "@/assets/img/collections/WomenCollection.png";
import menCollection from "@/assets/img/collections/MenCollection.png";
import jewelryCollection from "@/assets/img/collections/JewelryCollection.png";
import sneakersCollection from "@/assets/img/collections/SneakersCollection.png";
import bagsCollection from "@/assets/img/collections/BagCollection.png";
import glassesCollection from "@/assets/img/collections/GlassesCollection.png";

const categories = [
    { name: "Women's", items: 23, image: womanCollection },
    { name: "Men's", items: 9, image: menCollection },
    { name: "Jewelry", items: 31, image: jewelryCollection },
    { name: "Sneakers", items: 21, image: sneakersCollection },
    { name: "Bags", items: 5, image: bagsCollection },
    { name: "Glasses", items: 14, image: glassesCollection },
    
];

export default function Collections() {
    return (
      <section className="w-full py-16 bg-[#faf8f2] text-black text-center">
        <div className=" flex items-center justify-between p-4 mb-5">
          <h2 className="title text-2xl">Season Collection</h2>
  
          <Link href="/categories" className="w-full inline-block text-xs font-bold underline underline-offset-8 hover:underline">
            View all categories ↗
          </Link>
        </div>
  
        <div className=" flex justify-between flex-wrap gap-8">
          {categories.map((category, index) => (
            <div key={index} className="flex-1 max-w-[120px] text-center">
              <div className="imageWrapper w-[120px] h-[120px] mx-auto rounded-full overflow-hidden flex justify-center items-center bg-[#f5f5f5]">
                <Image src={category.image} alt={`${category.name} category`} />
              </div>
              <h3 className="text-lg mt-4">{category.name}</h3>
              <p className="text-xs text-gray-500">{category.items} items</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  