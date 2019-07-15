import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';





const RenderDish = ({dish}) => {
    return(  
           <Card>
               <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardBody>
                  <CardTitle><h3>{dish.name}</h3></CardTitle>
                <CardText>{dish.description}</CardText>
             </CardBody>    
        </Card>
    );
}

const RenderComments = ({comment}) => {

    return(
        <ul className="list-unstyled">
           {comment.map( comm => {
            return(<li key={comm.id}>
                <div>
                    <p>{comm.comment}</p>
                    <p>--{comm.author}, {comm.date}</p>
                </div>
          </li>)
         })}   
        </ul>

    );
    
  
}
  

const Dishdetail = ({dish,comments}) => {

  return (
          <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                   <RenderComments comment={comments} />
                </div>
            </div>
            </div>
        );

}



export default Dishdetail;