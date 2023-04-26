# Exploring HTTP Protocol and Postman

This week we have explored writing asynchronous functions and making requests to an API. But what's actually happening when we fire off an HTTP request, where does this request go, and where does the response come from?

In this journal, we will explain HTTP protocol as well as explore client-server communication using a tool called Postman.


## What is the HTTP Protocol?

HTTP is a protocol, or a system of rules, that defines how data is exchanged from the client to the server; this is the foundation of any data exchange on the Web. Clients and servers communicate by exchanging individual messages: the `request` and the `response`. `Requests` are initiated by the client, typically a Web browser, and the server sends back a `response`. Tere are numerous entities such as [proxies](https://developer.mozilla.org/en-US/docs/Glossary/Proxy_server) and [caches](https://developer.mozilla.org/en-US/docs/Glossary/Cache) between the client and the server to facilliate this exchange of data. 

Your first introduction to HTTP is actually just spinning up a local Web page. Anytime the browser navigates to a new Web page, the browser must fetch the HTML document in order to display its content. The browser then parses the HTML file to make any additional requests, such as loading the display from a linked CSS stylesheet, or executing scripts from a JavaScript file.


## Asynchronous JavaScript and XML (AJAX)

Though we might now have a better understanding of client-server communication, we haven't quite yet addressed what `'GET'` `'POST'` `'PUT'` and `'DELETE'` are actually doing under the hood. AJAX stands for asynchronous JavaScript and XML; as developers, we use the [AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX) model to make requests to servers and quickly update the UI accordingly without needing to reload the entire web browser. By utilizing asyncrhonous calls to the server, we are able to get, create, edit, and delete data from the client. 

> Note that AJAX is not a technology itself, but rather refers to the model of writing asynchronous JavaScript with the [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) object. You will most commonly see either [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) or [Axios](https://axios-http.com/docs/intro) used to support AJAX.

## Postman

So what if we have a server that we want to make requests to, but no client to send these requests from? We can use a tool called [Postman](https://www.postman.com/). to facillitate sending these request messages to our server without ever needing to open up a Web broweser; this makes Postman a powerful tool for testing `HTTP methods` during the development phase.

Let's explore this by using Postman to make our basic CRUD requests to the sandbox server. For the sake of familiarity, we are going to `'GET'`, `'POST'`, `'PUT'`, and `'DELETE'` our notes for `Jot`. 

__Creating a New Request__

When you first begin using Postman, you will be greeted with a blank workspace. In order to begin sending requests to the sandbox, we must first create them. 

You will select the `'New'` button, and then select `'HTTPRequest'`

![Postman-Home](https://cwcurriculum.blob.core.windows.net/fullstack/assets/img/postman-readme-newReq.png)

![Postman-Modal](https://cwcurriculum.blob.core.windows.net/fullstack/assets/img/postman-readme-newReqModal.png)

After creating the request, you will next need to select what CRUD method you would like to send, and the endpoint for the request. We'll start with a basic `'GET '` request to the `notes` endpoint.

![Postman-BaseURL](https://cwcurriculum.blob.core.windows.net/fullstack/assets/img/postman-readme-reqUrl.png)

Click the `'Send'` button to fire off the request. The server's response will be visible in the bottom half of the Postman terminal.

__Sending a Request Body__

For handling requests that require a body, such as `'POST'` and `'PUT'`, you will need to make sure to fill out the body portion of the test. The following example shows off a `'POST'` request. Make sure to select `raw` and change the format to `JSON`.

![Postman-Post](https://cwcurriculum.blob.core.windows.net/fullstack/assets/img/postman-readme-postReq.png)

__The Remaining CRUD Methods__

Below you will find all of the endpoints supported for notes by the sandbox. Try to get a `200 OK` response for each one.

|Notes   |endpoint                    |usage   |
|:---     |    :---                      | ---    |
|GET      | /api/notes           | get all of the notes    |
|POST      | /api/notes| creates a new note in the server    |
|PUT      | /api/notes/`:id`   | edits the body of *that* note by its id |
|DELETE      | /api/notes/`:id`    | deletes a note by its id from the server |

