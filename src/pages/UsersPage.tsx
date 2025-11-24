import BodyLayout from "@/components/layout/BodyLayout";
import TopHeader from "@/components/layout/TopHeader";

const UsersPage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <TopHeader>
        <span className="text-2xl font-bold">USERS</span>
      </TopHeader>
      <BodyLayout>
        <div className="flex  w-full h-full">
          <p>This is users page</p>
        </div>
      </BodyLayout>
    </div>
  );
};

export default UsersPage;
