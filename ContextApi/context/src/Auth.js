import { useContext } from "react";
import authContext from "./context/auth-context";

function Auth() {
  const { status, login } = useContext(authContext);
  //const auth = useContext(authContext)  bu kullanım yukarıdaki ile aynı anlama geliyor. {} yerine değişkene atayarak da yapabiliriz. kullanmak istersek de auth.status deriz.
  console.log(status);
  return (
    <div>
      <h1>Giriş yaptın mı?</h1>
      {status ? <p>Ohoo çoktan</p> : <p>Hayır</p>}
      <button onClick={login}>Giriş Yap</button>
    </div>
  );
}

export default Auth;
