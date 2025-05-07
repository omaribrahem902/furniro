import Benefits from "../_UI_components/Benefits";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
        {children}
        <Benefits/>
        </>
    );
  }