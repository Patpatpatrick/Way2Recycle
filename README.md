# Way2Recycle

Link to deployed website
### https://way2recycle.herokuapp.com/

## A Simple Guidance for First Time Code Viewer:

### Basic Technology Requirements Coverage: 
Way2Recycle is a web-app which combines all the basic technologies covered in the lectures of CPSC 436I:
* Meteor backend
* React-Redux front-end
* MongoDB database
* Deployed to Heroku

Besides, other major parts or technical details that we employed include:
* Meteor-Accounts Library for User Management
* Usage of Google Map APIs
* A Parallel Mobile App with AngularJS
* RESTful API
* Import Material-UI which is A popular React UI framework

### Code style:
To run the project on localHost, run 
```
meteor 
```
in command line(You might be interrupted by npm package installation suggestions).

* Applying Good Coding Practice

Adopting the best practices is what we always have in mind. We not only make sure our code works as expected, but also keep it clean, well organized, and easy to maintain. For example, we would name different reducers accurately and precisely, extract utility components for reuse, group related components files in one subdirectory.

* To examine and understand the project structure:
   - ./client Client code entrance
   - ./imports all the front end code lie in this folder
      - /actions Redux Actions
      - /api Mongodb collection instances creation
      - /reducers Redux store reducers combined
      - /ui React Components. Components of one concept are organized in one folder named properly
   - ./mockup Web design demo pictures prototype
   - ./server Server-side code

The Mobile app was in an independent repo: https://github.com/zhuliangyu/ionic4-way2recycle

## Team Member Contribution Summary:
### Workflow:
At the beginning of each iteration, team members decide on basic outcomes and expectations of new features or visualization, basic idea to implement the new features. We would split the work based on the workload and each members’ command of the required technology.
Each member maintain an independent remote branch, after implementation and testing, team members would create a pull request to develop branch.
Occasional bug fix branch would be created and done under the inspection of more than one group member.
### Examples of team members’ contribution
* Front-End(Each member took significant leadership role and made contributions to the final presentation of the project):
   - Ricky: Lead us to finished the basic sketch and mock up. 
   - Henry: Took the leadership role in completing the User Module, Make contribution on styling and the implementation of Item Search List, User Dashboard.
   - Cynthia: Creating helpful utility components that can be shared among different pages, add reducers to the project to enrich the functionality, and make a contribution to the implementation of Home Page.
   - Guoyang: Mainly responsible for maintaining redux store to make sure actions and reducers are not misused, responsible for the Post Ads Module implementation and Google Map module, and assist Cynthia in implementing Home Page.
* Back-End:
   - Ricky & Cynthia: Finish CRUD Meteor backend operations.
   - Henry: Explore Users module configuration in the backend.
   - Ricky & Henry: Explore search functionality in the backend.
   - Guoyang: Offering suggestions for backend call arguments and expected interaction between front end and back end.
* Bug identifying and fixing:
   - Members identify bugs mostly before each pull request was finally merged. The person who initiates the pull request would describe the new feature usage, other members would test on the new feature as well as test regressively so as to make sure the new feature is interacting well with other existing parts.
   - Each members found some bugs on others’ pull request, and we would fix the bug individually or collaboratively before the commit is finally accepted.

## Problems intended to solve:

We achieved our basic functionality requirements of second-good exchange by allowing users to post, view, search, edit, delete, and manage items. Even though Craigslist is a world-known website for posting a second-hand item, as UBC students, our team found that there are a large number of unrelative services  and items posted online. Besides, Craiglist didn't provide a free RESTful API for other developers. Therefore, our team plan to build an open-source app only for the local community for recycling unwanted items and saving the planet. In the meantime, we open the API to any developer who wants to build more services based on our platform.

We use Meteor and MongoDB in the backend to store user’s and items’ information, and using React and Redux to write up each basic component (i.e., postAd, signIn, userList, utilityComponent) and store their state changes in the front end.

Specifically, we implemented the following features to make our app easy to use:

* For posting items: 
   - Picture-uploading functions by using base-64 encoding and decoding to store the string of ImagePreviewUrl in MongoDB. 
   - Map functions that allow users to specify trade locations. It includes: 
      - autosuggestions of location names
      - auto-display of full address after locations are pinned on map.
* For viewing items:
   - Search functions, by category and keywords in items’ titles and descriptions. 
   - Filter functions, by price ranges and posted dates. 
   - Display of traders’ names and email addresses for contact purposes
   - “Like” functions, which measures the popularity of an item
* For managing items: the user’s dashboards, which allows signed-in users to:
   - Edit items, including updating location information and pictures
   - Delete items that they posted
   - Check how many “likes” each posted item received
* For log in system: 
   - Sign Up
   - Sign In
   - Forget-password 
   - Third-party log-in (Google)
 
## Challenges, learning, and future directions:
 
* The major challenge was styling. 
   - At first, we had issues with Boostrap. For example, it takes time to figure out the grid system of Bootstrap to display four columns in one row. 
   - Later in our project, we incorporated the feedback from Michelle and other groups about styling. We changed from using Bootstrap to relying on material-ui. 
   - We found this change quite successful, as our website’s appearance has improved significantly.
* Another challenge was with Log In. 
   - At the very beginning, the forget-password function does not work on some branches. When the user presses the “forget-password” button, no message was generated. 
   - We figured out the issue was related to Gmail’s server and fixed the problem so that Gmail account holder can receive the password-recovery link properly.
* Using Customized Google Map is also a challenge
   - Have to make sure we are using the right attritubes and calls against the given documentation.
 
## Initiative and additional contributions:
* Our group integrates React into Meteor by Methods called from the front-end, which is not a stand restful API. For the extension, we provide a standard RESTful API for future developers to extend our services in future. 
* Besides, we build a hybrid mobile app to allow our customers to connect to our RESTful API and browse a list of products and detail view of each one.
   - The hybrid mobile app is using Ionic framework, which is a combination of Angular and Cordova to compile Javascript to two different platforms Andriod and iOS at the same time.  
   - Our team spent two weeks to learn a new front-end framework Angular, and develop the mobile app to run the iOS and Andriod app from simulators in demo.
Please read more detail of the mobile app from the GitHub repo below. 
https://github.com/zhuliangyu/ionic4-way2recycle

