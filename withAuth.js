import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export default function withAuth(WrappedComponent) {

  return function WithAuth(props) {
   const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {      
      if (!session && typeof window !== 'undefined') {
        window.sessionStorage.setItem('redirectUrl', router.asPath);
        router.push('/signin');
      }
    }, [session, router]);

    if (!session) { return null }

    return <WrappedComponent {...props} />
  }
}
