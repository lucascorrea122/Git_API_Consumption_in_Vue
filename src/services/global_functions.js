// const token = '47089f64ffefa87a55f412f6f3735543c0c5fc56';

export default {
  getUsers: function (username) {
    const page = 1;
    
    return fetch(
      `https://api.github.com/search/users?q=${username}&page=${page}&per_page=10`,
      // {
      //   headers: {
      //     authorization: `token ${token}`,
      //   },
      // }
    ).then((response) => response.json());
  },

  getDataUser: function (username) {
    //   return fetch(`https://api.github.com/users/${username}/repos`, {
    return fetch(`https://api.github.com/users/${username}`, 
    // {
    //   headers: {
    //     authorization: `token ${token}`,
    //   },
    // }
    ).then((response) => response.json());
  },

  getReposUser: function (username) {
    return fetch(
      `https://api.github.com/users/${username}/repos?page=1&per_page=8`,
      // {
      //   headers: {
      //     authorization: `token ${token}`,
      //   },
      // }
    ).then((response) => response.json());
  }
}