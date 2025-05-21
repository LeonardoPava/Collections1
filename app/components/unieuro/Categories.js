// components/CategoriesGrid.js
import Image from 'next/image';

export default function CategoriesGrid({ categories }) {
  return (
    <div className="flex flex-col items-center p-4">
      {/* Griglia categorie */}
      <div className="grid grid-cols-3 gap-6 mb-6 w-full max-w-md bg-gray-200 rounded-lg p-4 shadow">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center whitespace-nowrap"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
              style={{ backgroundColor: category.color }}
            >
              <Image
                src={category.image}
                alt={category.title}
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <span className="text-sm font-medium truncate w-24 text-center">
              {category.title}
            </span>
          </div>
        ))}
      </div>

      {/* Blocchi sotto la griglia */}
      <div className="flex flex-col w-full max-w-md">
        <div className="flex justify-between w-full mb-4">
          <div className="flex items-center whitespace-nowrap mr-2">
            <Image
              src="/images/unieuro/store.png"
              alt="Ritira in negozio"
              width={24}
              height={24}
              className="w-6 h-6 mr-2"
            />
            <span className="text-sm font-medium">Ritira in negozio</span>
          </div>
          <div className="flex items-center whitespace-nowrap mx-2">
            <Image
              src="/images/unieuro/credit-card.png"
              alt="Unieuro club"
              width={24}
              height={24}
              className="w-6 h-6 mr-2"
            />
            <span className="text-sm font-medium">Unieuro club</span>
          </div>
          <div className="flex items-center whitespace-nowrap ml-2">
            <Image
              src="/images/unieuro/box.png"
              alt="Reso e diritto di recesso"
              width={24}
              height={24}
              className="w-6 h-6 mr-2"
            />
            <span className="text-sm font-medium">Reso e diritto di recesso</span>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="whitespace-nowrap">
            <span className="text-sm font-medium">Lista dei desideri</span>
          </div>
          <div className="flex items-center whitespace-nowrap">
            <span className="text-sm font-medium">Accedi/registrati</span>
            <Image
              src="/images/unieuro/logo.png"
              alt="Accedi/registrati"
              width={20}
              height={20}
              className="w-5 h-5 ml-2"
            />
          </div>
        </div>

        <div className="flex justify-between w-full mt-2">
          <div className="whitespace-nowrap">
            <span className="text-sm font-medium">Supporto</span>
          </div>
          <div className="flex items-center whitespace-nowrap">
            <span className="text-sm font-medium">Scopri di più</span>
            <Image
              src="/images/unieuro/logo.png"
              alt="Scopri di più"
              width={20}
              height={20}
              className="w-5 h-5 ml-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
