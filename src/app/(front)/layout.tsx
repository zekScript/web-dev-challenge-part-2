import NavBar from "@/components/navs/nav-bar";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* Topbar */}
      <NavBar></NavBar>
      {children}
      {/* Footer */}
    </>
  );
};

export default Layout;
