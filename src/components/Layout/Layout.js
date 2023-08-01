import { Outlet } from 'react-router-dom';
import { StyledLink } from '../App';

export const Layout = () => {
   return <div>
      <div>
         <ul>
            <li>
               <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
               <StyledLink to="/movies">Movies</StyledLink>
            </li>
         </ul>
         <main>
            <Outlet />
         </main>
      </div>
   </div>
}