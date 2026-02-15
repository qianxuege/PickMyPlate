import { Heart, Flame } from 'lucide-react';

interface DishCardProps {
  name: string;
  summary: string;
  price: string;
  spiceLevel: number;
  onClick?: () => void;
}

export function DishCard({ name, summary, price, spiceLevel, onClick }: DishCardProps) {
  return (
    <div 
      className="bg-white border-2 border-gray-400 p-[12px] flex gap-[12px] cursor-pointer hover:border-gray-600"
      onClick={onClick}
    >
      {/* Image Thumbnail */}
      <div className="w-[64px] h-[64px] bg-gray-300 border border-gray-400 shrink-0" />
      
      {/* Content */}
      <div className="flex-1 flex flex-col gap-[4px]">
        {/* First Row: Name and Save Icon */}
        <div className="flex items-center justify-between gap-[8px]">
          <h3 className="text-[14px] font-bold text-black flex-1">
            {name}
          </h3>
          <Heart className="w-[20px] h-[20px] text-gray-700" strokeWidth={2} />
        </div>

        {/* Second Row: Price and Spice Indicator */}
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-semibold text-black">
            {price}
          </span>
          
          {/* Spice Indicator - This is where the Flame icons are */}
          <div className="flex gap-[4px]">
            {[0, 1, 2].map((level) => (
              <Flame
                key={level}
                className={`w-[12px] h-[12px] ${
                  level < spiceLevel
                    ? 'text-black fill-black'
                    : 'text-gray-400'
                }`}
                strokeWidth={2}
              />
            ))}
          </div>
        </div>

        {/* Third Row: Summary */}
        <p className="text-[12px] text-gray-700 line-clamp-1">
          {summary}
        </p>
      </div>
    </div>
  );
}