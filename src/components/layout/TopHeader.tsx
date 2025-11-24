type LayoutProps = {
  children: React.ReactNode;
};

const TopHeader = ({ children }: LayoutProps) => {
  return (
    <div className="py-5 px-2 flex items-center w-full h-16  border-b border-gray-200 ">
      {children}
    </div>
  );
};

export default TopHeader;
