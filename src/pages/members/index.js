import { MemberList } from "features/guild";
import { MainLayout } from "layouts";

export function MembersPage({ ...rest }) {


  return (
    <MainLayout>
      <MemberList/>
    </MainLayout>
  );
}
