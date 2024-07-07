import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import "../app/globals.css"
function hasRequiredPermissions(requiredPermissions: string[]): boolean {
    // get userPermissions from the redux-store
    const userPermissions:any =  localStorage.getItem('users');
    return requiredPermissions?.some((permission) =>
      userPermissions?.includes(permission)
    )
  }

export function navigatePath(){
    const userPermissions:any =  localStorage.getItem('users');
    if(userPermissions?.includes("1")){
        return '/dashboard'
    }

    else if((userPermissions?.includes("2"))){
        return '/users'
    }
    else{
        return '/sign-in'
    }
}

const withAuth = (WrappedComponent:any,requiredPermissions:any) => {
  return (props:any) => {
    const router = useRouter();

    useEffect(() => {
        if(!requiredPermissions?.length){
            let nav = navigatePath()
            router.push(nav);
        }
        else{
            const hasPermission = hasRequiredPermissions(requiredPermissions)
            if (!hasPermission) {
              router.push('/sign-in'); 
            }
        }

    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
