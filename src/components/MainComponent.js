import React, { Component } from 'react';
import HomeComponent from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import HeaderComponent from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/commnets';
import { PROMOTION, PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
      };
  }


  render() {

    const HomePage = () => {
      return(
        <HomeComponent 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }


    const DishWithId = ({match}) => {
       return(
         <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
         comments={this.state.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}
         />
       );
    }

    const AboutLeaders = () => {
      return(
        <About  leaders={this.state.leaders}/>
      );
    }

    return (
      <div>
        <HeaderComponent />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
          <Route path="/menu/:dishId" component={DishWithId}/>
          <Route exact path="/contactus" component={()=><Contact/>}/>
          <Route exact path="/aboutus" component={AboutLeaders}/>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;