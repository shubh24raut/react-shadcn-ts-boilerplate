type LayoutProps = {
  children: React.ReactNode;
};

const BodyLayout = ({ children }: LayoutProps) => {
  return <div className="p-2 h-full">{children}</div>;
};

export default BodyLayout;
