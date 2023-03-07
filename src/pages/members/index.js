import { OUR_GUILD } from "constraint";
import { useGetGuild } from "features/guild/hooks";
import { MainLayout } from "layouts";

export function MembersPage({ ...rest }) {
  // eslint-disable-next-line
  const { data } = useGetGuild({ name: OUR_GUILD });

  return (
    <MainLayout>
      MembersPage
    </MainLayout>
  );
}
