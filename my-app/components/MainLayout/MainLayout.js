import Link from "next/link";
import style from "./MainLayout.module.css";
import {
  HeadMenu,
  HeaderBar,
  HeadMenuLink,
} from "../styledComponents/styledComponents";
const MainLayout = ({ children }) => {
  return (
    <div className={style.container}>
      <HeaderBar>
        <HeadMenu>
          <li className={style.navBarItem}>
            <Link href={"/posts/new"}>
              <HeadMenuLink>Create New Post</HeadMenuLink>
            </Link>
          </li>
          <li className={style.navBarItem}>
            <h2>My Next.Js Blog</h2>
          </li>
          <li className={style.navBarItem}>
            <Link href={"/"}>
              <HeadMenuLink>All Posts</HeadMenuLink>
            </Link>
          </li>
        </HeadMenu>
      </HeaderBar>
      <main>{children}</main>
    </div>
  );
};
export default MainLayout;
