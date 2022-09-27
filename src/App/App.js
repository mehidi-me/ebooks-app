import { ToastContainer } from "react-toastify";
import MainRouter from "./router/MainRouter";
import "react-toastify/dist/ReactToastify.css";
// import "./styles/style.css";
import AppContext from "./appContext";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [initData, setInitData] = useState(null);
  const [styles, setStyles] = useState({
    style:'',
    form:''
  });
  const [images, setImages] = useState({
    banner:'',
    profile:'',
    logo:'',
  });
  const importData = async (domainName) => {
    setLoading(true);
   let style = await import(`./assets/${domainName}/styles/style.css`);
    setStyles(styles1 => {return {...styles1,style:style.default}});
   let form = await import(`./assets/${domainName}/styles/form.css`);
    setStyles(styles1 => {return {...styles1,form:form.default}})
   let banner = await import(`./assets/${domainName}/images/banner.png`);
    setImages(images1 => {return {...images1,banner:banner.default}})
   let logo = await import(`./assets/${domainName}/images/logo.png`);
    setImages(images1 => {return {...images1,logo:logo.default}})
    let placeholder = await import(`./assets/${domainName}/images/placeholder.png`);
    setImages(images1 => {return {...images1,placeholder:placeholder.default}})
   let profile = await import(`./assets/${domainName}/images/profile.svg`);
    setImages(images1 => {return {...images1,profile:profile.default}})
    setLoading(false);
  }
  

  useEffect(() => {
    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = styles.style;

    head.appendChild(link);

    return () => { head.removeChild(link); }

  }, [styles]);
  useEffect(() => {
    importData('xyz.com')
  },[])

  if(!loading){
    return (

      <AppContext.Provider value={{ initData, setInitData,styles,images }}>
        <ToastContainer toastStyle={{ backgroundColor: "#050915" }} />
        <MainRouter />
      </AppContext.Provider>
    );
  }else{
    return <div>Loading...</div>
  }
  
}

export default App;
