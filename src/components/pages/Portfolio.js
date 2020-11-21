import React from "react";

export default function Portfolio() {
  return (
<div>
<h1>Projects!</h1>
    <div className="card mb-3">
    <div className="row no-gutters">
      <div className="col-md-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSN_R7Cil3CTvzE5ty1fMEYMF-Uy3842K285w&usqp=CAU" className="card-img" alt="washington state flag"></img>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h2 className="card-title">Washington Voter Dashboard</h2>
          <p className="card-text">
          The main purpose of this app is to provide those who are misinformed of Washington state, with access to information regarding their regional political candidates!
          </p>
          <p className="card-text">
          <a href="https://wmt36.github.io/WashingtonVoterDashboard/" className="btn btn-primary"> View the WA Voters Dashboard App</a>
          </p>
        </div>
      </div>
    </div>
  </div>
    <div className="card mb-3">
    <div className="row no-gutters">
      <div className="col-md-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCftdYjPcir1UeOR0UR9Dyz1l930hWjIL4ZQ&usqp=CAU" className="card-img" alt="helping hand"></img>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h2 className="card-title">Helping Hand!</h2>
          <p className="card-text">
          With this app our main goal is to provide access to free resources the ones who are experiencing homelessness.          </p>
          <p className="card-text">
          <a href="https://project3-helping-hand.herokuapp.com/" className="btn btn-primary"> View the Helping Hand App</a>
          </p>
        </div>
      </div>
    </div>
  </div>

    <div className="card mb-3">
    <div className="row no-gutters">
      <div className="col-md-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSku2hO_iYhJwFhlDQ3KkHg0KGcEwAluXvsA&usqp=CAU" className="card-img" alt="Employees"></img>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h2 className="card-title">Employee directory!</h2>
          <p className="card-text">
          With this app the goal was to create an Employee directory with the use of React and components. The code is created entirely by back end.
          </p>
          <p className="card-text">
          <a href="https://wmt36.github.io/UserDirectory/" className="btn btn-primary"> View the Employee Directory App</a>
          </p>
        </div>
      </div>
    </div>
  </div>

    <div className="card mb-3">
    <div className="row no-gutters">
      <div className="col-md-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRn8eNQtRSvw_UhZGPB3TXZGydfRMfg97Fzyg&usqp=CAU" className="card-img" alt="F t"></img>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h2 className="card-title">Fitness Tracker!</h2>
          <p className="card-text">
          A web application that will allow you to add new excerisces to a current workout, view previously added excerises, as well as see how your past performances have messeured through out the week. 
          </p>
          <p className="card-text">
          <a href="https://agile-plains-22155.herokuapp.com/" className="btn btn-primary"> View the Fitness Tracker App</a>
          </p>
        </div>
      </div>
    </div>
  </div>

    <div className="card mb-3">
    <div className="row no-gutters">
      <div className="col-md-4">
        <img src="https://i.imgur.com/yj5S4Zy.png" className="card-img" alt="Burger"></img>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h2 className="card-title">Burgers App!</h2>
          <p className="card-text">
          A simple application that shows a full-stack deployed application to Heroku, that allows you to use simple CRUD commands to interact with the data base!          </p>
          <p className="card-text">
          <a href="https://afternoon-sierra-08195.herokuapp.com/" className="btn btn-primary"> View the Burgers App</a>
          </p>
        </div>
      </div>
    </div>
  </div>



  </div>
  );
}
