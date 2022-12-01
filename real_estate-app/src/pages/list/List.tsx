/* eslint-disable jsx-a11y/alt-text */
import "./listhouse.css";
import Navbar from "../../components/navbar/Navbar";
import { Button} from "semantic-ui-react";
import { BsHeart } from "react-icons/bs";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "../../components/footer/Footer";


export default observer(function List( ) {
  const perPage = 4;

  const [next, setNext] = useState(perPage);
  
  const { shtepiaStore } = useStore();
  const { shtepiat, loadShtepite } = shtepiaStore;

  const [query, setQuery]=useState(""); 

  const keys=["cmimi","titulli", "lokacioni"];

  useEffect(() => {
     
    loadShtepite();
 
}, [loadShtepite]);
<<<<<<< Updated upstream
      
   

 
=======

const handleMoreHouse = () => {
  setNext (next  + perPage);
}
 
const LabelStyle: CSS.Properties = {
  width: "310px",
  padding: "10px",
marginBottom:"15px",

height:"50px",

};

const { rezervimiStore } = useStore();
const { createRezervimin, updateRezervimin, loading ,loadRezervimin} = rezervimiStore;


const history = useHistory();
const { rezervimiId } = useParams<{ rezervimiId: string }>();

const [rezervimi, setRezervimi] = useState({
rezervimiId: '',
check_in: '',
check_out: '',
nrPersonave : '',
pagesa:''

});

const validationSchema = Yup.object({
check_in: Yup.string().required('Data eshte e zbrazet!'),
check_out: Yup.string().required('Data eshte e zbrazet!'),
nrPersonave: Yup.string().required('Numri i personave eshte i zbrazet!'),
pagesa: Yup.string().required('Mesazhi eshte i zbrazet!'),
});


useEffect(() => {
if (rezervimiId) loadRezervimin(rezervimiId).then(rezervimi => setRezervimi(rezervimi!))
}, [rezervimiId, loadRezervimin]);


function handleFormSubmit(rezervimi: Rezervimi) {
  if (rezervimi.rezervimiId.length === 0) {
    let newRezrvim = {
      ...rezervimi,
      rezervimiId: uuid(),
    };
    createRezervimin(newRezrvim).then(() =>

    history.push(`/rezervimi`) 
    
  );     alert('Rezervimi u krijua me sukses!')
  } else {
    updateRezervimin(rezervimi).then(() => history.push(`/rezervimi/${rezervimi.rezervimiId}`));
  }
}

const options=[
  {value:"E-banking", desc:"E-banking"},
  {value:"Cash", desc:"Cash"},
  {value:"Crypto", desc:"Crypto"},

]

const [modal , setModal] = useState(false);


const togglePopup = () =>{
    setModal(!modal)
}
if(modal){
  document.body.classList.add("active")
}else{
  document.body.classList.remove("active")
}

>>>>>>> Stashed changes
  return (
    <>
    <Navbar />
    <div className="searchhh">
      <input placeholder="Search..." onChange={e=> setQuery(e.target.value)}/>
      <SearchIcon style={{"marginLeft":"-25px",  cursor:"pointer"}}/>
      </div> 
      <div className="houses-title">
      <h1>Listings - Homes for Rent</h1>
      </div>

      <div>
   
</div>
     
    <div className="wrapper-houses">
   
      {shtepiat.filter((shtepia:any)=> keys.some((key)=>shtepia[key].toLowerCase().includes(query))).map((shtepia) => {
        
        return (
          <div key={shtepia.shtepiaId}>
            <div className="lists1">
              <div className="list1">
                <div className="home1">
                  <div className="image1">
                 <Link to={`/houses/${shtepia.shtepiaId}`}>
                    <img src={shtepia.photo}/>
                    </Link>
                    <div className="button_Add1">
                      <Button>
                        <BsHeart
                          style={{
                            color: "rgb(53, 51, 51)",
                            fontSize: "40px",
                          }}
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="details1">
                    <div className="details_first1">
                      <div className="green_box1"></div>For Rent{" "}
                      {shtepia.titulli}
                    </div>
                    <div className="details_second1">
                      <h4>${shtepia.cmimi}</h4>
                    </div>
                    <div className="details_3thd1">
                      {" "}
                      <span>{shtepia.nrDhomave}</span> bed <span>{shtepia.nrBanjove}</span> bath <span>{shtepia.siperfaqja}</span>{" "}
                      sqf
                    </div>
                    <div className="details_4rth1">
                    <div className="location1">
                        {/* {shtepia.lagjjaId} */}
                        {shtepia.lokacioni}
                        {/* 323-329 Centre St Unit 201
                        <br /> Jamaica Plaim */}
                      </div>
                      <div className="buttonn1">
                        <Button type="submit" content="Book Now" as={Link}
                            to="/createRezervim" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    <Footer />
    </>
  );
});
