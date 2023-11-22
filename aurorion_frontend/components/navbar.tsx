import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";

export const revalidate = 0;

const Navbar = async () => {  //aynchronous function
  const categories = await getCategories(); // await keyword is used to wait for the 
  //getCategories() function to finish executing before continuing to the next line of code.

  return (
    <div className="border-b">
      <Container> 
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Nekikx</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
}
 
export default Navbar;

// container - // it is a component that wraps its children in a div with a max-width
// of 7xl and centers it horizontally.