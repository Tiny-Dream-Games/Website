import PageLoader from "@/components/page-loader";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageLoader />
      {children}
    </>
  );
}
