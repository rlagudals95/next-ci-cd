import { DefaultLayout } from "../components/layouts/defaultLayout";
import { WithSuspense } from "./components/WithSuspense";
import { WithoutSuspense } from "./components/WithoutSuspense";

function SuspensePage() {
  return (
    <DefaultLayout>
      <WithoutSuspense />
      <WithSuspense />
    </DefaultLayout>
  );
}

export default SuspensePage;
