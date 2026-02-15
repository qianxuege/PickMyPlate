interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
}

export function PrimaryButton({ children, onClick, fullWidth = true }: PrimaryButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`${fullWidth ? 'w-full' : ''} h-[56px] bg-black text-white text-[16px] font-semibold border-2 border-black`}
    >
      {children}
    </button>
  );
}
