import BodyLayout from "@/components/layout/BodyLayout";
import TopHeader from "@/components/layout/TopHeader";

const TemplatesPage = () => {
   return (
    <div className="w-full h-full flex flex-col">
      <TopHeader>
        <span className="text-2xl font-bold">TEMPLATES</span>
      </TopHeader>
      <BodyLayout>
        <div className="flex  w-full h-full">
          <p>This is templates page</p>
        </div>
      </BodyLayout>
    </div>
  );
};

export default TemplatesPage;
