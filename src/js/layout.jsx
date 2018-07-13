import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {MeetupHome} from "./views/MeetupHome.jsx";
import {MeetupGroup} from "./views/MeetupGroup.jsx";
import {MeetupEvent} from "./views/MeetupEvent.jsx";
import {Provider} from "./stores/AppContext.jsx";




export default class Layout extends React.Component {

constructor(){
    super();
    
    
        this.state = {
            "meetups":[
                {
                        ID:1,
                        name: "Coding Meetup",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum elit at ornare lacinia. Donec quis justo eros. Mauris nec venenatis lectus. Fusce erat nunc, aliquam at lorem quis, efficitur tincidunt lorem. Curabitur at turpis sit amet ex semper pretium eget at quam. Pellentesque sollicitudin dictum tortor, a pulvinar erat iaculis quis. Suspendisse felis lacus, vehicula pretium est vitae, malesuada ultrices justo. Integer id bibendum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam nec leo consequat dui consequat iaculis. Nullam lectus nibh, elementum ut mauris et, eleifend condimentum ex. Vestibulum at venenatis dolor. Duis quis nisi at elit cursus rhoncus nec ac ligula. ",
                        listOfEvents: [3,4,5]
                },
                {
                         ID:2,
                        name: "Coding Meetup",
                        description: "Suspendisse ac volutpat massa. Morbi libero ipsum, aliquam in eros non, hendrerit blandit turpis. Praesent et imperdiet dui. In et feugiat lectus. Vivamus interdum molestie nibh quis vulputate. Proin porttitor nulla et scelerisque pulvinar. Nullam pretium odio eget iaculis feugiat. Aenean sed libero sit amet eros fringilla luctus. Curabitur luctus eleifend tellus, ac aliquet odio consequat vitae. Suspendisse consectetur, quam vitae cursus porttitor, diam ante malesuada mi, laoreet feugiat urna nulla a tortor. Duis aliquet fringilla malesuada. Fusce quis lacus diam. ",
                        listOfEvents: [3,4,5]
                },
                {
                        ID:3,
                        name: "Coding Meetup",
                        description: "Aliquam vitae ex laoreet, sagittis eros nec, blandit tellus. Proin dignissim dui a egestas accumsan. Aenean ut turpis at arcu pellentesque aliquet non sed ipsum. Donec in nibh eget metus facilisis vestibulum in eget magna. Sed id ex volutpat, dignissim felis vitae, tempus massa ",
                        listOfEvents: [3,4,5]
                }
            ],
                
            "events":[
                {
                        ID:1,
                        name: "Coding Weekend",
                        dateTime: "August 22 6:40 pm",
                        description: "Nulla sodales tincidunt laoreet. Suspendisse blandit aliquam volutpat. Proin non felis vestibulum, fringilla arcu sed, tempus dolor. Nullam malesuada lorem eget imperdiet ultricies. Nulla at sem sem. Vivamus semper malesuada ultricies. Suspendisse interdum imperdiet mauris, eu laoreet quam scelerisque commodo. Proin tincidunt ligula eget tellus fringilla tristique. Aliquam tellus lectus, vulputate sed dolor nec, ultrices feugiat quam. Vestibulum venenatis pellentesque nisi, ac congue velit varius id. Aenean maximus erat ante, faucibus interdum purus vestibulum ut. Duis a nulla turpis.",
                        location: "Miami, FL",
                        meetupID: 1,
                        RSVPYes: [1,2,3],
                        RSVPNo: [2,5,6]
                            
                },
                   {
                        ID:2,
                        name: "Coding Weekend",
                        dateTime: "August 22 6:40 pm",
                        description: "Nulla sodales tincidunt laoreet. Suspendisse blandit aliquam volutpat. Proin non felis vestibulum, fringilla arcu sed, tempus dolor. Nullam malesuada lorem eget imperdiet ultricies. Nulla at sem sem. Vivamus semper malesuada ultricies. Suspendisse interdum imperdiet mauris, eu laoreet quam scelerisque commodo. Proin tincidunt ligula eget tellus fringilla tristique. Aliquam tellus lectus, vulputate sed dolor nec, ultrices feugiat quam. Vestibulum venenatis pellentesque nisi, ac congue velit varius id. Aenean maximus erat ante, faucibus interdum purus vestibulum ut. Duis a nulla turpis.",
                        location: "Miami, FL",
                        meetupID: 2,
                        RSVPYes: [1,2,3],
                        RSVPNo: [2,5,6]
                            
                },
                   {
                        ID:3,
                        name: "Coding Weekend",
                        dateTime: "August 22 6:40 pm",
                        description: "Nulla sodales tincidunt laoreet. Suspendisse blandit aliquam volutpat. Proin non felis vestibulum, fringilla arcu sed, tempus dolor. Nullam malesuada lorem eget imperdiet ultricies. Nulla at sem sem. Vivamus semper malesuada ultricies. Suspendisse interdum imperdiet mauris, eu laoreet quam scelerisque commodo. Proin tincidunt ligula eget tellus fringilla tristique. Aliquam tellus lectus, vulputate sed dolor nec, ultrices feugiat quam. Vestibulum venenatis pellentesque nisi, ac congue velit varius id. Aenean maximus erat ante, faucibus interdum purus vestibulum ut. Duis a nulla turpis.",
                        location: "Miami, FL",
                        meetupID: 3,
                        RSVPYes: [1,2,3],
                        RSVPNo: [2,5,6]
                            
                },
                     {
                        ID:4,
                        name: "Coding Weekend",
                        dateTime: "August 22 6:40 pm",
                        description: "Nulla sodales tincidunt laoreet. Suspendisse blandit aliquam volutpat. Proin non felis vestibulum, fringilla arcu sed, tempus dolor. Nullam malesuada lorem eget imperdiet ultricies. Nulla at sem sem. Vivamus semper malesuada ultricies. Suspendisse interdum imperdiet mauris, eu laoreet quam scelerisque commodo. Proin tincidunt ligula eget tellus fringilla tristique. Aliquam tellus lectus, vulputate sed dolor nec, ultrices feugiat quam. Vestibulum venenatis pellentesque nisi, ac congue velit varius id. Aenean maximus erat ante, faucibus interdum purus vestibulum ut. Duis a nulla turpis.",
                        location: "Miami, FL",
                        meetupID: 1,
                        RSVPYes: [1,2,3],
                        RSVPNo: [2,5,6]
                            
                },
                   {
                        ID:5,
                        name: "Coding Weekend",
                        dateTime: "August 22 6:40 pm",
                        description: "Nulla sodales tincidunt laoreet. Suspendisse blandit aliquam volutpat. Proin non felis vestibulum, fringilla arcu sed, tempus dolor. Nullam malesuada lorem eget imperdiet ultricies. Nulla at sem sem. Vivamus semper malesuada ultricies. Suspendisse interdum imperdiet mauris, eu laoreet quam scelerisque commodo. Proin tincidunt ligula eget tellus fringilla tristique. Aliquam tellus lectus, vulputate sed dolor nec, ultrices feugiat quam. Vestibulum venenatis pellentesque nisi, ac congue velit varius id. Aenean maximus erat ante, faucibus interdum purus vestibulum ut. Duis a nulla turpis.",
                        location: "Miami, FL",
                        meetupID: 2,
                        RSVPYes: [1,2,3],
                        RSVPNo: [2,5,6]
                            
                },
                   {
                        ID:6,
                        name: "Coding Weekend",
                        dateTime: "August 22 6:40 pm",
                        description: "Nulla sodales tincidunt laoreet. Suspendisse blandit aliquam volutpat. Proin non felis vestibulum, fringilla arcu sed, tempus dolor. Nullam malesuada lorem eget imperdiet ultricies. Nulla at sem sem. Vivamus semper malesuada ultricies. Suspendisse interdum imperdiet mauris, eu laoreet quam scelerisque commodo. Proin tincidunt ligula eget tellus fringilla tristique. Aliquam tellus lectus, vulputate sed dolor nec, ultrices feugiat quam. Vestibulum venenatis pellentesque nisi, ac congue velit varius id. Aenean maximus erat ante, faucibus interdum purus vestibulum ut. Duis a nulla turpis.",
                        location: "Miami, FL",
                        meetupID: 3,
                        RSVPYes: [1,2,3],
                        RSVPNo: [2,5,6]
                            
                },
                     {
                        ID:7,
                        name: "Coding Weekend",
                        dateTime: "August 22 6:40 pm",
                        description: "Nulla sodales tincidunt laoreet. Suspendisse blandit aliquam volutpat. Proin non felis vestibulum, fringilla arcu sed, tempus dolor. Nullam malesuada lorem eget imperdiet ultricies. Nulla at sem sem. Vivamus semper malesuada ultricies. Suspendisse interdum imperdiet mauris, eu laoreet quam scelerisque commodo. Proin tincidunt ligula eget tellus fringilla tristique. Aliquam tellus lectus, vulputate sed dolor nec, ultrices feugiat quam. Vestibulum venenatis pellentesque nisi, ac congue velit varius id. Aenean maximus erat ante, faucibus interdum purus vestibulum ut. Duis a nulla turpis.",
                        location: "Miami, FL",
                        meetupID: 1,
                        RSVPYes: [1,2,3],
                        RSVPNo: [2,5,6]
                            
                },
                   {
                        ID:8,
                        name: "Coding Weekend",
                        dateTime: "August 22 6:40 pm",
                        description: "Nulla sodales tincidunt laoreet. Suspendisse blandit aliquam volutpat. Proin non felis vestibulum, fringilla arcu sed, tempus dolor. Nullam malesuada lorem eget imperdiet ultricies. Nulla at sem sem. Vivamus semper malesuada ultricies. Suspendisse interdum imperdiet mauris, eu laoreet quam scelerisque commodo. Proin tincidunt ligula eget tellus fringilla tristique. Aliquam tellus lectus, vulputate sed dolor nec, ultrices feugiat quam. Vestibulum venenatis pellentesque nisi, ac congue velit varius id. Aenean maximus erat ante, faucibus interdum purus vestibulum ut. Duis a nulla turpis.",
                        location: "Miami, FL",
                        meetupID: 2,
                        RSVPYes: [1,2,3],
                        RSVPNo: [2,5,6]
                            
                },
                   {
                        ID:9,
                        name: "Coding Weekend",
                        dateTime: "August 22 6:40 pm",
                        description: "Nulla sodales tincidunt laoreet. Suspendisse blandit aliquam volutpat. Proin non felis vestibulum, fringilla arcu sed, tempus dolor. Nullam malesuada lorem eget imperdiet ultricies. Nulla at sem sem. Vivamus semper malesuada ultricies. Suspendisse interdum imperdiet mauris, eu laoreet quam scelerisque commodo. Proin tincidunt ligula eget tellus fringilla tristique. Aliquam tellus lectus, vulputate sed dolor nec, ultrices feugiat quam. Vestibulum venenatis pellentesque nisi, ac congue velit varius id. Aenean maximus erat ante, faucibus interdum purus vestibulum ut. Duis a nulla turpis.",
                        location: "Miami, FL",
                        meetupID: 3,
                        RSVPYes: [1,2,3],
                        RSVPNo: [2,5,6]
                            
                }
            ],
            "session":{
                ID:1,
                username:"theUser",
                password: "1234",
                token: "qwerty12345abcdefgzxcv"
            },
            "isLoading": true
        };
        
    this.actions = {
              "loadInitialData": () => {
                fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/sample_api/v1/events')
                  .then(response => response.json())
                  .then(data => this.setState({ events: data, isLoading: false }))
                  .catch(error => console.log(error));
                  
                fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/sample_api/v1/meetups')
                  .then(response => response.json())
                  .then(data => this.setState({ meetups: data }))
                  .catch(error => console.log(error));
              },
              "changeEvent": () => {
                this.setState({events: this.state.events.map( (event, i) => {
                    if(i === 0){  
                      event.post_title = "HOLA";
                    }
                    return event;
                  })
                });
              },
              "rsvpEvent": (id, userId, answer, token) => {
                
                /*ReactGA.event({
                  category: 'User',
                  action: 'RSVP',
                  value: answer === "yes" ? 1 : 0
                });*/
                
                var data = {
                  user: userId,
                  answer: answer
                };
                
                fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/sample_api/v1/events/rsvp/'+id, 
                {
                  method: 'PUT',
                  body: JSON.stringify(data),
                  headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token
                    })
                })
                .then(data => {
                  if (data.status !== 200 ) {
                    if(data.status === 403){
                      //this.dispatch('MeetupStore.endSession');
                    }
                    
                    throw new Error(data);
                  }
                  this.actions.loadInitialData();
                })
                .catch(error => console.log(error));
              },
              "loadSession": (username, password) => {
                //REST API AUTH
                var data = {
                    "username":username, 
                    "password":password
                  };
                  
                fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/jwt-auth/v1/token',
                {
                  method: 'POST',
                  body: JSON.stringify(data),
                  headers: new Headers({
                    'Content-Type': 'application/json'
                    })
                })
                .then( (response) => response.json())
                .then( (data) => {
                    
                    if (typeof(data.token) === "undefined" ) throw new Error(data.message);
                    
                    //this.dispatch('MeetupStore.setSession', data); 
                    //this.loadApiEvents(data.token);
                    //this.loadInitialData();
                    this.setState({session: data});
                    //ReactGA.set({ userId: data.user_nicename });
                })
                .catch(error => console.log(error));
              
                //Simulating user ID
                /*
                fetch('https://randomuser.me/api/?inc=id,name,picture')
                .then(res => res.json())
                .catch(error => {
                  //console.error('Error:', error)
                })
                .then(response => {
                  this.dispatch('MeetupStore.setSession', response);
                });*/
              },
              "logout": () => this.setState({session: {}})
    };        
        
}
  render() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Provider value={{state:this.state}}>   
                        <Route exact path="/" component={MeetupHome} />
                        <Route path="/group" component={MeetupGroup} />
                        <Route path="/event" component={MeetupEvent} />
                        <Route render={() => <h1>Not found!</h1>} />
                    </Provider>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
  }
}
