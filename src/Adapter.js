import React from "react";

const usersURL = "http://localhost:3000/api/v1/users";
const followsURL = "http://localhost:3000/api/v1/follows";
const objectivesURL = "http://localhost:3000/api/v1/objectives";
const spendingsURL = "http://localhost:3000/api/v1/spendings";

export default class Adapter extends React.Component {
  //------------USER--------------

  fetchUsers = () => {
    return fetch(`${usersURL}/`).then(resp => resp.json());
  };

  fetchUser = userId => {
    return fetch(`${usersURL}/${userId}`).then(resp => resp.json());
  };

  createUser = object => {
    return fetch(usersURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object)
    }).then(resp => resp.json());
  };

  //----------OBJECTIVES----------------

  fetchObjectives = () => {
    return fetch(`${objectivesURL}/`).then(resp => resp.json());
  };

  fetchObjective = objectiveId => {
    return fetch(`${objectivesURL}/${objectiveId}`).then(resp => resp.json());
  };

  postObjective = objective => {
    return fetch(`${objectivesURL}/${objective.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objective)
    }).then(resp => resp.json());
  };

  patchObjective = objective => {
    return fetch(`${objectivesURL}/${objective.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objective)
    }).then(resp => resp.json());
  };

  deleteObjective = objectiveId => {
    return fetch(`${objectivesURL}/${objectiveId}`, {
      method: "DELETE"
    }).then(resp => resp.json());
  };

  //----------FOLLOWS----------------

  fetchFollows = () => {
    return fetch(`${followsURL}/`).then(resp => resp.json());
  };

  fetchFollow = followId => {
    return fetch(`${followsURL}/${followId}`).then(resp => resp.json());
  };

  postFollow = follow => {
    return fetch(`${followsURL}/${follow.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(follow)
    }).then(resp => resp.json());
  };

  patchFollow = follow => {
    return fetch(`${followsURL}/${follow.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(follow)
    }).then(resp => resp.json());
  };

  deleteFollow = followId => {
    return fetch(`${followsURL}/${followId}`, {
      method: "DELETE"
    }).then(resp => resp.json());
  };

  //--------------SPENDINGS------------

  fetchSpendings = () => {
    return fetch(`${spendingsURL}/`).then(resp => resp.json());
  };

  fetchSpending = spendingId => {
    return fetch(`${spendingsURL}/${spendingId}`).then(resp => resp.json());
  };

  postSpending = spending => {
    return fetch(`${spendingsURL}/${spending.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(spending)
    }).then(resp => resp.json());
  };

  patchSpending = spending => {
    return fetch(`${spendingsURL}/${spending.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(spending)
    }).then(resp => resp.json());
  };

  deleteSpending = spendingId => {
    return fetch(`${spendingsURL}/${spendingId}`, {
      method: "DELETE"
    }).then(resp => resp.json());
  };
}
