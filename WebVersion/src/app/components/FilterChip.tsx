interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

export function FilterChip({ label, active, onClick, icon }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-[16px] py-[8px] border-2 text-[14px] whitespace-nowrap flex items-center gap-[6px] ${
        active
          ? 'bg-black text-white border-black font-bold'
          : 'bg-white text-black border-gray-400 font-normal'
      }`}
    >
      {label}
      {icon && icon}
    </button>
  );
}