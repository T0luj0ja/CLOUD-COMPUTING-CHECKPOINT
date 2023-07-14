 import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api"
 import GoogleIcon from '@mui/icons-material/Google';
 function Mapcontainer () {
    const Item = {
        name: 'Location',
        location: {
            lat: 6.5244 ,
            lng: 3.3792,
        }
    }
    const mapStyles = {
        height: "400px",
        width: "50%"
    }
    const defaultCenter = {
        lat:   6.5244,
        lng:3.3792
    }
    // installed material UI for some fine icons and designes
    // styled the maps to the center 
    return (
        <div>
        <h1>daniel</h1>
        <GoogleIcon/>
        <LoadScript googleMapsApiKey="AIzaSyBNfulPe9qSA2BRWs05zdtdgrfQz2KMnsY">
        <GoogleMap style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}} mapContainerStyle={mapStyles} zoom={15} center={defaultCenter} >
            <Marker position={Item.location} key={Item.name} />
        </GoogleMap>
        </LoadScript>
        
        </div>
    )
 }
 export default Mapcontainer;