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
   let style = `${window.location.origin}/assets/${domainName}/styles/style.css`;
    setStyles(styles1 => {return {...styles1,style:style}});
   let form = `${window.location.origin}/assets/${domainName}/styles/form.css`;
    setStyles(styles1 => {return {...styles1,form:form}})
   let banner = `${window.location.origin}/assets/${domainName}/images/banner.png`;
    setImages(images1 => {return {...images1,banner:banner}})
   let logo = `${window.location.origin}/assets/${domainName}/images/logo.png`;
    setImages(images1 => {return {...images1,logo:logo}})
    let placeholder = `${window.location.origin}/assets/${domainName}/images/placeholder.png`;
    setImages(images1 => {return {...images1,placeholder:placeholder}})
   let profile = `${window.location.origin}/assets/${domainName}/images/profile.svg`;
    setImages(images1 => {return {...images1,profile:profile}})
    setLoading(false);
  }
  

 
  useEffect(() => {
    if(Object.values(images).includes('') || Object.values(styles).includes('')){
console.log("loaded")
      importData('xyz.com')
    }
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
