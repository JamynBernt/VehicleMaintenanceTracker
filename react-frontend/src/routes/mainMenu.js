import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { mainMenuHeaderItems } from '../data/staticData';


export default function MainMenu() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  React.useEffect(() => {
    if (!user?.firstName) {
      navigate(`/`);
      return;
    }
  }, [user]);

  const handleMenuItemClick = (route) => {
    navigate(`/${route}`);
  };

  return (
    <div>
      <h2 style={{textAlign: "center"}}>Welcome, {`${user?.firstName} ${user?.lastName}`} </h2>
      <Stack spacing={2} direction="column" justifyContent="center" alignItems="center">
        {mainMenuHeaderItems.map((menuItem) => {
          return (
            <Button
              variant="contained"
              onClick={() => handleMenuItemClick(menuItem.route)}
            >{`${menuItem.name}`}</Button>
          );
        })}
      </Stack>
    </div>
  );
}