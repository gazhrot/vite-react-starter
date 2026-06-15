import { NavLink } from 'react-router';
import { buttonVariants } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="w-full p-4 flex gap-4 justify-center bg-transparent mb-8">
      
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          buttonVariants({ variant: isActive ? 'default' : 'ghost' })
        }
      >
        Home
      </NavLink>

      <NavLink 
        to="/login" 
        className={({ isActive }) => 
          buttonVariants({ variant: isActive ? 'default' : 'ghost' })
        }
      >
        Login
      </NavLink>

    </nav>
  );
}