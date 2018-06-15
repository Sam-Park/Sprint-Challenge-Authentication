<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
bycrypt is for hasing passwords. Middleware serves as a middleman of sorts, functions living between applications and dbs or any type of software. A session is a place to store information across requests, each user has a unique session. JWT or jsonwebtokens is a way to transfer information securely between parties.


2.  What does bcrypt do in order to prevent attacks?
It stores the password as a hash on the database.

3.  What are the three parts of the JSON Web Token?
    header, payload signature