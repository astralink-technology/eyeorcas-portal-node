# eyeOrcas Portal
## Overview

**eyeOrcas Portal development stack in PANE - NodeJS, ExpressJS, AngularJS and PostgreSQL**

EyeOrcas portal API and portal front-end development

--- 

### API Structure
````
http://hostName/{{apiType}}/{{base}}/{{action}}
````

`API Type` - API type refers to either CORE API / other customized API

`Base` - Base refers to the key component to request, such as device / entity / image

`Action` - Action refers to the method user requests for - getDevice / getEmail / getimage 

---

### Node Modules

`ExpressJS` **(express)** - Standard WebServer JS Package

`BCrypt` **(bcrypt)**  - Encryption and Hashing

`Jade` **(jade)**  - HTML Templating

`Mandrill` **(mandril-api)** - Mail Sending

`Moment` **(moment)** - Dates Parsing

`Pg-Node` **(pg)** - Postgres connection with NodeJs

`Forever` **(forever)** - Package that allows NodeJs to run forever on the server

---

### Helper Functions
#### crypt
**encrypt(`req`, `res`, `string`)** - encrypts a string and outputs a hashed string

**decrypt(`req`, `res`, `hash`, `string`)** - compares a hashed string with an input string and returns a `true` or `false`
 
#### dateTime
**utcNow(`req`, `res`)** - gets the current universal date time stamp.

#### idGen
**generateId(`req`, `res`)** - generates a random string for database insertion

#### dbConnect
**connectAndQuery(`req`, `res`, `queryString`, `variables`)** - connects to the default database configuration state in the webConfig. Takes in the query string as a form of prepared statement (i.e. query with $1, $2, $3, etc.. variables) and requires user to input variables at the variables parameter.

#### mailSender
**sendMail(`req`, `res`, `htmlContent`, `text`, `subject`, `mailingList`, `importantMessage`)** - instantiate helper at any point in the codes to send an email.


### eyeOrcas Remote Management API
eyeOrcas Remote Manage APIs are customized APIs for eyeOrcas Remote management Web App. All of the APIs are secured for administration level access


---

### eyeOrcas portal API
eyeOrcas APIs are customized APIs for eyeOrcas Web App.
#### Activity
**getActivities** (Released v0.1)

````
http://{{host-name}}/eyeorcas/activities/getActivities
````

#### Device
**getDeviceDetails** (Released v0.1)

````
http://{{host-name}}/eyeorcas/device/getDeivceDetails
````
#### Device Relationship
**getEntityDeviceRelationship** (Released v0.1)

````
http://{{host-name}}/eyeorcas/deviceRelationship/getEntityDeviceRelationship
````
**getEntityDeviceRelationshipDetails** (Released v0.1)

````
http://{{host-name}}/eyeorcas/deviceRelationship/getEntityDeviceRelationshipDetails
````
**addEntityDeviceRelationshipWithValues** (Released v0.1)

````
http://{{host-name}}/eyeorcas/deviceRelationship/addEntityDeviceRelationshipWithValues
````
#### Media
**getDeviceRelationshipMedia** (Released v0.1)

````
http://{{host-name}}/eyeorcas/media/getDeviceRelationshipMedia
````
#### Product Registration
**getEntityProductRegistrationDetail** (Released v0.1)

````
http://{{host-name}}/eyeorcas/productRegistration/getEntityProductRegistrationDetail
````

--- 

### CORE API
Core APIs are APIs written mainly for CRUD purposes, copyright under Chillipanda Development


#### Device
**getDevice** (Released v0.1)

````
http://{{host-name}}/core/device/getDevice
````

**addDevice** (Released v0.1)

````
http://{{host-name}}/core/device/addDevice
````

**updateDevice** (Released v0.1)

````
http://{{host-name}}/core/device/updateDevice
````
**deleteDevice** (Released v0.1)

````
http://{{host-name}}/core/device/deleteDevice
````

#### Device Relationship
**getDeviceRelationship** (Released v0.1)

````
http://{{host-name}}/core/deviceRelationship/getDeviceRelationship
````


**addDeviceRelationship** (Released v0.1)

````
http://{{host-name}}/core/deviceRelationship/addDeviceRelationship
````
**updateDeviceRelationship** (Released v0.1)

````
http://{{host-name}}/core/deviceRelationship/updateDeviceRelationship
````
**deleteDeviceRelationship** (Released v0.1)

````
http://{{host-name}}/core/deviceRelationship/deleteDeviceRelationship
````

#### Device Relationship Value
**getDeviceRelationshipValue** (Released v0.1)

````
http://{{host-name}}/core/deviceRelationshipValue/getDeviceRelationshipValue
````
**addDeviceRelationshipValue** (Released v0.1)

````
http://{{host-name}}/core/deviceRelationshipValue/addDeviceRelationshipValue
````
**updateDeviceRelationshipValue** (Released v0.1)

````
http://{{host-name}}/core/deviceRelationshipValue/updateDeviceRelationshipValue
````
**deleteDeviceRelationshipValue** (Released v0.1)

````
http://{{host-name}}/core/deviceRelationshipValue/deleteDeviceRelationshipValue
````
#### Device Session
**getDeviceSession** (Released v0.1)

````
http://{{host-name}}/core/deviceSession/getDeviceSession
````

**addDeviceSession**  (Released v0.1)

````
http://{{host-name}}/core/deviceSession/addDeviceSession
````

**updateDeviceSession**  (Released v0.1)

````
http://{{host-name}}/core/deviceSession/updateDeviceSession
````

**deleteDeviceSession**  (Released v0.1)

````
http://{{host-name}}/core/deviceSession/deleteDeviceSession
````

#### Device Value
**getDeviceValue** (Released v0.1)

````
http://{{host-name}}/core/deviceValue/getDeviceValue
````

**addDeviceValue**  (Released v0.1)

````
http://{{host-name}}/core/deviceValue/addDeviceValue
````

**updateDeviceValue** (Released v0.1)

````
http://{{host-name}}/core/deviceValue/updateDeviceValue
````

**deleteDeviceValue** (Released v0.1)

````
http://{{host-name}}/core/deviceValue/deleteDeviceValue
````

#### Email
**getEmail** (Released v0.1)

````
http://{{host-name}}/core/email/getEmail
````
**addEmail** (Released v0.1)

````
http://{{host-name}}/core/email/addEmail
````

**updateEmail** (Released v0.1)

````
http://{{host-name}}/core/email/updateEmail
````

**deleteEmail** (Released v0.1)

````
http://{{host-name}}/core/email/deleteEmail
````

#### Enterprise
**getEnterprise** (Released v0.1)

````
http://{{host-name}}/core/enterprise/getEnterprise
````

**addEnterprise** (Released v0.1)

````
http://{{host-name}}/core/enterprise/addEnterprise
````


**updateEnterprise** (Released v0.1)

````
http://{{host-name}}/core/enterprise/updateEnterprise
````
**deleteEnterprise** (Released v0.1)

````
http://{{host-name}}/core/enterprise/getEnterprise
````

#### Entity
**getEntity** (Released v0.1)

````
http://{{host-name}}/core/entity/getEntityDevice
````

**getEntityDetail** (Released v0.1)

````
http://{{host-name}}/core/entity/getEntityDetail
````

**addEntity** (Released v0.1)
````
http://{{host-name}}/core/entity/deleteEnterprise
````

**updateEntity** (Released v0.1)

````
http://{{host-name}}/core/entity/updateEntity
````

**deleteEntity** (Released v0.1)

````
http://{{host-name}}/core/entity/deleteEntity
````


#### Image
**getImage** (Released v0.1)


````
http://{{host-name}}/core/image/getImage
````

**addImage** (Released v0.1)

````
http://{{host-name}}/core/image/addImage
````


**updateImage** (Released v0.1)

````
http://{{host-name}}/core/image/updateImage
````


**deleteImage** (Released v0.1)

````
http://{{host-name}}/core/image/deleteImage
````

#### Log
**getLog** (Released v0.1)

````
http://{{host-name}}/core/log/getLog
````


**addLog** (Released v0.1)

````
http://{{host-name}}/core/log/addLog
````

**updateLog** (Released v0.1)

````
http://{{host-name}}/core/log/updateLog
````

**deleteLog** (Released v0.1)

````
http://{{host-name}}/core/log/deleteLog
````

#### Media
**getMedia** (Released v0.1)

````
http://{{host-name}}/core/media/getMedia
````

**addMedia** (Released v0.1)

````
http://{{host-name}}/core/media/addMedia
````

**updateMedia** (Released v0.1)

````
http://{{host-name}}/core/media/updateMedia
````

**deleteMedia** (Released v0.1)

````
http://{{host-name}}/core/media/deleteMedia
````

#### Message
**getMessage** (Released v0.1)

````
http://{{host-name}}/core/message/getMessage
````

**addMessage** (Released v0.1)

````
http://{{host-name}}/core/message/addMessage
````

**updateMessage** (Released v0.1)

````
http://{{host-name}}/core/message/updateMessage
````

**deleteMessage** (Released v0.1)

````
http://{{host-name}}/core/message/deleteMessage
````

#### Phone
**getPhone** (Released v0.1)

````
http://{{host-name}}/core/phone/getPhone
````

**addPhone** (Released v0.1)

````
http://{{host-name}}/core/phone/addPhone
````

**updatePhone** (Released v0.1)

````
http://{{host-name}}/core/phone/updatePhone
````

**deletePhone** (Released v0.1)

````
http://{{host-name}}/core/phone/updatePhone
````

#### Product
**getProduct** (Released v0.1)

````
http://{{host-name}}/core/product/getProduct
````

**addProduct** (Released v0.1)

````
http://{{host-name}}/core/product/addProduct
````

**updateProduct** (Released v0.1)

````
http://{{host-name}}/core/product/updateProduct
````

**deleteProduct** (Released v0.1)

````
http://{{host-name}}/core/product/deleteProduct
````

#### Product Registration
**getProductRegistration** (Released v0.1)

````
http://{{host-name}}/core/productRegistration/getProductRegistration
````

**addProductRegistration** (Released v0.1)

````
http://{{host-name}}/core/productRegistration/addProductRegistration
````
**updateProductRegistration** (Released v0.1)

````
http://{{host-name}}/core/productRegistration/updateProductRegistration
````
**deleteProductRegistration** (Released v0.1)

````
http://{{host-name}}/core/productRegistration/deleteProductRegistration
````
#### Product Value
**getProductValue** (Released v0.1)

````
http://{{host-name}}/core/productValue/getProductValue
````
**addProductValue** (Released v0.1)

````
http://{{host-name}}/core/productValue/addProductValue
````
**updateProductValue** (Released v0.1)

````
http://{{host-name}}/core/productValue/updateProductValue
````

**deleteProductValue** (Released v0.1)

````
http://{{host-name}}/core/productValue/deleteProductValue
````

---

### eyeOrcas un-versioned (APIs Under Review)
These eyeOrcas APIs are currently legacy APIs and will require review.

#### Authentication

**logInFromApp** (High Priority Release)

**signUpFromApp** (High Priority Release)

**signUp**

**login**

**verifyAccount** (High Priority Release)

**resetPasswordRequest**

**resetPassword**

**assignAdmin**	

#### Device

**addDeviceFromApp** (High Priority Release)

**removeDeviceFromApp** (High Priority Release)

**getDevicesFromApp** (High Priority Release)

#### Device Relationship

**updateDeviceAndDeviceRelationshipWithValues**

**removeEntityDeviceRelationshipWithValues**

#### Log

**addLogsFromServer**

#### Media

**addMediaFromHXS**

#### Message

**removeMessageByDeviceId**

**removeMessageByOwnerId**

**getMessagesByEntity**
