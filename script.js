const quizData = [
    {
        id: "q1",
        isMultiple: false,
        question: "Universal Containers wants to back up all of the data and attachments in its Salesforce org once month. Which approach should a developer use to meet this requirement?",
        options: [
            { letter: "A", text: "Use the Data Loader command line." },
            { letter: "B", text: "Create a Schedulable Apex class." },
            { letter: "C", text: "Schedule a report." },
            { letter: "D", text: "Define a Data Export scheduled job." }
        ],
        answer: "D"
    },
    {
        id: "q2",
        isMultiple: false,
        question: "Cloud Kicks Fitness, an ISV Salesforce partner, is developing a managed package application. One of the application modules allows the user to calculate body fat using the Apex class, BodyFat, and its method, calculateBodyFat(). The product owner wants to ensure this method is accessible by the consumer of the application when developing customizations outside the ISV's package namespace.\nWhich approach should a developer take to ensure calculateBodyFat() is accessible outside the package namespace?",
        options: [
            { letter: "A", text: "Declare the class and method using the public access modifier." },
            { letter: "B", text: "Declare the class as global and use the public access modifier on the method." },
            { letter: "C", text: "Declare the class as public and use the global access modifier on the method." },
            { letter: "D", text: "Declare the class and method using the global access modifier." }
        ],
        answer: "D"
    },
    {
        id: "q3",
        isMultiple: false,
        question: "As part of a data cleanup strategy, AW Computing wants to proactively delete associated opportunity records when the related Account is deleted. Which automation tool should be used to meet this business requirement?",
        options: [
            { letter: "A", text: "Workflow Rules" },
            { letter: "B", text: "Scheduled job" },
            { letter: "C", text: "Record-Triggered Flow" },
            { letter: "D", text: "Process Builder" }
        ],
        answer: "C"
    },
    {
        id: "q4",
        isMultiple: false,
        question: "What should be used to create scratch orgs?",
        options: [
            { letter: "A", text: "Developer Console" },
            { letter: "B", text: "Salesforce CLI" },
            { letter: "C", text: "Workbench" },
            { letter: "D", text: "Sandbox refresh" }
        ],
        answer: "B"
    },
    {
        id: "q5",
        isMultiple: false,
        question: "Which salesforce org has a complete duplicate copy of the production org including data and configuration?",
        options: [
            { letter: "A", text: "Developer Pro Sandbox" },
            { letter: "B", text: "Partial Copy Sandbox" },
            { letter: "C", text: "Production" },
            { letter: "D", text: "Full Sandbox" }
        ],
        answer: "D"
    },
    {
        id: "q6",
        isMultiple: false,
        question: "A Salesforce Administrator is creating a record-triggered flow. When certain criteria are met, the flow must call an Apex method to execute complex validation involving several types of objects. When creating the Apex method, which annotation should a developer use to ensure the method. Can be used within the flow?",
        options: [
            { letter: "A", text: "@future" },
            { letter: "B", text: "@RemoteAction" },
            { letter: "C", text: "@InvocableMethod" },
            { letter: "D", text: "@AuraEnaled" }
        ],
        answer: "C"
    },
    {
        id: "q7",
        isMultiple: false,
        question: "When a user edits the Postal Code on an Account, a custom Account text field named ''Timezone'' must be updated based on the values in a postalCodeToTimezone_c custom object. What should be built to implement this feature?",
        options: [
            { letter: "A", text: "Account custom trigger" },
            { letter: "B", text: "Account approval process" },
            { letter: "C", text: "Account assignment rule" },
            { letter: "D", text: "Account workflow rule" }
        ],
        answer: "A"
    },
    {
        id: "q8",
        isMultiple: false,
        question: "The values 'High', 'Medium', and 'Low' are Identified as common values for multiple picklist across different object. What is an approach a developer can take to streamline maintenance of the picklist and their values, while also restricting the values to the ones mentioned above?",
        options: [
            { letter: "A", text: "Create the Picklist on each object and use a Global Picklist Value Set containing the Values." },
            { letter: "B", text: "Create the Picklist on each object as a required field and select 'Display values alphabeticaly, not in the order entered'." },
            { letter: "C", text: " Create the Picklist on each object and select 'Restrict picklist to the values defined in the value set'." },
            { letter: "D", text: "Create the Picklist on each and add a validation rule to ensure data integrity." }
        ],
        answer: "A"
    },
    {
        id: "q9",
        isMultiple: false,
        question: "A developer writes a trigger on the Account object on the before update event that increments a count field. A workflow rule also increments the count field every time that an Account is created or updated. The field update in the workflow rule is configured to not re-evaluate workflow rules. What is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?",
        options: [
            { letter: "A", text: "1" },
            { letter: "B", text: "3" },
            { letter: "C", text: "4" },
            { letter: "D", text: "2" }
        ],
        answer: "D"
    },
    {
        id: "q10",
        isMultiple: false,
        question: "Which action causes a before trigger to fire by default for Accounts?",
        options: [
            { letter: "A", text: "Renaming or replacing picklist" },
            { letter: "B", text: "Importing data using the Data Loader and the Bulk API" },
            { letter: "C", text: "Converting Leads to Contact accounts" },
            { letter: "D", text: "Updating addresses using the Mass Address update tool" }
        ],
        answer: "B"
    },
    {
        id: "q11",
        isMultiple: false,
        question: "A developer must provide custom user interfaces when users edit a Contact in either Salesforce Classic or Lightning Experience. What should the developer use to override the Contact's Edit button and provide this functionality?",
        options: [
            { letter: "A", text: "A Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience" },
            { letter: "B", text: "A Lightning component in 5alesforce Classic and a Lightning component in lightning Experience" },
            { letter: "C", text: "A Visualforce page in Salesforce Classic and a Lightning page in Lightning Experience" },
            { letter: "D", text: "A Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience" }
        ],
        answer: "A"
    },
    {
        id: "q12",
        isMultiple: false,
        question: "AW Computing tracks order information in custom objects called order__c and order_Line_ c- Currently, all shipping information is stored in the order__c object. The company wants to expand Its order application to support split shipments so that any number of order_Line__c records on a single order__c can be shipped to different locations. What should a developer add to fulfill this requirement?",
        options: [
            { letter: "A", text: "Order_shipment_Group_c object and master-detail field on order_Line_c" },
            { letter: "B", text: "Order_shipment_Group_c object and master-detail field on order_c" },
            { letter: "C", text: "Order_shipment_Group_c object and master-detail field to order_c and Order Line_c" },
            { letter: "D", text: "Order_shipment_Group_c object and master-detail field on order_shipment_Group_c" }
        ],
        answer: "C"
    },
    {
        id: "q13",
        isMultiple: false,
        question: "What should a developer use to obtain the Id and Name of all the Leads. Accounts, and Contacts that hove the company name 'Universal Containers'?",
        options: [
            { letter: "A", text: "FIND 'Universal Containers' IN Name Fields RETURNING lead(id, name), account (id, name), contact(id, name)" },
            { letter: "B", text: "FIND 'Universal Containers' IN CompanyName Fields RETURNING lead(id, name), account (id, name), contact(id, name)" },
            { letter: "C", text: "SELECT lead(id, name), account (id, name), contact(id, name) FROM Lead, Account, Contact WHERE Name = 'Universal Containers'" },
            { letter: "D", text: "SELECT Lead.Id, Lead.Name, Account.Id, Account.Name, Contact.Id, Contact.Name FROM Lead, Account, Contact WHERE CompanyName = 'Universal Containers'" }
        ],
        answer: "A"
    },
    {
        id: "q14",
        isMultiple: false,
        question: "Which aspect of Apex programming is limited due to multitenancy?",
        options: [
            { letter: "A", text: "The number of active Apex classes" },
            { letter: "B", text: "The number of methods in an Apex Class" },
            { letter: "C", text: "The number of records processed in a loop" },
            { letter: "D", text: "The number of records returned from database queries" }
        ],
        answer: "D"
    },
    {
        id: "q15",
        isMultiple: false,
        question: "Since Aura application events follow the traditional publish-subscribe model, which method is used to fire an event?",
        options: [
            { letter: "A", text: "emit()" },
            { letter: "B", text: "fireEvent()" },
            { letter: "C", text: "fire()" },
            { letter: "D", text: "registerEvent()" }
        ],
        answer: "C"
    },
    {
        id: "q16",
        isMultiple: false,
        question: "A developer needs to have records with specific field values in order to test a new Apex class. What should the developer do to ensure the data is available to the test?",
        options: [
            { letter: "A", text: "Use Anonymous Apex to create the required data." },
            { letter: "B", text: "Use SOQL to query the org for the required data." },
            { letter: "C", text: "Use Test.loadDataO &lt &gt and reference a CSV file in a static resource." },
            { letter: "D", text: "Use Test.loadDataO and reference a JSON file in Documents." }
        ],
        answer: "C"
    },
    {
        id: "q17",
        isMultiple: false,
        question: "What should a developer do to check the code coverage of a class after running all tests?",
        options: [
            { letter: "A", text: "View the code coverage percentage or the class using the Overalll code Coverage panel in the Developer Console Test tab." },
            { letter: "B", text: "Select and run the class on the Apex Test Execution page in the Developer Console." },
            { letter: "C", text: "View the Class test Percentage tab on the Apex Class list view in Salesforce Setup." },
            { letter: "D", text: "View the Code Coverage column in the list on the Apex Classes page." }
        ],
        answer: "A"
    },
    {
        id: "q18",
        isMultiple: false,
        question: "Universal Containers has a Visualforce page that displays a table of every Container_c being rented by a given Account. Recently this page failing with a view state limit because some of the customers rent over 10,000 containers. What should a developer change about the Visualforce page to help with the page load errors?",
        options: [
            { letter: "A", text: "Implement pagination with an OffsetController." },
            { letter: "B", text: "Use JavaScript remoting with SOQL Offset." },
            { letter: "C", text: "Use Lazy loading and a transient List variable." },
            { letter: "D", text: "Implement pagination with a StandardSetController" }
        ],
        answer: "D"
    },
    {
        id: "q19",
        isMultiple: false,
        question: "A developer Is Integrating with a legacy on-premise SQL database. What should the developer use to ensure the data being Integrated is matched to the right records in Salesforce?",
        options: [
            { letter: "A", text: "External Object" },
            { letter: "B", text: "External ID field" },
            { letter: "C", text: "Lookup field" },
            { letter: "D", text: "Formula field" }
        ],
        answer: "B"
    },
    {
        id: "q20",
        isMultiple: false,
        question: "A developer is creating a Lightning web component to showa list of sales records. The Sales Representative user should be able to see the commission field on each record. The Sales Assistant user should be able to see all fields on the record except the commission field. How should this be enforced so that the component works for both users without showing any errors?",
        options: [
            { letter: "A", text: "Use Security. stripInaccessible to remove fields inaccessible to the current user." },
            { letter: "B", text: "Use Lightning Data Service to get the collection of sales records." },
            { letter: "C", text: "Use WITH SECURITY_ENFORCED in the SOQL that fetches the data for the component." },
            { letter: "D", text: " Use Lightning Locker Service to enforce sharing rules and field-level security." }
        ],
        answer: "A"
    },
    {
        id: "q21",
        isMultiple: false,
        question: "Which scenario is valid for execution by unit tests?",
        options: [
            { letter: "A", text: "Generate a Visualforce PDF with geccontentAsPDF ()." },
            { letter: "B", text: "Load data from a remote site with a callout." },
            { letter: "C", text: "Set the created date of a record using a system method." },
            { letter: "D", text: "Execute anonymous Apex as a different user." }
        ],
        answer: "C"
    },
    {
        id: "q22",
        isMultiple: false,
        question: "Universal Containers stores the availability date on each Line Item of an Order and Orders are only shipped when all of the Line Items are available. Which method should be used to calculate the estimated ship date for an Order?",
        options: [
            { letter: "A", text: "Use a LATEST formula on each of the latest availability date fields." },
            { letter: "B", text: "Use a CEILING formula on each of the Latest availability date fields." },
            { letter: "C", text: "Use a DAYS formula on each of the availability date fields and a COUNT Roll-Up Summary field on the Order." },
            { letter: "D", text: "Use a Max Roll-Up Summary field on the Latest availability date fields." }
        ],
        answer: "D"
    },
    {
        id: "q23",
        isMultiple: false,
        question: "Which statement describes the execution order when trigger are associated to the same object and event?",
        options: [
            { letter: "A", text: "Triggers are executed in the order they are modified" },
            { letter: "B", text: "Trigger execution order cannot be guaranteed." },
            { letter: "C", text: "Triggers are executed in the order they are created." },
            { letter: "D", text: "Triggers are executed alphabetically by trigger name." }
        ],
        answer: "B"
    },
    {
        id: "q24",
        isMultiple: false,
        question: "The Job_Application__c custom object has a field that is a Master-Detail relationship to the Contact object, where the Contact object is the Master. As part of a feature implementation, a developer needs to retrieve a list containing all Contact records where the related Account Industry is 'Technology' while also retrieving the contact's Job_Application__c records. Based on the object's relationships, what is the most efficient statement to retrieve the list of contacts?",
        options: [
            { letter: "A", text: "[SELECT Id, (SELECT Id FROM Job_Applications_r) FROM Contact WHERE Account.Industry = 'Technology'];" },
            { letter: "B", text: "[SELECT Id, (SELECT Id FROM Job_Applications_c) FROM Contact WHERE Accounts.Industry = 'Technology'];" },
            { letter: "C", text: "[SELECT Id, (SELECT Id FROM Job_Application_c) FROM Contact WHERE Account.Industry = 'Technology'];" },
            { letter: "D", text: "[SELECT Id, (SELECT Id FROM Job_Applications_r) FROM Contact WHERE Accounts.Industry = 'Technology'];" }
        ],
        answer: "A"
    },
    {
        id: "q25",
        isMultiple: false,
        question: "A developer has the following requirements: * Calculate the total amount on an Order. * Calculate the line amount for each Line Item based on quantity selected and price. * Move Line Items to a different Order if a Line Item is not in stock. Which relationship implementation supports these requirements on its own?",
        options: [
            { letter: "A", text: "Order has a re-parentable lookup field to Line Item." },
            { letter: "B", text: "Line Item has a re-parentable master-detail field to Order." },
            { letter: "C", text: "Order has a re-parentable master-detail field to Line Item." },
            { letter: "D", text: "Line Item has a re-parentable lookup field to Order." }
        ],
        answer: "B"
    },
    {
        id: "q26",
        isMultiple: false,
        question: "A developer is writing tests for a class and needs to insert records to validate functionality. Which annotation method should be used to create record for every method in the test class?",
        options: [
            { letter: "A", text: "@isTest (SeeAllData-true)" },
            { letter: "B", text: "@TestSetup" },
            { letter: "C", text: "@StartTest" },
            { letter: "D", text: "@FreTest" }
        ],
        answer: "B"
    },
    {
        id: "q27",
        isMultiple: false,
        question: "An org has an existing flow that creates an Opportunity with an Update Records element. A developer must update the flow to also create a 'Contact and store the created Contact's ID on the Opportunity. Which update must the developer make in the flow?",
        options: [
            { letter: "A", text: "Add a new Update Records element." },
            { letter: "B", text: "Add a new Get Records element." },
            { letter: "C", text: "Add a new Roll back Records element" },
            { letter: "D", text: "Add a new Create Records element." }
        ],
        answer: "D"
    },
    {
        id: "q28",
        isMultiple: false,
        question: "Universal Container is building a recruiting app with an Applicant object that stores information about an individual person that represents a job. Each application may apply for more than one job. What should a developer implement to represent that an applicant has applied for a job?",
        options: [
            { letter: "A", text: "Lookup field from Applicant to Job" },
            { letter: "B", text: "Junction object between Applicant and Job" },
            { letter: "C", text: "Master-detail field from Applicant to Job" },
            { letter: "D", text: "Formula field on Applicant that references Job" }
        ],
        answer: "C"
    },
    {
        id: "q29",
        isMultiple: false,
        question: " In the Lightning UI, where should a developer look to find information about a Paused Flow Interview?",
        options: [
            { letter: "A", text: "In the system debug log by Altering on Paused Row Interview" },
            { letter: "B", text: "On the Paused Row Interviews component on the Home page" },
            { letter: "C", text: "In the Paused Interviews section of the Apex Flex Queue" },
            { letter: "D", text: "On the Paused Row Interviews related List for a given record" }
        ],
        answer: "C"
    },
    {
        id: "q30",
        isMultiple: false,
        question: "A developer observes that an Apex test method fails in the Sandbox. To identify the issue, the developer copies the code inside the test method and executes it via the Execute Anonymous tool in the Developer Console. The code then executes with no exceptions or errors. Why did the test method fail in the sandbox and pass in the Developer Console?",
        options: [
            { letter: "A", text: "The test method is calling an @future method." },
            { letter: "B", text: "The test method relies on existing data in the sandbox." },
            { letter: "C", text: "The test method does not use System.runAs to execute as a specific user." },
            { letter: "D", text: "The test method has a syntax error in the code." }
        ],
        answer: "B"
    },
    {
        id: "q31",
        isMultiple: false,
        question: "A developer wrote an Apex method to update a list of Contacts and wants to make it available for use by Lightning web components. Which annotation should the developer add to the Apex method to achieve this?",
        options: [
            { letter: "A", text: "@RemoteAction(cacheable=true)" },
            { letter: "B", text: "@AuraEnabled" },
            { letter: "C", text: "@AuraEnabled(cacheable=true)" },
            { letter: "D", text: "@RemoteActio" }
        ],
        answer: "B"
    },
    {
        id: "q32",
        isMultiple: false,
        question: "Cloud kicks has a multi-screen flow that its call center agents use when handling inbound service desk calls. At one of the steps in the flow, the agents should be presented with a list of order numbers and dates that are retrieved from an external order management system in real time and displayed on the screen. What should a developer use to satisfy this requirement?",
        options: [
            { letter: "A", text: "An outbound message" },
            { letter: "B", text: "An Apex REST class" },
            { letter: "C", text: "An invocable method" },
            { letter: "D", text: "An Apex controller" }
        ],
        answer: "B"
    },
    {
        id: "q33",
        isMultiple: false,
        question: "A developer is migrating a Visualforce page into a Lightning web component. The Visualforce page shows information about a single record. The developer decides to use Lightning Data Service to access record data. Which security consideration should the developer be aware of",
        options: [
            { letter: "A", text: "Lightning Data Service ignores field-level security." },
            { letter: "B", text: "Lightning Data Service handles sharing rules and field-level security." },
            { letter: "C", text: "The isAccessible ( ) method must be used for field-level access checks" },
            { letter: "D", text: "The with sharing keyword must be used to enforce sharing rules." }
        ],
        answer: "B"
    },
    {
        id: "q34",
        isMultiple: false,
        question: "Which Apex class contains methods to return the amount of resources that have been used for a particular governor, such as the number of DML statements?",
        options: [
            { letter: "A", text: "OrgLimits" },
            { letter: "B", text: "Messaging" },
            { letter: "C", text: "Limits" },
            { letter: "D", text: "Exception" }
        ],
        answer: "C"
    },
    {
        id: "q35",
        isMultiple: false,
        question: "What should a developer use to script the deployment and unit test execution as part of continuous integration?",
        options: [
            { letter: "A", text: "Salesforce CLI" },
            { letter: "B", text: "Execute Anonymous" },
            { letter: "C", text: "Developer Console" },
            { letter: "D", text: "VS Code" }
        ],
        answer: "A"
    },
    {
        id: "q36",
        isMultiple: false,
        question: "A developer must provide custom user interfaces when users edit a Contact in either Salesforce Classic or Lightning Experience. What should the developer use to override the Contact's Edit button and provide this functionality?",
        options: [
            { letter: "A", text: "A Visualforce page in Salesforce Classic and a Lightning page in Lightning Experience" },
            { letter: "B", text: "A Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience" },
            { letter: "C", text: "A Lightning component in 5alesforce Classic and a Lightning component in lightning Experience" },
            { letter: "D", text: "A Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience" }
        ],
        answer: "B"
    },
    {
        id: "q37",
        isMultiple: false,
        question: "What is the result of the following code? Account a = new Account (); Database.insert (a, false);",
        options: [
            { letter: "A", text: "The record will not be created and a exception will be thrown." },
            { letter: "B", text: "The record will be created and no error will be reported." },
            { letter: "C", text: "The record will be created and a message will be in the debug log." },
            { letter: "D", text: "The record will not be created and no error will be reported." }
        ],
        answer: "D"
    },
    {
        id: "q38",
        isMultiple: false,
        question: "A developer created a custom order management app that uses an Apex class. The order is represented by an Order object and an Orderltem object that has a master-detail relationship to Order. During order processing, an order may be split into multiple orders. What should a developer do to allow their code to move some existing Orderltem records to a new Order record?",
        options: [
            { letter: "A", text: "Add without sharing to the Apex class declaration." },
            { letter: "B", text: "Change the master-detail relationship to an external lookup relationship." },
            { letter: "C", text: "Create a junction object between Orderltem and Order." },
            { letter: "D", text: "Select the Allow reparenting option on the master-detail relationship." }
        ],
        answer: "C"
    },
    {
        id: "q39",
        isMultiple: false,
        question: "A developer is debugging the following code to determinate why Accounts are not being created Account a = new Account(Name = 'A'); Database.insert(a, false); How should the code be altered to help debug the issue?",
        options: [
            { letter: "A", text: "Add a try/catch around the insert method" },
            { letter: "B", text: "Collect the insert method return value a Saveresult variable" },
            { letter: "C", text: "Set the second insert method parameter to TRUE" },
            { letter: "D", text: "Add a System.debug() statement before the insert method" }
        ],
        answer: "B"
    },
    {
        id: "q40",
        isMultiple: false,
        question: "A developer wants to get access to the standard price book in the org while writing a test class that covers an OpportunityLineItem trigger. Which method allows access to the price book?",
        options: [
            { letter: "A", text: "Use Test.loadData ( )and a static resource to load a standard price book" },
            { letter: "B", text: "Use @TestVisible to allow the test method to see the standard price book." },
            { letter: "C", text: "Use Test.getStandardPricebookid() to get the standard price book ID." },
            { letter: "D", text: "Use @IsTest (SeeAllData=True) and delete the existing standard price book" }
        ],
        answer: "C"
    },
    {
        id: "q41",
        isMultiple: false,
        question: "A custom picklist field, Food_Preference__c, exist on a custom object. The picklist contains the following options: 'Vegan','Kosher','No Preference'. The developer must ensure a value is populated every time a record is created or updated. What is the most efficient way to ensure a value is selected every time a record is saved?",
        options: [
            { letter: "A", text: "Set 'Use the first value in the list as the default value' as True." },
            { letter: "B", text: "Mark the field as Required on the object's page layout." },
            { letter: "C", text: "Set a validation rule to enforce a value is selected." },
            { letter: "D", text: "Mark the field as Required on the field definition." }
        ],
        answer: "D"
    },
    {
        id: "q42",
        isMultiple: false,
        question: "When a user edits the Postal Code on an Account, a custom Account text field named 'Timezone' must be updated based on the values another custom object object called. What is the optimal way to Implement this feature?",
        options: [
            { letter: "A", text: "Build an account assignment rule." },
            { letter: "B", text: "Build a flow with flow Builder." },
            { letter: "C", text: "Create an account approval process." },
            { letter: "D", text: "Create a formula field." }
        ],
        answer: "B"
    },
    {
        id: "q43",
        isMultiple: false,
        question: "A custom object Trainer_c has a lookup field to another custom object Gym___c. Which SOQL query will get the record for the Viridian City gym and it's trainers?",
        options: [
            { letter: "A", text: "SELECT ID FROM Trainer_c WHERE Gym__r.Name- Viridian City Gym'" },
            { letter: "B", text: "SELECT Id, (SELECT Id FROM Trainer_c) FROM Gym_c WHERE Name- Viridian City Gym'" },
            { letter: "C", text: "SELECT Id, (SELECT Id FROM Trainers) FROM Gym_C WHERE Name- Viridian City Gym'" },
            { letter: "D", text: "SELECT Id, (SELECT Id FROM Trainers__r) FROM Gym__c WHERE Name = 'Viridian City Gym'" }
        ],
        answer: "D"
    },
    {
        id: "q44",
        isMultiple: false,
        question: "What can be used to override the Account's standard Edit button for Lightning Experience?",
        options: [
            { letter: "A", text: "Lightning action" },
            { letter: "B", text: "Lightning component" },
            { letter: "C", text: "Lightning page" },
            { letter: "D", text: "Lightning flow" }
        ],
        answer: "B"
    },
    {
        id: "q45",
        isMultiple: false,
        question: "A developer is creating an app that contains multiple Lightning web components. One of the child components is used for navigation purposes. When a user click a button called component, the parent component must be alerted so it can navigate to the next page. How should this be accomplished?",
        options: [
            { letter: "A", text: "Create a custom event." },
            { letter: "B", text: "Update a property on the parent." },
            { letter: "C", text: "Call a method in the Apex controller." },
            { letter: "D", text: "Fire a notification." }
        ],
        answer: "A"
    },
    {
        id: "q46",
        isMultiple: false,
        question: "How can a developer check the test coverage of active Process Builder and Flows deploying them in a Changing Set?",
        options: [
            { letter: "A", text: "Use the code Coverage Setup page" },
            { letter: "B", text: "Use the Apex test result class" },
            { letter: "C", text: "Use the Flow properties page." },
            { letter: "D", text: "Use SOQL and the Tooling API" }
        ],
        answer: "D"
    },
    {
        id: "q47",
        isMultiple: false,
        question: " A developer must create a lightning component that allows users to input contact record information to create a contact record, including a salary__c custom field. what should the developer use, along with a lightning-record-edit form, so that salary__c field functions as a currency input and is only viewable and editable by users that have the correct field level permissions on salary__C?",
        options: [
            { letter: "A", text: "&ltligthning-input-field field-name='Salary__c'&gt&lt/lightning-input-field&gt" },
            { letter: "B", text: "&ltlightning-input-currency&gt value='Salary__c'&gt&lt/lightning-input-currency&gt" },
            { letter: "C", text: "&ltlightning-input&gt type='number' value='Salary__c' formatter='currency'&gt&lt/lightning-input&gt" },
            { letter: "D", text: "&ltlightning-formatted-number&gt value='Salary__c' format-style='currency'&gt&lt/lightning-formatted-number&gt" }
        ],
        answer: "A"
    },
    {
        id: "q48",
        isMultiple: false,
        question: "A software company uses the following objects and relationships: * Case: to handle customer support issues, * Defect_c: a custom object to represent known issues with the company's software, * case_Defect__c: a junction object between Case and Defector to represent that a defect Is a customer issue What should be done to share a specific Case-Defect_c record with a user?",
        options: [
            { letter: "A", text: "Share the parent Defect_c record." },
            { letter: "B", text: "Share the Case_Defect_c record" },
            { letter: "C", text: "Share the parent Case and Defect_c records." },
            { letter: "D", text: "Share the parent Case record." }
        ],
        answer: "C"
    },
    {
        id: "q49",
        isMultiple: false,
        question: "Universal Containers implemented a private sharing model for the Account object. A custom Account search tool was developed with Apex to help sales representatives find accounts that match multiple criteria they specify. Since its release, users of the tool report they can see Accounts they do not own. What should the developer use to enforce sharing permission for the currently logged-in user while using the custom search tool?",
        options: [
            { letter: "A", text: "Use the schema describe calls to determine if the logged-in users has access to the Account object." },
            { letter: "B", text: "Use the without sharing keyword on the class declaration." },
            { letter: "C", text: "Use the UserInfo Apex class to filter all SOQL queries to returned records owned by the logged-in user." },
            { letter: "D", text: "Use the with sharing keyword on the class declaration." }
        ],
        answer: "D"
    },
    {
        id: "q50",
        isMultiple: false,
        question: "A developer is asked to create a Visualforce page for Opportunities that allows users to save or merge the current record. Which approach should the developer to meet this requirement?",
        options: [
            { letter: "A", text: "A custom controller extension" },
            { letter: "B", text: "A custom controller" },
            { letter: "C", text: "Visualforce page JavaScript" },
            { letter: "D", text: "Standard controller methods" }
        ],
        answer: "A"
    },
    {
        id: "q51",
        isMultiple: true,
        question: "Which two sfdx commands can be used to add testing data to a Developer sandbox?",
        options: [
            { letter: "A", text: "Forced: data:bulk:upsert" },
            { letter: "B", text: "Forced: data: object :upsert" },
            { letter: "C", text: "Forced: data: tree: upsert" },
            { letter: "D", text: "Forced: data:async:upsert" }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q52",
        isMultiple: true,
        question: "What are three ways for a developer to execute tests in an org? Choose 3.",
        options: [
            { letter: "A", text: "Bulk API" },
            { letter: "B", text: "Tooling API" },
            { letter: "C", text: "Setup Menu" },
            { letter: "D", text: "Salesforce DX" },
            { letter: "E", text: "Metadata API." }
        ],
        answer: ["B", "C", "D"]
    },
    {
        id: "q53",
        isMultiple: true,
        question: "Which two settings must be defined in order to update a record of a junction object? Choose 2 answers.",
        options: [
            { letter: "A", text: "Read access on the primary relationship" },
            { letter: "B", text: "Read/Write access on the secondary relationship" },
            { letter: "C", text: "Read/Write access on the primary relationship" },
            { letter: "D", text: "Read/Write access on the junction object" }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q54",
        isMultiple: true,
        question: "In terms of the MVC paradigm, what are two advantages of implementing the layer of a Salesforce application using Aura Component-based development over Visualforce? Choose 2 answers.",
        options: [
            { letter: "A", text: "Self-contained and reusable units of an application" },
            { letter: "B", text: "Rich component ecosystem" },
            { letter: "C", text: "Automatic code generation" },
            { letter: "D", text: "Server-side run-time debugging" }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q55",
        isMultiple: true,
        question: "Which three code lines are required to create a Lightning component on a Visualforce page? Choose 3 answers.",
        options: [
            { letter: "A", text: "$Lightning.createComponent" },
            { letter: "B", text: "&ltapex:slds/&gt" },
            { letter: "C", text: "$Lightning.useComponent" },
            { letter: "D", text: "$Lightning.use" },
            { letter: "E", text: "&ltapex:includeLightning/&gt" }
        ],
        answer: ["A", "D", "E"]
    },
    {
        id: "q56",
        isMultiple: true,
        question: "A developer created a trigger on the Account object and wants to test if the trigger is properly bulkifield. The developer team decided that the trigger should be tested with 200 account records with unique names. What two things should be done to create the test data within the unit test with the least amount of code? Choose 2 answers.",
        options: [
            { letter: "A", text: "Use the @isTest(seeAllData=true) annotation in the test class." },
            { letter: "B", text: "Use the @isTest(isParallel=true) annotation in the test class." },
            { letter: "C", text: "Create a static resource containing test data." },
            { letter: "D", text: "Use Test.loadData to populate data in your test methods." }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q57",
        isMultiple: true,
        question: "A developer wants to invoke on outbound message when a record meets a specific criteria. Which three features satisfy this use case? Choose 3 answer.",
        options: [
            { letter: "A", text: "Process builder can be used to check the record criteria and send an outbound message with Apex Code." },
            { letter: "B", text: "Workflows can be used to check the record criteria and send an outbound message." },
            { letter: "C", text: "Visual Workflow can be used to check the record criteria and send an outbound message without Apex Code." },
            { letter: "D", text: "Approval Process has the capacity to check the record criteria and send an outbound message without Apex Code." },
            { letter: "E", text: "Process builder can be used to check the record criteria and send an outbound message without Apex Code." }
        ],
        answer: ["A", "B", "D"]
    },
    {
        id: "q58",
        isMultiple: true,
        question: "Which three options allow a developer to use custom styling in a Visualforce page? (Choose 3.)",
        options: [
            { letter: "A", text: "A static resource" },
            { letter: "B", text: "&ltapex:stylesheets&gttag" },
            { letter: "C", text: "&ltapex:style&gttag" },
            { letter: "D", text: "&ltapex:stylesheet&gt tag" },
            { letter: "E", text: "Inline CSS" }
        ],
        answer: ["A", "D", "E"]
    },
    {
        id: "q59",
        isMultiple: true,
        question: "Universal Container* decides to use purely declarative development to build out a new Salesforce application. Which two options can be used to build out logic layer for this application? Choose 2 answer",
        options: [
            { letter: "A", text: "Remote Actions" },
            { letter: "B", text: "Record- Triggered flow" },
            { letter: "C", text: "Validation Rules" },
            { letter: "D", text: "Batch Jobs" }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q60",
        isMultiple: true,
        question: "What are two use cases for executing Anonymous Apex code? Choose 2 answers",
        options: [
            { letter: "A", text: "To schedule an Apex class to run periodically" },
            { letter: "B", text: "To delete 15,000 inactive Accounts In a single transaction after a deployment" },
            { letter: "C", text: "To add unit test code coverage to an org" },
            { letter: "D", text: "To run a batch Apex class to update all Contacts" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q61",
        isMultiple: true,
        question: "What are three characteristics of change set deployments? Choose 3 answers",
        options: [
            { letter: "A", text: "Deployment is done in a one-way, single transaction." },
            { letter: "B", text: "Sending a change set between two orgs requires a deployment connection." },
            { letter: "C", text: "Change sets can only be used between related organizations." },
            { letter: "D", text: "Change sets can deploy custom settings data." },
            { letter: "E", text: "Change sets can be used to transfer records." }
        ],
        answer: ["A", "B", "C"]
    },
    {
        id: "q62",
        isMultiple: true,
        question: "Universal Containers hires a developer to build a custom search page to help user- find the Accounts they want. Users will be able to search on Name, Description, and a custom comments field. Which consideration should the developer be aware of when deciding between SOQL and SOSL? Choose 2 answers.",
        options: [
            { letter: "A", text: "SOQL is faster for text searches." },
            { letter: "B", text: "SOSL is faster for text searches." },
            { letter: "C", text: "SOQL is able to return more records." },
            { letter: "D", text: "SOSL is able to return more records." }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q63",
        isMultiple: true,
        question: " For which three items can 2 trace flag be configured? Choose 3 answers",
        options: [
            { letter: "A", text: "User" },
            { letter: "B", text: "Visualforce" },
            { letter: "C", text: "Apex Trager" },
            { letter: "D", text: "Flow" },
            { letter: "E", text: "Apex Class" }
        ],
        answer: ["A", "C", "E"]
    },
    {
        id: "q64",
        isMultiple: true,
        question: "What are two ways for a developer to execute tests in an org?",
        options: [
            { letter: "A", text: "Tooling API" },
            { letter: "B", text: "Matadata API" },
            { letter: "C", text: "Bulk API" },
            { letter: "D", text: "Developer console" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q65",
        isMultiple: true,
        question: "The Account object in an organization has a master detail relationship to a child object called Branch. The following automations exist: * Rollup summary fields, * Custom validation rules, * Duplicate rules A developer created a trigger on the Account object. What two things should the developer consider while testing the trigger code? Choose 2 answers",
        options: [
            { letter: "A", text: "The validation rules will cause the trigger to fire again." },
            { letter: "B", text: "Rollup summary fields can cause the parent record to go through Save." },
            { letter: "C", text: "The trigger may fire multiple times during a transaction." },
            { letter: "D", text: "Duplicate rules are executed once all DML operations commit to the database." }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q66",
        isMultiple: true,
        question: "A development team wants to use a deployment script to automatically deploy to a sandbox during their development cycles. Which two tools can they use to run a script that deploys to a sandbox?",
        options: [
            { letter: "A", text: "VS Code" },
            { letter: "B", text: "Developer Console" },
            { letter: "C", text: "Change Sets" },
            { letter: "D", text: "SFDX CLI" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q67",
        isMultiple: true,
        question: "Which two are best practices when it comes to component and application event handling? (Choose two.)",
        options: [
            { letter: "A", text: "Try to use application events as opposed to component events." },
            { letter: "B", text: "Handle low-level events in the event handler and re-fire them as higher-level events." },
            { letter: "C", text: "Reuse the event logic in a component bundle, by putting the logic in the helper." },
            { letter: "D", text: "Use component events to communicate actions that should be handled at the application level." }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q68",
        isMultiple: true,
        question: "What are two ways a developer can get the status of an enquered job for a class that queueable interface? Choose 2 answers.",
        options: [
            { letter: "A", text: "View the apex Jobs page" },
            { letter: "B", text: "View the apex status Page" },
            { letter: "C", text: "View the apex flex Queue" },
            { letter: "D", text: "Query the AsyncApexJobe object" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q69",
        isMultiple: true,
        question: "A developer is tasked to perform a security review of the ContactSearch Apex class that exists in the system. Within the class, the developer identifies the following method as a security threat: List&ltContact&gt performSearch(String lastName){ return Database.query('Select Id, FirstName, LastName FROM Contact WHERE LastName Like %'+lastName+'%); } What are two ways the developer can update the method to prevent a SOQL injection attack? Choose 2 answers",
        options: [
            { letter: "A", text: "Use the escapeSingleQuote method to sanitize the parameter before its use." },
            { letter: "B", text: "Use variable binding and replace the dynamic query with a static SOQL." },
            { letter: "C", text: "Use the @Readonly annotation and the with sharing keyword on the class." },
            { letter: "D", text: "Use a regular expression on the parameter to remove special characters." }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q70",
        isMultiple: true,
        question: "When a user edits the postal Code on an Account, a custom Account text field named. 'Timezone' must be updated based on the values in a PostalCodeToTimezone_c custom ogject. Which two automationtools can be used to implement this feature? Choose 2 answers",
        options: [
            { letter: "A", text: "Quick actions" },
            { letter: "B", text: "Account trigger" },
            { letter: "C", text: "Approval process" },
            { letter: "D", text: "Fast field Updates record-triggered flow" }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q71",
        isMultiple: true,
        question: "A business has a proprietary Order Management System (OMS) that creates orders from their website and fulfills the orders. When the order is created in the OMS, an integration also creates an order record in Salesforce and relates it to the contact as identified by the email on the order. As the order goes through different stages in the OMS, the integration also updates It in Salesforce. It is noticed that each update from the OMS creates a new order record in Salesforce. Which two actions will prevent the duplicate order records from being created in Salesforce? Choose 2 answers",
        options: [
            { letter: "A", text: "Ensure that the order number in the OMS is unique." },
            { letter: "B", text: "Use the email on the contact record as an external ID." },
            { letter: "C", text: "Write a before trigger on the order object to delete any duplicates." },
            { letter: "D", text: "Use the order number from the OMS as an external ID." }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q72",
        isMultiple: true,
        question: "When importing and exporting data into Salesforce, which two statements are true? Choose 2 answers",
        options: [
            { letter: "A", text: "Bulk API can be used to bypass the storage limits when importing large data volumes in development environments." },
            { letter: "B", text: "Data import wizard is a client application provided by Salesforce." },
            { letter: "C", text: "Developer and Developer Pro sandboxes have different storage limits." },
            { letter: "D", text: "Bulk API can be used to import large data volumes in development environments without bypassing the storage limits." }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q73",
        isMultiple: true,
        question: "How can a developer avoid exceeding governor limits when using an Apex Trigger?choose 2 answers",
        options: [
            { letter: "A", text: "By using a helper class that can be invoked from multiple triggers." },
            { letter: "B", text: "By performing DML transactions on lists of SObjects." },
            { letter: "C", text: "By using the Database class to handle DML transactions." },
            { letter: "D", text: "By using Maps to hold data from query results." }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q74",
        isMultiple: true,
        question: "What is a capability of formula fields? (Choose 3",
        options: [
            { letter: "A", text: "Determine if a datetime field has passed using the NOW function." },
            { letter: "B", text: "Generate a link using the HYPERLINK function to a specific record in a legacy system." },
            { letter: "C", text: "Determine which of three different images to display using the IF function." },
            { letter: "D", text: "Display the previous values for a field using the PRIORVALUE function." },
            { letter: "E", text: "Return and display a field value from another object using the VLOOKUP function." }
        ],
        answer: ["A", "B", "C"]
    },
    {
        id: "q75",
        isMultiple: true,
        question: "A developer needs to test an Invoicing system integration. After reviewing the number of transactions required for the test, the developer estimates that the test data will total about 2 GB of data storage. Production data is not required for the integration testing. Which two environments meet the requirements for testing? (Choose two.)",
        options: [
            { letter: "A", text: "Developer Sandbox" },
            { letter: "B", text: "Developer Edition" },
            { letter: "C", text: "Partial Sandbox" },
            { letter: "D", text: "Developer Pro Sandbox" },
            { letter: "E", text: "Full Sandbox" }
        ],
        answer: ["C", "E"]
    },
    {
        id: "q76",
        isMultiple: true,
        question: "Which three steps allow a custom SVG to be included in a Lightning web component? Choose 3 answers",
        options: [
            { letter: "A", text: "Import the SVG as a content asset file." },
            { letter: "B", text: "Import the static resource and provide a better for it in JavaScript." },
            { letter: "C", text: "Reference the getter in the HTML template." },
            { letter: "D", text: "Reference the import in the HTML template." },
            { letter: "E", text: "Upload the SVG as a static resource." }
        ],
        answer: ["B", "C", "E"]
    },
    {
        id: "q77",
        isMultiple: true,
        question: "Universal Containers decides to use purely declarative development to build out a new Salesforce application. Which three options can be used to build out the business logic layer for this application? Choose 3 answers",
        options: [
            { letter: "A", text: "Process builder" },
            { letter: "B", text: "Validation Rules" },
            { letter: "C", text: "Flow Builder" }
        ],
        answer: ["A", "B", "C"]
    },
    {
        id: "q78",
        isMultiple: true,
        question: "Universal Containers decides to use exclusively declarative development to build out a new Salesforce application. Which three options should be used to build out the database layer for the application? (Choose three.)",
        options: [
            { letter: "A", text: "Process Builder" },
            { letter: "B", text: "Roll-up summaries" },
            { letter: "C", text: "Triggers" },
            { letter: "D", text: "Relationships" },
            { letter: "E", text: "Custom objects and fields" }
        ],
        answer: ["B", "D", "E"]
    },
    {
        id: "q79",
        isMultiple: true,
        question: "Which two SOSL searches will return records matching search criteria contained in any of the searchable text fields on an object? Choose 2 answers",
        options: [
            { letter: "A", text: "[find 'acme*' in text fields returning account,opportunity]" },
            { letter: "B", text: "[find 'acme*' in all fields returning account,opportunity]" },
            { letter: "C", text: "[find 'acme*' returning account,opportunity]" },
            { letter: "D", text: "[find 'acme*' in any fields returning account,opportunity]" }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q80",
        isMultiple: true,
        question: "In which two org types can a developer create new Apex Classes? Choose 2 answers",
        options: [
            { letter: "A", text: "Developer Edition" },
            { letter: "B", text: "Sandbox" },
            { letter: "C", text: "Unlimited" },
            { letter: "D", text: "Enterprise Edition" }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q81",
        isMultiple: true,
        question: "What is a benefit of the Lightning Component framework?Choose 3 answers",
        options: [
            { letter: "A", text: "It uses a traditional publish-subscribe model." },
            { letter: "B", text: "It uses an MVC architectural design pattern." },
            { letter: "C", text: "It uses an event-driven architecture." },
            { letter: "D", text: "It uses client-side Apex controllers for logic." },
            { letter: "E", text: "It uses server-side JavaScript controller for logic." }
        ],
        answer: ["A", "B", "C"]
    },
    {
        id: "q82",
        isMultiple: true,
        question: "Which two process automations can be used on their own to send Salesforce Outbound Message? Choose 2 answers",
        options: [
            { letter: "A", text: "Workflow Rule" },
            { letter: "B", text: "Process Builder" },
            { letter: "C", text: "Flow Builder" },
            { letter: "D", text: "Strategy Builder" }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q83",
        isMultiple: true,
        question: "A developer has a single custom controller class that works with a Visualforce Wizard to support creating and editing multiple subjects. The wizard accepts data from user inputs across multiple Visualforce pages and from a parameter on the initial URL. Which three statements are useful inside the unit test to effectively test the custom controller? Choose 3 answers",
        options: [
            { letter: "A", text: "public ExtendedController(ApexPages StandardController cntrl) { }" },
            { letter: "B", text: "ApexPages.CurrentPage().getParameters().put('input\', 'TestValue');" },
            { letter: "C", text: "insert pageRef." },
            { letter: "D", text: "Test.setCurrentPage(pageRef);" },
            { letter: "E", text: "String nextPage- controller.save().getUrl();" }
        ],
        answer: ["B", "D", "E"]
    },
    {
        id: "q84",
        isMultiple: true,
        question: " If apex code executes inside the execute() method of an Apex class when implementing the Batchable interface, which statement are true regarding governor limits? Choose 2 answers",
        options: [
            { letter: "A", text: "The Apex governor limits cannot be exceeded due to the asynchronous nature of the transaction." },
            { letter: "B", text: "The Apex governor limits are relaxed while calling the costructor of the Apex class." },
            { letter: "C", text: "The Apex governor limits might be higher due to the asynchronous nature of the transaction" },
            { letter: "D", text: "The apex governor limits are reset for each iteration of the execute() method." }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q85",
        isMultiple: true,
        question: "A developer needs to create a custom button for the Account object that, when clicked, will perform a series of calculation and redirect the user to a custom visualforce page. Which three attributes need to be defined with values in the <apex:page></apex:page> tag to accomplish this? Choose 3 answers",
        options: [
            { letter: "A", text: "standard Controller" },
            { letter: "B", text: "readOnly" },
            { letter: "C", text: "Action" },
            { letter: "D", text: "extensions" },
            { letter: "E", text: "renderAs" }
        ],
        answer: ["A", "C", "D"]
    },
    {
        id: "q86",
        isMultiple: true,
        question: "Which three data types can a SOQL query return? Choose 3 answers.",
        options: [
            { letter: "A", text: "List" },
            { letter: "B", text: "Long" },
            { letter: "C", text: "Integer" },
            { letter: "D", text: "sObject" }
        ],
        answer: ["A", "C", "D"]
    },
    {
        id: "q87",
        isMultiple: true,
        question: "What is accurate statement about with sharing keyword? Choose 2 answers.",
        options: [
            { letter: "A", text: "Either inner or outer classes can be declared as with sharing, but not both." },
            { letter: "B", text: "Both inner and outer classes can be declared as with sharing." },
            { letter: "C", text: "Inner classes do not inherit the sharing settings from the container class." },
            { letter: "D", text: "Inner classes inherit the sharing settings from the container class." }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q88",
        isMultiple: true,
        question: "What is a good practice for a developer to follow when writing a trigger? (Choose 2)",
        options: [
            { letter: "A", text: "Using the Map data structure to hold query results by ID." },
            { letter: "B", text: "Using @future methods to perform DML operations." },
            { letter: "C", text: "Using synchronous callouts to call external systems." },
            { letter: "D", text: "Using the Set data structure to ensure distinct records." }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q89",
        isMultiple: true,
        question: "A developer can use the debug log to see which three types of information? Choose 3 answers",
        options: [
            { letter: "A", text: "HTTP callout to external systems" },
            { letter: "B", text: "Resource usage and limits" },
            { letter: "C", text: "Database changes" },
            { letter: "D", text: "Actions triggered by time-based workflow" },
            { letter: "E", text: "User login events" }
        ],
        answer: ["A", "B", "C"]
    },
    {
        id: "q90",
        isMultiple: true,
        question: "In Lightning component framework, which resource can be used to fire events? Choose 2 answers.",
        options: [
            { letter: "A", text: "Visualforce controller actions" },
            { letter: "B", text: "Third-party Javascript code" },
            { letter: "C", text: "Javascript controller actions" },
            { letter: "D", text: "Third-party web service code" }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q91",
        isMultiple: true,
        question: "What are two considerations for custom Apex Exception classes? Choose 2 answers.",
        options: [
            { letter: "A", text: "Custom Exceptions cannot be extended by other Exception classes." },
            { letter: "B", text: "Constructor for custom Exceptions can only accept string values as arguments." },
            { letter: "C", text: "Custom Exception class names must end with the word 'Exception'." },
            { letter: "D", text: "Custom Exception classes must extend the base Exception class." }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q92",
        isMultiple: true,
        question: "Which two statements are true about Apex code executed in Anonymous Blocks? Choose 2 answers",
        options: [
            { letter: "A", text: "The code runs in system mode having access to all objects and fields." },
            { letter: "B", text: "The code runs with the permissions of the user specified in the runAs() statement" },
            { letter: "C", text: "The code runs with the permissions of the logged user." },
            { letter: "D", text: "All DML operations are automatically rolled back." },
            { letter: "E", text: "Successful DML operations are automatically committed." }
        ],
        answer: ["C", "E"]
    },
    {
        id: "q93",
        isMultiple: true,
        question: "Universal Containers wants Opportunities to be locked from editing when reaching the Closed/Won stage. Which two strategies should a developer use to accomplish this? (Choose two.)",
        options: [
            { letter: "A", text: "Use a validation rule." },
            { letter: "B", text: "Use the Process Automation Settings." },
            { letter: "C", text: "Use a Trigger." },
            { letter: "D", text: "Use a Visual Workflow." }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q94",
        isMultiple: true,
        question: "A developer needs to know if all tests currently pass in a Salesforce environment. Which feature can the developer use? (Choose 2)",
        options: [
            { letter: "A", text: "Workbench Metadata Retrieval" },
            { letter: "B", text: "Salesforce UI Apex Test Execution" },
            { letter: "C", text: "Developer Console" },
            { letter: "D", text: "ANT Migration Tool" }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q95",
        isMultiple: true,
        question: "Universal Containers has created a unique process for tracking container repairs. A custom field, status__c, has been created within the container__c custom object. A developer is tasked with sending notifications to multiple external systems every time the value of the status__picklist changes. Which two tools should the developer use to meet the business requirement and ensure low maintenance of the solution? Choose 2 answers",
        options: [
            { letter: "A", text: "Platform event" },
            { letter: "B", text: "Apex trigger" },
            { letter: "C", text: "Apex callouts" },
            { letter: "D", text: "Record-Triggered flow" }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q96",
        isMultiple: true,
        question: "Which three web technologies can be integrated into a Visualforce page? (Choose three.)",
        options: [
            { letter: "A", text: "JavaScript" },
            { letter: "B", text: "Java" },
            { letter: "C", text: "CSS" },
            { letter: "D", text: "HTML" },
            { letter: "E", text: "PHP" }
        ],
        answer: ["A", "C", "D"]
    },
    {
        id: "q97",
        isMultiple: true,
        question: "Given: Map <ID, Account> accountMap = new Map<ID, Account> ([SELECT Id, Name FROM Account]); What are three valid Apex loop structures for iterating through items in the collection? (Choose three.)",
        options: [
            { letter: "A", text: "for (Account accountRecord : accountMap.keySet()) {...}" },
            { letter: "B", text: "for (Integer i=0; I &lt accountMap.size(); i++) {...}" },
            { letter: "C", text: "for (ID accountID : accountMap.keySet()) {...}" },
            { letter: "D", text: "for (ID accountID : accountMap) {...}" },
            { letter: "E", text: "for (Account accountRecord : accountMap.values()) {...}" },
        ],
        answer: ["B", "C", "E"]
    },
    {
        id: "q98",
        isMultiple: true,
        question: "What is a valid source and destination pair that can send or receive change sets? (Choose 2)",
        options: [
            { letter: "A", text: "Sandbox to Sandbox" },
            { letter: "B", text: "Developer Edition to Sandbox" },
            { letter: "C", text: "Sandbox to Production" },
            { letter: "D", text: "Developer Edition to Production" }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q99",
        isMultiple: true,
        question: "A Licensed_Professional__c custom object exist in the system with two Master-Detail fields for the following objects: Certification__c and Contact. Users with the 'Certification Representative' role can access the Certification records they own and view the related Licensed Professionals records, however users with the 'Salesforce representative' role report they cannot view any Licensed professional records even though they own the associated Contact record. What are two likely causes of users in the 'Sales Representative' role not being able to access the Licensed Professional records? Choose 2 answers",
        options: [
            { letter: "A", text: "The organization recently modified the Sales representative role to restrict Read/Write access to Licensed_Professional__c" },
            { letter: "B", text: "The organization has a private sharing model for Certification__c, and Certification__c is the primary relationship in the Licensed_Professional__c object. " },
            { letter: "C", text: "The organization has a private sharing model for Certification__c, and Contact is the primary relationship in the Licensed_Professional__c object" },
            { letter: "D", text: "The organization's sharing rules for Licensed_Professional__c have not finished their recalculation process." }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q100",
        isMultiple: true,
        question: "A developer needs to create a custom Visualforce button for the Opportunity object page layout that will cause a web service to be called and redirect the user to a new page when clicked. Which three attributes need to be defined in the <apex:page> tag of the Visualforce page to enable this functionality? Choose three answers.",
        options: [
            { letter: "A", text: "Controller" },
            { letter: "B", text: "StandardController" },
            { letter: "C", text: "Action" },
            { letter: "D", text: "Extensions" }
        ],
        answer: ["B", "C", "D"]
    },
    {
        id: "q101",
        isMultiple: false,
        question: "A developer creates a new Apex trigger with a helper class, and writes a test class that only exercises 95% coverage of new Apex helper class. Change Set deployment to production fails with the test coverage warning: 'Test coverage of selected Apex Trigger is 0%, at least 1% test coverage is required' What should the developer do to successfully deploy the new Apex trigger and helper class?",
        options: [
            { letter: "A", text: "Increase the test class coverage on the helper class" },
            { letter: "B", text: "Remove the falling test methods from the test class." },
            { letter: "C", text: "Create a test class and methods to cover the Apex trigger" },
            { letter: "D", text: "Run the tests using the 'Run All Tests' method." }
        ],
        answer: "C"
    },
    {
        id: "q102",
        isMultiple: false,
        question: "When viewing a Quote, the sales representative wants to easily see how many discounted items are included in the Quote Line Items. What should a developer do to meet this requirement?",
        options: [
            { letter: "A", text: "Create a trigger on the Quote object that queries the Quantity field on discounted Quote Line Items." },
            { letter: "B", text: "Create a roll-up summary field on the Quote object that performs a SUM on the quote Line Item Quantity field, filtered for only discounted Quote Line Items." },
            { letter: "C", text: "Create a Workflow Rule on the Quote Line Item object that updates a field on the parent Quote when the item is discounted." },
            { letter: "D", text: "Create a formula field on the Quote object that performs a SUM on the Quote Line Item Quantity field, filtered for only discounted Quote Line Items." }
        ],
        answer: "B"
    },
    {
        id: "q103",
        isMultiple: false,
        question: "Which statement generates a list of Leads and Contacts that have a field with the phrase 'ACME'?",
        options: [
            { letter: "A", text: "List&ltList &ltsObject&gt&gt searchList = (FIND '*ACME*' IN ALL FIELDS RETURNING Contact, Lead);" },
            { letter: "B", text: "Map &ltsObject&gt searchList = (FIND '*ACME*' IN ALL FIELDS RETURNING Contact, Lead);" },
            { letter: "C", text: "List &ltsObject&gt searchList = (FIND '*ACME*' IN ALL FIELDS RETURNING Contact, Lead);" },
            { letter: "D", text: "List&ltList &lt sObject&gt&gt searchList = (SELECT Name, ID FROM Contact, Lead WHERE Name like '%ACME%');" }
        ],
        answer: "A"
    },
    {
        id: "q104",
        isMultiple: false,
        question: "A developer needs to join data received from an integration with an external system with parent records in Salesforce. The data set does not contain the Salesforce IDs of the parent records, but it does have a foreign key attribute that can be used to identify the parent. Which action will allow the developer to relate records in the data model without knowing the Salesforce ID?",
        options: [
            { letter: "A", text: "Create a custom field on the child object of type External Relationship." },
            { letter: "B", text: "Create and populate a custom field on the parent object marked as Unique." },
            { letter: "C", text: "Create and populate a custom field on the parent object marked as an External ID." },
            { letter: "D", text: "Create a custom field on the child object of type Foreign Key." }
        ],
        answer: "C"
    },
    {
        id: "q105",
        isMultiple: false,
        question: "Which approach should be used to provide test data for a test class?",
        options: [
            { letter: "A", text: "Use a test data factory class to create test data." },
            { letter: "B", text: "Access data in @TestVisible class variables." },
            { letter: "C", text: "Query for existing records in the database." },
            { letter: "D", text: "Execute anonymous code blocks that create data." }
        ],
        answer: "A"
    },
    {
        id: "q106",
        isMultiple: false,
        question: "A developer needs to confirm that a Contact trigger works correctly without changing the organization's data. What should the developer do to test the Contact trigger?",
        options: [
            { letter: "A", text: "Use the Open execute Anonymous feature on the Developer Console to run an 'insert Contact' DMLstatement" },
            { letter: "B", text: "Use the Test menu on the Developer Console to run all test classes for the Contact trigger" },
            { letter: "C", text: "Use Deploy from the VSCode IDE to display an 'insert Contact' Apex class." },
            { letter: "D", text: "Use the New button on the Salesforce Contacts Tab to create a new Contact record." }
        ],
        answer: "B"
    },
    {
        id: "q107",
        isMultiple: false,
        question: "A developer is creating a Visualforce page that allows users to create multiple Opportunities. The developer is asked to verify the current user's default Opportunity record type, and set certain default values based on the record type before inserting the record. How can the developer find the current user's default record type?",
        options: [
            { letter: "A", text: "Query the Profile where the ID equals userInfo.getProfileID() and then use the profile.Opportunity.getDefaultRecordType() method." },
            { letter: "B", text: "Use Opportunity.SObjectType.getDescribe().getRecordTypeInfos() to get a list of record types, and iterate trought them until isdefaultRecordTypeMapping() is true." },
            { letter: "C", text: "Use the Schema.userInfo.Opportunity.getDefaultRecordType() method." },
            { letter: "D", text: "Create the opportunity and check the opportunity.recordType before inserting, which will have the record ID of the current user's default record type" }
        ],
        answer: "B"
    },
    {
        id: "q108",
        isMultiple: false,
        question: "A PrimaryId_c custom field exists on the candidate_c custom object. The filed is used to store each candidate's id number and is marked as Unique in the schema definition. As part of a data enrichment process. Universal Containers has a CSV file that contains updated data for all candidates in the system, f he file contains each Candidate's primary id as a data point. Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system. Which technique should the developer implement to streamline the data upload?",
        options: [
            { letter: "A", text: "A Update the PrimaryId_c field definition to mark it as an External Id." },
            { letter: "B", text: "Create a before Insert trigger to correctly map the records." },
            { letter: "C", text: "Create a Process Builder on the Candidate_c object to map the records." },
            { letter: "D", text: "Upload the CSV into a custom object related to Candidate_c." }
        ],
        answer: "A"
    },
    {
        id: "q109",
        isMultiple: false,
        question: "A developer is asked to create a Visualforce page that lists the contacts owned by the current user. This component will be embedded In a Lightning page. Without writing unnecessary code, which controller should be used for this purpose?",
        options: [
            { letter: "A", text: "Standard list controller" },
            { letter: "B", text: "Lightning controller" },
            { letter: "C", text: "Custom controller" },
            { letter: "D", text: "Standard controller" }
        ],
        answer: "A"
    },
    {
        id: "q110",
        isMultiple: false,
        question: "How can a developer determine, from the DescribeSObjectResult, if the current user will be able to create records for an object in Apex?",
        options: [
            { letter: "A", text: "By using the hasAccess() method." },
            { letter: "B", text: "By using the canCreate() method." },
            { letter: "C", text: "By using the isCreatable() method." },
            { letter: "D", text: "By using the isInsertable() method." }
        ],
        answer: "C"
    },
    {
        id: "q111",
        isMultiple: false,
        question: "A developer is creating an enhancement to an application that will allow people to be related to their employer. Which date model should be used to track the data?",
        options: [
            { letter: "A", text: "Create a master detail relationship to indicate that a person has an employer." },
            { letter: "B", text: "Create a junction object to relate many people to many employers trough lookup relationship." },
            { letter: "C", text: "Create a junction object to relate many people to many employers trough master-detail relationship." },
            { letter: "D", text: "Create a lookup relationship to indicate that a person has an employer." }
        ],
        answer: "D"
    },
    {
        id: "q112",
        isMultiple: false,
        question: "A developer has requirement to write Apex code to update a large number of account records on a nightly basis. The system administrator needs to be able to schedule the class to run after business hours on an as-needed basis. Which class definition should be used to successfully implement this requirement?",
        options: [
            { letter: "A", text: "Gloabal inherited sharing class processAccount Processor implements Database&gtBachable&ltsObject&gt Schedulable." },
            { letter: "B", text: "Global inherited sharing class ProcessAccountProcess Implements Queueable" },
            { letter: "C", text: "Global inherited sharing class ProcessAccountProcessor implements Database. Batchable&ltsObject&gt" },
            { letter: "D", text: "Global inherited sharing class ProcessAccount Process implements Queueable" }
        ],
        answer: "A"
    },
    {
        id: "q113",
        isMultiple: false, question: "A developer is tasked with performing a complex validation using Apex as part of advanced business logic. certain criteria are met for a PurchaseOrder, the developer must throw a custom exception. What is the correct way for the developer to declare a class that can be used as an exception?",
        options: [
            { letter: "A", text: "public class PurchaseOrderException implements Exception ()" },
            { letter: "B", text: "public class PurchaseOrder extends Exception ()" },
            { letter: "C", text: "public class PurchaseOrder implements Exception ()" },
            { letter: "D", text: "public class PurchaseOrderException extends Exception ()" }
        ],
        answer: "D"
    },
    {
        id: "q114",
        isMultiple: false,
        question: "A developer must provide a custom user interface when users edit a Contact. Users must be able to use the interface in Salesforce Classic and Lightning Experience. What should the developer do to provide the custom user interface?",
        options: [
            { letter: "A", text: "A. Override the Contact's Edit button with a Lightning component in Salesforce Classic and a Lightning component in Lightning experience." },
            { letter: "B", text: "Override the Contact's Edit button with a Lightning page Salesforce Classic and a Visualforce page in Lightning Experience." },
            { letter: "C", text: "Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning page in Lightning experience." },
            { letter: "D", text: "Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience." }
        ],
        answer: "D"
    },
    {
        id: "q115",
        isMultiple: false,
        question: "A developer must modify the following code snippet to prevent the number of SOQL queries issued from exceeding the platform governor limit. public class without sharing OpportunityService( public static List&ltOpportunityLineItem&gt getOpportunityProducts(Set&ltId&gt opportunityIds){ List&ltOpportunitylineItem&gt oppLineItems = new List&ltOpportunityLineItem&gt(); for(Id thisOppId : opportunityIds){ oppLineItems.addAll([Select Id FROM OpportunityLineItems WHERE OpportunityId = :thisOppId)]; } return oppLineItems; } } The above method might be called during a trigger execution via a Lightning component. Which technique should be implemented to avoid reaching the governor limit?",
        options: [
            { letter: "A", text: "Refactor the code above to perform only one SOQL query, filtering by the Set of opportunityIds." },
            { letter: "B", text: "Refector the code above to perform the SOQL query only if the Set of opportunityIds contains less 100 Ids." },
            { letter: "C", text: "Use the System.Limits.getlimitQueries() method to ensure the number of queries is less than 100." },
            { letter: "D", text: "Use the System.Limits.getQueries() method to ensure the number of queries is less than 100." }
        ],
        answer: "A"
    },
    {
        id: "q116",
        isMultiple: false,
        question: "Which statement about the Lookup Relationship between a Custom Object and a Standard Object is correct?",
        options: [
            { letter: "A", text: "The Custom Object will be deleted when the referenced Standard Object is deleted." },
            { letter: "B", text: "The Lookup Relationship cannot be marked as required on the page layout for the Custom Object." },
            { letter: "C", text: "The Lookup Relationship on the Custom Object can prevent the deletion of the Standard Object." },
            { letter: "D", text: "The Custom Object inherits security from the referenced Standard Objects." }
        ],
        answer: "C"
    },
    {
        id: "q117",
        isMultiple: false,
        question: "What is a correct pattern to follow when programming in Apex on a Multi-tenant platform?",
        options: [
            { letter: "A", text: "Queries select the fewest fields and records possible to avoid exceeding governor limits." },
            { letter: "B", text: "Apex code is created in a separate environment from schema to reduce deployment errors." },
            { letter: "C", text: "DML is performed on one record at a time to avoid possible data concurrency issues." },
            { letter: "D", text: "Apex classes use the 'with sharing' keyword to prevent access from other server tenants." }
        ],
        answer: "A"
    },
    {
        id: "q118",
        isMultiple: false,
        question: "Universal Containers stores Orders and Line Items in Salesforce. For security reason, financial representatives are allowed to see information on the Order such as order amount, but they are not allowed to see the Line items on the Order. Which type of relationship should be used?",
        options: [
            { letter: "A", text: "Master Detail" },
            { letter: "B", text: "Indirect lookup" },
            { letter: "C", text: "Lookup" },
            { letter: "D", text: "Direct Lookup" }
        ],
        answer: "A"
    },
    {
        id: "q119",
        isMultiple: false,
        question: "How should a custom user interface be provided when a user edits an Account in Lightning Experience?",
        options: [
            { letter: "A", text: "Override the Account's Edit button with Lightning Flow" },
            { letter: "B", text: "Override the Account's Edit button with Lightning component." },
            { letter: "C", text: "Override the Account's Edit button with Lightning page." },
            { letter: "D", text: "Overridethe Account's Edit button with Lightning Action" }
        ],
        answer: "B"
    },
    {
        id: "q120",
        isMultiple: false,
        question: "A developer created a visualforce page using a custom controller that calls an apex helper class. A method in the helper class hits a governor limit. what is the result of the transaction?",
        options: [
            { letter: "A", text: "All changes in the transaction are rolled back" },
            { letter: "B", text: "The helper class creates a savepoint and continues" },
            { letter: "C", text: "All changes made by the custom controller are saved" },
            { letter: "D", text: "The custom controller calls the helper class method again" }
        ],
        answer: "A"
    },
    {
        id: "q121",
        isMultiple: true,
        imageUrl: "pics/img1.png",
        question: "Given the following code snippet, that is part of a custom controller for a Visualforce page. In which two ways can the try/catch be enclosed to enforce object and field-level permissions and prevent the DML statement from being executed if the current logged-in user does not have the appropriate level of access? Choose 2 answers",
        options: [
            { letter: "A", text: "Use if (Schema, sobjectType, Contact, isUpdatable())" },
            { letter: "B", text: "Use if (Schema , sobjectType. Contact. Field, Is_Active_c. is Updateable())" },
            { letter: "C", text: "Use if (Schema.sObjectType.Contact.isAccessible())" },
            { letter: "D", text: "Use if (thisContact.Owner = = UserInfo.getuserId())" }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q122",
        isMultiple: false,
        imageUrl: "pics/img2.png",
        question: "A lead developer creates an Apex interface called 'Laptop'. Consider the following code snippet. How can a developer use the Laptop Interface within the Silverlaptop class?",
        options: [
            { letter: "A", text: "@Extends(class='Laptop') public class SilverLaptop" },
            { letter: "B", text: "public calss SilverLaptop extends Laptop" },
            { letter: "C", text: "@Interface (class='Laptop') public class SilverLaptop" },
            { letter: "D", text: "public class Silverlaptop implements Laptop" }
        ],
        answer: "D"
    },
    {
        id: "q123",
        isMultiple: false,
        imageUrl: "pics/img3.png",
        question: "Refer to the following Apex code. What is the value of x when it is written to the debug log?",
        options: [
            { letter: "A", text: "0" },
            { letter: "B", text: "1" },
            { letter: "C", text: "2" },
            { letter: "D", text: "3" }
        ],
        answer: "C"
    },
    {
        id: "q124",
        isMultiple: false,
        imageUrl: "pics/img4.png",
        question: "Refer to the following code snippet for an environment has more than 200 Accounts belonging to the 'Technology' industry. When the code execution, which two events occur as a result of the Apex transaction?",
        options: [
            { letter: "A", text: "If executed in an asynchronous context, the apex transaction is likely to fall by exceeding the DML governor limit" },
            { letter: "B", text: "The Apex transaction fails with the following message. 'SObject row was retrieved via SOQL without querying the requested field Account.Is.Tech__c'." },
            { letter: "C", text: "The Apex transaction succeeds regardless of any uncaught exception and all processed accounts are updated." },
            { letter: "D", text: "If executed In a synchronous context, the apex transaction is likely to fall by exceeding the DHL governor limit." }
        ],
        answer: "B"
    },
    {
        id: "q125",
        isMultiple: false,
        imageUrl: "pics/img5.png",
        question: "The following code snippet is executed by a Lightning web component in an environment with more than 2,000 lead records. Which governor limit will likely be exceeded within the Apex transaction?",
        options: [
            { letter: "A", text: "Total number of DML statement issued" },
            { letter: "B", text: "Total number of records processed as a result of DML statements" },
            { letter: "C", text: "Total number of SOQL queries issued" },
            { letter: "D", text: "Total number of records retrieved by SOQL queries" }
        ],
        answer: "A"
    },
    {
        id: "q126",
        isMultiple: false,
        imageUrl: "pics/img6.png",
        question: "Based on this code, what is the value of x?",
        options: [
            { letter: "A", text: "2" },
            { letter: "B", text: "1" },
            { letter: "C", text: "4" },
            { letter: "D", text: "3" }
        ],
        answer: "C"
    },
    {
        id: "q127",
        isMultiple: false,
        imageUrl: "pics/img7.png",
        question: "Given the code below. What should a developer do to correct the code so that there is no chance of hitting a governor limit?",
        options: [
            { letter: "A", text: "Rework the code and eliminate the for loop." },
            { letter: "B", text: "Combine the two SELECT statements into a single SOQL statement." },
            { letter: "C", text: "Add a LIMIT clause to the first SELECT SOQL statement." },
            { letter: "D", text: "Add a WHERE clause to the first SELECT SOQL statement." }
        ],
        answer: "B"
    },
    {
        id: "q128",
        isMultiple: false,
        imageUrl: "pics/img8.png",
        question: "What is the result of the debug statements in testMethod3 when you create test data using testSetup in below code?",
        options: [
            { letter: "A", text: "Account0.Phone=333-8781, Account1.Phone=333-8780" },
            { letter: "B", text: "Account0.Phone=888-1515, Account1.Phone=999-1515" },
            { letter: "C", text: "Account0.Phone=888-1515, Account1.Phone=999-2525" },
            { letter: "D", text: "Account0.Phone=333-8780, Account1.Phone=333-8781" }
        ],
        answer: "D"
    },
    {
        id: "q129",
        isMultiple: false,
        imageUrl: "pics/img9.png",
        question: "Given the following Anonymous Block. What should a developer consider for an environment that has over10,000 Case records?",
        options: [
            { letter: "A", text: "The transaction will succeed and changes will be committed." },
            { letter: "B", text: "The transaction will fail due to exceeding the governor limit." },
            { letter: "C", text: "The try/catch block will handle any DML exceptions thrown." },
            { letter: "D", text: "The try/catch block will handle exceptions thrown by governor limits." }
        ],
        answer: "B"
    },
    {
        id: "q130",
        isMultiple: false,
        imageUrl: "pics/img10.png",
        question: "Considering the following code snippet. When the code executes, a DML exception is thrown. How should the developer modify the code to ensure exceptions are handled gracefully?",
        options: [
            { letter: "A", text: "Implement the upsert DML statement." },
            { letter: "B", text: "Implement Change Data Capture." },
            { letter: "C", text: "Remove null items from the list if Accounts." },
            { letter: "D", text: "Implement a try/catch block for the DML." }
        ],
        answer: "D"
    },
    {
        id: "q131",
        isMultiple: false,
        imageUrl: "pics/img11.png",
        question: "What will be the output in the debug log in the event of a QueryExeption during a call to the @query method in the following Example?",
        options: [
            { letter: "A", text: "Querying Accounts. Custom Exception." },
            { letter: "B", text: "Querying Accounts. Custom Exception Done." },
            { letter: "C", text: "Querying Accounts. Query Exception." },
            { letter: "D", text: "Querying Accounts. Query Exception. Done" }
        ],
        answer: "D"
    },
    {
        id: "q132",
        isMultiple: true,
        question: "Which three statements are accurate about debug logs? Choose 3 answers.",
        options: [
            { letter: "A", text: "Debug logs can be set for specific users, classes, and triggers." },
            { letter: "B", text: "Debug log levels are cumulative, where FINE log level includes all events logged at the DEBUG, INFO, WARN, and ERROR levels." },
            { letter: "C", text: "System debug logs are retained for 24 hours." },
            { letter: "D", text: "The maximum size of a debug log is 5 MB." },
            { letter: "E", text: "Only the 20 most recent debug logs for a user are kept." }
        ],
        answer: ["A", "B", "C"]
    },
    {
        id: "q133",
        isMultiple: false,
        imageUrl: "pics/img12.png",
        question: "A lead object has a custom field Prior_Email__c. The following trigger is intended to copy the current Email into the Prior_Email__c field any time the Email field is changed. Which type of exception will this trigger cause?",
        options: [
            { letter: "A", text: "A DML exception" },
            { letter: "B", text: "A null reference exception" },
            { letter: "C", text: "A compile time exception" },
            { letter: "D", text: "A limit exception when doing a bulk update" }
        ],
        answer: "A"
    },
    {
        id: "q134",
        isMultiple: true,
        imageUrl: "pics/img13.png",
        question: "As a part of class implementation a developer must execute a SOQL query against a large data set based on the contact object. The method implementation is as follows. Which two methods are best practice to implement heap size control for the above code? (Choose 2 Answers)",
        options: [
            { letter: "A", text: "Use a SOQL FOR loop, to chunk the result set in batches of 200 records." },
            { letter: "B", text: "Use visual keyword when declaring the retrieve variable." },
            { letter: "C", text: "Use WHERE clauses on the SOQL query to reduce the number of records retrieved." },
            { letter: "D", text: "Use the FOR UPDATE option on the SOQL query to lock down the records retrieved." }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q135",
        isMultiple: false,
        imageUrl: "pics/img14.png",
        question: "A developer is building custom search functionality that uses SOSL to search account and contact records that match search terms provided by the end user. The feature is exposed through a Lightning web component, and the end user is able to provide a list of terms to search. Consider the following code snippet. What is the maximum number of search terms the end user can provide to successfully execute the search without exceeding a governor limit?",
        options: [
            { letter: "A", text: "2,000" },
            { letter: "B", text: "20" },
            { letter: "C", text: "200" },
            { letter: "D", text: "150" }
        ],
        answer: "A"
    },
    {
        id: "q136",
        isMultiple: false,
        imageUrl: "pics/img15.png",
        question: "A developer has the controller class below. Which code block will run successfully in an execute anonymous window?",
        options: [
            { letter: "A", text: "myFooController m = new myFooController();System.assert(m.prop ==null);" },
            { letter: "B", text: "myFooController m = new myFooController();System.assert(m.prop !=null);" },
            { letter: "C", text: "myFooController m = new myFooController();System.assert(m.prop ==0);" },
            { letter: "D", text: "myFooController m = new myFooController();System.assert(m.prop ==1);" }
        ],
        answer: "A"
    },
    {
        id: "q137",
        isMultiple: true,
        imageUrl: "pics/img16.png",
        question: "Assuming that name is 8 String obtained by an <apex:inputText> tag on 8 Visualforce page, which two SOQL queries performed are safe from SOQL injection? Choose 2 answers.",
        options: [
            { letter: "A", text: "Option A" },
            { letter: "B", text: "Option B" },
            { letter: "C", text: "Option C" },
            { letter: "D", text: "Option D" }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q136",
        isMultiple: false,
        imageUrl: "pics/img17.png",
        question: "An Apex method, getAccounts, that returns a list of Accounts given a searchTern, is available for Lightning Web Components to use. What is the correct definition of a Lightning Web Component property that uses the getAccounts method?",
        options: [
            { letter: "A", text: "Option A" },
            { letter: "B", text: "Option B" },
            { letter: "C", text: "Option C" },
            { letter: "D", text: "Option D" }
        ],
        answer: "D"
    },
    {
        id: "q137",
        isMultiple: false,
        imageUrl: "pics/img18.png",
        question: "Which Lightning code segment should be written to declare dependencies on a Lightning component, c:accountList, that is used in a Visualforce page?",
        options: [
            { letter: "A", text: "Option A" },
            { letter: "B", text: "Option B" },
            { letter: "C", text: "Option C" },
            { letter: "D", text: "Option D" }
        ],
        answer: "A"
    },
    {
        id: "q138",
        isMultiple: false,
        imageUrl: "pics/img19.png",
        question: "A developer needs to implement a custom SOAP Web Service that is used by an external Web Application. The developer chooses to Include helper methods that are not used by the Web Application In the Implementation of the Web Service Class. Which code segment shows the correct declaration of the class and methods?",
        options: [
            { letter: "A", text: "Option A" },
            { letter: "B", text: "Option B" },
            { letter: "C", text: "Option C" },
            { letter: "D", text: "Option D" }
        ],
        answer: "C"
    },
    {
        id: "q139",
        isMultiple: false,
        imageUrl: "pics/img20.png",
        question: "Which option would a developer use to display the Accounts created in the current week and the number of related Contacts using a debug statement in Apex?",
        options: [
            { letter: "A", text: "Option A" },
            { letter: "B", text: "Option B" },
            { letter: "C", text: "Option C" },
            { letter: "D", text: "Option D" }
        ],
        answer: "A"
    },
    {
        id: "q140",
        isMultiple: false,
        question: "A visualforce interface is created for Case Management that includes both standard and custom functionality defined in an Apex class called myControllerExtension. The visualforce page should include which <apex:page> attribute(s) to correctly implement controller functionality?", options: [
            { letter: "A", text: "Controller = 'case' and extensions =' myControllerExtension'" },
            { letter: "B", text: "StandardController = 'case' and extensions =' myControllerExtension'" },
            { letter: "C", text: "Extensions=' myControllerExtension'" },
            { letter: "D", text: "Controller=' myControllerExtension'" }
        ],
        answer: "B"
    },
    {
        id: "q141",
        isMultiple: false,
        question: "What is the advantage of Salesforce Lightning?",
        options: [
            { letter: "A", text: "Option 3" },
            { letter: "B", text: "Pre-defined components to give Standard Look and Feel" },
            { letter: "C", text: "Option 4" },
            { letter: "D", text: "Uses service side for better handling" }
        ],
        answer: "B"
    },
    {
        id: "q142",
        isMultiple: false,
        question: "A developer declared a class as follow. public class wysiwyg { // Properties and methods including DML } Which invocation of a class method will obey the organization-wide defaults and sharing settings for the running user in the Salesforce Organization?",
        options: [
            { letter: "A", text: "A developer using the Developer Console that invokes a method in this class from the execute anonymous window." },
            { letter: "B", text: "A Visualforce page with an Apex controller that invokes a method in this class." },
            { letter: "C", text: "An Apex Trigger that invokes a helper method in this class." },
            { letter: "D", text: "A user on an external system that has an API call into Salesforce that invokes a method in this class." }
        ],
        answer: "A"
    },
    {
        id: "q143",
        isMultiple: true,
        question: "A developer has a single custom controller class that works with a Visualforce Wizard to support creating and editing multiple sObjects. The wizard accepts data from user inputs across multiple Visualforce pages and from a parameter on the initial URL. Which statement is unnecessary inside the unit test for the custom controller?",
        options: [
            { letter: "A", text: "String nextPage = controller.save().getUrl();" },
            { letter: "B", text: "ApexPages.currentPage().getParameters().put('input', 'TestValue')" },
            { letter: "C", text: "Test.setCurrentPage(pageRef)" },
            { letter: "D", text: "Public ExtendedController (ApexPages.StandardController cntrl) { }" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q144",
        isMultiple: false,
        imageUrl: "pics/img21.png",
        question: "A developer must create a ShippingCalculator class that cannot be instantiated and must include a working default implementation of a calculate method, that sub-classes can override. What is the correct implementation of the ShippingCalculator class?",
        options: [
            { letter: "A", text: "Option A" },
            { letter: "B", text: "Option B" },
            { letter: "C", text: "Option C" },
            { letter: "D", text: "Option D" }
        ],
        answer: "A"
    },
    {
        id: "q145",
        isMultiple: false,
        question: "A custom Visualforce controller calls the ApexPages,addMessage () method, but no messages are rendering on the page. Which component should be added to the Visualforce page to display the message?",
        options: [
            { letter: "A", text: "&ltapex: pageMessages /&gt" },
            { letter: "B", text: "&ltApex: facet name='message'/&gt" },
            { letter: "C", text: "&ltapex: pageMessage severity='info'/&gt" },
            { letter: "D", text: "&ltApex: message for='info'/&gt" }
        ],
        answer: "A"
    },
    {
        id: "q146",
        isMultiple: false,
        question: "A developer wants to override a button using Visualforce on an object. What is the requirement?",
        options: [
            { letter: "A", text: "The action attribute must be set to a controller method." },
            { letter: "B", text: "The standardController attribute must be set to the object." },
            { letter: "C", text: "The object record must be instantiated in a controller or extension." },
            { letter: "D", text: "The controller or extension must have a PageReference method." }
        ],
        answer: "B"
    },
    {
        id: "q147",
        isMultiple: false,
        question: "Which action can a developer take to reduce the execution time of the following code?",
        imageUrl: "pics/img22.png",
        options: [
            { letter: "A", text: "Create an apex helper class for the SOQL" },
            { letter: "B", text: "Add a group by clause to the contact SOQL" },
            { letter: "C", text: "Put the account loop inside the contact loop" },
            { letter: "D", text: "Use a map &ltiId,Contact&gt for allaccounts" }
        ],
        answer: "D"
    },
    {
        id: "q148",
        isMultiple: true,
        question: "A developer creates a custom exception as shown below: ",
        imageUrl: "pics/img23.png",
        options: [
            { letter: "A", text: "New ParityException();" },
            { letter: "B", text: "Throw new parityException ();" },
            { letter: "C", text: "Throw new ParityException (parity does not match);" },
            { letter: "D", text: "New ParityException (parity does not match);" }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q149",
        isMultiple: true,
        question: "A custom exception class can extend other classes besides the Exception class. (Choose three.)",
        options: [
            { letter: "A", text: "A custom exception class cannot contain member variables or methods." },
            { letter: "B", text: "A custom exception class must extend the system Exception class." },
            { letter: "C", text: "A custom exception class name must end with 'Exception'." },
            { letter: "D", text: "A custom exception class can extend other classes besides the Exception class." },
            { letter: "E", text: "Acustom exception class can implement one or many interfaces." }
        ],
        answer: ["B", "C", "E"]
    },
    {
        id: "q150",
        isMultiple: false,
        imageUrl: "pics/img24.png",
        question: "A developer created a Visualforce page and custom controller to display the account type field as shown below. Custom controller code. In Visualforce page snippet: The Account Type is {!actType} The value of the account type field is not being displayed correctly on the page. Assuming the custom controller is property referenced on the Visualforce page, what should the developer do to correct the problem?",
        options: [
            { letter: "A", text: "Add a getter method for the actType attribute." },
            { letter: "B", text: "Add with sharing to the custom controller." },
            { letter: "C", text: "Change theAccount attribute to public." },
            { letter: "D", text: "Convert theAccount.Type to a String." }
        ],
        answer: "A"
    },
    {
        id: "q151",
        isMultiple: false,
        question: "An Opportunity needs to have an amount rolled up from a custom object that is not in a masterdetail relationship. How can this be achieved?",
        options: [
            { letter: "A", text: "Write a trigger on the child object and use a red-black tree sorting to sum the amount for all related child objects under the Opportunity." },
            { letter: "B", text: "Write a trigger on the child object and use an aggregate function to sum the amount for all related child objects under the Opportunity." },
            { letter: "C", text: "Write a Process Builder that links the custom object to the Opportunity." },
            { letter: "D", text: "Use the Streaming API to create real-time roll-up summaries." }
        ],
        answer: "B"
    },
    {
        id: "q152",
        isMultiple: false,
        question: "Account acct = {SELECT Id from Account limit 1}; Given the code above, how can a developer get the type of object from acct?",
        options: [
            { letter: "A", text: "Call 'acct.getsObjectType()'" },
            { letter: "B", text: "Call 'Account.SobjectType'" },
            { letter: "C", text: "Call 'Account.getSobjectType()'" },
            { letter: "D", text: "Call 'acct.SobjectType'" }
        ],
        answer: "A"
    },
    {
        id: "q153",
        isMultiple: false,
        question: "When using SalesforceDX, what does a developer need to enable to create and manage scratch orgs?",
        options: [
            { letter: "A", text: "Production" },
            { letter: "B", text: "Dev Hub" },
            { letter: "C", text: "Environment Hub" },
            { letter: "D", text: "Sandbox" }
        ],
        answer: "B"
    },
    {
        id: "q154",
        isMultiple: true,
        question: "Which two operations can be performed using a formula field? Choose 2 answers",
        options: [
            { letter: "A", text: "Calculating a score on a Lead based on the information from another field." },
            { letter: "B", text: "Triggering a Process Builder." },
            { letter: "C", text: "Displaying an Image based on the Opportunity Amount." },
            { letter: "D", text: "Displaying the last four digits of an encrypted Social Security number." }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q155",
        isMultiple: false,
        question: "A recursive transaction is limited by a DML statement creating records for these two objects: 1. Accounts, 2. Contacts. The Account trigger hits a stack depth of 16. Which statement is true regarding the outcome of the transaction?",
        options: [
            { letter: "A", text: "The transaction fails and all the changes are rolled back." },
            { letter: "B", text: "The transaction fails only if the Contact trigger stack depth is greater or equal to 16." },
            { letter: "C", text: "The transaction succeeds and all the changes are committed to the database." },
            { letter: "D", text: "The transaction succeeds as long as the Contact trigger stack depth is less than 16." }
        ],
        answer: "C"
    },
    {
        id: "q156",
        isMultiple: false,
        question: "Which annotation exposes an Apex class as a RESTful web service?",
        options: [
            { letter: "A", text: "RemoteAction" },
            { letter: "B", text: "RestResource" },
            { letter: "C", text: "HttpInvocable" },
            { letter: "D", text: "AuraEnabled" }
        ],
        answer: "B"
    },
    {
        id: "q157",
        isMultiple: true,
        question: "Which two automation tools include a graphical designer? Choose 2 answers.",
        options: [
            { letter: "A", text: "Approvals" },
            { letter: "B", text: "Process builder" },
            { letter: "C", text: "Flow builder" },
            { letter: "D", text: "Workflows" }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q158",
        isMultiple: true,
        question: "A developer identifies the following triggers on the Expense_c object: DeleteExpense, applyDefaultstoexpense validateexpenseupdate; The triggers process before delete, before insert, and before update events respectively. Which two techniques should the developer implement to ensure trigger best practice are followed?",
        options: [
            { letter: "A", text: "Unify all three triggers in a single trigger on the Expense__c object that includes all events." },
            { letter: "B", text: "Unify the before insert and before update triggers and use Process Builder for the delete action." },
            { letter: "C", text: "Create helper classes to execute the appropriate logic when a record is saved." },
            { letter: "D", text: "Maintain all three triggers on the Expense__c object, but move the Apex logic out for the trigger definition." }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q159",
        isMultiple: false,
        question: "Which Apex collection is used to ensure that all values are unique?",
        options: [
            { letter: "A", text: "An Enum" },
            { letter: "B", text: "A List" },
            { letter: "C", text: "An sObject" },
            { letter: "D", text: "A Set" }
        ],
        answer: "D"
    },
    {
        id: "q160",
        isMultiple: false,
        question: "What can be developed using the Lightning Component framework?",
        options: [
            { letter: "A", text: "Dynamic web sites" },
            { letter: "B", text: "Salesforce integrations" },
            { letter: "C", text: "Hosted web applications" },
            { letter: "D", text: "Single-page web apps" }
        ],
        answer: "D"
    },
    {
        id: "q161",
        isMultiple: false,
        question: "A developer is asked to create a Visualforce page that displays some Account fields as well as fields configured on the page layout for related Contacts. How should the developer implement this request?",
        options: [
            { letter: "A", text: "Use the &ltapex:relatedList&gt tag." },
            { letter: "B", text: "Create a controller extension." },
            { letter: "C", text: "Add a method to the standard controller." },
            { letter: "D", text: "Use the &ltapex:include&gt tag." }
        ],
        answer: "A"
    },
    {
        id: "q162",
        isMultiple: false,
        question: "A developer wants to retrieve the Contacts and Users with the email address 'dev@uc.com'. Which SOSL statement should the developer use?",
        options: [
            { letter: "A", text: "FIND {Email = 'dev@uc.com'} IN Contact, User" },
            { letter: "B", text: "FIND {dev@uc.com} IN Email Fields RETURNING Contact (Email), User (Email)" },
            { letter: "C", text: "FIND Email IN Contact, User FOR {dev2uc.com}" },
            { letter: "D", text: "FIND {Email = 'dev@uc.com'} RETURNING Contact (Email), User (Email)" }
        ],
        answer: "B"
    },
    {
        id: "q163",
        isMultiple: true,
        question: "Which two statement can a developer use to throw a custom exception of type MissingFieldValueException? hoose 2 answers.",
        options: [
            { letter: "A", text: "Throw new MissingFieldValueException();" },
            { letter: "B", text: "Throw (MissingFieldValueException,'Problem occurred');" },
            { letter: "C", text: "Throw new MissingFieldValueException('Problem occurred');" },
            { letter: "D", text: "Throw Exception(new MissingFieldValueException());" }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q164",
        isMultiple: false,
        question: "What can used to delete components from production?",
        options: [
            { letter: "A", text: "An ant migration tool deployment with destructivechanges xml file and the components to delete in the package .xml file." },
            { letter: "B", text: "A change set deployment with the delete option checked." },
            { letter: "C", text: "A change set deployment with a destructivechanges XML file." },
            { letter: "D", text: "An ant migration tool deployment with a destructivechanges XML file and an empty package .xml file." }
        ],
        answer: "A"
    },
    {
        id: "q165",
        isMultiple: true,
        question: "What are two characteristics of partial copy sandboxes versus full sandboxes? Choose 2 answers.",
        options: [
            { letter: "A", text: "Provides more data record storage" },
            { letter: "B", text: "Supports more frequent refreshes" },
            { letter: "C", text: "Includes a subset of metadata" },
            { letter: "D", text: "Requires a sandbox template" }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q166",
        isMultiple: true,
        question: "Which two are phases in the Aura application event propagation framework? Choose 2 answers",
        options: [
            { letter: "A", text: "Bubble" },
            { letter: "B", text: "Emit" },
            { letter: "C", text: "Default" },
            { letter: "D", text: "Control" }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q167",
        isMultiple: false,
        question: "A developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org. Which tool should the developer use to troubleshoot?",
        options: [
            { letter: "A", text: "Developer Console" },
            { letter: "B", text: "Visual Studio Core IDE" },
            { letter: "C", text: "Salesforce CLI" },
            { letter: "D", text: "AppExchange" }
        ],
        answer: "A"
    },
    {
        id: "q168",
        isMultiple: true,
        question: "A developer created a child Lightning web component nested inside a parent Lightning web component, parent component needs to pass a string value to the child component. In which two ways can this be accomplished? Choose 2 answers.",
        options: [
            { letter: "A", text: "The parent component can use a custom event to pass the data to the child component." },
            { letter: "B", text: "The parent component can use a public property to pass the data to the child component." },
            { letter: "C", text: "The parent component can use the Apex controller class to send data to the child component." },
            { letter: "D", text: "The parent component can invoke a method in the child component." }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q169",
        isMultiple: false,
        imageUrl: "pics/img25.png",
        question: "A developer creates a custom controller and custom Visualforce page by using the following code block. What does the user see when accessing the custom page?",
        options: [
            { letter: "A", text: ",, Method2 , getMyString" },
            { letter: "B", text: ", , Method2," },
            { letter: "C", text: "GetMyString , , ," },
            { letter: "D", text: "GetMyString , , Method2 , getMystring" }
        ],
        answer: "D"
    },
    {
        id: "q170",
        isMultiple: false,
        question: "A developer is asked to write negative tests as part of the unit testing for a method that calculates a person's age based on birth date. What should the negative tests include?",
        options: [
            { letter: "A", text: "Throwing a custom exception in the unit test." },
            { letter: "B", text: "Assert that past dates are accepted by the method." },
            { letter: "C", text: "Assert that a null value is accepted by the method." },
            { letter: "D", text: "Assert that future dates are rejected by the method." }
        ],
        answer: "D"
    },
    {
        id: "q171",
        isMultiple: false,
        question: "A Visualforce page uses the Contact standard controller. How can a developer display the Name from the parent Account record on the page?",
        options: [
            { letter: "A", text: "Use an additional standard controller for Accounts." },
            { letter: "B", text: "Use SOQL syntax to find the related Accounts Name field." },
            { letter: "C", text: "Use the (!contact.Account.Name) merge field syntax." },
            { letter: "D", text: "Use additional Apex logic within the controller to query for the Name field." }
        ],
        answer: "C"
    },
    {
        id: "q172",
        isMultiple: true,
        question: "Which two roll-up summary field types are required to find the average of values on detail records in a Master-Detail relationship?",
        options: [
            { letter: "A", text: "Roll-up summary field of type TOTAL" },
            { letter: "B", text: "Roll-up summary field of type NUM" },
            { letter: "C", text: "Roll-up summary field of type SUM" },
            { letter: "D", text: "Roll-up summary field of type COUNT" }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q173",
        isMultiple: true,
        question: "Which user can edit a record after it has been locked for approval? (Choose 2).",
        options: [
            { letter: "A", text: "Any user who approved the record previously." },
            { letter: "B", text: "A user who is assigned as the current approver." },
            { letter: "C", text: "Any user with a higher role in the hierarchy." },
            { letter: "D", text: "An administrator." }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q174",
        isMultiple: false,
        question: "What is a key difference between a Master-Detail Relationship and a Lookup Relationship?",
        options: [
            { letter: "A", text: "A Master-Detail Relationship detail record inherits the sharing and security of its master record." },
            { letter: "B", text: "A Lookup Relationship is a required field on an object." },
            { letter: "C", text: "When a record of a master object in a Lookup Relationship is deleted, the detail records are also deleted." },
            { letter: "D", text: "When a record of a master object in a Master-Detail Relationship is deleted, the detail records are kept and not deleted." }
        ],
        answer: "A"
    },
    {
        id: "q175",
        isMultiple: false,
        question: "What can a developer use to determine if the core Apex code exceeds any governor limits in a test class during bulk execution?",
        options: [
            { letter: "A", text: "@TestVisible" },
            { letter: "B", text: "@TestSetup." },
            { letter: "C", text: "Limits, startTest, stopTest" },
            { letter: "D", text: "Test.getDmlStatements()" }
        ],
        answer: "C"
    },
    {
        id: "q176",
        isMultiple: false,
        question: "A company would like to send an offer letter to a candidate, have the candidate sign it electronically, and then send the letter back.What can a developer do to accomplish this?",
        options: [
            { letter: "A", text: "Create a visual workflow that will capture the candidate's signature electronically." },
            { letter: "B", text: "Develop a Process Builder that will send the offer letter and allow the candidate to sign it electronically." },
            { letter: "C", text: "Install a managed package that will allow the candidate to sign documents electronically." },
            { letter: "D", text: "Create an assignment rule that will assign the offer letter to the candidate." }
        ],
        answer: "C"
    },
    {
        id: "q177",
        isMultiple: false,
        question: "Why would a developer use Test. startTest( ) and Test.stopTest( )?",
        options: [
            { letter: "A", text: "To create an additional set of governor limits during the execution of a single test class." },
            { letter: "B", text: "To indicate test code so that it does not Impact Apex line count governor limits." },
            { letter: "C", text: "To start and stop anonymous block execution when executing anonymous Apex code." },
            { letter: "D", text: "To avoid Apex code coverage requirements for the code between these lines." }
        ],
        answer: "A"
    },
    {
        id: "q178",
        isMultiple: false,
        question: "A developer created an Apex trigger using the Developer Console and now wants to debug code. How can the developer accomplish this in the Developer Console?",
        options: [
            { letter: "A", text: "Select the Override Log Triggers checkbox for the trigger." },
            { letter: "B", text: "Open the Progress tab in the Developer Console." },
            { letter: "C", text: "Open the logs tab in the Developer Console." },
            { letter: "D", text: "Add the user name in the Log Inspector." }
        ],
        answer: "C"
    },
    {
        id: "q179",
        isMultiple: false,
        question: "A developer wrote Apex code that calls out to an external system. How should a developer write the test to provide test coverage?",
        options: [
            { letter: "A", text: "Write a class that extends HTTPCalloutMock." },
            { letter: "B", text: "Write a class that implements the WebserviceMock interface." },
            { letter: "C", text: "Write a class that extends WebserviceMock." },
            { letter: "D", text: "Write a class that implements the HTTPCalloutMock interface." }
        ],
        answer: "D"
    },
    {
        id: "q180",
        isMultiple: false,
        question: "Before putting an app into production, which step should be taken?",
        options: [
            { letter: "A", text: "Switch to a production database" },
            { letter: "B", text: "Scale your dynos" },
            { letter: "C", text: "Insure that you have installed a performance introspection add-on" },
            { letter: "D", text: "Run the production check feature via the web interface" }
        ],
        answer: "D"
    },
    {
        id: "q181",
        isMultiple: true,
        question: "What are two correct examples of the model in the salesforce MVC architecture? Choose 2 answers.",
        options: [
            { letter: "A", text: "Workflow rule on the contact object" },
            { letter: "B", text: "Standard lightning component" },
            { letter: "C", text: "Standard account lookup on the contract object" },
            { letter: "D", text: "Custom field on the custom wizard_c object" }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q182",
        isMultiple: true,
        question: "What is a capability of cross-object formula fields? Choose 3 answers.",
        options: [
            { letter: "A", text: "Formula fields can reference fields in a collect of records from a child relationship." },
            { letter: "B", text: "Formula fields can expose data the user does not have access to in a record." },
            { letter: "C", text: "Formula fields can reference fields from master-detail or lookup parent relationships." },
            { letter: "D", text: "Formula fields can reference fields from objects that are up to 10 relationships away." },
            { letter: "E", text: "Formula fields can be used in three roll-up summaries per object." }
        ],
        answer: ["B", "C", "D"]
    },
    {
        id: "q183",
        isMultiple: false,
        question: "How should a developer create a new custom exception class?",
        options: [
            { letter: "A", text: "public class CustomException extends Exception{}" },
            { letter: "B", text: "public class CustomException implements Exception{}" },
            { letter: "C", text: "CustomException ex = new (CustomException)Exception();" },
            { letter: "D", text: "(Exception)CustomException ex = new Exception();" }
        ],
        answer: "A"
    },
    {
        id: "q184",
        isMultiple: false,
        question: "An org tracks customer orders on an Order object and the items of an Order on the Line Item object. The Line Item object has a MasterDetail relationship to the order object. A developer has a requirement to calculate the order amount on an Order and the line amount on each Line item based on quantity and price. What is the correct implementation?",
        options: [
            { letter: "A", text: "Write a process on the Line item that calculates the item amount and order amount and updates the filed on the Line Item and the order." },
            { letter: "B", text: "Write a single before trigger on the Line Item that calculates the item amount and updates the order amount on the Order." },
            { letter: "C", text: "Implement the line amount as a numeric formula field and the order amount as a roll-up summary field." },
            { letter: "D", text: "Implement the Line amount as a currency field and the order amount as a SUM formula field." }
        ],
        answer: "D"
    },
    {
        id: "q185",
        isMultiple: false,
        question: "When would the use of Heroku Postgres be appropriate?",
        options: [
            { letter: "A", text: "To interconnect Microsoft SQL servers to Heroku Applications." },
            { letter: "B", text: "To cache commonly accessed data for faster retrieval." },
            { letter: "C", text: "To store user generated pictures and Word documents." },
            { letter: "D", text: "To store and retrieve data using the Structured Query Language." }
        ],
        answer: "D"
    },
    {
        id: "q186",
        isMultiple: false,
        question: "What is the proper process for an Apex Unit Test",
        options: [
            { letter: "A", text: "Create data for testing. Execute runAllTests(). Verify that the results are correct." },
            { letter: "B", text: "Query for test data using SeeAllData = true. Execute runAllTests(). Verify that the results are correct." },
            { letter: "C", text: "Query for test data using SeeAllData = true. Call the method being tested. Verify that the results are correct." },
            { letter: "D", text: "Create data for testing. Call the method being tested. Verify that the results are correct." }
        ],
        answer: "D"
    },
    {
        id: "q187",
        isMultiple: true,
        question: "Where can debug log filter settings be set?Choose 2 answers",
        options: [
            { letter: "A", text: "On the monitored user's name." },
            { letter: "B", text: "The Filters link by the monitored user's name within the web UI." },
            { letter: "C", text: "The Log Filters tab on a class or trigger detail page." },
            { letter: "D", text: "The Show More link on the debug log's record." }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q188",
        isMultiple: false,
        question: "Which code segment can be used to control when the dowork() method is called?",
        options: [
            { letter: "A", text: "If(Trigger.isInsert) dowork();" },
            { letter: "B", text: "For (Trigger.isInsert t: Trigger.new) { dowork(); }" },
            { letter: "C", text: "If(Trigger.isRunning) dowork();" },
            { letter: "D", text: "For (Trigger.isRunning t: Trigger.new) { dowork(); }" }
        ],
        answer: "A"
    },
    {
        id: "q189",
        isMultiple: false,
        question: "A developer wrote a workflow email alert on case creation so that an email is sent to the case owner manager when a case is created. When will the email be sent?",
        options: [
            { letter: "A", text: "After Trigger execution." },
            { letter: "B", text: "Before Trigger execution." },
            { letter: "C", text: "After Committing to database." },
            { letter: "D", text: "Before Committing to database." }
        ],
        answer: "C"
    },
    {
        id: "q190",
        isMultiple: false,
        question: "What should a developer use to implement an automatic Approval Process submission for Cases?",
        options: [
            { letter: "A", text: "An Assignment Rule" },
            { letter: "B", text: "Scheduled Apex" },
            { letter: "C", text: "Process Builder" },
            { letter: "D", text: "A Workflow Rule" }
        ],
        answer: "C"
    },
    {
        id: "q191",
        isMultiple: true,
        question: "Which two Apex data types can be used to reference a Salesforce record ID dynamically? (Choose two.)",
        options: [
            { letter: "A", text: "ENUM" },
            { letter: "B", text: "sObject" },
            { letter: "C", text: "External ID" },
            { letter: "D", text: "String" }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q192",
        isMultiple: true,
        question: "Which two platform features align to the Controller portion of MVC architecture? (Choose two.)",
        options: [
            { letter: "A", text: "Process Builder actions M" },
            { letter: "B", text: "Workflow rules Mo" },
            { letter: "C", text: "Standard objects" },
            { letter: "D", text: "Date fields" }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q193",
        isMultiple: false,
        question: "A developer working on a time management application wants to make total hours for each timecard available to application users. A timecard entry has a Master-Detail relationship to a timecard. Which approach should the developer use to accomplish this declaratively?",
        options: [
            { letter: "A", text: "A Visualforce page that calculates the total number of hours for a timecard and displays it on the page." },
            { letter: "B", text: "A Roll-Up Summary field on the Timecard Object that calculates the total hours from timecard entries for that timecard." },
            { letter: "C", text: "A Process Builder process that updates a field on the timecard when a timecard entry is created." },
            { letter: "D", text: "An Apex trigger that uses an Aggregate Query to calculate the hours for a given timecard and stores it in a custom field." }
        ],
        answer: "B"
    },
    {
        id: "q194",
        isMultiple: true,
        question: "A developer encounters APEX heap limit errors in a trigger. Which two methods should the developer use to avoid this error? (Choose two.)",
        options: [
            { letter: "A", text: "Use the transient keyword when declaring variables." },
            { letter: "B", text: "Query and store fields from the related object in a collection when updating related objects." },
            { letter: "C", text: "Remove or set collections to null after use." },
            { letter: "D", text: "Use SOQL for loops instead of assigning large queries results to a single collection and looping through the collection." }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q195",
        isMultiple: false,
        question: "Which approach should a developer take to automatically add a `Maintenance Plan` to each Opportunity that includes an `Annual Subscription` when an opportunity is closed?",
        options: [
            { letter: "A", text: "Build a OpportunityLineItem trigger that adds a PriceBookEntry record." },
            { letter: "B", text: "Build an OpportunityLineItem trigger to add an OpportunityLineItem record." },
            { letter: "C", text: "Build an Opportunity trigger that adds a PriceBookEntry record." },
            { letter: "D", text: "Build an Opportunity trigger that adds an OpportunityLineItem record." }
        ],
        answer: "D"
    },
    {
        id: "q196",
        isMultiple: false,
        question: "What is the requirement for a class to be used as a custom Visualforce controller?",
        options: [
            { letter: "A", text: "Any top-level Apex class that has a constructor that returns a PageReference" },
            { letter: "B", text: "Any top-level Apex class that extends a PageReference" },
            { letter: "C", text: "Any top-level Apex class that has a default, no-argument constructor " },
            { letter: "D", text: "Any top-level Apex class that implements the controller interface" }
        ],
        answer: "C"
    },
    {
        id: "q197",
        isMultiple: false,
        question: "How should a developer prevent a recursive trigger?",
        options: [
            { letter: "A", text: "Use a one trigger per object pattern." },
            { letter: "B", text: "Use a static Boolean variable." },
            { letter: "C", text: "Use a trigger handler." },
            { letter: "D", text: "Use a private Boolean variable." }
        ],
        answer: "B"
    },
    {
        id: "q198",
        isMultiple: true,
        question: "What is a capability of the <ltng:require> tag that is used for loading external Javascript libraries in Lightning Component? (Choose three.)",
        options: [
            { letter: "A", text: "Loading files from Documents." },
            { letter: "B", text: "One-time loading for duplicate scripts." },
            { letter: "C", text: "Specifying loading order." },
            { letter: "D", text: "Loading scripts in parallel." },
            { letter: "E", text: "Loading externally hosted scripts." }
        ],
        answer: ["B", "C", "D"]
    },
    {
        id: "q199",
        isMultiple: true,
        question: "A Platform Developer needs to write an Apex method that will only perform an action if a record is assigned to a specific Record Type. Which two options allow the developer to dynamically determine the ID of the required Record Type by its name? (Choose two.)",
        options: [
            { letter: "A", text: "Make an outbound web services call to the SOAP API." },
            { letter: "B", text: "Hardcode the ID as a constant in an Apex class." },
            { letter: "C", text: "Use the getRecordTypeInfosByName() method in the DescribeSObjectResult class." },
            { letter: "D", text: "Execute a SOQL query on the RecordType object." }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q200",
        isMultiple: false,
        question: "In a single record, a user selects multiple values from a multi-select picklist. How are the selected values represented in Apex?",
        options: [
            { letter: "A", text: "As a List&ltString&gt with each value as an element in the list" },
            { letter: "B", text: "As a String with each value separated by a comma" },
            { letter: "C", text: "As a String with each value separated by a semicolon" },
            { letter: "D", text: "As a Set&ltString&gt with each value as an element in the set" }
        ],
        answer: "C"
    },
];