import { useState } from "react";
import "./App.css";
import Auth from "./Auth";
import AuthContext from "./context/auth-context";

function App() {
  const [authStatus, setAuthStatus] = useState(false);
  // Auth.js'deki butona loginAuth metodunu verdik ve şimdi istediğimiz işlemi yapıyoruz.
  // istediğimiz işlem, butona tıklandığında status true olsun. bunun için useState kullandık.

  const loginAuth = () => {
    setAuthStatus(true);
  };
  return (
    // ne yaptık?

    // ilk önce auth-context'de context tanımladık sonra provider içerisine hangi componentlerde geçerli olacağını yazıyoruz.
    // tüm uygulamada geçerli olmasını istiyorsak ana kapsayıcı index.js'de import edebiliriz.
    // auth componentte geçerli olmasını istediğimiz için kapsayıcı bir provider içerisinde kullandık.
    // daha sonrasında hangi değerlere erişimim olmasını istiyorsam value içerisine onları yazıyorum.
    // değerleri kullanmak için de oluşturduğumuz context'in ismini kullanıyoruz.

    // value içerisine tanımladığımız değerleri içerisine eklediğimiz componentlerden erişebiliriz.
    // provider kapsayıcı div gibi düşün içerisine farklı componentler yazıp yine value değerlerini kullanabiliriz.
    // yani context'te bir metod tanımlanmış ve buna içerisindeki bütün componentlerden erişebilirz mantık bu.
    <AuthContext.Provider value={{ status: authStatus, login: loginAuth }}>
      <Auth />
    </AuthContext.Provider>
  );
}

export default App;
