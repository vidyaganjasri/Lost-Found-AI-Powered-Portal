# Lost-Found-AI-Powered-Portal

This project aims to revolutionize the traditional lost and found process in educational institutions by introducing a secure, user-friendly, and efficient digital platform. The current manual systems are often slow, unreliable, and lack transparency, leading to low recovery rates and wasted time. Our solution automates the entire process, from item reporting and image upload to real-time object detection and notification, significantly enhancing the user experience and recovery efficiency.

## Problem Statement

The existing manual lost and found procedures in educational institutions are plagued by inefficiencies:

* **Slowness and Unreliability:** Manual processes are inherently slow and prone to human error, making item recovery a tedious and uncertain endeavor.

* **Lack of Transparency:** Users have no systematic way to track or verify the status of their reported belongings, leading to frustration and uncertainty.

* **Low Recovery Rates:** Without an intelligent digital platform and visual object identification tools, lost items often remain untraced, resulting in low recovery rates.

* **Wasted Time:** Both users (students and staff) and administrators spend considerable time on manual reporting, searching, and communication.

## Project Objectives

The primary objective of this project is to build a secure, user-friendly, and efficient lost & found portal that automates the entire process— from item reporting and image upload to real-time object detection and notification. The system aims to provide dedicated interfaces for students, staff, and admin, integrate AI-based object recognition using YOLOv8, and deliver instant feedback to users. Additional goals include ensuring robust authentication, seamless communication via email notifications, and offering a minimal, intuitive interface that enhances the overall user experience.

## Features

* **User Authentication:** Secure login for users (students and administrators) using email.

* **Role-Based Dashboards:**

  * **Student Dashboard:** Allows students to report lost or found items. Their reported items are visible only to them and the administrators for security and privacy.

  * **Admin Dashboard:** Provides administrators with a comprehensive view of all reported items.

* **Item Reporting:** Students can easily report lost or found items, including uploading images.

* **AI-Based Object Detection (YOLOv8):** Administrators can initiate object detection on reported images to identify and locate items.

* **Email Notifications:** Automated email notifications to inform users about the status of their items (e.g., item found, item returned).

## Screenshots

### User Dashboard


This dashboard allows students to view their reported items, report new lost items, or report items they have found. The status of their reported items is clearly displayed.
<img width="1033" height="502" alt="image" src="https://github.com/user-attachments/assets/e7703937-c2e7-43e6-8687-80642ba468d8" />


### Admin Dashboard

The administrator's dashboard provides a comprehensive overview of all reported items. Admins can initiate object detection, notify users, or mark items as returned.
<img width="1173" height="474" alt="image" src="https://github.com/user-attachments/assets/16f6d8dc-f272-4a99-8ff5-bc499e9b6a4b" />


### Laptop Object Detection (Library Results)

This image demonstrates the YOLOv8 model detecting a laptop within the library environment, showcasing the real-world application of the object detection feature.
<img width="776" height="481" alt="image" src="https://github.com/user-attachments/assets/763c03a9-df3d-4cec-8133-f0fa5791da2c" />


### Bottle Object Detection (Library Results)

This image shows the YOLOv8 model successfully identifying a bottle in the library, alongside the admin dashboard interface, confirming the effectiveness of the detection.
<img width="624" height="368" alt="image" src="https://github.com/user-attachments/assets/41a09ceb-f5f8-450c-838e-08db759d4a6f" />


## Technologies Used (Assumed)

While specific technologies were not fully detailed, based on the features described, the project likely utilizes:

* **Frontend:** React, CSS

* **Backend:** Express.js, Node.js
* **Database:** MongoDB

* **AI/ML:** YOLOv8 for real-time object detection.

* **Authentication:** Email-based authentication system.

* **Notifications:** An email service (e.g., SendGrid, Mailgun) for sending automated notifications.

## Usage

### For Students/Users:

1. **Register or Log In:** Access the portal and sign up or log in using your email.

2. **Report Items:** Navigate to your dashboard to report a lost item (providing details and an image) or a found item.

3. **Track Status:** Monitor the real-time status of your reported items on your dashboard.

### For Administrators:

1. **Log In:** Access the Admin Dashboard.

2. **View Reports:** See a comprehensive list of all reported lost and found items.

3. **Run Object Detection:** Select an item and initiate the object detection process using the integrated YOLOv8 model on the uploaded image.

4. **Notify Users:** Send automated email notifications to users when their item is found or its status changes.

5. **Mark as Returned:** Update the status of an item once it has been successfully returned to its owner.

## Future Enhancements

* Integration with institutional directories for seamless user verification.

* Advanced search and filtering capabilities for administrators.

* Implementation of SMS notifications as an alternative or addition to email.

* Geolocation tagging for reported items to aid in physical location.

* A user feedback and rating system for the recovery process.

* Comprehensive reporting and analytics tools for administrators to track efficiency a
