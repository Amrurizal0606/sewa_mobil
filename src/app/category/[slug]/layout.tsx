import { MainLayout } from "@/layout";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return <MainLayout navigationBottom={false}>{children}</MainLayout>;
}
