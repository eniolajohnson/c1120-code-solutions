var $userList = document.querySelector("#user-list");

  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    var xhrResponse = xhr.response;
    for (var i = 0; i < xhrResponse.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = xhrResponse[i].name
      $userList.append(liElement);
    }
  })

  xhr.send();
