import { Route, redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
  const isAthenticated = !!localStorage.getItem('token');

  return (
    <Route 
      {...rest}
      render= { props => 
        isAthenticated 
          ? (<Component {...props}/>)
          : (redirect('/login'))
      }
    />
  )
}

export default PrivateRoute;