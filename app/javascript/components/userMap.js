import React, {Component} from 'react';
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import { Card, CardImg, Button, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap'


import CloudPost from './post'

import { updatelocation, getAddress } from './API'


export default class UserMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      myAddress:[],
      userLocationData:
        {
          lat: "",
          lng: "",
          user_id: "",
          }
    }
  }

  setLatLng=(latLng)=>{
    let formattedLat = latLng.lat.toFixed(6)
    let formattedLng = latLng.lng.toFixed(6)
    this.setState(prevState => ({
         userLocationData: {
             ...prevState.userLocationData,
             lat: formattedLat,
             lng: formattedLng
         }
     }))
  }

  componentWillMount(){
      getAddress()
      .then(APIaddress => {
        this.setState({
          myAddress: APIaddress
        })
      })
    }

componentDidUpdate(prevProps) {


  if(prevProps.closeUsers===this.props.closeUsers){
    return true
  }
  if(this.props.current_user != null){
    this.setState(prevState => ({
         userLocationData: {
             ...prevState.userLocationData,
             user_id: this.props.current_user.id,
         }
     }))
  }else{
    console.log("You are not logged in");
  }

  var mymap = L.map('mapid').setView([32.7167, -117.1661], 13);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
       maxZoom: 18,
       id: 'mapbox.streets',
       accessToken: 'pk.eyJ1Ijoic3doaXRlMjEiLCJhIjoiY2p4YzJ0MHFrMW8zZzN5cnYxZXowaGI4cSJ9.Wv8XBXSDANxtBHWNsoFGOg'
   }).addTo(mymap);
   mymap.locate({setView: true, maxZoom: 16});
   function onLocationFound(e) {
         var radius = e.accuracy;
         this.setLatLng(e.latlng)
         L.marker(e.latlng).addTo(mymap)
             .bindPopup(`You are within ${radius} meters of this spot`).openPopup();

         L.circle(e.latlng, radius).addTo(mymap);
     }
     function onLocationError(e) {
         alert(e.message);
     }

     mymap.on('locationerror', onLocationError);

     mymap.on('locationfound', onLocationFound);
   const {closeUsers} = this.props
     if(closeUsers.length != 0 || null) {
         closeUsers.map((user, index) => {
           function onMouseOver(e) {
             marker.openPopup()
           }
           function onMouseOut(e) {
             marker.closePopup()
           }
           function openModal(){

             dialog.addTo(mymap).setLocation([100,100]).open()
           }
           function closeModal(){
             dialog.close()
           }
           var latt = user.lat;
           var long = user.lng;
           if(latt || long != null){
          var marker = L.marker([latt, long]).addTo(mymap);
          var dialog = L.control.dialog()
                      .setContent("<img className = 'popupPic' height='100' width='100' src=" + user.picture_url + "/>" +
                      "<p><b>" + user.username + "</b></p>" + "<p>" + user.userStatus + "</p>")
                      // .setLocation([100,100])

              marker.bindPopup(
              "<img className = 'popupPic' height='100' width='100' src=" + user.picture_url + "/>" +
              "<p><b>" + user.username + "</b></p>" + "<p>" + user.userStatus + "</p>"
           )
              marker.on('mouseover', onMouseOver)
              marker.on('mouseout', onMouseOut)
              marker.on('click', openModal)
              mymap.on('click', closeModal)
            }
         })
      }else{
           return null
      }
   }

   currentLocationFetch=()=>{
     updatelocation(this.state.userLocationData).then(successPost => {
         alert(`location submitted to DB lat is ${this.state.userLocationData.lat}`)
     })
   }






  render(){
    const { current_user, myLocation } = this.props

     return(
            <div id = "mapid">
              {current_user != null &&
                <CloudPost
                  current_user={current_user}
                />
              }
              <div className="Filter-Area">
                <p>Filter</p>
                { myLocation.length != 0 &&
                  <p>
                    Lat: {myLocation.location.lat.toString().substring(0,7)}<br/>
                    Lng: {myLocation.location.lng.toString().substring(0,7)}
                  </p>
                }
                <p>this button does not work currently</p>
                <Button  disabled onClick={this.currentLocationFetch}>
                  {current_user && "Confirm Location" || "Hide my Location"}
                </Button>
              </div>
            </div>
      )
 }
 }
